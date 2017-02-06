import axios from 'axios';
import store from '..';

export function addToCart(item) {
  store.dispatch({
    type: 'ADD_CART',
    payload: item
  });
}

export const cartIncreaseQuantity = cartId => ({  type: 'CART_ITEM_INCREMENT',  cartId });
export const cartDecreaseQuantity = cartId => ({  type: 'CART_ITEM_INCREMENT',  cartId });
export const cartRemoveItem = cartId =>({  type: 'REMOVE_CART',  cartId });

export function updateItemQuantity(item, quantity) {
  item.increment(quantity);
  return {
    type: 'UDP_CART_QTY',
    payload: item
  };
}

export const clearCart = () => ({
  type: 'CLEAR_CART'
});

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