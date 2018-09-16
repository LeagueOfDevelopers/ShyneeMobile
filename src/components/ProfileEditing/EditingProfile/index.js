import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import TabMenu from '../../TabMenu';
import ProfileInfoForm from '../../ProfileInfoForm';

import styles from './styles';

const INFO_TAB = 'Profile Info';
const SETTINGS_TAB = 'Privacy settings';

class ProfileEditing extends PureComponent {
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
    return <ScrollView style={styles.wrapper}>
      <View style={styles.content}>
        <TabMenu
          tabs={this.tabs}
          type='underlined'
          tabStyle={styles.tab}
          textStyle={styles.tabText}
        />
        {this.state.activeTab === INFO_TAB ? 
          <ProfileInfoForm shynee={shynee.data}/>
          :
          null}
      </View>
    </ScrollView>;
  }
}

ProfileEditing.propTypes = {
  shynee: PropTypes.object,
};

export default ProfileEditing;
