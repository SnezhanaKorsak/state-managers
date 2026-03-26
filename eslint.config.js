import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // ================= SORT IMPORTS =================
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. React (всегда первым) и внешние библиотеки (node_modules)
            ['^react$', '^react-dom$', '^@?\\w'],

            // 2. Внутренние алиасы (если появятся типа @/)
            ['^@/'],

            // 3. Относительные импорты (./ или ../), кроме папок types
            ['^(?!.*types).*\\.'],

            // 4. Любые импорты, содержащие /types — всегда внизу
            ['.*/types.*'],

            // 5. Стили (ВСЕГДА в самом низу)
            ['^.+\\.module\\.css$', '^.+\\.css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-duplicates': 'error',

      // ================= TYPESCRIPT =================
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'no-unused-vars': 'off',

      // ================= REACT =================
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-boolean-value': ['warn', 'always'],
      'react/jsx-key': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ================= GENERAL =================
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-console': 'warn',
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: { project: './tsconfig.json' } },
    },
  },
];
