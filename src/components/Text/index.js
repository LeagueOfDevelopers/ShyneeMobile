import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Animated} from 'react-native';
import {fonts, colors} from '../../constants/styles';

class Text extends PureComponent {
  render() {
    const {children, style: customStyle, ...rest} = this.props;

    const textStyle = {
      color: colors.black,
      fontSize: fonts.size.small,
      ...fonts.weight.regular,
    };
    
    return (
      <Animated.Text style={[textStyle, customStyle]} {...rest}>
        {children}
      </Animated.Text>
    );
  }
}

Text.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Text;
