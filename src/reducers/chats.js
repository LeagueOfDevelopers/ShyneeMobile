import { combineReducers } from 'redux';

import {
  CHAT_LIST_REQUEST,
  CHAT_LIST_SUCCESS,
  CHAT_LIST_FAILURE
} from '../actions/chats';

const initialState = {
  fetching: false,
  error: false,
  data: null
};

const chatList = (state = initialState, {type, payload}) => {
  switch (type) {
  case CHAT_LIST_REQUEST:
    return {
      ...state,
      fetching: true
    };
  case CHAT_LIST_SUCCESS: {
    return {
      ...state,
      fetching: false,
      error: false,
      data: payload
    };
  }
  case CHAT_LIST_FAILURE: {
    return {
      ...state,
      fetching: false,
      error: true
    };
  }
  default:
    return state;
  }
};

export default combineReducers({ chatList });
