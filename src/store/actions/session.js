import {
  browserHistory
} from 'react-router';

import store from '..';
import {
  fetchCart
} from './cart';
import {
  backend
} from '../../utils/api';

const {
  dispatch
} = store;

const defaultSession = {
  meta: {
    prices: true,
    images: true
  }
}

export function fetchSession() {
  store.dispatch({
    type: 'SESSION_FETCH_START'
  });
  return backend('profile/me')
    .then(data => {
      fetchCart(true);
      store.dispatch({
        type: 'SESSION_FETCH_DONE',
        payload: { ...defaultSession,
          ...data
        }
      });

    })
    .catch(err => {
      store.dispatch({
        type: 'SESSION_FETCH_FAIL',
        payload: err
      });
    })
}

export function toLogin() {
  backend('profile/me')
    .catch(() => {
      dispatch({
        type: 'SESSION_NOT_LOGGEDIN'
      });
      browserHistory.push('/login');
    })
}

export function redirectionToLogin() {
  store.dispatch({
    type: 'SESSION_OR_LOGIN'
  });
  setInterval(toLogin, 60000);
}

export function login(username, password) {
  dispatch({
    type: 'SESSION_FETCH_START'
  });

  const safariCors = () => new Promise((yay) => {
    if (navigator.vendor.indexOf('Apple') === -1) {
      return yay();
    }
    const settings = [
      'width=400',
      'height=400',
      'toolbar=No',
      'location=No',
      'scrollbars=no',
      'status=No',
      'resizable=no',
      'fullscreen=No'
    ];
    const auth = window.open('https://zeachco.com/cors', '_blank', settings.join(', '));
    setTimeout(() => {
      yay();
      auth.close();
    }, 5000);
    auth.addEventListener('load', () => {
      setTimeout(() => {
        yay();
        auth.close();
      }, 500);
    }, false);
  });

  return safariCors().then(() => {
      return backend.post('login', {
        username,
        password
      })
    })
    .then(data => {
      dispatch({
        type: 'SESSION_FETCH_DONE',
        payload: { ...defaultSession,
          ...data
        }
      });
      browserHistory.push('/');
      const hideModal = true;
      fetchCart(hideModal);
      redirectionToLogin();
    }).catch(err => {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: err
      });
    });
}

export function logout() {
  dispatch({
    type: 'DISCONNECT_START'
  });
  return backend.post('logout').then(() => {
    dispatch({
      type: 'DISCONNECT_DONE'
    });
    browserHistory.push('/')
  });
}

export function profileUpdate(profile) {
  dispatch({
    type: 'PROFILE_UPDATE_START'
  });
  backend.put('profile/me', profile)
    .then(data => {
      dispatch({
        type: 'PROFILE_UPDATE_DONE',
        payload: { ...defaultSession,
          ...data
        }
      });
    });
}

export default {
  fetchSession,
  login,
  logout,
  profileUpdate
};
