const wps = require('webpack-production-setup');

module.exports = argConfig => wps(Object.assign({
  host: 'rockplus.com.dev',
  hot: true,
  eslint: false
}, argConfig));
