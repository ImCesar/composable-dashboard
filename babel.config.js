module.exports = {
  ignore: [/\bcore-js\b/],
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
      {
        debug: process.env.JEST !== 'true',
        modules:
          process.env.JEST === 'true' && process.env.NODE_ENV === 'test'
            ? 'commonjs'
            : 'false',
        shippedProposals: true,
        corejs: 2,
        exclude: ['transform-typeof-symbol']
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
    [
      'babel-plugin-styled-components',
      {
        displayName: true
      }
    ],
    ['babel-plugin-transform-react-styled-components-qa'],
    ['babel-plugin-transform-react-qa-attributes']
  ],
  env: {
    test: {
      plugins: [
        ['babel-plugin-transform-react-remove-prop-types']
      ]
    },
    uat: {
      plugins: [
        ['babel-plugin-transform-react-remove-prop-types']
      ]
    },
    production: {
      plugins: [
        ['babel-plugin-transform-react-remove-prop-types', { removeImport: true }]
      ]
    }
  }
};
