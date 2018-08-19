import { combineReducers } from 'redux';

import { SHYNEE_PROFILE_REQUEST, SHYNEE_PROFILE_SUCCESS, SHYNEE_PROFILE_FAILURE } from '../actions/profile';

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

export default combineReducers({
  shynee
});
