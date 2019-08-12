module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: [
    'react',
    'prettier',
  ],
  settings: {
    react: {
      'jsx-boolean-value': 'always',
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-boolean-value': 0,
    'react/no-danger': 0,
    'strict': 0,
    'no-console': [
      'warn',
      { allow: [
        'warn',
        'error'
      ]}
    ],
    'prettier/prettier': 2
  },
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
  }
};
