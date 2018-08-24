import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Platform from 'Platform';
import {View, ScrollView, Animated} from 'react-native';

import Text from '../Text';
import ShyneeItem from './ShyneeItem';
import Loader from '../Loader';
import {colors} from '../../constants/styles';
import {convertHex} from '../../utils/helpers';

import styles from './styles';

class ShyneesAroundScreen extends PureComponent {
  state = {
    iAmReadyVisible: false,
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
        outputRange: [
          Platform.OS === 'ios' ? 64 : 44, 
          Platform.OS === 'ios' ? 86 : 66
        ],
        extrapolate: 'clamp',
      }),
      headerBackgoundColor: this.state.scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: [colors.white, convertHex(colors.primary, 0.3)],
        extrapolate: 'clamp',
      }),
      headerColor: this.state.scrollY.interpolate({
        inputRange: [0, 15],
        outputRange: [colors.black, colors.white],
        extrapolate: 'clamp',
      }),
      headerIndent: this.state.scrollY.interpolate({
        inputRange: [0, 72],
        outputRange: [
          Platform.OS === 'ios' ? 115: 93,
          Platform.OS === 'ios' ? 65: 43
        ],
        extrapolate: 'clamp',
      })
    });
  }
  
  _onScroll = Animated.event([
    { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
  ])

  _onRenderShyneesAround = (event) => {
    let COLUMNS = 2;
    const { width } = event.nativeEvent.layout;

    if (this.props.shynees.data.length == 1) COLUMNS = 1;
    const side = width/COLUMNS - 1;

    this.setState({
      shyneeSize: {
        width: side,
        height: side
      }
    });
  }

  render() {
    const {navigation, shynees} = this.props;
    if (shynees.data) {
      if (this.state.iAmReadyVisible === false){
        this.props.navigation.setParams({iAmReadyVisible: true});
        this.setState({iAmReadyVisible: true});
      }
      const {shyneeSize} = this.state;
      const shyneeNicknameStyle = shynees.data.length == 1 ? styles.shyneeNickname : {};
      return (
        <ScrollView style={styles.background} onScroll={this._onScroll} scrollEventThrottle={16}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>There are lots of shy people out there. Why not be shy together?</Text>
          </View>
          <View style={styles.shyneesAroundContainer} onLayout={this._onRenderShyneesAround}>
            {shynees.data && shynees.data.map(shynee => <ShyneeItem 
              key={shynee.id}
              shynee={shynee}
              navigation={navigation}
              size={shyneeSize}
              nicknameStyle={shyneeNicknameStyle}
            />)}
          </View>
        </ScrollView>
      );
    }

    if (shynees.error) {
      return null;
    }
    return (<Loader />);
  }
}

ShyneesAroundScreen.propTypes = {
  navigation: PropTypes.object,
  shynees: PropTypes.object
};

export default ShyneesAroundScreen;
