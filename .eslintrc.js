module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'no-trailing-spaces': 0,
    'react/no-unused-state': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-duplicates': 0,
    'class-methods-use-this': 0,
    'no-useless-return': 0,
    'spaced-comment': 0,
    'react/forbid-prop-types': 0,
    'react-hooks/rules-of-hooks': 'error', // Verifica as regras dos Hooks
    'react-hooks/exhaustive-deps': 'warn', // Verifica as dependências de effects
    'import/prefer-default-export': 0,
  },
};
