import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableOpacity} from 'react-native';

import Text from '../../Text';
import {VIEW_PROFILE} from '../../../constants/screens';

import styles from './styles';

const ShyneeItem = ({shynee, size, navigation, nicknameStyle: customNicknameStyle}) => 
  <View style={{...size, ...styles.sheneeСell}}>
    <TouchableOpacity onPress={() => navigation.navigate(VIEW_PROFILE, {shyneeId: shynee.id})}>
      <View style={styles.avatarContainer}>
        <View style={styles.nicknameContainer}>
          <Text style={[styles.nickname, customNicknameStyle]}>{shynee.nickname}</Text>
        </View>
        <View style={styles.blackout}/>
        <Image style={styles.avatar} source={{uri: shynee.avatarUri}}/>
      </View>
    </TouchableOpacity>
  </View>;

ShyneeItem.propTypes = {
  shynee: PropTypes.object,
  navigation: PropTypes.object,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  nicknameStyle: PropTypes.object,
};

export default ShyneeItem;
