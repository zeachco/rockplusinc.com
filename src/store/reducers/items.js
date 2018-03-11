import Item from '../../models/Item';

const defaultState = {
  data: [],
  isLoading: true
};
const itemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_ITEMS_START':
      return {
        isLoading: true,
        data: [...state.data]
      };
    case 'LOAD_ITEMS_DONE':
      return {
        isLoading: false,
        data: (action.payload || []).map(i => new Item(i))
      };
    default:
      return state;
  }
};

export default itemReducer;
