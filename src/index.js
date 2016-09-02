import './styles/theme.scss';
import React from 'react';
import {render} from 'react-dom';
import Routes from './core/routes';
import {Provider} from 'react-redux';
// import ga from '../../shared/js/analytics';
// ga.init('UA-60212730-1');

import store from './store';
import {fetchCategories, fetchSession} from './store/actions';

console.log(fetchSession);
fetchSession();
fetchCategories();

render((
  <Provider store={store}>
    <Routes/>
  </Provider>
), document.getElementById('root'));

import axios from 'axios';
window.axios = axios;
