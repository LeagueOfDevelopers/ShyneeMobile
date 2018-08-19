import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import ProfileCard from '../ProfileCard';
import TabMenu from '../TabMenu';
import {Info, NoInfo} from './Info';
import {CHAT} from '../../constants/screens';

import styles from './styles';

class ViewProfile extends PureComponent {
  constructor(props) {
    super(props);
    
    const {name, dob, gender, interests, personalInfo} = props.shynee;
    this.infoExist = name || dob || gender || interests || personalInfo ? true : false;
  }

  getTabs = () => {
    const { navigation } = this.props;
    const tabs = [{
      title: 'Chat',
      onPress: () => navigation.navigate(CHAT)
    }];
    if (this.infoExist) tabs.unshift({
      title: 'Reveal info',
      onPress: () => {}
    });
    return tabs;
  }

  render() {
    const {shynee} = this.props;
    return (
      <ScrollView>
        <View style={styles.topContent}>
          <ProfileCard style={{marginTop: 8}} shynee={shynee} />
          <TabMenu tabs={this.getTabs()} style={styles.tabMenu}/>
        </View>
        <View style={styles.content}>
          {this.infoExist ?  <Info shynee={shynee} /> : <NoInfo />}
        </View>
      </ScrollView>
    );
  }
}

ViewProfile.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
};

export default ViewProfile;
