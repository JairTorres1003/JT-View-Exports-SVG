import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintConfigLove from 'eslint-config-love'

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

export default tseslint.config(
  {
    ignores: ['dist', '**/*.d.ts', 'vite.config.ts', 'eslint.config.js'],
  },
  eslintConfigLove,
  eslintConfigPrettier,
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
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [STATE.WARN, { allowConstantExport: true }],
      'no-console': [STATE.ERROR, { allow: ['warn', 'error', 'info'] }],
      '@typescript-eslint/explicit-function-return-type': STATE.OFF,
      '@typescript-eslint/no-unused-vars': [STATE.ERROR, { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-magic-numbers': STATE.OFF,
      '@typescript-eslint/no-unsafe-assignment': STATE.OFF,
      '@typescript-eslint/use-unknown-in-catch-callback-variable': STATE.OFF,
      '@typescript-eslint/strict-boolean-expressions': STATE.OFF,
      '@typescript-eslint/class-methods-use-this': STATE.OFF,
      '@typescript-eslint/no-unnecessary-condition': STATE.OFF,
      '@typescript-eslint/prefer-destructuring': STATE.OFF,
      'react-hooks/exhaustive-deps': STATE.OFF,
      '@typescript-eslint/no-unsafe-member-access': STATE.OFF,
      '@typescript-eslint/no-unsafe-type-assertion': STATE.OFF,
      '@typescript-eslint/no-unsafe-call': STATE.OFF,
      '@typescript-eslint/no-unsafe-argument': STATE.OFF,
      complexity: [STATE.WARN, { max: 30 }],
      'import/order': [
        STATE.ERROR,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': CONFIG_STATES.ALWAYS,
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  }
)
