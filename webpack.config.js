const wps = require('webpack-production-setup');

module.exports = argConfig => wps(Object.assign({
  favicon: 'src/favicon.png',
  es6Modules: [/skylight/, /axios/, /cms\-core/],
  proxy: {
    '/api/': {
      target: {
        host: 'rockplus.com',
        protocol: 'http',
        port: 8080
      },
      changeOrigin: true,
      secure: false
    }
  }
}, argConfig));
