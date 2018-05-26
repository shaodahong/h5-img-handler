const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, '../lib/index.js'),
  output: {
    path: path.join(__dirname, '../bundle'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, '../lib'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../demo/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: __dirname,
    host: 'localhost',
    historyApiFallback: true,
		hot: true,
		open: true,
		inline: true,
		quiet: true,
		disableHostCheck: true,
    port: 3000
  }
}
