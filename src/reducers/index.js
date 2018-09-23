import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import shyneesAround from './shynees';
import shynee from './shynee';
import viewingProfile from './viewingProfile';
import chats from './chats';

const rootReducer = combineReducers({
  shynee: shynee,
  shyneesAround,
  viewingProfile,
  chats,
  form: formReducer
});

export default rootReducer;
