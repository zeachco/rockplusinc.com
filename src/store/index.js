import { createStore } from 'redux';
import { combineReducers } from 'redux';

import categories from './reducers/categories';
import session from './reducers/session';
import itemReducer from './reducers/items';
import itemDetails from './reducers/itemDetails'
import geometry from './reducers/geometry';
import cart from './reducers/cart';

const reducers = combineReducers({
  categories,
  session,
  itemReducer,
  itemDetails,
  geometry,
  cart
});

window.store = null;

if (process.env.NODE_ENV !== 'production') {
    // Allow Redux devtools
    // https://github.com/zalmoxisus/redux-devtools-extension#usage
    window.store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
            actionsBlacklist: []
        }) // eslint-disable-line  no-underscore-dangle
    );
} else {
    window.store = createStore(reducers);
}

export default window.store;
