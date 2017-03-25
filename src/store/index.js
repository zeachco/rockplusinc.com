import { createStore } from 'redux';
import { combineReducers } from 'redux';

import categories from './reducers/categories';
import session from './reducers/session';
import itemReducer from './reducers/items';
import geometry from './reducers/geometry';

const store = createStore(combineReducers({
  categories,
  session,
  itemReducer,
  geometry
}));

module.exports = store;
