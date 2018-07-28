import React from 'react';
import {View } from 'react-native';

import Text from '../../components/Text';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

export default SettingsScreen;
