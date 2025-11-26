/* eslint-disable import-x/no-named-as-default-member */

import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import react from '@eslint-react/eslint-plugin'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginImportX from 'eslint-plugin-import-x'
import prettier from 'eslint-plugin-prettier'
import regexPlugin from 'eslint-plugin-regexp'
import security from 'eslint-plugin-security'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const config = tseslint.config(
  {
    ignores: ['.next', 'node_modules', 'eslint.config.mjs'],
  },
  {
    plugins: {
      prettier,
      simpleImportSort,
      unusedImports,
    },
  },
  // Base
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  comments.recommended,
  regexPlugin.configs['flat/recommended'],
  security.configs.recommended,

  // React-related configs
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.plugins('react-compiler'),
  react.configs['recommended-type-checked'],

  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      'unusedImports/no-unused-imports': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],

      '@typescript-eslint/no-misused-promises': 'off',

      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',

      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
        },
      ],

      '@typescript-eslint/consistent-type-exports': [
        'error',
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],

      'react-hooks/exhaustive-deps': 'off',
      'react-compiler/react-compiler': 'off',
      'import-x/no-unresolved': ['error', { ignore: ['geist'] }],
      '@typescript-eslint/restrict-template-expressions': [
        'off',
        {
          allowNumber: true,
        },
      ],
      'prettier/prettier': 'error',
      'simpleImportSort/imports': 'error',
      'simpleImportSort/exports': 'error',
      'no-return-assign': 'error',
      'no-console': 'warn',
      'no-param-reassign': 'error',
      'security/detect-object-injection': 'off',
      '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'off',
      '@eslint-react/no-array-index-key': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/prefer-for-of': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'off',
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
      '@typescript-eslint/no-deprecated': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unnecessary-type-conversion': 'off',
      '@typescript-eslint/require-await': 'off',
    },
  },

  {
    files: ['**/*.cjs', '**/*.cts'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  prettierConfig,
  {
    files: ['eslint.config.mjs'],
    languageOptions: {
      parserOptions: {
        projectService: false,
      },
    },
    rules: {
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-array-delete': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-duplicate-type-constituents': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-implied-eval': 'off',
      '@typescript-eslint/no-meaningless-void-operator': 'off',
    },
  },
)

export default config


