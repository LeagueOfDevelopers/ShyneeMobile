import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import TabMenu from '../../TabMenu';
import ProfileInfoForm from '../../ProfileInfoForm';

import styles from './styles';

export const ProfileEditing = ({shynee, tabs}) => <ScrollView style={styles.wrapper}>
  <View style={styles.content}>
    <TabMenu
      tabs={tabs}
      type='underlined'
      tabStyle={styles.tab}
      textStyle={styles.tabText}
    />
    <ProfileInfoForm shynee={shynee.data}/>
  </View>
</ScrollView>;

ProfileEditing.propTypes = {
  shynee: PropTypes.object,
  tabs: PropTypes.array
};

export default ProfileEditing;
