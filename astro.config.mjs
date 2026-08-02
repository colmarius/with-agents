// @ts-check

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://with-agents.dev',
  compressHTML: true,
  integrations: [react()],

  security: {
    allowedDomains: [
      { hostname: 'ampcode.com', protocol: 'https' },
      { hostname: '**.ampcode.com', protocol: 'https' },
    ],
  },

  // Configure for GitHub Pages deployment
  output: 'static',

  vite: {
    server: {
      allowedHosts: ['.e2b.app', '.onamp.dev'],
    },

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
