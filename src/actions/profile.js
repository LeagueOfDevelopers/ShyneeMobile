import {getShyneeProfileRequest} from '../request/profile';

export const SHYNEE_PROFILE_REQUEST = 'SHYNEE_PROFILE_REQUEST';
export const SHYNEE_PROFILE_SUCCESS = 'SHYNEE_PROFILE_SUCCESS';
export const SHYNEE_PROFILE_FAILURE = 'SHYNEE_PROFILE_FAILURE';

export const getShyneeProfile = (shyneeId) => (dispatch) => {
  dispatch({
    type: SHYNEE_PROFILE_REQUEST
  });

  return getShyneeProfileRequest(shyneeId)
    .then((shynees) => dispatch({
      type: SHYNEE_PROFILE_SUCCESS,
      payload: shynees
    }))
    .catch(error => dispatch({
      type: SHYNEE_PROFILE_FAILURE,
      payload: error
    }));
};
