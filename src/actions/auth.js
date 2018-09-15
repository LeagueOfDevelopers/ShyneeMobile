import { signShyneeUp } from '../request/shynees';
import { SubmissionError } from 'redux-form';
import { persistUserCredentials } from '../utils/persistence';

export const SHYNEE_SIGN_UP = 'SHYNEE_SIGN_UP';
export const signUpShynee = async (email, password) => {
  let response;
  try {
    response = await signShyneeUp(email, password, 'Shynee');
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

