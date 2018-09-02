import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Animated} from 'react-native';

import Text from '../../Text';
import Button from '../../Button';

import styles from './styles';

class Header extends PureComponent {
  render() {
    const {animationParams: params} = this.props;
    return (
      <Animated.View style={{height: params.headerHeight}}>
        <View style={styles.headerContainer}>
          <Animated.View style={[styles.titleContainer, {backgroundColor: params.headerBackgoundColor}]}>
            <Text style={[styles.title, {color: params.headerColor}]}>Shynees Around</Text>
          </Animated.View>
        </View>
        {<Button
          title="I AM READY"
          style={[styles.button, {top: params.headerIndent}]}
          type='colorful'
        />}
      </Animated.View>
    );
  }
}

Header.propTypes = {
  animationParams: PropTypes.object,
};

export default Header;
