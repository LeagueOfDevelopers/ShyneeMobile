import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux';

import {createStore} from '../utils/store';
import AppNavigator from './AppNavigator';

const store = createStore();

export default () => (
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
);
