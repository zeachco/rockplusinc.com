import axios from 'axios';
import store from '..';
import {CART} from '../types';

export function toggleModal() {
    store.dispatch({
        type: CART.TOGGLE
    });
}

export function fetchCart() {
    store.dispatch({
        type: CART.FETCH_START
    });
    return axios.get('/api/cart').then(xhr => {
        store.dispatch({
            type: CART.FETCH_DONE,
            payload: xhr.data
        });
    }).catch(err => {
        console.error(err); // eslint-disable-line no-console
        store.dispatch({
            type: CART.FETCH_FAIL,
            payload: []
        });
    });
}

export function addToCart(id, quantity = 1) {
    axios.post('/api/cart', {
        'item_id': id,
        quantity,
        options: {}
    }).then(() => {
        fetchCart();
    });
}

export default { fetchCart, addToCart };
