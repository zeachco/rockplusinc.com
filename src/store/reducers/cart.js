const isSame = (itemA, itemB) => (itemA && itemB && itemA.getCartId() === itemB.getCartId());
const Item = require('cms-core/src/models/item');

const DefaultState = {
  visible: true, // should be false
  notes: '',
  total: 0,
  items: []
};

const copyItemList = items => items.map(item => {
  const newItem = new Item(item.toJSON());
  Object.assign(newItem, {
    quantity: item.quantity,
    selectedOptions: item.selectedOptions
  });
  return newItem;
})

const cart = (state = DefaultState, {
  type,
  payload
}) => {
  switch (type) {
    case 'ADD_CART':
      {
        const newState = Object.assign({}, state);
        const addition = new Item(payload);
        newState.total = 0;
        let found = false;
        newState.items.forEach(item => {
          if (isSame(item, addition)) {
            item.increment();
            found = true;
          }
          newState.total += item.get('price');
        });
        if (!found) {
          newState.items.push(addition);
          newState.total += addition.getPrice();
        }
        return newState;
      }

    case 'REMOVE_CART':
      const removeAll = new Item(payload);
      return state.filter(item => !isSame(item, removeAll));

    case 'UDP_CART_QTY':
      {
        const newState = Object.assign({}, state);
        const addition = new Item(payload);
        newState.total = 0;
        newState.items.forEach(item => {
          if (isSame(item, addition)) {
            item.increment();
          }
          newState.total += item.getPrice();
        });
        return newState;
      }

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};

export default cart;