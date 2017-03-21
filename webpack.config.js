const wps = require('webpack-production-setup');

module.exports = argConfig => wps(Object.assign({
  // host: 'rockplus.com',
  hot: true,
  eslint: true,
  proxy: {
    '/api/': {
      target: {
        host: 'rockplus.com.dev',
        protocol: 'http',
        port: 8080
      },
      changeOrigin: true,
      secure: false
    }
  }
}, argConfig));
