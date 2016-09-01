const defaultState = [];
export const categories = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_DONE':
      return action.payload;
    default:
      return state;
  }
};

export default categories;
