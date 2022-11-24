const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  plugins: [
    new MiniCssExtractPlugin()
  ],
  entry: {
    build: './source/javascripts/index.js'
  },
  output: {
    path: __dirname + '/.tmp/dist',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.(mp3|jpg|png|svg)$/,
        use: ["file-loader"]
      },
    ]
  }
}
