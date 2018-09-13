import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Text style={[styles.formTitle, styles.activeTitle]}>Sign In</Text>
    <Text style={[styles.formTitle, styles.inactiveTitle]}>Im new</Text>
  </View>
);

export default Header;
