import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Platform from 'Platform';
import {View, ScrollView, Animated} from 'react-native';

import Text from '../Text';
import ShyneeItem from './ShyneeItem';
import Header from './Header';
import Loader from '../Loader';
import {colors} from '../../constants/styles';
import {convertHex} from '../../utils/helpers';
import {shyneeIsReady} from '../../actions/shynee';

import styles from './styles';

class ShyneesAroundScreen extends PureComponent {
  state = {
    scrollY: new Animated.Value(0),
    shyneeSize: {
      width: null,
      height: null
    },
    headerHeight: null,
    headerBackgoundColor: null,
    headerColor: null,
    headerIndent: null
  };

  componentDidMount() {
    this.setState({
      headerHeight: this.state.scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: Platform.OS === 'ios' ? [64, 86] : [44, 66],
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
        outputRange: [50, -20],
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

  onIAmReadyButtonPress = () => {
    const {dispatch, shyneeIsReady: isReady} = this.props;
    dispatch(shyneeIsReady(!isReady));
  }

  render() {
    const {navigation, shynees} = this.props;
    if (shynees.data) {
      const {shyneeSize} = this.state;
      const shyneeNicknameStyle = shynees.data.length == 1 ? styles.shyneeNickname : {};
      return (
        <View>
          <Header animationParams={this.state} onIAmReadyButtonPress={this.onIAmReadyButtonPress} />
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
        </View>
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
  shynees: PropTypes.object,
  shyneeIsReady: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default ShyneesAroundScreen;
