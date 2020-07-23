import { combineReducers, createStore } from 'redux';
import eventsReducer from '../reducers/eventsReducer';
import newsReducer from '../reducers/newsReducer';
import positionReducer from '../reducers/positionReducer';
import oneNewsReducer from '../reducers/oneNewsReducer';
import roundsReducer from '../reducers/roundsReducer';
import userReducer from '../reducers/userReducer';
import groupsReducer from '../reducers/groupsReducer';
import gameReducer from '../reducers/gameReducer';

const rootReducer = combineReducers({
  newsReducer,
  eventsReducer,
  positionReducer,
  oneNewsReducer,
  roundsReducer,
  userReducer,
  groupsReducer,
  gameReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
