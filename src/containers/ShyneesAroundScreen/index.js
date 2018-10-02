import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {shyneeTokenSelector, shyneeIsReadySelector, shyneeIdSelector} from '../../selectors/shynee';
import {shyneesAroundSelector} from '../../selectors/shynees';
import {getShyneesAround} from '../../actions/shynees';
import ShyneesAround from '../../components/ShyneesAround';

class ShyneesAroundScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getShyneesAround());
  }

  render() {
    const {shyneesAround, ...props} = this.props;
    return <ShyneesAround
      shynees={shyneesAround}
      {...props}
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
  shyneeIsReady: PropTypes.bool,
  shyneeId: PropTypes.string,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  token: shyneeTokenSelector(state),
  shyneeId: shyneeIdSelector(state),
  shyneesAround: shyneesAroundSelector(state),
  shyneeIsReady: shyneeIsReadySelector(state),
});

export default connect(mapStateToProps)(ShyneesAroundScreen);
