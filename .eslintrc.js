module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2016
  },
  rules: {
    'eqeqeq': "warn",
    'object-curly-spacing': ["warn", "always"],
    'no-extra-semi': "warn",
    'no-irregular-whitespace' : "warn",
    'camelcase' : "warn",
    'comma-spacing' : "warn",
    'quotes' : ["warn", "single", { "allowTemplateLiterals": true }],
    'no-var' : "warn"
  }
}
