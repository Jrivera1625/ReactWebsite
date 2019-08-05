/*import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import demo from './demoReducer';
export default combineReducers({
  demo,
  routing: routerReducer
});*/

/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import Reducers
import userDataReducer from './reducers';


// Combine all reducers into one root reducer
const appReducer = combineReducers({
    userDataReducer,
  routing: routerReducer
});

const rootReducer =  (state, action) => {

  if (action.type === 'USER_LOGOUT') {
    return Object.assign({}, {intl: state.intl, routing: state.routing});
  }

  return appReducer(state, action)
};

export default rootReducer;