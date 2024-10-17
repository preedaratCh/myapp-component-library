export default {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/essential',
      'prettier',
    ],
    plugins: ['react', '@typescript-eslint', 'vue'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }],
    },
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'], 
        parser: '@typescript-eslint/parser',
      },
      {
        files: ['**/*.js', '**/*.jsx'],
        parser: 'espree',
      },
    ],
  };
  