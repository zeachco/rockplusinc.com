import axios from 'axios';
import store from '..';
import {CART} from '../types';

export function toggleModal() {
    store.dispatch({
        type: CART.TOGGLE
    });
}

export const clearCartMessage = () => {
    store.dispatch({
        type: CART.CLEAR_SENT_MESSAGE
    });
}

export function sendCart(message = '') {
    store.dispatch({
        type: CART.SENDING
    });
    axios.post('/api/cart/send', {message}).then(() => {
        store.dispatch({
            type: CART.SENT
        });
        setTimeout(clearCartMessage, 5000);
    });
}

export const emptyCart = () => {
    store.dispatch({
        type: CART.FETCH_START
    });
    return axios.delete('/api/cart').then(() => {
        store.dispatch({
            type: CART.FETCH_DONE,
            payload: null
        });
    }).catch(err => {
        console.error(err); // eslint-disable-line no-console
        store.dispatch({
            type: CART.FETCH_FAIL,
            payload: null
        });
    });
};

export function fetchCart(hideModalCart = false) {
    store.dispatch({
        type: CART.FETCH_START
    });
    return axios.get('/api/cart').then(xhr => {
        store.dispatch({
            type: CART.FETCH_DONE,
            payload: xhr.data
        });
        if (hideModalCart)
            store.dispatch({
                type: CART.MODAL_HIDE
            });
    }).catch(err => {
        console.error(err); // eslint-disable-line no-console
        store.dispatch({
            type: CART.FETCH_FAIL,
            payload: null
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

export default {
    fetchCart,
    clearCartMessage,
    addToCart
};
