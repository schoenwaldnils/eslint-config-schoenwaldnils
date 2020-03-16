module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/standard',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-props-no-spreading': 0,
    // 'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': 2,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
    '@typescript-eslint/semi': 0,
  },
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
  },
}
