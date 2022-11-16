const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "protocol://host:port",
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        })
    )
};