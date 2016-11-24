const cart = (state = [], action) => {
  switch (action.type) {

    case 'ADD_CART':
      let index = state.findIndex((item) => {return item.id === action.payload.id});
      if(index >= 0){
        state[index].quantity += 1;
        return [...state];
      }
      return state.concat(Object.assign({}, action.payload, {quantity: 1}));

    case 'REMOVE_CART':
      return state.filter((item) => item.id !== action.payload);

    case 'UDP_CART_QTY':
      index = state.findIndex((item) => {return item.id === action.payload.id});
      state[index].quantity = action.payload.quantity;
      return [...state];

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};

export default cart;
