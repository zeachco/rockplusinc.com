import axios from 'axios';
import store from '..';
import {CART} from '../types';

export function fetchCart() {
  store.dispatch({
    type: CART.FETCH_START
  });
  return axios.get('/api/cart').then(xhr => {
    store.dispatch({
      type: CART.FETCH_DONE,
      payload: xhr.data
    });
  }).catch(() => {
    store.dispatch({
      type: CART.FETCH_FAIL, // TODO remove mock and use FETCH_FAIL
      payload: [{
            _id: 12345,
            options: {
                Size: 'small'
            },
            qty: 3
        }, {
            _id: 7894,
            options: {},
            qty: 1
        }, {
            _id: 369741,
            options: {
                color: 'red',
                pack: 'x100'
            },
            qty: 2
        }, {
            _id: 369741,
            options: {
                color: 'blue',
                pack: 'x100'
            },
            qty: 1
        }]
    });
  });
}

export function addToCart(id, quantity = 1) {
    axios.post('/api/cart', {
        item_id: id,
        quantity,
        options: {}
    }).then(() => {
        fetchCart();
    });
}

export default { fetchCart, addToCart };
