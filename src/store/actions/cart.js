import {backend} from '../../utils/api'
import store from '..';
import {CART} from '../types';
import Item from '../../models/Item';

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

export function sendCart(message = '', autoclose = true) {
    store.dispatch({
        type: CART.SENDING
    });
    backend.post('cart/send', {message}).then(() => {
        store.dispatch({
            type: CART.SENT
        });
        if (autoclose) setTimeout(clearCartMessage, 5000);
    });
}

export const emptyCart = () => {
    store.dispatch({
        type: CART.FETCH_START
    });
    return backend.delete('cart').then(() => {
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
    return backend('cart?' + Math.random()).then(data => {
        if (data && data.items) {
            data.items = data.items.map(item => {
                //TODO -> missing "cart line" model?
                item.data = new Item(item.data);
                try {
                    Object.keys(item.options).forEach(key => {
                        //TODO shouldn't that be done in Item ctor?
                        item.data.selectOption(key, item.options[key]);
                    });
                } catch(err) {
                    // silent error
                }
                return item;
            });
        }
        return data;
    }).then(cartData => {
        store.dispatch({
            type: CART.FETCH_DONE,
            payload: cartData
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

export function addToCart(id, quantity = 1, options = {}) {
    store.dispatch({
        type: CART.ADD_ITEM
    });
    backend.post('cart', {
        itemId: id,
        quantity,
        options
    }).then(() => {
        fetchCart();
    }).catch(err => console.error(err)); // eslint-disable-line no-console
}

export default {
    fetchCart,
    clearCartMessage,
    addToCart
};
