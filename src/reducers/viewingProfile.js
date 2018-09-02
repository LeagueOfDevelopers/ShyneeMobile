import {
  VIEWING_PROFILE_REQUEST,
  VIEWING_PROFILE_SUCCESS,
  VIEWING_PROFILE_FAILURE
} from '../actions/viewingProfile';

const initialState = {
  fetching: false,
  error: false,
  data: null
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
  case VIEWING_PROFILE_REQUEST:
    return {
      ...state,
      fetching: true
    }; 
  case VIEWING_PROFILE_SUCCESS:
    return {
      ...state,
      fetching: false,
      data: payload
    };
  case VIEWING_PROFILE_FAILURE:
    return {
      ...state,
      fetching: false,
      error: true,
    };
  default: 
    return state;
  }
}
