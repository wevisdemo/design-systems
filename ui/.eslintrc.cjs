module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@builder.io/mitosis'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@builder.io/mitosis/recommended',
  ],
};
