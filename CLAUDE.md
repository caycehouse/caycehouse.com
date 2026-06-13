# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website and blog for Cayce House, built with [Astro](https://astro.build) (v6) and Tailwind CSS v4. Statically generated and deployed to GitHub Pages via the `withastro/action` CI workflow on every push to `main`.

## Commands

| Command           | Action                                                            |
| :---------------- | :--------------------------------------------------------------- |
| `npm run dev`     | Dev server at `localhost:4321`                                   |
| `npm run build`   | `astro check` (type-check) then `astro build` to `./dist/`       |
| `npm run preview` | Preview the production build locally                             |
| `npm run astro`   | Astro CLI (e.g. `npm run astro -- --help`, `npm run astro add`)  |

There is no test suite or separate lint step. `npm run build` runs `astro check` first, so type errors fail the build — that is the de facto lint gate, both locally and in CI (`.github/workflows/ci.yml`).

## Architecture

A small static site; everything lives under `src/`.

- `src/pages/` — file-based routes. `index.astro` is the single content page; `404.astro` is the not-found page.
- `src/layouts/Layout.astro` — the page shell (`<html>`/`<body>`, footer, `EasterEgg`). Takes `title`/`description` props and renders a `<slot />`. Pages wrap their content in this.
- `src/components/Head.astro` — `<head>` metadata via `astro-seo`'s `<SEO>`; falls back to default title/description when props are absent.
- `src/components/` — presentational pieces (`Feature`, `SocialNav`, `EasterEgg`).

### Conventions

- **Import aliases** (defined in `tsconfig.json`): `@assets/*`, `@components/*`, `@layouts/*`, `@styles/*`. Prefer these over relative paths.
- **TypeScript** extends `astro/tsconfigs/strictest` — keep code type-clean or the build fails.
- **Styling** is Tailwind v4, wired through the `@tailwindcss/vite` plugin in `astro.config.ts` (not a PostCSS config). `tailwind.config.mjs` exists but is minimal. Global styles are in `src/styles/global.css`.
- **Icons** come from `astro-icon` using the `mdi` set (`<Icon name="mdi:..." />`).
- **Images** use Astro's `<Image>` from `astro:assets` with assets imported from `@assets`.

### Notable detail

`src/components/EasterEgg.astro` listens for the Konami code (`konami-code-js`) and, when triggered, loads a fullscreen YouTube player (`yt-player`) over the page. This is why `astro.config.ts` includes `vite-plugin-node-polyfills` for the `events` module — `yt-player` depends on Node's EventEmitter in the browser.
