import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rexsoi.github.io',
  base: '/rexzalavarria',
  vite: {
    css: {
      postcss: './postcss.config.js',
    },
  },
});
