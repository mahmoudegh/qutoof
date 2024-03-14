module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-multiple-empty-lines':'off',
    "avoidEscape": 0,

    // "allowTemplateLiterals": true,

    // Disable the rule that requires strings to use single quotes
    'quotes': ['error', 'single', { 'avoidEscape': true }],

    // Disable the rule that requires trailing commas
    'comma-dangle': ['error', 'never'],

    // Disable the rule that disallows unnecessary semicolons
    'no-extra-semi': 'off'


  }
}
