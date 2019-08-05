import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/rootreducers'

export default function configureStore(initialState) {
  const logger = createLogger();
  const enhancers = [
    applyMiddleware(thunk, promise, logger),
  ];

  

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );



  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept('./reducers/rootreducers', () => {
      const nextRootReducer = require('./reducers/rootreducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
