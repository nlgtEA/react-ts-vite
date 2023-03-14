module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
  ],
  env: { 'cypress/globals': true },
};
