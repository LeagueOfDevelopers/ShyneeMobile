import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {
  SHYNEES_AROUND,
  SHYNEES_WORLDWIDE,
  VIEW_PROFILE,
  PROFILE_EDITING,
  SETTINGS,
  CHATS,
  CHAT,
  BUY_THIS_APP,
  SIGN_IN,
  SIGN_UP
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
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';

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
  // [SIGN_IN]: SignInScreen,
  // [SIGN_UP]: SignUpScreen,
  [PROFILE_EDITING]: ProfileEditingScreen,
  [VIEW_PROFILE]: ViewProfileScreen,
  [CHAT]: ChatScreen,
  [SETTINGS]: SettingsScreen,
}, commonStackOptions);

const getTabNavigationOptions = (title, iconName) => ({
  title,
  tabBarIcon: ({tintColor}) => <Icon name={iconName} size={25} color={tintColor} /> //eslint-disable-line 
});

export default createBottomTabNavigator(
  {
    ShyneesAround: {
      screen: ShyneesAroundStack,
      navigationOptions: getTabNavigationOptions('Around', 'compass')
    },
    ShyneesWorldwide: {
      screen: ShyneesWorldwideStack,
      navigationOptions: getTabNavigationOptions('World', 'globe')
    },
    Chats: {
      screen: ChatsStack,
      navigationOptions: getTabNavigationOptions('Chat', 'bubble')
    },
    ProfileEditing: {
      screen: ProfileEditingStack,
      navigationOptions: getTabNavigationOptions('Profile', 'user')
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.grey
    }
  }
);
