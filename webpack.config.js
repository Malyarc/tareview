var path = require('path');
var SOURCE_DIRECTORY = path.join(__dirname, '/client/src');
var DISTRIBUTION_DIRECTORY = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SOURCE_DIRECTORY}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DISTRIBUTION_DIRECTORY
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
};