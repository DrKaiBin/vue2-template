const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    open: true,
    before: require("./mock/mock-server.js"),
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/mixins.scss";@import "~@/styles/variables.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
};
