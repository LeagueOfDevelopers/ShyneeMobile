import HomeScreen from '../containers/HomeScreen';
import SettingsScreen from '../containers/SettingsScreen';

import {
  HOME,
  SETTINGS,
} from '../constants/screens';

export default new Map([
  [HOME, HomeScreen],
  [SETTINGS, SettingsScreen],
]);
