import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Divider = () => (
  <View style={styles.container}>
    <View style={styles.line} />
    <Text style={styles.text}>or</Text>
    <View style={styles.line} />
  </View>
);

export default Divider;
