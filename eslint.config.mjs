import globals from 'globals';
import * as js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import * as prettierConfig from 'eslint-config-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ...(js.configs && js.configs.recommended ? js.configs.recommended : {}),

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jasmine,
        ...globals.jquery,
        browser: false,
        window: true,
        document: true,
      },
    },

    plugins: { prettier: prettierPlugin },

    rules: {
      ...(prettierConfig &&
      prettierConfig.configs &&
      prettierConfig.configs.recommended &&
      prettierConfig.configs.recommended.rules
        ? prettierConfig.configs.recommended.rules
        : {}),
      'prettier/prettier': 'error',

      'no-use-before-define': 0,
      'func-names': 0,
      'prefer-arrow-callback': 0,
      'no-var': 0,
      'max-len': 0,
      'guard-for-in': 0,
      'object-shorthand': 0,
      'no-restricted-syntax': 0,
      'prefer-template': 0,
      'import/no-amd': 0,
      'space-before-function-paren': 0,

      'import/no-unresolved': 0,
      'import/extensions': 0,
    },
  },
];
