import {combineReducers} from 'redux';

import categoriesReducer from './categories';
import sessionReducer from './session';
import itemReducer from './items';
import cartReducer from './cart';

export default combineReducers({
  categories: categoriesReducer,
  session: sessionReducer,
  itemReducer,
  cart: cartReducer
});
