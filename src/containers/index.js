import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { refreshShynee } from '../actions/auth';

import AppNavigator from './AppNavigator';

class App extends React.Component {
  async componentDidMount() {
    const {dispatch} = this.props;

    dispatch(refreshShynee());
  }
  
  render() {
    return (
      <AppNavigator />
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(App);
