import { createStore } from 'redux';
import { combineReducers } from 'redux';

import categories from './reducers/categories';
import session from './reducers/session';
import itemReducer from './reducers/items';
import geometry from './reducers/geometry';
import cart from './reducers/cart';

const reducers = combineReducers({
  categories,
  session,
  itemReducer,
  geometry,
  cart
});

let store = null;

if (process.env.NODE_ENV !== 'production') {
    // Allow Redux devtools
    // https://github.com/zalmoxisus/redux-devtools-extension#usage
    store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
            actionsBlacklist: []
        }) // eslint-disable-line  no-underscore-dangle
    );
} else {
    store = createStore(reducers);
}

module.exports = store;
