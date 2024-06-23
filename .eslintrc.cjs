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
  env: { browser: true, es2021: true, node: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'prettier',
    'standard-with-typescript',
  ],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules', 'out', 'webview-ui'],
  rules: {
    'prettier/prettier': [STATE.ERROR, { endOfLine: 'auto' }],
    'no-unused-vars': STATE.WARN,
    'no-const-assign': STATE.ERROR,
    'spaced-comment': [STATE.ERROR, CONFIG_STATES.ALWAYS],
    'multiline-ternary': [STATE.OFF, CONFIG_STATES.ALWAYS_MULTILINE],
    '@typescript-eslint/no-misused-promises': STATE.OFF,
    '@typescript-eslint/space-before-function-paren': STATE.OFF,
    '@typescript-eslint/explicit-function-return-type': STATE.WARN,
    '@typescript-eslint/indent': STATE.OFF,
    '@typescript-eslint/prefer-optional-chain': STATE.OFF,
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
    // '@typescript-eslint/no-non-null-assertion': STATE.OFF,
    // '@typescript-eslint/prefer-nullish-coalescing': STATE.OFF,
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
  ignorePatterns: [
    '**/node_modules/**',
    '**/build/**',
    '**/out/**',
    '**/*.vsix/**',
    '.eslintrc.cjs',
    'webview-ui',
  ],
}
