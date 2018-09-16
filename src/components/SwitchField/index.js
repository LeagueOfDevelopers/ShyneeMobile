import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Switch} from 'react-native';

import Text from '../Text';

import styles from './styles';

class ProfileForm extends PureComponent {
  render() {
    const {shynee} = this.props;
    return (
      <View style={styles.profileDataContainer}>
        <Text style={styles.profileDataTitle}>Profile data</Text>
        <Switch />
      </View>
    );
  }
}

ProfileForm.propTypes = {
  shynee: PropTypes.object,
  initialize: PropTypes.func
};

export default ProfileForm;
