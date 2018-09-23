import { SubmissionError } from 'redux-form';

import { signShyneeUp, refreshShyneeData, signShyneeIn } from '../request/shynees';
import { getUserCredentials, persistUserCredentials, removeUserCredentials } from '../utils/persistence';

export const SHYNEE_SIGN_IN = 'SHYNEE_SIGN_IN';

const signInUser = async (shyneeData) => {
  const { id, token } = shyneeData;
  await persistUserCredentials({ id, token });
  return {
    type: SHYNEE_SIGN_IN,
    payload: shyneeData
  };
};

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

  return await signInUser(response.data);
};

export const signInShynee = async (email, password) => {
  let response;
  try {
    response = await signShyneeIn(email, password);
  } catch (error) {
    throw new SubmissionError({
      _error: error
    });
  }

  if (response.notFound || response.wrongPassword) {
    throw new SubmissionError({
      password: 'Wrong email or password'
    });
  }

  if (response.success) {
    return await signInUser(response.data);
  }

  throw new SubmissionError({
    _error: response.data
  });
};

export const SHYNEE_REFRESH_REQUEST = 'SHYNEE_REFRESH_REQUEST';
export const SHYNEE_REFRESH_SUCCESS = 'SHYNEE_REFRESH_SUCCESS';
export const SHYNEE_REFRESH_FAILED = 'SHYNEE_REFRESH_FAILED';
export const refreshShynee = () => async (dispatch) => {
  dispatch({
    type: SHYNEE_REFRESH_REQUEST
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
    await removeUserCredentials();
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

