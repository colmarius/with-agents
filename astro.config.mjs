// @ts-check

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://with-agents.dev',
  compressHTML: true,
  integrations: [react()],

  // Configure for GitHub Pages deployment
  output: 'static',

  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@config': '/src/config',
        '@types': '/src/types',
        '@assets': '/src/assets',
        '@layouts': '/src/layouts',
        '@utils': '/src/utils',
      },
      dedupe: ['react', 'react-dom'],
    },

    plugins: [tailwindcss()],
  },
});
