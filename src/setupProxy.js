const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/OpinionSyncBackend',
        createProxyMiddleware({
            target: 'http://localhost/OpinionSyncBackend/',
            changeOrigin: true,
        })
    );
};
