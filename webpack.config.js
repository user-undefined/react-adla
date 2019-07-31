const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const srcPath = path.join(__dirname, "src");
const sourceEntry = path.join(srcPath, "index.js");
const stylesEntry = path.join(srcPath, "styles.less");

const sourceBundle = "main.js";

module.exports = {
  entry: ['@babel/polyfill', stylesEntry, sourceEntry],
  mode: "development",
  output: {
    filename: sourceBundle,
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist",
    port: 3003
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      containers: path.resolve(__dirname, "src/containers/"),
      services: path.resolve(__dirname, "src/services/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        include: srcPath,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
