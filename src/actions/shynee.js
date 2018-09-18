import {
  getShyneeInfoRequest,
  getShyneeSettingsRequest,
  getShyneeSettingsPrivacyRequest,
  editShyneeSettingsPrivacyRequest,
  setShyneeReady
} from '../../../request/shynees';

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

export const SHYNEE_SETTINGS_PRIVACY_REQUEST = 'SHYNEE_SETTINGS_PRIVACY_REQUEST';
export const SHYNEE_SETTINGS_PRIVACY_SUCCESS = 'SHYNEE_SETTINGS_PRIVACY_SUCCESS';
export const SHYNEE_SETTINGS_PRIVACY_FAILURE = 'SHYNEE_SETTINGS_PRIVACY_FAILURE';
export const getShyneeSettingsPrivacy = (shyneeId) => (dispatch) => {
  dispatch({
    type: SHYNEE_SETTINGS_PRIVACY_REQUEST
  });

  return getShyneeSettingsPrivacyRequest(shyneeId)
    .then((shynees) => dispatch({
      type: SHYNEE_SETTINGS_PRIVACY_SUCCESS,
      payload: shynees
    }))
    .catch(error => dispatch({
      type: SHYNEE_SETTINGS_PRIVACY_FAILURE,
      payload: error
    }));
};

export const EDIT_SHYNEE_SETTINGS_PRIVACY_SUCCESS = 'EDIT_SHYNEE_SETTINGS_PRIVACY_SUCCESS';
export const editShyneeSettingsPrivacy = (shyneeId, settingsPrivacy) => (dispatch) =>
  editShyneeSettingsPrivacyRequest(shyneeId, settingsPrivacy)
    .then((shynees) => dispatch({
      type: EDIT_SHYNEE_SETTINGS_PRIVACY_SUCCESS,
      payload: shynees
    }));

export const SHYNEE_IS_READY = 'SHYNEE_IS_READY';
export const shyneeIsReady = (id, isReady, onCatch) => (dispatch) => {
  dispatch({
    type: SHYNEE_IS_READY,
    payload: isReady
  });
  return setShyneeReady(id, isReady)
    .catch(err => {
      dispatch({
        type: SHYNEE_IS_READY,
        payload: !isReady
      });
      onCatch(err);
    });
};
