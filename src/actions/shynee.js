import {
  getShyneeInfoRequest,
  getShyneeSettingsRequest
} from '../request/shynees';

export const SHYNEE_INFO_REQUEST = 'SHYNEE_INFO_REQUEST';
export const SHYNEE_INFO_SUCCESS = 'SHYNEE_INFO_SUCCESS';
export const SHYNEE_INFO_FAILURE = 'SHYNEE_INFO_FAILURE';
export const getShyneeInfo = (shyneeId) => (dispatch) => {
  dispatch({
    type: SHYNEE_INFO_REQUEST
  });

  return getShyneeInfoRequest(shyneeId)
    .then((shynees) => dispatch({
      type: SHYNEE_INFO_SUCCESS,
      payload: shynees
    }))
    .catch(error => dispatch({
      type: SHYNEE_INFO_FAILURE,
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


export const SHYNEE_IS_READY = 'SHYNEE_IS_READY';
export const shyneeIsReady = (isReady) => (dispatch) => {
  dispatch({
    type: SHYNEE_IS_READY,
    payload: isReady
  });
};
