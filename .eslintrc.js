module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  env: {
    commonjs: true
  },
  extends: ['eslint:recommended'],
  plugins: ['enterjs'],
  rules: {
    'enterjs/no-unused-keys': 1
  }
}
