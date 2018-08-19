import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import Text from '../Text';

class ViewProfile extends PureComponent {
  render() {
    return (
      <View>
        <Text>There are lots of shy people out there. Why not be shy together?</Text>
      </View>
    );
  }
}

ViewProfile.propTypes = {
  navigation: PropTypes.object,
  shynees: PropTypes.array
};

export default ViewProfile;
