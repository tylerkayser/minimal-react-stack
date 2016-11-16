var config = require('./config');
var webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: config.paths.distWeb,
    historyApiFallback: true,
    host: '127.0.0.1',
    hot: true,
    inline: true,
    noInfo: true,
    port: 3000
  },
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    config.paths.srcWeb + '/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: config.paths.src,
        loaders: ['babel?cacheDirectory']
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: config.paths.distWeb,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
