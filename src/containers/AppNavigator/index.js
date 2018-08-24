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
import {fonts, colors} from '../../constants/styles';

import ShyneesAroundScreen from '../ShyneesAroundScreen';
import ShyneesWorldwideScreen from '../ShyneesWorldwideScreen';
import ChatsScreen from '../ChatsScreen';
import ProfileEditingScreen from '../ProfileEditingScreen';
import ViewProfileScreen from '../ViewProfileScreen';
import SettingsScreen from '../SettingsScreen';
import BuyThisAppScreen from '../BuyThisAppScreen';
import ChatScreen from '../ChatScreen';

const commonStackOptions = {
  cardStyle: { backgroundColor: '#f2f2f2' },
  headerLayoutPreset: 'center',
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.white,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: colors.black,
    headerTitleStyle: fonts.weight.regular,
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
