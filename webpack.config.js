const wps = require('webpack-production-setup');

module.exports = argConfig => wps(Object.assign({
  favicon: 'src/favicon.png',
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
