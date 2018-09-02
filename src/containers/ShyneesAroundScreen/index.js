import React from 'react';
import PropTypes from 'prop-types';
import {Animated, View} from 'react-native';
import { connect } from 'react-redux';

import {getShyneesAround} from '../../actions/shynees';
import ShyneesAround from '../../components/ShyneesAround';
import Button from '../../components/Button';
import Text from '../../components/Text';

import styles from './styles';

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
    header: null
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
