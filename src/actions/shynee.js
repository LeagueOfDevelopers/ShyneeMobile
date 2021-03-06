import {
  getShyneeInfoRequest,
  editShyneeInfoRequest,
  getShyneeSettingsRequest,
  getShyneeSettingsPrivacyRequest,
  editShyneeSettingsPrivacyRequest,
  setShyneeReady
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

export const EDIT_SHYNEE_INFO_REQUEST = 'EDIT_SHYNEE_INFO_REQUEST';
export const EDIT_SHYNEE_INFO_SUCCESS = 'EDIT_SHYNEE_INFO_SUCCESS';
export const EDIT_SHYNEE_INFO_FAILURE = 'EDIT_SHYNEE_INFO_FAILURE';
export const editShyneeInfo = (shyneeId, token, info) => (dispatch) => {
  dispatch({
    type: EDIT_SHYNEE_INFO_REQUEST
  });

  return editShyneeInfoRequest(shyneeId, token, info)
    .then((info) => dispatch({
      type: EDIT_SHYNEE_INFO_SUCCESS,
      payload: info
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

export const SHYNEE_SETTINGS_PRIVACY_REQUEST = 'SHYNEE_SETTINGS_PRIVACY_REQUEST';
export const SHYNEE_SETTINGS_PRIVACY_SUCCESS = 'SHYNEE_SETTINGS_PRIVACY_SUCCESS';
export const SHYNEE_SETTINGS_PRIVACY_FAILURE = 'SHYNEE_SETTINGS_PRIVACY_FAILURE';
export const getShyneeSettingsPrivacy = (shyneeId, token) => (dispatch) => {
  dispatch({
    type: SHYNEE_SETTINGS_PRIVACY_REQUEST
  });

  return getShyneeSettingsPrivacyRequest(shyneeId, token)
    .then((settings) => dispatch({
      type: SHYNEE_SETTINGS_PRIVACY_SUCCESS,
      payload: settings
    }))
    .catch(error => dispatch({
      type: SHYNEE_SETTINGS_PRIVACY_FAILURE,
      payload: error
    }));
};

export const EDIT_SHYNEE_SETTINGS_PRIVACY_SUCCESS = 'EDIT_SHYNEE_SETTINGS_PRIVACY_SUCCESS';
export const editShyneeSettingsPrivacy = (shyneeId, token, settingsPrivacy) => (dispatch) =>
  editShyneeSettingsPrivacyRequest(shyneeId, token, settingsPrivacy)
    .then((settings) => dispatch({
      type: EDIT_SHYNEE_SETTINGS_PRIVACY_SUCCESS,
      payload: settings
    }));

export const UPDATE_SHYNEE_SETTINGS_PRIVACY = 'UPDATE_SHYNEE_SETTINGS_PRIVACY';
export const updateShyneeSettingsPrivacy = (settingsPrivacy) => (dispatch) => 
  dispatch({
    type: UPDATE_SHYNEE_SETTINGS_PRIVACY,
    payload: settingsPrivacy
  });

export const SHYNEE_IS_READY = 'SHYNEE_IS_READY';
export const shyneeIsReady = (id, token, isReady, onCatch) => (dispatch) => {
  dispatch({
    type: SHYNEE_IS_READY,
    payload: isReady
  });
  return setShyneeReady(id, token, isReady)
    .catch(err => {
      dispatch({
        type: SHYNEE_IS_READY,
        payload: !isReady
      });
      onCatch(err);
    });
};
