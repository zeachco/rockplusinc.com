import axios from 'axios';
import store from '..';
import {
  browserHistory
} from 'react-router';
const {
  dispatch
} = store;

export function fetchSession() {
  store.dispatch({
    type: 'SESSION_FETCH_START',
  });
  return axios.get('/api/profile/me').then(data => {
    store.dispatch({
      type: 'SESSION_FETCH_DONE',
      payload: data
    });
  }).catch(data => {
    store.dispatch({
      type: 'SESSION_FETCH_FAIL'
    });
  });
};

function login(username, password) {
  dispatch({
    type: 'SESSION_FETCHING',
  });
  return axios.post('/api/login', {
    username,
    password
  }).then(data => {
    dispatch({
      type: 'SESSION_FETCHED',
      payload: data
    });
  }).catch(xhr => {
    dispatch({
      type: 'LOGIN_FAIL',
      payload: xhr
    });
  });
}

function logout() {
  dispatch({
    type: 'DISCONNECT_START',
  });
  return axios.delete('/api/logout').then(() => {
    dispatch({
      type: 'DISCONNECT_DONE',
    });
    browserHistory.push('/')
  });
}

function profileUpdate(profile) {
  dispatch({
    type: 'PROFILE_UPDATE_START'
  });
  axios
    .put('/api/profile/me', profile)
    .then(data => {
      dispatch({
        type: 'PROFILE_UPDATE_DONE',
        payload: data
      });
    });
}

module.exports = {
  fetchSession,
  login,
  logout,
  profileUpdate
};
