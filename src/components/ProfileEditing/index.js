import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import ProfileCard from '../ProfileCard';
import TabMenu from '../TabMenu';
import Loader from '../Loader';
import {Info, NoInfo} from '../ProfileInfo';
import {VIEW_PROFILE, SETTINGS} from '../../constants/screens';

import styles from './styles';

class ViewProfile extends PureComponent {
  getTabs = (infoExist) => {
    const { navigation } = this.props;
    const tabs = [{
      title: 'For me',
      onPress: () => navigation.navigate(VIEW_PROFILE)
    }];
    if (infoExist) tabs.unshift({
      title: 'For shynees',
      onPress: () => navigation.navigate(SETTINGS)
    });
    return tabs;
  }

  render() {
    const {shynee} = this.props;
    if (shynee.data) {
      const {name, dob, gender, interests, personalInfo} = shynee.data;
      const infoExist = name || dob || gender || interests || personalInfo ? true : false;

      return (
        <ScrollView>
          <View style={styles.topContent}>
            <ProfileCard style={{marginTop: 8}} shynee={shynee.data} />
            <TabMenu tabs={this.getTabs(infoExist)} style={styles.tabMenu}/>
          </View>
          <View style={styles.content}>
            {infoExist ?  <Info shynee={shynee.data} /> : <NoInfo />}
          </View>
        </ScrollView>
      );
    }

    if (shynee.error) {
      return null;
    }
    return (<Loader />);
  }
}

ViewProfile.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
};

export default ViewProfile;
