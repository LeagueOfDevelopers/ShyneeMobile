import { combineReducers } from 'redux';
import settings from './settings';
import shyneesAround from './shynees';
import profile from './profile';

const rootReducer = combineReducers({
  settings,
  shyneesAround,
  shyneeProfile: profile,
});

export default rootReducer;
