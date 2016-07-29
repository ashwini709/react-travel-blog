var webpack = require('webpack');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  entry: [
    './index.html',
    './index.jsx'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/react-travel-blog/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file'
      },
      {
        test: /\.(html|png|txt)$/,
        loader: 'file?name=[name].[ext]'
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=/assets/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'exports?self.fetch!whatwg-fetch'
    })
  ],
  historyApiFallback: true
}
