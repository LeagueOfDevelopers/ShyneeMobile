import { SHYNEES_AROUND_REQUEST, SHYNEES_AROUND_SUCCESS, SHYNEES_AROUND_FAILURE } from '../actions/shynees';

const initialState = {
  fetching: false,
  error: false,
  data: []
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
  case SHYNEES_AROUND_REQUEST:
    return {
      ...state,
      fetching: true
    }; 
  case SHYNEES_AROUND_SUCCESS:
    return {
      ...state,
      fetching: false,
      data: payload
    };
  case SHYNEES_AROUND_FAILURE:
    return {
      ...state,
      fetching: false,
      error: true,
    };
  default: 
    return state;
  }
}
