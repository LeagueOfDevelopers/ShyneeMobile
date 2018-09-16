import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import TabMenu from '../../TabMenu';
import {Info, NoInfo} from '../../ProfileInfo';
import ProfileCard from '../../ProfileCard';

import styles from './styles';

export const ProfileEditing = ({shynee, tabs}) => {
  const {name, dob, gender, interests, personalInfo} = shynee.data;
  const infoExist = name || dob || gender || interests || personalInfo ? true : false;

  return <ScrollView style={styles.wrapper}>
    <View style={styles.topContent}>
      <ProfileCard style={{marginTop: 8}} shynee={shynee.data} />
      <TabMenu 
        tabs={tabs}
        type='underlined'
        tabStyle={styles.tab}
        textStyle={styles.tabText}
      />
    </View>
    <View style={styles.content}>
      {infoExist ?  <Info shynee={shynee.data} /> : <NoInfo />}
    </View>
  </ScrollView>;
};

ProfileEditing.propTypes = {
  shynee: PropTypes.object,
  tabs: PropTypes.array
};

export default ProfileEditing;
