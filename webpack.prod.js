// 浏览器最小文件配置
const { resolve } = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlwebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: "./example/index.tsx",
  output: {
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|ts)$/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new HtmlwebpackPlugin({
      filename: "index.html",
      inject: "body"
    })
  ]
});
