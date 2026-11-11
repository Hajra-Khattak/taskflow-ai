import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // Context files export a Provider plus its hook, which is the intended pattern
      'react-refresh/only-export-components': [
        'error',
        { allowExportNames: ['useAuth', 'useTheme', 'useTimeZone'] },
      ],
    },
  },
  {
    // Entry file is never hot reloaded, it only wires up the app
    files: ['src/main.jsx'],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
  {
    // Serverless functions and tests run in Node, not the browser
    files: ['api/**/*.js', '**/*.test.js'],
    languageOptions: { globals: globals.node },
  },
])
