import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';

import Text from '../../Text';
import {colors} from '../../../constants/styles';

import styles from './styles';

class TextField extends PureComponent {
  render() {
    const {
      title,
      placeholder,
      multiline=false,
      activePlaceholder,
      style,
      containerStyle,
      input,
      meta,
      ...inputProps
    } = this.props;

    return <View style={[
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
        multiline={multiline}
        placeholder={meta.active ? activePlaceholder : placeholder}
        style={[
          styles.input,
          input.value || meta.active ? {} : {height: 50},
          input.value && meta.valid && !meta.active ? {color: colors.primary} : {color: colors.black},
          style
        ]}
      />
    </View>;
  }
}

TextField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  activePlaceholder: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  multiline: PropTypes.bool
};

export default TextField;
