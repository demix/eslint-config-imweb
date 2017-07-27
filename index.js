module.exports = {
  extends: [
    'eslint-config-airbnb',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'react',
    'babel',
  ],
  rules: {
    curly: [
      2,
      'all',
    ],
    'func-names': 0,
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': [
      2,
      {
        code: 120,
      },
    ],
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
  },
};
