const isDev = process.env.NODE_ENV === 'development'
const { resolve } = require('path')
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader'
      }
    ]
  }
}
