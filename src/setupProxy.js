const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log("funguj tyvole")
    app.use(
        '/OpinionSyncBackend',
        createProxyMiddleware({
            target: 'http://localhost/OpinionSyncBackend/',
            changeOrigin: true,
        })
    );
};
