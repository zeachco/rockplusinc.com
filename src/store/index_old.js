import {
  createStore
}
from 'redux';
import ok from 'objectkit';
import {
  mergeDeep
}
from 'core/utils';
import * as actions from './actions';
import * as models from './models';

// console.log(actions.sessionConnect('test', 'pass'));

export const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducer, models.base);

export {
  actions
};

function rootReducer(state = models.base, action) {
  let obj = Object.assign({}, state);
  switch (action.type) {
    case actions.SESSION_ON_DISCONNECT:
      obj.session = null;
      obj.company = models.company;
      obj.categories = models.categories;
      return obj;
    case actions.SESSION_REQUEST_CONNECT:
      obj.blocking.auth = true;
      return obj;
    case actions.SESSION_ON_CONNECT:
      obj.session = action.payload;
      delete obj.blocking.auth;
      setTimeout(() => {
        actions.loadCompany();
        actions.loadCategories();
        actions.loadProducts();
      }, 0);
      return obj;
    case actions.COMPANY_CHANGE_KEY:
      let keyVal = {};
      ok(keyVal).create('company.' + action.payload.key, action.payload.value);
      return mergeDeep(obj, keyVal);
    case actions.COMPANY_ON_LOAD:
      obj.company = action.payload;
      return obj;
    case actions.CATEGORIES_ON_LOAD:
      obj.categories = action.payload || [];
      return obj;
    case actions.PRODUCTS_ON_LOAD:
      obj.products = action.payload || [];
      return obj;
    default:
      return state;
  }
}
