module.exports = {
  files: 'src/components/**',
  targets: ['vue2', 'svelte', 'react'],
  dest: '.mitosis',
  getTargetPath: function (prop) {
    return prop.target;
  },
  options: {
    vue2: {
      typescript: true,
    },
    svelte: {
      typescript: true,
    },
    react: {
      typescript: true,
    },
  },
};
