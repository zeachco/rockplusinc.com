import axios from 'axios';
import store from '..';
import {CART} from '../types';

export function toggleModal() {
    store.dispatch({
        type: CART.TOGGLE
    });
}

export function sendCart(message = '') {
    store.dispatch({
        type: CART.FETCH_START
    });
    axios.post('/api/cart/send', {message}).then(xhr => {
        console.log(xhr)
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
    store.dispatch({
        type: CART.ADD_ITEM
    });
    axios.post('/api/cart', {
        itemId: id,
        quantity,
        options: {}
    }).then(xhr => {
        store.dispatch({
            type: CART.FETCH_DONE,
            payload: xhr.data
        });
        fetchCart();
    }).catch(err => console.error(err)); // eslint-disable-line no-console
}

export default { fetchCart, addToCart };
