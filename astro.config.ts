// @ts-check
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  site: 'https://caycehouse.com',
  vite: {
    plugins: [,
      nodePolyfills() as any,
      tailwindcss()
    ]
  }
});