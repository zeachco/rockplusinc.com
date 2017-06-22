import {CART} from '../types';

const defaultState = {
  cartData: null,
  isLoading: true,
  isVisible: false
};

module.exports = (state = defaultState, {type, payload}) => {
  switch (type) {
    case CART.TOGGLE: return {...state, isVisible: !state.isVisible}
    case CART.FETCH_START: 
      return {
        ...state,
        isLoading: true
      };
    case CART.FETCH_DONE:
      return {
        ...state,
        isLoading: false,
        cartData: payload,
        isVisible: payload === null ? false : payload.items.length > 0,
        totalItems: payload ? payload.items.reduce((qty, item) => qty + item.quantity, 0) : 0
      };
    case CART.ADD_ITEM: 
      return {
        ...state,
        isLoading: true
      }
    case CART.FETCH_FAIL: 
      return {
        ...state,
        cartData: null,
        isLoading: false,
        totalItems: 0
      };
  }
  return state;
};
