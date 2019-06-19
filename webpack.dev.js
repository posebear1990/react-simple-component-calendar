// 测试环境配置
const merge = require("webpack-merge");
const HtmlwebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  entry: "./example/index.tsx",
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    host: "0.0.0.0",
    port: 8000
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
