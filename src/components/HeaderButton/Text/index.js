import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';

import styles from './styles';

const HeaderButton = ({title, onPress}) =>
  <Button buttonStyle={styles.button} textStyle={styles.buttonText} title={title} onPress={onPress}/>;

HeaderButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};
export default HeaderButton;
