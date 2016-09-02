const defaultState = {
  isAuth: false,
  isLoading: true
}

const session = (state = defaultState, action) => {
  switch (action.type) {
    case 'SESSION_FETCH_START':
      return {
        isAuth: false,
        isLoading: true
      };
    case 'SESSION_FETCH_DONE':
      return Object.assign({
        isLoading: false,
        isAuth: !!action.payload,
      }, action.payload);
    case 'SESSION_FETCH_FAIL':
      return {
        isLoading: false,
        isAuth: false,
      };
    case 'DISCONNECT_START':
      return Object.assign({
        isAuth: false,
        isLoading: true
      }, state);
    case 'DISCONNECT_DONE':
      return {
        isAuth: false,
        isLoading: false
      };
    case 'LOGIN_REQUEST':
      return {
        isAuth: false,
        isLoading: true
      };
    case 'LOGIN_REQUEST_DONE':
      return {
        isAuth: true,
        isLoading: false
      };
    case 'LOGIN_REQUEST_FAIL':
      return {
        isAuth: false,
        isLoading: false
      };
    default:
      return state;
  }
};

export default session;
