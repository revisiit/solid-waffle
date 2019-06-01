const path = require('path');

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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]',
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
};
