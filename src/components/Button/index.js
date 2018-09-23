import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, TouchableOpacity, Animated, Platform } from 'react-native';

import Text from '../Text';

import buttonStyles from './styles';

class Button extends PureComponent {
  renderButtonPayload(children, title, textStyle, customTextStyles, disabled) {
    if (children) {
      return children;
    }

    return (
      <Text style={[textStyle, customTextStyles]} disabled={disabled}>
        {title}
      </Text>
    );
  }

  render() {
    const {
      onPress = () => { },
      title,
      disabled,
      style: customStyles,
      buttonStyle: customButtonStyles,
      textStyle: customTextStyles,
      type = 'normal',
      children
    } = this.props;
    // const accessibilityTraits = ['button'];
    // if (disabled) {
    //   // Change button styles
    //   accessibilityTraits.push('disabled');
    // }
    const styles = buttonStyles[type];
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <Animated.View style={[styles.container, customStyles]}>
        <Touchable
          disabled={disabled}
          onPress={onPress}>
          <View style={[styles.button, customButtonStyles]}>
            {this.renderButtonPayload(children, title, styles.text, customTextStyles, disabled)}
          </View>
        </Touchable>
      </Animated.View>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  textStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  type: PropTypes.oneOf(['colorful', 'normal']),
  children: PropTypes.node
};

export default Button;
