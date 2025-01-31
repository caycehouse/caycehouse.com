// @ts-check
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: 'https://caycehouse.com',
  vite: {
    plugins: [,
      nodePolyfills({
        include: ['events']
      }) as any,
      tailwindcss()
    ]
  }
});