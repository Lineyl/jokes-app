// @ts-check

import js from '@eslint/js';
import ts from 'typescript-eslint';
import vue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    languageOptions: { parserOptions: { parser: ts.parser } },
    rules: {
      'no-console': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_',
      }],
      'no-undef': 'off',
      'no-trailing-spaces': 'error',
      'no-multi-spaces': ['error'],
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      'quotes': [2, 'single'],
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { 'beforeColon': false }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'block-spacing': ['error', 'never'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
      'require-await': 'error',
      'space-infix-ops': 'error',
      'no-nested-ternary': 'error',
      'camelcase': 'error',
      'eqeqeq': ['error', 'always'],
      'no-empty': ['error', { 'allowEmptyCatch': false }],
      'comma-dangle': ['error', 'only-multiline'],
      'prefer-const': 'warn',
      'no-unused-vars': 'off',
      'no-unused-expressions': 'warn',
    },
  },
];
