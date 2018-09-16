import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { SIGN_IN, SIGN_UP } from '../../../constants/screens';
import Button from '../../Button';

import styles from './styles';

const titles = {
  [SIGN_IN]: 'Sign In',
  [SIGN_UP]: 'I\'m new'
};

const getHeaderMode = (navigation) => (
  navigation.state.routeName === SIGN_IN
    ? {
      active: SIGN_IN,
      inactive: SIGN_UP
    }
    : {
      active: SIGN_UP,
      inactive: SIGN_IN
    }
);

const Header = ({ navigation }) => {
  const headerMode = getHeaderMode(navigation);

  return (
    <View style={styles.container}>
      <Button
        title={titles[headerMode.active]}
        style={styles.titleContainer}
        textStyle={[styles.titleText, styles.activeTitle]}
        disabled
      />
      <Button
        title={titles[headerMode.inactive]}
        style={styles.titleContainer}
        textStyle={[styles.titleText, styles.inactiveTitle]}
        onPress={() => navigation.navigate(headerMode.inactive)}
      />
    </View>
  );
};

Header.propTypes = {
  navigation: PropTypes.object
};

export default Header;
