import {CART} from '../types';

const defaultState = {
  items: [],
  quantities: [],
  isLoading: true
};

module.exports = (state = defaultState, {type, payload}) => {
  switch (type) {
    case CART.ADD_ITEM: 
      console.log(payload);
      // const currentQty = state.ids[payload._id] || 0;
      // state.ids[payload._id] = 
      // state = {...state, items: payload.items, quantit} 
  }
  return state;
};
