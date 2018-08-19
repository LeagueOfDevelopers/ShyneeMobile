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
import {white, black, fw_medium} from '../../constants/styles';

import ShyneesAroundScreen from '../ShyneesAroundScreen';
import ShyneesWorldwideScreen from '../ShyneesWorldwideScreen';
import ChatsScreen from '../ChatsScreen';
import ProfileEditingScreen from '../ProfileEditingScreen';
import ViewProfileScreen from '../ViewProfileScreen';
import SettingsScreen from '../SettingsScreen';
import BuyThisAppScreen from '../BuyThisAppScreen';
import ChatScreen from '../ChatScreen';

const commonStackOptions = {
  cardStyle: { backgroundColor: 'white' },
  navigationOptions: {
    headerStyle: {
      backgroundColor: white,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: black,
    headerTitleStyle: {
      fontWeight: fw_medium,
    },
  }
};

const ShyneesAroundStack = createStackNavigator({
  [SHYNEES_AROUND]: ShyneesAroundScreen,
  [VIEW_PROFILE]: ViewProfileScreen,
  [CHAT]: ChatScreen,
  [SETTINGS]: SettingsScreen,
}, commonStackOptions);

const ShyneesWorldwideStack = createStackNavigator({
  [SHYNEES_WORLDWIDE]: ShyneesWorldwideScreen,
  [BUY_THIS_APP]: BuyThisAppScreen,
}, commonStackOptions);

const ChatsStack = createStackNavigator({
  [CHATS]: ChatsScreen,
  [CHAT]: ChatScreen,
}, commonStackOptions);

const ProfileEditingStack = createStackNavigator({
  [PROFILE_EDITING]: ProfileEditingScreen,
  [VIEW_PROFILE]: ViewProfileScreen,
  [CHAT]: ChatScreen,
  [SETTINGS]: SettingsScreen,
}, commonStackOptions);

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
