const defaultState = {
  items: {},
  isLoading: true
};

const cart = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CART_START':
      console.log('attempting item to cart', action.payload);
      return state;
    case 'ADD_CART_DONE':
      console.log('added item to cart', action.payload);
      return state;
    case 'ADD_CART_FAIL':
      console.log('failed to add item to cart', action.payload);
      return state;
    default:
      return state;
  }
};

export default cart;
