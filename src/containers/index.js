import React from 'react';

import {Provider} from 'react-redux';

import {createStore} from '../utils/store';
import AppNavigator from './AppNavigator';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
);

export default App;
