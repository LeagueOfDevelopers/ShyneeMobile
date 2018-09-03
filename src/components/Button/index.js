import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Platform from 'Platform';
import {View, TouchableNativeFeedback, TouchableOpacity, Animated} from 'react-native';

import Text from '../Text';

import buttonStyles from './styles';

class Button extends PureComponent {
  render() {
    const {
      onPress = () => {},
      title,
      disabled,
      style: customStyles,
      buttonStyle: customButtonStyles,
      textStyle: customTextStyles,
      type = 'normal'
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
            <Text style={[styles.text, customTextStyles]} disabled={disabled}>
              {title}
            </Text>
          </View>
        </Touchable>
      </Animated.View>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.func,
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
  type: PropTypes.oneOf(['colorful', 'normal'])
};

export default Button;
