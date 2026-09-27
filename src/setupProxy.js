// Dev-server only: Paper2Learn's CORS allows the production domain but not localhost,
// so `npm start` proxies /api/v1/blog through the dev server instead.
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v1/blog",
    createProxyMiddleware({
      target: "https://paper2learn.onrender.com",
      changeOrigin: true,
    }),
  );
};
