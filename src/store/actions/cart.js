import axios from 'axios';
import store from '..';

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

export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
};

export const sendCart = data => {
  store.dispatch({
    type: 'CART_SUBMIT',
    payload: data
  });
  axios.post('/api/cart/rpi', data).then(xhr => {
    store.dispatch({
      type: 'CART_SUBMITED',
      payload: xhr.response
    });
  }).catch(err => {
    store.dispatch({
      type: 'CART_SUBMIT_ERROR',
      payload: err
    });
  });
};