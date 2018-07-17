import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
  Text,
} from 'react-native';

class SettingsScreen extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Get some settings"
        />
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Home Screen',
};

SettingsScreen.propTypes = {
  navigation: PropTypes.object
};

export default SettingsScreen;
