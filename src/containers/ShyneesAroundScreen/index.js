import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getShyneesAround} from '../../actions/shynees';
import ShyneesAround from '../../components/ShyneesAround';

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
      height: params.headerHeight,
    },
    headerTitleStyle: {
      color: params.headerColor
    }
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
