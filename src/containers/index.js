import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux';

import {createStore} from '../lib/store';
// import AppWithNavigationState from './AppNavigator';
import App from './App'

const store = createStore();

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
)
