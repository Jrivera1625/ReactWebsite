// import { applyMiddleware, compose, createStore } from 'redux'
// import thunk from 'redux-thunk'

// import promise from 'redux-promise';
// import {createLogger} from 'redux-logger';
// import rootReducer from './reducers/index'

// export default function configureStore(initialState) {
//   const logger = createLogger();
//   const enhancers = [
//     applyMiddleware(thunk, promise, logger),
//   ];

  

//   const store = createStore(
//     rootReducer,
//     initialState,
//     compose(...enhancers)
//   );



//   if (module.hot) {
//     // Enable hot module replacement for reducers
//     module.hot.accept('./reducers/', () => {
//       const nextRootReducer = require('./reducers');
//       store.replaceReducer(nextRootReducer);
//     });
//   }

//   return store;
// }
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {createLogger} from 'redux-logger';
 import promise from 'redux-promise';

export default function configureStore(initialState={}) {
  const logger = createLogger();
  
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk, promise, logger),
 );
}
