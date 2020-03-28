const path = require('path');
const SRC_DIR = path.join(__dirname, 'client/src');
const PUB_DIR = path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/proxy.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUB_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};