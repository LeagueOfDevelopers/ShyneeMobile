import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import {createStore} from './src/utils/store';

import App from './src/containers';

const store = createStore();

const AppWrapper = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent('Shynee', () => AppWrapper);
