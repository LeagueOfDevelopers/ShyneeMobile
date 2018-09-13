import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

/**
 * to be wrapped with redux-form Field component
 */
const TextField = (props) => {
  const { input, ...inputProps } = props;

  return (
    <TextInput
      {...inputProps}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
    />
  );
};

TextField.propTypes = {
  input: PropTypes.object,
};

export default TextField;
