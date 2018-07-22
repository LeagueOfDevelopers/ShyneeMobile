import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button } from 'react-native';

import {CHAT} from '../../constants/screens';

class ViewProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>View Profile!</Text>
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate(CHAT)}
        />
      </View>
    );
  }
}

ViewProfileScreen.navigationOptions = {
  title: 'View Profile',
};

ViewProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ViewProfileScreen;
