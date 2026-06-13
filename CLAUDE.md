# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website and blog for Cayce House, built with [Astro](https://astro.build) (v6) and Tailwind CSS v4. Statically generated (output to `./dist/`) and hosted on **Cloudflare Workers** using [static assets](https://developers.cloudflare.com/workers/static-assets/), configured in `wrangler.jsonc`. Deploy with `npx wrangler deploy` (Wrangler runs `npm run build` first, per the `build.command` in `wrangler.jsonc`). There is no GitHub Actions workflow for the site.

## Commands

| Command           | Action                                                            |
| :---------------- | :--------------------------------------------------------------- |
| `npm run dev`     | Dev server at `localhost:4321`                                   |
| `npm run build`   | `astro check` (type-check) then `astro build` to `./dist/`       |
| `npm run preview` | Preview the production build locally (Astro/Vite, port 4321)     |
| `npm run astro`   | Astro CLI (e.g. `npm run astro -- --help`, `npm run astro add`)  |
| `npx wrangler dev`    | Serve `./dist/` through the real Cloudflare Workers runtime (port 8787); the only local way to exercise `_headers`/`_redirects` |
| `npx wrangler deploy` | Build and deploy to Cloudflare Workers                       |

Two local servers, for different purposes: `npm run dev` (Astro/Vite, port 4321) for fast app iteration, and `npx wrangler dev` (Workers runtime, port 8787 — also wired into `.claude/launch.json`) when you need to test how Cloudflare actually serves the site.

There is no test suite or separate lint step. `npm run build` runs `astro check` first, so type errors fail the build — that is the de facto lint gate, and it also gates `npx wrangler deploy` (which runs the build).

## Architecture

A small static site; everything lives under `src/`.

- `src/pages/` — file-based routes. `index.astro` is the single content page; `404.astro` is the not-found page.
- `src/layouts/Layout.astro` — the page shell (`<html>`/`<body>`, footer, `EasterEgg`). Takes `title`/`description` props and renders a `<slot />`. Pages wrap their content in this.
- `src/components/Head.astro` — `<head>` metadata via `astro-seo`'s `<SEO>`; falls back to default title/description when props are absent.
- `src/components/` — presentational pieces (`Feature`, `SocialNav`, `EasterEgg`).

### Conventions

- **Import aliases** (defined in `tsconfig.json`): `@assets/*`, `@components/*`, `@layouts/*`, `@styles/*`. Prefer these over relative paths.
- **TypeScript** extends `astro/tsconfigs/strictest` — keep code type-clean or the build fails.
- **Styling** is Tailwind v4, wired through the `@tailwindcss/vite` plugin in `astro.config.ts` (not a PostCSS config) and imported via `@import "tailwindcss"` in `src/styles/global.css`. There is no `tailwind.config.js` — v4 configures via CSS, and a stray JS config would be inert unless referenced with `@config`.
- **Icons** come from `astro-icon` using the `mdi` set (`<Icon name="mdi:..." />`).
- **Images** use Astro's `<Image>` from `astro:assets` with assets imported from `@assets`.

### Notable details

- **The Konami easter egg.** `src/components/EasterEgg.astro` listens for the Konami code (`konami-code-js`) and, when triggered, loads a fullscreen YouTube player (`yt-player`) over the page. `yt-player` depends on Node's `events` module in the browser, which is why `astro.config.ts` includes `vite-plugin-node-polyfills` for `events`. **That polyfill is scoped to `apply: 'build'`** — applying it in dev injects a CommonJS `events` alias into Astro's ESM SSR module runner and crashes `astro dev` with `module is not defined`. In dev, Vite's dependency pre-bundler supplies `events` to the browser instead, so the easter egg still works without the polyfill plugin running.

- **`public/_headers`.** Copied into `./dist/` at build time; Cloudflare Workers static assets reads it (along with `_redirects`, if present) to set response headers — currently `X-Content-Type-Options: nosniff` and a 1-year immutable cache on the content-hashed `/_astro/*` assets. `astro dev`/`preview` ignore it; test it locally with `npx wrangler dev`. The file format does not support comments. HSTS is configured in the Cloudflare dashboard, not here.
