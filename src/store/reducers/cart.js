const cart = (state = [], action) => {
  switch (action.type) {

    case 'ADD_CART':
      console.log('attempting item to cart', action.payload);
      return state.concat(action.payload);

    case 'REMOVE_CART':
      console.log('attempting remove item from cart', action.payloa);
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cart;
