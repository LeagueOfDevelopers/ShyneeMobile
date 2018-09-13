import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import shyneesAround from './shynees';
import shynee from './shynee';
import viewingProfile from './viewingProfile';

const rootReducer = combineReducers({
  shynee: shynee,
  shyneesAround,
  viewingProfile,
  form: formReducer
});

export default rootReducer;
