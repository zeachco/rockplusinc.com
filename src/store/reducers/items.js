const defaultState = [];
const session = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_ITEMS_DONE':
      return action.payload.data || [];
    default:
      return state;
  }
};

export default session;
