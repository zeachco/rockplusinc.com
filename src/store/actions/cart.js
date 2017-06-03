import axios from 'axios';
import store from '..';

function fetchCart() {
  store.dispatch({
    type: 'FETCH_CART_START'
  });
  return axios.get('/api/cart').then(xhr => {
    store.dispatch({
      type: 'FETCH_CART_DONE',
      payload: xhr.data
    });
  });
}

module.exports = { fetchCart };
