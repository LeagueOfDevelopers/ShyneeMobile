import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';

import Text from '../Text';

import styles from './styles';

class ProfileCard extends PureComponent {
  render() {
    const {shynee, style: customStyles} = this.props;
    return (
      <View style={{...styles.card, ...customStyles}}>
        <Image style={styles.avatar} source={{uri: shynee.avatarUri}}/>
        <View style={styles.nicknameContainer}>
          <Text style={styles.nickname}>Nickname</Text>
          <Text style={styles.name}>{shynee.name || 'Nothing'}</Text>
        </View>
      </View>
    );
  }
}

ProfileCard.propTypes = {
  shynee: PropTypes.object,
  style: PropTypes.object
};

export default ProfileCard;
