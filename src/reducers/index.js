import { combineReducers } from 'redux';
import shyneesAround from './shynees';
import shynee from './shynee';

const rootReducer = combineReducers({
  shyneesAround,
  shynee: shynee,
});

export default rootReducer;
