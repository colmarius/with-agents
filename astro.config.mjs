// @ts-check

import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { generateSW } from 'workbox-build';

const indexPathSuffix = '/index.html';

/** @type {import('workbox-build').ManifestTransform} */
const addDirectoryAliases = async (entries) => ({
  manifest: entries.flatMap((entry) => {
    if (!entry.url.endsWith(indexPathSuffix)) {
      return [entry];
    }

    return [
      entry,
      {
        ...entry,
        url: entry.url.slice(0, -indexPathSuffix.length),
      },
    ];
  }),
  warnings: [],
});

/** @type {import('astro').AstroIntegration} */
const pwa = {
  name: 'with-agents-pwa',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const outputDirectory = fileURLToPath(dir);
      const { count, size, warnings } = await generateSW({
        globDirectory: outputDirectory,
        swDest: fileURLToPath(new URL('sw.js', dir)),
        globPatterns: ['**/*.{html,css,js,json,webmanifest,svg,png,webp}'],
        manifestTransforms: [addDirectoryAliases],
        directoryIndex: 'index.html',
        navigateFallback: null,
        cleanupOutdatedCaches: true,
        skipWaiting: false,
        clientsClaim: true,
        sourcemap: false,
      });

      for (const warning of warnings) {
        console.warn(`[pwa] ${warning}`);
      }

      console.info(
        `[pwa] Precached ${count} files (${Math.round(size / 1024)} KiB).`,
      );
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://with-agents.dev',
  compressHTML: true,
  integrations: [react(), pwa],

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
      cors: {
        origin: /^https:\/\/(?:[^.]+\.)*ampcode\.com$/,
      },
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
