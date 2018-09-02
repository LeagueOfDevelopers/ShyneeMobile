import {
  getShyneeInfoRequest,
} from '../request/shynees';

export const VIEWING_PROFILE_REQUEST = 'VIEWING_PROFILE_REQUEST';
export const VIEWING_PROFILE_SUCCESS = 'VIEWING_PROFILE_SUCCESS';
export const VIEWING_PROFILE_FAILURE = 'VIEWING_PROFILE_FAILURE';

export const getViewingProfile = (shyneeId) => (dispatch) => {
  dispatch({
    type: VIEWING_PROFILE_REQUEST
  });

  return getShyneeInfoRequest(shyneeId)
    .then((shynees) => dispatch({
      type: VIEWING_PROFILE_SUCCESS,
      payload: shynees
    }))
    .catch(error => dispatch({
      type: VIEWING_PROFILE_FAILURE,
      payload: error
    }));
};
