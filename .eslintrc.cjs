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

/** @type {import('eslint').Linter.Config}*/
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'standard-with-typescript',
  ],
  rules: {
    'prettier/prettier': [STATE.ERROR, { endOfLine: 'auto' }],
    'spaced-comment': [STATE.ERROR, CONFIG_STATES.ALWAYS],
    'multiline-ternary': [STATE.OFF, CONFIG_STATES.ALWAYS_MULTILINE],
    '@typescript-eslint/space-before-function-paren': STATE.OFF,
    '@typescript-eslint/indent': STATE.OFF,
    'no-console': [STATE.ERROR, { allow: ['warn', 'error', 'info'] }],
    'import/order': [
      STATE.ERROR,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      STATE.ERROR,
      {
        multiline: { delimiter: 'none', requireLast: false },
        singleline: { delimiter: 'semi', requireLast: false },
      },
    ],
    '@typescript-eslint/comma-dangle': [
      STATE.ERROR,
      {
        arrays: CONFIG_STATES.ALWAYS_MULTILINE,
        generics: CONFIG_STATES.ALWAYS_MULTILINE,
        enums: CONFIG_STATES.ALWAYS_MULTILINE,
        objects: CONFIG_STATES.ALWAYS_MULTILINE,
        imports: CONFIG_STATES.ALWAYS_MULTILINE,
        exports: CONFIG_STATES.ALWAYS_MULTILINE,
        functions: CONFIG_STATES.NEVER,
      },
    ],
  },
  ignorePatterns: ['out', 'dist', '**/*.d.ts'],
}
