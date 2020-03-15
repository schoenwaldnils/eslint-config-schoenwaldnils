module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-props-no-spreading': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': 2,
  },
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
  },
}
