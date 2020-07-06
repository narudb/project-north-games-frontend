import { combineReducers, createStore } from 'redux';

import newsReducer from '../reducers/newsReducer';

const rootReducer = combineReducers({
  newsReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
