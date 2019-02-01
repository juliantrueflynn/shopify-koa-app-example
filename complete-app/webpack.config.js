const webpack = require('webpack');
const { NODE_ENV, SHOPIFY_API_CLIENT_KEY } = process.env;

module.exports = {
  mode: NODE_ENV === 'production' ? NODE_ENV : 'development',
  // the place webpack will start when building your bundles
  entry: ['./client/index.js'],
  // sets up rules for any special importers
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  // file extensions for webpack to look at
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.SHOPIFY_API_CLIENT_KEY': JSON.stringify(SHOPIFY_API_CLIENT_KEY),
    })
  ],
  // where webpack will output your finished bundle
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
};
