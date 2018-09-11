import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';

/**
 * to be wrapped with redux-form Field component
 */
const TextField = (props) => {
  const { input, ...inputProps } = props;

  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </View>
  );
};

TextField.propTypes = {
  input: PropTypes.object,
};

export default TextField;
