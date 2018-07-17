import {getSettingsRequest} from '../request/settings';

export const SETTINGS_UPDATE_REQUEST = 'SETTINGS_UPDATE_REQUEST';
export const SETTINGS_UPDATE_SUCCESS = 'SETTINGS_UPDATE_SUCCESS';
export const SETTINGS_UPDATE_FAILURE = 'SETTINGS_UPDATE_FAILURE';

export const getSettings = () => (dispatch) => {
  dispatch({
    type: SETTINGS_UPDATE_REQUEST
  });

  return getSettingsRequest()
    .then((settings) => dispatch({
      type: SETTINGS_UPDATE_SUCCESS,
      payload: settings
    }))
    .catch(error => {
      dispatch({
        type: SETTINGS_UPDATE_FAILURE,
        payload: error
      });
    });
};
