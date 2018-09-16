import { SubmissionError } from 'redux-form';

import { signShyneeUp, refreshShyneeData } from '../request/shynees';
import { getUserCredentials, persistUserCredentials } from '../utils/persistence';

export const SHYNEE_SIGN_UP = 'SHYNEE_SIGN_UP';
export const signUpShynee = async (email, password) => {
  let response;
  try {
    response = await signShyneeUp(email, password);
  } catch (error) {
    throw new SubmissionError({
      _error: error
    });
  }

  if (response.validationError) {
    throw new SubmissionError({
      email: response.data.Email,
      password: response.data.Password
    });
  }
  if (response.alreadyExistError) {
    throw new SubmissionError({
      email: 'User with this email already exists! Maybe you want to login?'
    });
  }

  if (response.error) {
    throw new SubmissionError({
      _error: response.data
    });
  }

  const { id, token } = response.data;
  await persistUserCredentials({ id, token });
  return {
    type: SHYNEE_SIGN_UP,
    payload: response.data
  };
};

export const SHYNEE_REFRESH_STARTED = 'SHYNEE_REFRESH_STARTED';
export const SHYNEE_REFRESH_SUCCESS = 'SHYNEE_REFRESH_SUCCESS';
export const SHYNEE_REFRESH_FAILED = 'SHYNEE_REFRESH_FAILED';
export const refreshShynee = () => async (dispatch) => {
  dispatch({
    type: SHYNEE_REFRESH_STARTED
  });

  const credentials = await getUserCredentials();
  if (!credentials) {
    dispatch({
      type: SHYNEE_REFRESH_SUCCESS,
      payload: null
    });
    return;
  }

  const response = await refreshShyneeData(credentials.token);
  if (response.invalidToken) {
    dispatch({
      type: SHYNEE_REFRESH_SUCCESS,
      payload: null
    });
    return;
  }

  dispatch({
    type: response.success ? SHYNEE_REFRESH_SUCCESS : SHYNEE_REFRESH_FAILED,
    payload: response.data
  });
};

