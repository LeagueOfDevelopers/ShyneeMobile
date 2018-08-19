import { combineReducers } from 'redux';

import {
  SHYNEE_PROFILE_REQUEST,
  SHYNEE_PROFILE_SUCCESS,
  SHYNEE_PROFILE_FAILURE,
  SHYNEE_SETTINGS_REQUEST,
  SHYNEE_SETTINGS_SUCCESS,
  SHYNEE_SETTINGS_FAILURE
} from '../actions/shynees';

const initialState = {
  fetching: false,
  error: false,
  data: {}
};

function shynee (state = initialState, {type, payload}) {
  switch (type) {
  case SHYNEE_PROFILE_REQUEST:
    return {
      ...state,
      fetching: true
    }; 
  case SHYNEE_PROFILE_SUCCESS:
    return {
      ...state,
      fetching: false,
      data: payload
    };
  case SHYNEE_PROFILE_FAILURE:
    return {
      ...state,
      fetching: false,
      error: true,
    };
  default: 
    return state;
  }
}

function shyneeSettings (state = initialState, {type, payload}) {
  switch (type) {
  case SHYNEE_SETTINGS_REQUEST:
    return {
      ...state,
      fetching: true
    }; 
  case SHYNEE_SETTINGS_SUCCESS:
    return {
      ...state,
      fetching: false,
      data: payload
    };
  case SHYNEE_SETTINGS_FAILURE:
    return {
      ...state,
      fetching: false,
      error: true,
    };
  default: 
    return state;
  }
}

export default combineReducers({
  shynee,
  shyneeSettings
});
