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
        data: action.payload || []
      };
    default:
      return state;
  }
};

export default itemReducer;