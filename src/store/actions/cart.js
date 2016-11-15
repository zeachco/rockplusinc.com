// import store from '..';

export const addToCart = (item) => {
  return {
    type: 'ADD_CART',
    payload: item
  }
};

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_CART',
    payload: item
  }
};

export const updateItemQuantity = (item) => {
  return {
    type: 'UDP_CART_QTY',
    payload: item
  }
};
