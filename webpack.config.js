const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.t|jsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },

      {
        test: /.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     hmr: true,
          //   },
          // },
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]',
              camelCase: true,
            },
          },
        ],
      },

      {
        test: /.(png|svg|jpg)$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'visiit',
      template: './src/index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 5000,
    hot: true,
  },
};
