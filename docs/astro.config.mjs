import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [preact(), react(), mdx()],
  site: `https://wevisdemo.github.io`,
  base: process.env.PUBLIC_ASTRO_BASE || '/',
});
