const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/auth/google',
      proxy({
        target: 'http://dogorynogami.ct8.pl:36531',
        changeOrigin: true,
      })
    );

    app.use(
        '/api/**',
        proxy({
          target: 'http://dogorynogami.ct8.pl:36531',
          changeOrigin: true,
        })
      );
  };

/*
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};

module.exports = function(app) {
    app.use(proxy('/auth/google', { 
        target: 'http://localhost:36531',
        changeOrigin: true
    }));
    app.use(proxy('/api/**', { target: 'http://localhost:36531' }));
};

*/