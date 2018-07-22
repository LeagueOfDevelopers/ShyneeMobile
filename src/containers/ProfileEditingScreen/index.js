import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button } from 'react-native';

import {VIEW_PROFILE, SETTINGS} from '../../constants/screens';

class ProfileEditingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Editing!</Text>
        <Button
          title="Go to View Profile"
          onPress={() => this.props.navigation.navigate(VIEW_PROFILE)}
        />
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate(SETTINGS)}
        />
      </View>
    );
  }
}

ProfileEditingScreen.navigationOptions = {
  title: 'Profile Editing',
};

ProfileEditingScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ProfileEditingScreen;
