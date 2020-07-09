import { combineReducers, createStore } from 'redux';

import oneNewsReducer from '../reducers/oneNewsReducer';

const rootReducer = combineReducers({
  oneNewsReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
