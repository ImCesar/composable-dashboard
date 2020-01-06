const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  bail: true,
  devtool: 'source-map',
  mode: 'production',
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../node_modules')
    })
  ],
  entry: ['./src/components/index.js'],
  output: {
    publicPath: '/',
    library: '',
    libraryTarget: 'commonjs2'
  },
  performance: {
    hints: false
  },
  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CopyPlugin(['package.json'])
  ].concat(process.env.ANALYZE === 'true' ? [new BundleAnalyzerPlugin()] : [])
});
