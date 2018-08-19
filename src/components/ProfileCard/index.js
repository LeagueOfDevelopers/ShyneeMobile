import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';

import Text from '../Text';

class ProfileCard extends PureComponent {
  render() {
    const {shynee} = this.props;
    return (
      <View>
        <Image source={{uri: shynee.avatarUri}}/>
        <Text>Nickname</Text>
        <Text>{shynee.name}</Text>
      </View>
    );
  }
}

ProfileCard.propTypes = {
  shynee: PropTypes.object,
};

export default ProfileCard;
