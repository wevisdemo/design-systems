import vue from '@vitejs/plugin-vue';
import { readdirSync } from 'fs';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const SOURCE_PATH = '.mitosis/vue';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.vue.json',
      cleanVueFileName: true,
    }),
  ],
  build: {
    lib: {
      entry: readdirSync(SOURCE_PATH).map((file) => `${SOURCE_PATH}/${file}`),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: 'vue',
    minify: false,
  },
});
