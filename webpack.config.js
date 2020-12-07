const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          cacheCompression: false
        }
      }
      /*
       * {
       *   test: /\.ts?$/,
       *   loader: 'ts-loader',
       *   exclude: /node_modules/,
       *   options: {
       *     configFile: path.resolve(process.cwd(), 'tsconfig.json')
       *   }
       * }
       */
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'index.html')
    })
  ]
}
