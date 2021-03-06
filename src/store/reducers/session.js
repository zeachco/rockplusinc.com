const defaultState = {
  isAuth: false,
  isLoading: true,
  isVisible: false,
  isFailedLogin: false,
  meta: {}
}

const session = (state = defaultState, action) => {
  switch (action.type) {
    case 'SESSION_FETCH_START':
      return {
        isAuth: false,
        isLoading: true
      };
    case 'SESSION_NOT_LOGGEDIN':
      return {
        isAuth: false,
        isLoading: false
      };
    case 'SESSION_FETCH_DONE':
      return {
        isLoading: false,
        isAuth: !!action.payload,
        ...action.payload};
    case 'SESSION_FETCH_FAIL':
      return {
        isLoading: false,
        isAuth: false
      };
    case 'DISCONNECT_START':
      return {
        isAuth: false,
        isLoading: true,
        ...state};
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
    case 'LOGIN_FAIL':
      return {
        isAuth: false,
        isLoading: false,
        errMsg: 'Cannot log in',
        isFailedLogin: true,
        ...state
      };
    case 'LOGIN_REQUEST_DONE':
      return {
        isAuth: true,
        isLoading: false,
        isFailedLogin: false,
        ...action.payload,
        ...state
      };
    case 'LOGIN_REQUEST_FAIL':
      return {
        isAuth: false,
        isLoading: false,
        isFailedLogin: true,
        ...state
      };
    default:
      return state;
  }
};

export default session;
