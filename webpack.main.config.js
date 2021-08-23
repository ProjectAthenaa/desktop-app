const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json']
  },
  externals: {
    "@sentry/electron": "@sentry/electron",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/main/certs/ca-cert.pem', to: 'ca-cert.pem' },
        { from: 'src/main/certs/client-key.pem', to: 'client-key.pem' },
        { from: 'src/main/certs/client-cert.pem', to: 'client-cert.pem' },
      ]
    }),
  ]
};
