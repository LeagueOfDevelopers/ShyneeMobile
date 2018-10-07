import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';

import {getShyneeSettingsPrivacy, updateShyneeSettingsPrivacy} from '../../actions/shynee';
import Text from '../Text';
import SwitchField from '../SwitchField';
import Loader from '../Loader';

import styles from './styles';

class ProfileForm extends PureComponent {
  state = {
    allPublic: false
  }

  componentDidMount() {
    const {token, shyneeId, dispatch} = this.props;
    dispatch(getShyneeSettingsPrivacy(shyneeId, token));
  }

  componentWillUnmount() {
    const {token, shyneeId, dispatch} = this.props;
    dispatch(getShyneeSettingsPrivacy(shyneeId, token));
  }

  onChange = parameter => value => {
    const {dispatch} = this.props;
    const updatedSettings = {
      [parameter]: value
    };

    dispatch(updateShyneeSettingsPrivacy(updatedSettings));
  }

  onChangeAllPublic = () => {
    const {dispatch, settingsPrivacy} = this.props;
    let updatedSettings = {};

    for (setting in settingsPrivacy.data) {
      updatedSettings[setting] = !this.state.allPublic;
    }
    
    this.setState({allPublic: !this.state.allPublic});
    dispatch(updateShyneeSettingsPrivacy(updatedSettings));
  }

  render() {
    const {settingsPrivacy} = this.props;
    if (settingsPrivacy.data) {
      const {avatarUri, dob, gender, name, interests, personalInfo} = settingsPrivacy.data;
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
              <SwitchField
                text='All public'
                value={this.state.allPublic}
                onValueChange={this.onChangeAllPublic}
                containerStyles={styles.allPublic}
              />
              <Text style={styles.prompt}>
                Activate to make all your information visible for other shynees. 
                Deactivating will return your previous settings.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }

    return <Loader/>;
  }
}

ProfileForm.propTypes = {
  token: PropTypes.string,
  shyneeId: PropTypes.string,
  settingsPrivacy: PropTypes.object,
  dispatch: PropTypes.func,
  dropdown: PropTypes.any,
};

export default ProfileForm;
