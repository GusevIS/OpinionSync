const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log("funguj tyvole")
    app.use(
        '/OpinionSyncBackend',
        createProxyMiddleware({
            // target: 'http://localhost/OpinionSyncBackend/', //volat pro lokální test
            target: 'http://localhost/zs2324/01/Jusko/OpinionSyncBackend/', //volat pro školní server test

            changeOrigin: true,
        })
    );
};
