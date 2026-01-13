import { defineConfig } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import * as airbnbExtendedModule from 'eslint-config-airbnb-extended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
  {
    ...(airbnbExtendedModule.default || []),

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

    plugins: {
      'jsx-a11y': jsxA11y, // Explicitly define the plugin namespace
    },

    rules: {
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
      'jsx-a11y/href-no-hash': 'off',

      'jsx-a11y/anchor-is-valid': [
        'warn',
        {
          aspects: ['invalidHref'],
        },
      ],

      'import/no-unresolved': 0,
      'import/extensions': 0,
    },
  },
]);
