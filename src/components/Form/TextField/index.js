import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import Text from '../../Text';

import styles from './styles';

class TextField extends PureComponent {
  render() {
    const {
      title,
      placeholder,
      multiline = false,
      activePlaceholder,
      style,
      containerStyle,
      input,
      meta,
      ...inputProps
    } = this.props;
    const error = meta.touched && !meta.valid;
    const expanded = input.value || meta.active;

    return (
      <View style={containerStyle}>
        <View style={[
          styles.inputContainer,
        ]}>
          {
            expanded &&
            (<Text style={[styles.title, error ? styles.errorTitle : styles.validTitle]}>
              {title}
            </Text>)
          }
          <TextInput
            {...inputProps}
            {...meta}
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
            placeholder={expanded ? activePlaceholder : placeholder}
            multiline={multiline}
            style={[
              styles.input,
              input.value && meta.valid && !meta.active ? styles.validInput : styles.invalidInput,
              style,
            ]}
          />
        </View>
        <View style={[
          styles.line,
          meta.active && styles.activeLine,
          error && styles.errorLine,
        ]} />
        {error ? <Text style={styles.error}>{meta.error}</Text> : null}
      </View>
    );
  }
}

TextField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  activePlaceholder: PropTypes.string,
  multiline: PropTypes.bool
};

export default TextField;
