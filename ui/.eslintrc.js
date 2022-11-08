module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@builder.io/mitosis'],
  extends: ['plugin:@builder.io/mitosis/recommended'],
};
