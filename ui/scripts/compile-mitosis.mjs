#!/usr/bin/env zx
import 'zx/globals';

const OUTPUT_DIR = 'build/components';

const event = process.argv[process.argv.length - 2];

if (event === 'change' || event === 'add') {
  const input = process.argv[process.argv.length - 1];
  const filename = input.split('/').reverse()[0].split('.')[0];
  const output = `${OUTPUT_DIR}/${filename}.vue`;

  await $`yarn mitosis compile -t=vue --out=${output} ${input} --force`;
}
