var path = require('path')
var webpack = require('webpack')
// compiles the html
var HtmlWebpackPugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[hash]-bundle.js',
    chunkFilename: '[hash]-bundle.js'
  },
  plugins: [
    // specifies which html template to render (index.html)
    new HtmlWebpackPugin({
      template: './src/assets/index.html'
    }),
    // allows library loading (browser will auto reload upon save)
    new webpack.HotModuleReplacementPlugin()
  ],
  // tells webpack where to look for files
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'app-root': path.resolve(__dirname, 'src', 'js'),
      'app-routes': path.resolve(__dirname, 'src', 'js', 'routes'),
      'app-styles': path.resolve(__dirname, 'src', 'js', 'styles')
      // 'app-components': path.resolve(__dirname, 'src', 'js', 'components'),
      // 'app-assets': path.resolve(__dirname, 'src', 'assets')
    }
  },
  // specifies how webpack looks up files and what to run them through
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src', 'js')
        ],
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourcemap&importloaders=1&localidentname=[name]__[local]___[hash:base64:5]!sass-loader'
        ]
      }
    ]
  },
  // for developemnt errors. eval is the worst but fastest; can be changed to source-map
  devtool: 'eval'
}
