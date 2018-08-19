import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, Animated} from 'react-native';

import Text from '../Text';
import ShyneeItem from './ShyneeItem';
import {black, white, primaryColor} from '../../constants/styles';
import {convertHex} from '../../utils/helpers';

import styles from './styles';

class ShyneesAroundScreen extends PureComponent {
  state = {
    scrollY: new Animated.Value(0),
    shyneeSize: {
      width: null,
      height: null
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({
      headerHeight: this.state.scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: [64, 86],
        extrapolate: 'clamp',
      }),
      headerBackgoundColor: this.state.scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: [white, convertHex(primaryColor, 0.3)],
        extrapolate: 'clamp',
      }),
      headerColor: this.state.scrollY.interpolate({
        inputRange: [0, 15],
        outputRange: [black, white],
        extrapolate: 'clamp',
      }),
      headerIndent: this.state.scrollY.interpolate({
        inputRange: [0, 72],
        outputRange: [80, 25],
        extrapolate: 'clamp',
      })
    });
  }
  
  _onScroll = Animated.event([
    { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
  ])

  _onRenderShyneesAround = (event) => {
    const COLUMNS = 3;
    const { width } = event.nativeEvent.layout;

    const shyneeWidth = width/COLUMNS - 1;
    const shyneeHeight = shyneeWidth * 4/3;

    this.setState({
      shyneeSize: {
        width: shyneeWidth,
        height: shyneeHeight
      }
    });
  }

  render() {
    const {shyneeSize} = this.state;
    const {navigation, shynees} = this.props;
    return (
      <ScrollView onScroll={this._onScroll} scrollEventThrottle={16}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>There are lots of shy people out there. Why not be shy together?</Text>
        </View>
        <View style={styles.shyneesAroundContainer} onLayout={this._onRenderShyneesAround}>
          {shynees.map(shynee => <ShyneeItem 
            key={shynee.id}
            shynee={shynee}
            navigation={navigation}
            size={shyneeSize}
          />)}
        </View>
      </ScrollView>
    );
  }
}

ShyneesAroundScreen.propTypes = {
  navigation: PropTypes.object,
  shynees: PropTypes.array
};

export default ShyneesAroundScreen;
