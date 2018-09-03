import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import {getShyneeInfo, getShyneeSettings} from '../actions/shynee';

import AppNavigator from './AppNavigator';

class App extends React.Component {
  constructor(props) {
    super(props);
    //TODO: Перенести в login
    AsyncStorage.setItem('shyneeId', '1c21dde0-a529-4e4d-949e-be0412ccdf7f');
  }
  async componentDidMount() {
    const {dispatch} = this.props;
    const shyneeId = await AsyncStorage.getItem('shyneeId');
    dispatch(getShyneeInfo(shyneeId));
    dispatch(getShyneeSettings(shyneeId));
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
