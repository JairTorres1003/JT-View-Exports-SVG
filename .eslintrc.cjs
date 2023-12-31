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
  rules: {
    'prettier/prettier': STATE.ERROR,
    'multiline-ternary': [STATE.OFF, CONFIG_STATES.ALWAYS_MULTILINE],
    '@typescript-eslint/space-before-function-paren': STATE.OFF,
    '@typescript-eslint/comma-dangle': [STATE.ERROR, CONFIG_STATES.ALWAYS_MULTILINE],
    '@typescript-eslint/member-delimiter-style': [
      STATE.ERROR,
      {
        multiline: { delimiter: 'none', requireLast: false },
        singleline: { delimiter: 'semi', requireLast: false },
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': STATE.OFF,
    '@typescript-eslint/indent': STATE.OFF,
    '@typescript-eslint/explicit-function-return-type': STATE.OFF,
    '@typescript-eslint/no-explicit-any': STATE.OFF,
    '@typescript-eslint/no-non-null-assertion': STATE.OFF,
    '@typescript-eslint/prefer-nullish-coalescing': STATE.OFF,
    '@typescript-eslint/comma-dangle': [
      STATE.ERROR,
      {
        arrays: CONFIG_STATES.ALWAYS_MULTILINE,
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
