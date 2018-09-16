import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getShyneeInfo, getShyneeSettings} from '../actions/shynee';
import { getUserCredentials } from '../utils/persistence';

import AppNavigator from './AppNavigator';

class App extends React.Component {
  async componentDidMount() {
    const {dispatch} = this.props;
    const credentials = await getUserCredentials();
    if (!credentials) {
      return;
    }

    dispatch(getShyneeInfo(credentials.id));
    dispatch(getShyneeSettings(credentials.id));
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
