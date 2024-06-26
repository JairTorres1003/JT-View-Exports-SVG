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
  env: { browser: true, es2021: true },
  settings: {
    react: { version: 'detect' },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'prettier',
    'standard-with-typescript',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [STATE.ERROR, { endOfLine: 'auto' }],
    'react/jsx-no-undef': STATE.ERROR,
    'react/prop-types': STATE.OFF,
    'react/react-in-jsx-scope': STATE.OFF,
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
    '**/dist/**',
    'src/vite-env.d.ts',
    'vite.config.ts',
    '.eslintrc.cjs',
  ],
}
