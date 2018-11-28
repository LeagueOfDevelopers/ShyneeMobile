import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

const Touchable = ({ children, ...rest }) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback {...rest}>
        {children}
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity {...rest}>
      {children}
    </TouchableOpacity>
  );
};

Touchable.propTypes = {
  children: PropTypes.any
};

export default Touchable;
