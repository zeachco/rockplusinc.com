import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './core/polyfills';
import pkg from '../package.json';

console.info(`App version ${pkg.version}`); // eslint-disable-line no-console

let App = require('./App');
let store = require('./store');

const Hook = () => {
	App = require('./App').default;
	store = require('./store').default;
	render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.querySelector('#root')
  );
};

Hook();

// HRM functionality
if (module && module.hot) {
  module.hot.accept('./App', Hook);
  module.hot.accept('./store', Hook);
}
