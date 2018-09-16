import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import TabMenu from '../../TabMenu';
import {Info, NoInfo} from '../../ProfileInfo';
import ProfileCard from '../../ProfileCard';

import styles from './styles';

const FOR_ME_TAB = 'For me';
const FOR_SHYNEES_TAB = 'For shynees';

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.tabs = [{
      title: 'For me',
      active: true,
      onPress: () => this.setState({activeTab: FOR_ME_TAB})
    },{
      title: 'For shynees',
      onPress: () => this.setState({activeTab: FOR_SHYNEES_TAB})
    }];

    this.state = {
      activeTab: FOR_ME_TAB
    };
  }

  render() {
    const {shynee} = this.props;
    const {name, dob, gender, interests, personalInfo} = shynee.data;
    const infoExist = name || dob || gender || interests || personalInfo ? true : false;
    return <ScrollView style={styles.wrapper}>
      <View style={styles.topContent}>
        <ProfileCard style={{marginTop: 8}} shynee={shynee.data} />
        <TabMenu 
          tabs={this.tabs}
          type='underlined'
          tabStyle={styles.tab}
          textStyle={styles.tabText}
        />
      </View>
      <View style={styles.content}>
        {infoExist ?  <Info shynee={shynee.data} /> : <NoInfo />}
      </View>
    </ScrollView>;
  }
}

Profile.propTypes = {
  shynee: PropTypes.object,
};

export default Profile;
