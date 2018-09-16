import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';

import Text from '../Text';
import SwitchField from '../SwitchField';

import styles from './styles';

class ProfileForm extends PureComponent {
  onChange = parameter => value => {
    const {profilePrivacy} = this.props;
    //TODO: Добавить отпраку данных, и перезапись в сторе
    console.log({
      ...profilePrivacy,
      [parameter]: value
    });
  }
  render() {
    const {profilePrivacy} = this.props;
    const {avatarUri, dob, gender, name, interests, personalInfo} = profilePrivacy;
    return (
      <ScrollView>
        <View style={styles.profileDataContainer}>
          <View style={styles.profileDataTitleContainer}>
            <Text style={[styles.profileDataTitle, {textAlign: 'left'}]}>Profile data</Text>
            <Text style={[styles.profileDataTitle, {textAlign: 'right'}]}>Public</Text>
          </View>
          <SwitchField text='Profile image' value={avatarUri} onValueChange={this.onChange('avatarUri')}/>
          <SwitchField text='Sex' value={gender} onValueChange={this.onChange('gender')}/>
          <SwitchField text='Name' value={name} onValueChange={this.onChange('name')}/>
          <SwitchField text='Date of birth' value={dob} onValueChange={this.onChange('dob')}/>
          <SwitchField text='Interests' value={interests} onValueChange={this.onChange('interests')}/>
          <SwitchField text='About me' value={personalInfo} onValueChange={this.onChange('personalInfo')}/>
        </View>
      </ScrollView>
    );
  }
}

ProfileForm.propTypes = {
  profilePrivacy: PropTypes.object,
  initialize: PropTypes.func
};

export default ProfileForm;
