import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Animated} from 'react-native';
import {f_medium, black} from '../../constants/styles';

class Text extends PureComponent {
  render() {
    const {children, style: customStyle, disabled} = this.props;

    const textStyle = {
      color: black,
      ...f_medium,

      ...customStyle
    };
    
    return (
      <Animated.Text style={textStyle} disabled={disabled}>
        {children}
      </Animated.Text>
    );
  }
}

Text.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.string
};

export default Text;
