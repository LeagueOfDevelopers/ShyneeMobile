import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import {
  SHYNEES_AROUND,
  SHYNEES_WORLDWIDE,
  VIEW_PROFILE,
  PROFILE_EDITING,
  SETTINGS,
  CHATS,
  CHAT,
  BUY_THIS_APP,
} from '../../constants/screens';

import ShyneesAroundScreen from '../ShyneesAroundScreen';
import ShyneesWorldwideScreen from '../ShyneesWorldwideScreen';
import ChatsScreen from '../ChatsScreen';
import ProfileEditingScreen from '../ProfileEditingScreen';
import ViewProfileScreen from '../ViewProfileScreen';
import SettingsScreen from '../SettingsScreen';
import BuyThisAppScreen from '../BuyThisAppScreen';
import ChatScreen from '../ChatScreen';

const ShyneesAroundStack = createStackNavigator({
  [SHYNEES_AROUND]: ShyneesAroundScreen,
  [VIEW_PROFILE]: ViewProfileScreen,
  [CHAT]: ChatScreen,
  [SETTINGS]: SettingsScreen,
});

const ShyneesWorldwideStack = createStackNavigator({
  [SHYNEES_WORLDWIDE]: ShyneesWorldwideScreen,
  [BUY_THIS_APP]: BuyThisAppScreen,
});

const ChatsStack = createStackNavigator({
  [CHATS]: ChatsScreen,
  [CHAT]: ChatScreen,
});

const ProfileEditingStack = createStackNavigator({
  [PROFILE_EDITING]: ProfileEditingScreen,
  [VIEW_PROFILE]: ViewProfileScreen,
  [CHAT]: ChatScreen,
  [SETTINGS]: SettingsScreen,
});

export default createBottomTabNavigator(
  {
    ShyneesAround: ShyneesAroundStack,
    ShyneesWorldwide: ShyneesWorldwideStack,
    Chats: ChatsStack,
    ProfileEditing: ProfileEditingStack,
  },
  {
    /* Other configuration remains unchanged */
  }
);
