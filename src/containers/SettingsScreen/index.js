import React from 'react';
import {View, Text } from 'react-native';

class SettingsSreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

SettingsSreen.navigationOptions = {
  title: 'Settings',
};

export default SettingsSreen;
