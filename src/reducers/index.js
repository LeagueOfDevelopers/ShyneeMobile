import { combineReducers } from 'redux';
import settings from './settings';
import {shyneesAroundReducer} from './shynees';

const rootReducer = combineReducers({
  settings,
  shyneesAround: shyneesAroundReducer
});

export default rootReducer;
