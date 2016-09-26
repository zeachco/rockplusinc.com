import axios from 'axios';
import store from '..';

export function addToCart(itemId) {
  store.dispatch({
    type: 'ADD_CART_START'
  });
  axios.post('/api/cart' + itemId)
    .then(xhr => {
      store.dispatch({
        type: 'ADD_CART_DONE',
        payload: xhr.data
      });
    })
    .catch(xhr => {
      store.dispatch({
        type: 'ADD_CART_FAIL',
        payload: xhr
      });
    });
};

export function removeFromCart(itemId) {
  store.dispatch({
    type: 'REMOVE_CART_START'
  });
  axios.delete('/api/cart' + itemId)
    .then(xhr => {
      store.dispatch({
        type: 'REMOVE_CART_DONE',
        payload: xhr.data // will return count for that object
      });
    })
    .catch(xhr => {
      store.dispatch({
        type: 'REMOVE_CART_FAIL',
        payload: xhr
      });
    });
};
