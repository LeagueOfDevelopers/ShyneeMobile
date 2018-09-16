import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';

import Text from '../Text';
import SwitchField from '../SwitchField';

import styles from './styles';

class ProfileForm extends PureComponent {
  render() {
    const {shynee} = this.props;
    return (
      <ScrollView>
        <View style={styles.profileDataContainer}>
          <View style={styles.profileDataTitleContainer}>
            <Text style={[styles.profileDataTitle, {textAlign: 'left'}]}>Profile data</Text>
            <Text style={[styles.profileDataTitle, {textAlign: 'right'}]}>Public</Text>
          </View>
          <SwitchField/>
        </View>
      </ScrollView>
    );
  }
}

ProfileForm.propTypes = {
  shynee: PropTypes.object,
  initialize: PropTypes.func
};

export default ProfileForm;
