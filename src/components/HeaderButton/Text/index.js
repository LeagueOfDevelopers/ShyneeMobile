import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';

import styles from './styles';

const HeaderButton = ({title}) =>
  <Button buttonStyle={styles.button} textStyle={styles.buttonText} title={title}/>;

HeaderButton.propTypes = {
  title: PropTypes.string,
};
export default HeaderButton;
