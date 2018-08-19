import React from 'react';
import PropTypes from 'prop-types';
import {Animated} from 'react-native';
import { connect } from 'react-redux';

import {f_large} from '../../constants/styles';
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
    headerStyle: {
      backgroundColor: params.headerBackgoundColor,
    },
    headerTitleAllowFontScaling: false,
    headerTitle: <Animated.View style={{marginTop: 40, height: params.headerHeight,}}>
      <Text style={{
        ...f_large,
        color: params.headerColor,
      }}>Shynees Around</Text>
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
  shyneesAround: PropTypes.array
};

const mapStateToProps = state => ({
  shyneesAround: state.shyneesAround.data
});

export default connect(mapStateToProps)(ShyneesAroundScreen);
