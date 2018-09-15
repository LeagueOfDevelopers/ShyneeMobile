import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import Text from '../../Text';

import styles from './styles';

const TextField = ({ title, placeholder, style, containerStyle, input, meta, ...inputProps }) => {
  const error = meta.touched && !meta.valid;
  const expanded = input.value || meta.active;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputContainer, meta.active
        ? styles.activeContainer
        : (error ? styles.errorContainer : styles.inactiveContainer)]}>
        {expanded
          ? <Text style={[styles.title, error ? styles.errorTitle : styles.validTitle]}>
            {title}
          </Text>
          : null}
        <TextInput
          {...inputProps}
          {...meta}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          placeholder={expanded ? null : placeholder}
          style={[
            styles.input,
            expanded ? styles.activeInput : styles.inactiveInput,
            input.value && meta.valid && !meta.active ? styles.validInput : styles.invalidInput,
            style
          ]}
        />
      </View>
      {error ? <Text style={styles.error}>{meta.error}</Text> : null}
    </View>
  );
};

TextField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default TextField;
