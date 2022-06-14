module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 0,
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }
    ],
    'no-undef': 0,
    'no-trailing-spaces': 2,
    'no-unused-vars': 0,
    'quotes': [1, 'single'],
    'array-bracket-spacing': [2, 'never'],
    'default-case': 2,
    'eol-last': 2,
    'comma-spacing': [2, { before: false, after: true }],
    'computed-property-spacing': [2, 'always'],
    'space-infix-ops': 2,
    'space-in-parens': [0, 'always'],
    'newline-after-var': 0,
    'indent': [2, 2],
    'eqeqeq': 0,
    'object-curly-spacing': [2, 'always']
  }
}
