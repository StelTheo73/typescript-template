import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  globalIgnores(['**/tests/spec/*.spec.ts']),
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'max-statements-per-line': ['warn', { max: 1 }],
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'operator-assignment': ['warn', 'always'],
      'max-depth': ['warn', 2],
      'max-len': [
        'error',
        {
          code: 80,
          tabWidth: 2,
          comments: 100,
        },
      ],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'max-nested-callbacks': ['warn', 1],
      complexity: ['warn', { max: 12 }],
      'no-else-return': 'warn',
      'no-magic-numbers': [
        'warn',
        {
          detectObjects: false,
          enforceConst: true,
          ignore: [-1, 0, 1, 2, 10, 100],
          ignoreArrayIndexes: true,
        },
      ],
    },
  }
);
