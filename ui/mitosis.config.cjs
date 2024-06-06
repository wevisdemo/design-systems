/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
  files: 'src/components/**',
  targets: ['vue', 'svelte', 'react'],
  dest: '.mitosis',
  getTargetPath: function (prop) {
    return prop.target;
  },
  options: {
    vue: {
      api: 'composition',
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
