import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigLove from 'eslint-config-love'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const STATE = {
  ERROR: 'error',
  OFF: 'off',
  ON: 'on',
  WARN: 'warn',
}

const CONFIG_STATES = {
  NEVER: 'never',
  ALWAYS: 'always',
  ALWAYS_MULTILINE: 'always-multiline',
  IGNORED: 'ignored',
}

export default defineConfig([
  globalIgnores(['dist', 'node_modules', '**/*.{dev,config}.{js,mjs,ts}', '**/vite-env.d.ts']),
  eslintConfigLove,
  eslintPluginPrettier,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginReact.configs.flat.recommended,
    ],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
      import: eslintPluginImport,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'import/no-unresolved': [STATE.ERROR, { caseSensitive: true }],
      'import/enforce-node-protocol-usage': STATE.OFF,
      'no-negated-condition': STATE.OFF,
      'no-param-reassign': [
        STATE.ERROR,
        { props: true, ignorePropertyModificationsFor: ['state'] },
      ],
      'react-refresh/only-export-components': STATE.WARN,
      'no-console': [STATE.ERROR, { allow: ['warn', 'error', 'info'] }],
      '@typescript-eslint/prefer-destructuring': STATE.OFF,
      '@typescript-eslint/explicit-function-return-type': STATE.OFF,
      '@typescript-eslint/prefer-nullish-coalescing': [STATE.WARN, { ignorePrimitives: true }],
      '@typescript-eslint/use-unknown-in-catch-callback-variable': STATE.OFF,
      '@typescript-eslint/no-unused-vars': [
        STATE.ERROR,
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-magic-numbers': STATE.OFF,
      '@typescript-eslint/no-misused-promises': [STATE.ERROR, { checksVoidReturn: false }],
      'promise/avoid-new': STATE.OFF,
      '@typescript-eslint/strict-boolean-expressions': STATE.OFF,
      '@typescript-eslint/class-methods-use-this': STATE.OFF,
      '@typescript-eslint/no-unnecessary-condition': STATE.OFF,
      '@typescript-eslint/no-unsafe-type-assertion': STATE.OFF,
      '@typescript-eslint/no-unsafe-assignment': STATE.OFF,
      'react-hooks/exhaustive-deps': STATE.OFF,
      'react/react-in-jsx-scope': STATE.OFF,
      '@stylistic/lines-around-comment': [STATE.ERROR, { beforeBlockComment: false }],
      complexity: [STATE.WARN, { max: 30 }],
      'import/order': [
        STATE.ERROR,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': CONFIG_STATES.ALWAYS,
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'react/jsx-curly-brace-presence': [
        STATE.ERROR,
        { props: CONFIG_STATES.NEVER, children: CONFIG_STATES.NEVER },
      ],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': STATE.OFF,
    },
  },
])
