import {
  getShyneesAroundRequest,
  getShyneeProfileRequest,
  getShyneeSettingsRequest
} from '../request/shynees';

export const SHYNEES_AROUND_REQUEST = 'SHYNEES_AROUND_REQUEST';
export const SHYNEES_AROUND_SUCCESS = 'SHYNEES_AROUND_SUCCESS';
export const SHYNEES_AROUND_FAILURE = 'SHYNEES_AROUND_FAILURE';

export const getShyneesAround = () => (dispatch) => {
  dispatch({
    type: SHYNEES_AROUND_REQUEST
  });

  return getShyneesAroundRequest()
    .then((shynees) => dispatch({
      type: SHYNEES_AROUND_SUCCESS,
      payload: shynees
    }))
    .catch(error => dispatch({
      type: SHYNEES_AROUND_FAILURE,
      payload: error
    }));
};

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

export const SHYNEE_SETTINGS_REQUEST = 'SHYNEE_SETTINGS_REQUEST';
export const SHYNEE_SETTINGS_SUCCESS = 'SHYNEE_SETTINGS_SUCCESS';
export const SHYNEE_SETTINGS_FAILURE = 'SHYNEE_SETTINGS_FAILURE';

export const getShyneeSettings = (shyneeId) => (dispatch) => {
  dispatch({
    type: SHYNEE_SETTINGS_REQUEST
  });

  return getShyneeSettingsRequest(shyneeId)
    .then((shynees) => dispatch({
      type: SHYNEE_SETTINGS_SUCCESS,
      payload: shynees
    }))
    .catch(error => dispatch({
      type: SHYNEE_SETTINGS_FAILURE,
      payload: error
    }));
};
