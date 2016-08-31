import './styles/theme.scss';
// import React from 'react';
// import {render} from 'react-dom';
// import Routes from './core/routes';
// import bridge from 'core/bridge';
// import store from 'core/store';
// import ga from 'core/analytics';
// // ga.init('UA-60212730-1');
//
// bridge.get('/api/v2/profile/me').then(data => {
//   store.set('auth', data);
//   render(React.createElement(Routes), document.getElementById('app'));
// });
console.clear();

import React from 'react';
import {render} from 'react-dom';
import {Routes} from './core/routes';
import {Provider} from 'react-redux';
// import ga from '../../shared/js/analytics';
// ga.init('UA-60212730-1');

import store from './store';
import {session} from './store/actions';

session.fetch();

render((
  <Provider store={store}>
    <Routes/>
  </Provider>
), document.getElementById('app'));
