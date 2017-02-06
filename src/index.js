import '!style-loader!css-loader!sass-loader!./styles/theme.scss';
import React from 'react';
import { render } from 'react-dom';
import Routes from './core/routes';
import { Provider } from 'react-redux';

import store from 'store';
// import { App } from 'components';
import {fetchCategories, fetchSession} from 'store/actions';

import 'index.html';

fetchSession().then(startApp).catch(startApp);
fetchCategories();

function startApp() {
  render((
    <Provider store={store}>
      <Routes />
    </Provider>
  ), document.getElementById('root'));
}
