import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './core/polyfills';

let App = require('./App');
let store = require('./store');

const Hook = () => {
	console.clear(); // eslint-disable-line no-console
	App = require('./App');
	store = require('./store');
	render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.querySelector('#root')
  );
};

Hook();

// HRM functionality
if (module && module.hot) {
  module.hot.accept('./App', Hook);
  module.hot.accept('./store', Hook);
}
