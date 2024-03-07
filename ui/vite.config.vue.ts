import { readdirSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const SOURCE_PATH = '.mitosis/vue';

export default defineConfig({
  plugins: [vue()],
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
