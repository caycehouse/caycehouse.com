// @ts-check
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import type { PluginOption } from 'vite';

// yt-player (loaded by the Konami easter egg in EasterEgg.astro) imports Node's
// `events` module, which needs a browser polyfill in the production bundle.
// Limit the polyfill to `build` only: in dev it injects a CommonJS `events`
// alias into Astro's ESM SSR module runner and crashes `astro dev` with
// "module is not defined". During `astro dev` Vite's dependency pre-bundler
// supplies `events` to the browser on its own, so the easter egg still works.
const eventsPolyfill = {
  ...nodePolyfills({ include: ['events'] }),
  apply: 'build',
} as PluginOption;

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: 'https://caycehouse.com',
  vite: {
    plugins: [eventsPolyfill, tailwindcss()]
  }
});