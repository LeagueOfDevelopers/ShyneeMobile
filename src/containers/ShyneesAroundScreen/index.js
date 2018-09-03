import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {shyneeIsReadySelector} from '../../selectors/shynee';
import {shyneesAroundSelector} from '../../selectors/shynees';
import {getShyneesAround} from '../../actions/shynees';
import ShyneesAround from '../../components/ShyneesAround';

class ShyneesAroundScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getShyneesAround());
  }

  render() {
    const {navigation, shyneesAround, shyneeIsReady, dispatch} = this.props;
    return <ShyneesAround
      navigation={navigation}
      shynees={shyneesAround}
      shyneeIsReady={shyneeIsReady}
      dispatch={dispatch}
    />;
  }
}

ShyneesAroundScreen.navigationOptions = () => {
  return {
    header: null
  };
};

ShyneesAroundScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shyneesAround: PropTypes.object,
  shyneeIsReady: PropTypes.bool
};

const mapStateToProps = state => ({
  shyneesAround: shyneesAroundSelector(state),
  shyneeIsReady: shyneeIsReadySelector(state)
});

export default connect(mapStateToProps)(ShyneesAroundScreen);
