import { combineReducers } from 'redux';
import shyneesAround from './shynees';
import shynee from './shynee';
import viewingProfile from './viewingProfile';

const rootReducer = combineReducers({
  shynee: shynee,
  shyneesAround,
  viewingProfile
});

export default rootReducer;
