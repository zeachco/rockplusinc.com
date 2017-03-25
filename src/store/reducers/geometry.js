const initialState = {
  scrollX: window.scrollX || window.scrollLeft || Infinity,
  scrollY: window.scrollY || window.scrollTop || Infinity,
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
  outerHeight: window.outerHeight,
  outerWidth: window.outerWidth
}

const geometryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WINDOW_SCROLL':
      return {...state, ...action.payload};
    case 'WINDOW_RESIZE':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

module.exports = geometryReducer;
