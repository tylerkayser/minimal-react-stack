var resolve = require('path').resolve;

module.exports = {
  paths: {
    dist: resolve(__dirname, './dist'),
    distWeb: resolve(__dirname, './dist') + '/web',
    src: resolve(__dirname, './src'),
    srcWeb: resolve(__dirname, './src') + '/web',
  }
};
