import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Button} from 'react-native';

import Text from '../Text';
import {CHAT} from '../../constants/screens';

class ViewProfile extends PureComponent {
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

ViewProfile.propTypes = {
  navigation: PropTypes.object,
  shynees: PropTypes.array
};

export default ViewProfile;
