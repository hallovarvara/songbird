module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['babel', 'import', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts'],
      },
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'jsx-a11y/media-has-caption': 0,
    'react/state-in-constructor': 0,
  },
};
