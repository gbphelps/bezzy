module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // this is some nonsense for getting airbnb to stop complaining about ts imports
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'no-restricted-properties': 'off',
    // these are replacements for airbnb rules that don't support ts
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    /// //////////////////////////////////////////
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'no-mixed-operators': 'off',
    'no-continue': 'off',
    'no-shadow': 'warn',
    'no-param-reassign': 'warn',
    'no-underscore-dangle': 'off',
  },
  settings: {
    // these are all needed to use ts with airbnb
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
