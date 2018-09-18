import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

import {editShyneeSettingsPrivacy} from '../../actions/shynee';
import Text from '../Text';
import SwitchField from '../SwitchField';

import styles from './styles';

class ProfileForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      settings: props.profilePrivacy
    };
  }

  onChange = parameter => value => {
    const {profilePrivacy, shyneeId, dispatch} = this.props;

    const updatedSettings = {
      ...profilePrivacy,
      [parameter]: value
    };

    dispatch(editShyneeSettingsPrivacy(shyneeId, updatedSettings))
      .catch(() => {
        this.dropdown.alertWithType('error', 'Error', 'Something went wrong');
        this.setState({
          settings: profilePrivacy
        });
      });

    this.setState({
      settings: updatedSettings
    });
  }

  render() {
    const {settings} = this.state;
    if(!settings) return null;

    const {avatarUri, dob, gender, name, interests, personalInfo} = settings;
    return (
      <View>
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
        <DropdownAlert ref={ref => this.dropdown = ref} useNativeDriver={true}/>
      </View>
    );
  }
}

ProfileForm.propTypes = {
  shyneeId: PropTypes.string,
  profilePrivacy: PropTypes.object,
  dispatch: PropTypes.func,
};

export default ProfileForm;
