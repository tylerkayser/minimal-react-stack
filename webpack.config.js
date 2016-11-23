var config = require('./config');
var webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: config.paths.dist,
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
    config.paths.src + '/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: config.paths.src,
        loaders: ['babel?cacheDirectory']
      },
      {
        test: /\.scss$/,
        include: config.paths.src,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: config.paths.dist,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  sassLoader: {
    data: '$env: \'' + process.env.NODE_ENV + '\';'
  }
};
