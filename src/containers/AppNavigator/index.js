import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button } from 'react-native';

import HomeScreen from '../HomeScreen';
import SettingsScreen from '../SettingsScreen';

import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

DetailsScreen.propTypes = {
  navigation: PropTypes.object
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    /* Other configuration remains unchanged */
  }
);
