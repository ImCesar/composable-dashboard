/* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');
const fg = require('fast-glob');

const ROOT = path.join(__dirname, '..');
const isLocalBuild = process.env.LOCAL === 'true';
const envPath = fg.sync(
  [
    `.env${isLocalBuild ? '.local' : ''}`,
    `.env.${process.env.NODE_ENV}${isLocalBuild ? '.local' : ''}`,
    `.env.${process.env.NODE_ENV}`,
    '.env'
  ],
  {
    dot: true,
    cwd: ROOT,
    deep: 0
  }
)[0];
const env = require('dotenv').config({ path: envPath });

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(ROOT, 'dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [path.join(ROOT, 'src')],
        loader: 'eslint-loader',
        options: {
          quiet: isLocalBuild,
          cache: true
        }
      },
      {
        oneOf: [
          {
            test: /^(?!.*\.test\.js$).*\.(js|jsx|mjs|ts|tsx)$/,
            include: [
              path.join(ROOT, 'src')
            ],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: !isProd,
                  extends: path.join(ROOT, 'babel.config.js') 
                }
              }
            ]
          },
          {
            test: [/\.css$/],
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          {
            test: /\.(png|jpe?g|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  fallback: 'file-loader',
                  name: 'images/[name].[hash].[ext]'
                }
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  disable: isLocalBuild,
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false
                  }
                }
              }
            ]
          },
          {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[ext]'
                }
              }
            ]
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  svgoConfig: {
                    plugins: {
                      removeViewBox: false
                    }
                  }
                }
              }
            ]
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.svg$/],
            use: {
              loader: 'url-loader',
              options: {
                limit: 10000,
                fallback: 'file-loader',
                name: 'static/[name].[hash].[ext]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      ...(!env.error &&
        Object.keys(env.parsed).reduce((acc, x) => {
          acc[`process.env.${x}`] = JSON.stringify(env.parsed[x]);
          return acc;
        }, {}))
    })
  ]
};
