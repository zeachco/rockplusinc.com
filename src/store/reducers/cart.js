import {CART} from '../types';

const defaultState = {
  cartData: null,
  isLoading: true,
  isVisible: false,
  messageVisible: false,
  messageValue: ''
};

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case CART.TOGGLE: return {...state, isVisible: !state.isVisible};

    case CART.MODAL_HIDE: return {...state, isVisible: false};

    case CART.FETCH_START:
      return {
        ...state,
        isLoading: true
      };
    case CART.FETCH_DONE:
      return {
        ...state,
        isLoading: false,
        cartData: payload,
        isVisible: payload === null ? false : payload.items.length > 0,
        totalItems: payload ? payload.items.reduce((qty, item) => qty + item.quantity, 0) : 0
      };
    case CART.ADD_ITEM:
      return {
        ...state,
        isLoading: true
      }
    case CART.SENDING:
      return {
        ...state,
        isLoading: true
      }
    case CART.SENT:
      return {
        ...state,
        cartData: null,
        isLoading: false,
        isVisible: false,
        messageVisible: true,
        messageValue: 'Order was sent from Cart',
        totalItems: 0
      }
    case CART.CLEAR_SENT_MESSAGE :
      return {
        ...state,
        messageVisible: false
      }
    case CART.FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isVisible: false,
        messageVisible: true,
        messageValue: 'Could not send order due to a server issue, please try again or contact seller'
      };
    default:
      return state;
  }
};
