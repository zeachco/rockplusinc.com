const wps = require('webpack-production-setup');

module.exports = argConfig => wps(Object.assign({
  favicon: 'src/favicon.png',
  es6Modules: [/skylight/, /axios/, /cms\-core/, /auto\-bind/, /bulma/],
  devtool: 'inline-source-map',
  proxy: {
    '/api/': {
      target: 'http://rockplus.com:8080',
      changeOrigin: true
    }
  }
}, argConfig));
