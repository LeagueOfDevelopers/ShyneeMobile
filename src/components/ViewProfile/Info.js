import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import Text from '../Text';

import styles from './styles';

export const Info = ({shynee}) => <View style={styles.info}>
  {shynee.name ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>NAME</Text>
    <Text style={styles.itemValue}>{shynee.name}</Text>
  </View> : null}
  {shynee.dob ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>DATE OF BIRTH</Text>
    <Text style={styles.itemValue}>{shynee.dob}</Text>
  </View> : null}
  {shynee.gender ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>SEX</Text>
    <Text style={styles.itemValue}>{shynee.gender}</Text>
  </View> : null}
  {shynee.interests ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>INTERESTS</Text>
    <View style={styles.interests}>{
      shynee.interests.map((interest, index) => 
        <View key={index} style={styles.interestContainer}>
          <Text style={styles.interest}>{interest}</Text>
        </View>
      )}
    </View>
  </View> : null}
  {shynee.personalInfo ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>ABOUT ME</Text>
    <Text style={styles.itemValue}>{shynee.personalInfo}</Text>
  </View> : null}
</View>;

export const NoInfo = () => <View style={styles.noInfoContainer}>
  <View style={styles.noInfo}>
    <Text style={styles.noInfoPity}>Unfontunaley, no info about Florence Adams is public.</Text>
    <Text style={styles.noInfoSuggestion}>You can still have a nice talk!</Text>
  </View>
</View>;

Info.propTypes = {
  shynee: PropTypes.object,
};
