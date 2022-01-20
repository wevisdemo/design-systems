#!/usr/bin/env zx
import 'zx/globals';

const OUTPUT_DIR = 'components';
const TARGET_EXTENSION = {
  vue: 'vue',
  react: 'jsx',
  svelte: 'svelte',
};

async function compile(input, target) {
  const filename = input.split('/').reverse()[0].split('.')[0];
  const output = `${OUTPUT_DIR}/${filename}.${TARGET_EXTENSION[target]}`;

  await $`yarn mitosis compile -t=${target} --out=${output} ${input} --force`;
}

const targets = process.argv[process.argv.length - 2]?.split(',');

if (targets?.length === 0) {
  console.error(`Invalid target: ${target}`);
  process.exit(1);
}

const input = process.argv[process.argv.length - 1];

let inputs = await globby(input);

inputs.forEach((input) => {
  targets.forEach((target) => {
    compile(input, target);
  });
});
