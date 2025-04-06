"use strict";

/* global require, module, process, __dirname */

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Добавляет CSS в DOM, добавляя тег `<стиль>`
            loader: "style-loader",
          },
          {
            // Интерпретирует `@import` и `url()` как `import/require()` и разрешает их
            loader: "css-loader",
          },
          {
            // Загрузчик для webpack для обработки CSS с помощью PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Загружает файл SASS/SCSS и компилирует его в CSS
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
