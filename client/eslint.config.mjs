import eslintConfigLove from 'eslint-config-love'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import globals from 'globals'
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import stylistic from '@stylistic/eslint-plugin'
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

export default tseslint.config(
  {
    ignores: ['dist', '**/*.d.ts', '**/*.{dev,config}.{js,mjs,ts}', 'node_modules'],
  },
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
      'promise/avoid-new': STATE.OFF,
      'no-negated-condition': STATE.OFF,
      'no-param-reassign': [
        STATE.ERROR,
        { props: true, ignorePropertyModificationsFor: ['state'] },
      ],
      'react-refresh/only-export-components': STATE.WARN,
      'no-console': [STATE.ERROR, { allow: ['warn', 'error', 'info'] }],
      '@typescript-eslint/prefer-destructuring': STATE.OFF,
      '@typescript-eslint/explicit-function-return-type': STATE.OFF,
      '@typescript-eslint/prefer-nullish-coalescing': STATE.OFF,
      '@typescript-eslint/no-unsafe-call': STATE.OFF,
      '@typescript-eslint/use-unknown-in-catch-callback-variable': STATE.OFF,
      '@typescript-eslint/no-unused-vars': [
        STATE.ERROR,
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-magic-numbers': STATE.OFF,
      '@typescript-eslint/no-misused-promises': [STATE.ERROR, { checksVoidReturn: false }],
      '@typescript-eslint/no-unsafe-argument': STATE.OFF,
      '@typescript-eslint/strict-boolean-expressions': STATE.OFF,
      '@typescript-eslint/no-unsafe-return': STATE.OFF,
      '@typescript-eslint/class-methods-use-this': STATE.OFF,
      '@typescript-eslint/no-unnecessary-condition': STATE.OFF,
      '@typescript-eslint/no-unsafe-type-assertion': STATE.OFF,
      '@typescript-eslint/no-unsafe-member-access': STATE.OFF,
      '@typescript-eslint/no-unnecessary-type-parameters': STATE.OFF,
      '@typescript-eslint/no-unsafe-assignment': STATE.OFF,
      'react-hooks/exhaustive-deps': STATE.OFF,
      'react/react-in-jsx-scope': STATE.OFF,
      'react/prop-types': STATE.OFF,
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
    files: ['**/*.style.tsx'],
    rules: {
      complexity: [STATE.WARN, { max: 75 }],
    },
  }
)
