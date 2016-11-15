const cart = (state = [], action) => {
  switch (action.type) {

    case 'ADD_CART':
      let index = state.findIndex((item) => {return item.id === action.payload.id});
      console.groupCollapsed("ADD_CART >> " + action.payload.code);
      if(index >= 0){
        console.log(state[index].quantity + ' >> ' + (state[index].quantity + 1));
        state[index].quantity += 1;
        console.groupEnd();
        return [...state];
      }
      console.log('attempting item to cart', action.payload);
      console.groupEnd();
      return state.concat(Object.assign({}, action.payload, {quantity: 1}));

    case 'REMOVE_CART':
      console.log('Removed item ['+ action.payload +'] from cart');
      return state.filter((item) => item.code !== action.payload);

    case 'UDP_CART_QTY':
      console.groupCollapsed("UDP_CART_QTY >> " + action.payload.code);
      index = state.findIndex((item) => {return item.code === action.payload.code});
      console.log(state[index].quantity + ' >> ' + (action.payload.quantity));
      state[index].quantity = action.payload.quantity;
      console.groupEnd();
      return [...state];

    default:
      return state;
  }
};

export default cart;
