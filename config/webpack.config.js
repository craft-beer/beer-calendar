const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: path.resolve(__dirname, '../src/main.js'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.bundle.js'
  },

  // resolve: {
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js'
  //   }
  // },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: /src/
      },
    ]
  },

  devServer: {
    contentBase: [path.resolve(__dirname, '../dist'), path.resolve(__dirname, '../data')],
    historyApiFallback: true,
    noInfo: true
  }
};
