// @ts-check
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [icon(), sitemap()],
  site: 'https://caycehouse.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
