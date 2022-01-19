#!/usr/bin/env zx
import 'zx/globals';

const OUTPUT_DIR = 'build/components';

const event = process.argv[process.argv.length - 2];

if (event === 'change' || event === 'add') {
  const input = process.argv[process.argv.length - 1];
  const filename = input.split('/').reverse()[0].split('.')[0];
  const output = `${OUTPUT_DIR}/${filename}.jsx`;

  await $`yarn mitosis compile -t=react --out=${output} ${input} --force`;
}
