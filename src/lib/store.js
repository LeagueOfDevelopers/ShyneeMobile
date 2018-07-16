import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

import AppReducer from '../reducers';

const middlewares = [
  promise(),
  thunk,
];

const createAppStore = () => createStore(
  AppReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export {
  createAppStore as createStore,
};
