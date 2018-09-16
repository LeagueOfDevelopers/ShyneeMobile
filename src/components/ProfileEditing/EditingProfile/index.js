import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import TabMenu from '../../TabMenu';
import ProfileInfoForm from '../../ProfileInfoForm';
import ProfileSettingsForm from '../../ProfileSettingsForm';

import styles from './styles';

const INFO_TAB = 'Profile Info';
const SETTINGS_TAB = 'Privacy settings';

class EditingProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.tabs = [{
      title: 'Profile Info',
      active: true,
      onPress: () => this.setState({activeTab: INFO_TAB})
    },{
      title: 'Privacy settings',
      onPress: () => this.setState({activeTab: SETTINGS_TAB})
    }];

    this.state = {
      activeTab: INFO_TAB
    };
  }

  render() {
    const {shynee} = this.props;
    const  {activeTab} = this.state;
    return <ScrollView style={styles.wrapper}>
      <View style={styles.content}>
        <TabMenu
          tabs={this.tabs}
          type='underlined'
          style={styles.tabsContainer}
          textStyle={styles.tabText}
        />
        <View style={[
          styles.form,
          activeTab === INFO_TAB ? styles.infoForm : {}
        ]}>
          {activeTab === INFO_TAB ? 
            <ProfileInfoForm shynee={shynee.data}/>
            :
            <ProfileSettingsForm/>}
        </View>
      </View>
    </ScrollView>;
  }
}

EditingProfile.propTypes = {
  shynee: PropTypes.object,
};

export default EditingProfile;
