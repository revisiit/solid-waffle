const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const BuildNotifPlugin = require('webpack-build-notifier')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    filename: 'app.[hash].js',
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
        test: /.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            name: '[name].[ext]',
          },
        },
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
    new webpack.HashedModuleIdsPlugin(),
    new BuildNotifPlugin({
      title: 'ReVisiit Webpack Build',
    }),
  ],

  devtool: 'inline-source-map',

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 5000,
    hot: true,
    historyApiFallback: true,
  },
}
