import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';

import Text from '../../Text';
import {colors} from '../../../constants/styles';

import styles from './styles';

const TextField = ({title, placeholder, activePlaceholder, style, containerStyle, input, meta, ...inputProps}) =>
  <View style={[
    styles.container,
    meta.active ? {borderBottomColor: colors.primary} : null,
    containerStyle
  ]}>
    {input.value || meta.active ? <Text style={styles.title}>{title}</Text> : null}
    <TextInput
      {...inputProps}
      {...meta}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
      placeholder={meta.active ? activePlaceholder : placeholder}
      style={[
        styles.input,
        input.value || meta.active ? {} : {height: 50},
        input.value && meta.valid && !meta.active ? {color: colors.primary} : {color: colors.black},
        style
      ]}
    />
  </View>;

TextField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  activePlaceholder: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default TextField;
