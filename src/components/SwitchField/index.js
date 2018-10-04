import Platform from 'Platform';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Switch} from 'react-native';

import {colors} from '../../constants/styles';
import Text from '../Text';

import styles from './styles';

class ProfileForm extends PureComponent {
  render() {
    const {text, value, onValueChange, containerStyles} = this.props;
    return (
      <View style={[styles.profileDataContainer, containerStyles]}>
        <Text style={styles.profileDataTitle}>{text}</Text>
        <Switch 
          trackColor={{true: colors.primary}}
          thumbTintColor={Platform.OS === 'ios' ? null : colors.white}
          onValueChange={onValueChange}
          value={value} 
        />
      </View>
    );
  }
}

ProfileForm.propTypes = {
  text: PropTypes.string,
  value: PropTypes.bool,
  onValueChange: PropTypes.func,
  containerStyles: PropTypes.object
};

export default ProfileForm;
