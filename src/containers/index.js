import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getShyneeInfo, getShyneeSettings} from '../actions/shynee';

import AppNavigator from './AppNavigator';

class App extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    //TODO: Заменить на получение данных для текущего пользователя
    dispatch(getShyneeInfo(this.props.fakeShynee));
    dispatch(getShyneeSettings(this.props.fakeShynee));
  }
  
  render() {
    return (
      <AppNavigator />
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  fakeShynee: PropTypes.string
};

const mapStateToProps = () => ({
  fakeShynee: '05bd8e8d-978b-41af-bae9-d29c5ee423ad'
});

export default connect(mapStateToProps)(App);
