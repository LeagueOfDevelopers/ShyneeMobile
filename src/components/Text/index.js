import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text as NativeText} from 'react-native';
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
      <NativeText style={textStyle} disabled={disabled}>
        {children}
      </NativeText>
    );
  }
}

Text.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.string
};

export default Text;
