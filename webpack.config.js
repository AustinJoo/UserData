var webpack = require('webpack')
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/userDataComp.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/dist')
  }, 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};