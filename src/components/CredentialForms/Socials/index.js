import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../Button';
import styles from './styles';

const Socials = () => (
  <View style={styles.container}>
    <Button type='colorful' buttonStyle={[styles.button, styles.facebookButton]}>
      <Icon name='facebook-f' size={styles.icon.size} color={styles.icon.color} />
    </Button>
    <Button type='colorful' buttonStyle={[styles.button, styles.googleButton]}>
      <Icon name='google' size={styles.icon.size} color={styles.icon.color} />
    </Button>
  </View>
);

export default Socials;
