const initialState = {
  scrollX: window.scrollX,
  scrollY: window.scrollY,
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
  outerHeight: window.outerHeight,
  outerWidth: window.outerWidth
}

export const geometryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WINDOW_SCROLL':
      return {
        ...state,
        ...action.payload
      };
    case 'WINDOW_RESIZE':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};