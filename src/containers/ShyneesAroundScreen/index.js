import React from 'react';
import PropTypes from 'prop-types';
import Platform from 'Platform';
import {Animated, View} from 'react-native';
import { connect } from 'react-redux';

import {fonts, colors} from '../../constants/styles';
import {getShyneesAround} from '../../actions/shynees';
import ShyneesAround from '../../components/ShyneesAround';
import Button from '../../components/Button';
import Text from '../../components/Text';

class ShyneesAroundScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getShyneesAround());
  }

  render() {
    const {navigation, shyneesAround} = this.props;
    return <ShyneesAround navigation={navigation} shynees={shyneesAround} />;
  }
}

ShyneesAroundScreen.navigationOptions = ({navigation}) => {
  const { params = {} } = navigation.state;
  return {
    title: 'Shynees Around',
    headerTitleAllowFontScaling: false,
    header: <Animated.View style={{height: params.headerHeight}}>
      <View style={{flex:1, backgroundColor: colors.white}}>
        <Animated.View style={{
          flex: 1,
          backgroundColor: params.headerBackgoundColor,
          paddingTop: Platform.OS === 'ios' ? 32 : 12,
        }}>
          <Text style={{
            ...fonts.weight.medium,
            fontSize: fonts.size.medium,
            color: params.headerColor,
            textAlign: 'center'
          }}>Shynees Around</Text>
        </Animated.View>
      </View>
      <Button
        title="I am ready"
        style={{position: 'absolute', top: params.headerIndent, width: '100%'}}
        type='colorful'
      />
    </Animated.View>
  };
};

ShyneesAroundScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shyneesAround: PropTypes.object
};

const mapStateToProps = state => ({
  shyneesAround: state.shyneesAround
});

export default connect(mapStateToProps)(ShyneesAroundScreen);
