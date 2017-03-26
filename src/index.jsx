import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

import App from './App';

import './core/polyfills';

render((
  <AppContainer>
    <App />
  </AppContainer>
), document.getElementById('root'));

if (module && module.hot) {
  module.hot.accept('./App', () => {
    console.clear(); // eslint-disable-line no-console
    const HotApp = require('./App').default; // eslint-disable-line global-require
    render((
      <AppContainer>
        <HotApp />
      </AppContainer>
    ), document.getElementById('root'));
  });
}
