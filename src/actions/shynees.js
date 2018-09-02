import {
  getShyneesAroundRequest,
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
