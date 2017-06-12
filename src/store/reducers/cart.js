import {CART} from '../types';

const defaultState = {
  cartItems: [],
  isLoading: true,
  totalItems: 0
};

module.exports = (state = defaultState, {type, payload}) => {
  switch (type) {
    case CART.FETCH_START: 
      return {
        ...state,
        isLoading: true
      };
    case CART.FETCH_DONE:
      return {
        ...state,
        isLoading: false,
        cartItems: payload.items,
        totalItems: payload.items.reduce((value, items) => value + items.quantity, 0)
      };
    case CART.FETCH_FAIL: 
      return {
        ...state,
        isLoading: false,
        cartItems: [],
        totalItems: 0
      };
  }
  return state;
};
