// @ts-check
import { defineConfig } from 'astro/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://caycehouse.com',
  vite: {
    plugins: [,
      nodePolyfills() as any,
      tailwindcss()
    ]
  }
});