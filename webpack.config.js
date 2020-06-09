// webpack.config.js
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // TODO 自动化导输出多个轮子，并且自动化更新 index Demo 索引
    // "easy-tree": "./packages/index.js",
    // "easy-tree.min": "./packages/index.js",
    // "list-view": "./packages/index.js",
    // "list-view.min": "./packages/index.js",
  entry: {
    "easy-wheels": "./packages/index.js",
    "easy-wheels.min": "./packages/index.js",
  },
  output: {
    // 输出文件
    path: path.join(__dirname, "./"),
    library: "easyWheels", // 指定库的全局变量
    libraryExport: "default", // 入口文件，必须为 export default ...
    libraryTarget: "umd",
    filename: "[name].js", // 输出文件名，多文件导出时[name] 为占位符
  },
  mode: "development", // 将 mode 设置为 none 不进行任何优化，不设置则在构建时默认是 production
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
  // 引入loader 和 plugin 处理相关文件
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 执行顺序，从右到左
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    port: 5000,
    host: "127.0.0.1",
    hot: true,
    open: true,
    // contentBase: path.join(__dirname, 'public'), //
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'packages'),
    },
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'examples/index.html',
  //     filename: 'index.html',
  //     inject: true, // 注入到 index.html
  //   }),
  // ],
};
