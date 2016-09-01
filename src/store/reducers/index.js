import {
  combineReducers
} from 'redux';

import categoriesReducer from './categories';
import sessionReducer from './session';
import itemReducer from './items';

export default combineReducers({
  categories: categoriesReducer,
  session: sessionReducer,
  items: itemReducer
});
