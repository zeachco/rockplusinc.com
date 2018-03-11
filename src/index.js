import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './core/polyfills';

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
