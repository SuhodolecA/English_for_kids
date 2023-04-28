const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash].[ext]',
      //         outputPath: 'images',
      //       },
      //     },
      //   ],
      // },
      {
        test: /data\.json$/i,
        loader: 'json5-loader',
        type: 'javascript/auto',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ]
    }),
  ],
};
