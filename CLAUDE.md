# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website and blog for Cayce House, built with [Astro](https://astro.build) v7 and Tailwind CSS v4. Statically generated (output to `./dist/`) and hosted on **Cloudflare Workers** using [static assets](https://developers.cloudflare.com/workers/static-assets/), configured in `wrangler.jsonc`. Deploy with `npx wrangler deploy` (Wrangler runs `npm run build` first, per the `build.command` in `wrangler.jsonc`). GitHub Actions runs the full build and internal-link check for pull requests and pushes to `main`.

## Commands

| Command           | Action                                                            |
| :---------------- | :--------------------------------------------------------------- |
| `npm run dev`     | Dev server at `localhost:4321`                                   |
| `npm run build`   | `astro check` (type-check) then `astro build` to `./dist/`       |
| `npm run check`   | Build the site and verify generated internal links               |
| `npm run preview` | Preview the production build locally (Astro/Vite, port 4321)     |
| `npm run astro`   | Astro CLI (e.g. `npm run astro -- --help`, `npm run astro add`)  |
| `npx wrangler dev`    | Serve `./dist/` through the real Cloudflare Workers runtime (port 8787); the only local way to exercise `_headers`/`_redirects` |
| `npx wrangler deploy` | Build and deploy to Cloudflare Workers                       |

Two local servers serve different purposes: `npm run dev` (Astro/Vite, port 4321) supports fast app iteration, while `npx wrangler dev` (Workers runtime, port 8787, also wired into `.claude/launch.json`) tests how Cloudflare serves the site.

There is no unit-test suite or separate lint step. `npm run build` runs `astro check` first, so type errors fail the build. `npm run check` also validates internal links in the generated HTML. GitHub Actions and `npx wrangler deploy` both gate changes on the production build.

## Architecture

A small static site; everything lives under `src/`.

- `src/pages/`: file-based routes for the homepage, about page, resume, projects, blog posts, tag archives, RSS feed, and 404 page.
- `src/layouts/Layout.astro`: the page shell (`<html>`/`<body>`, footer, `EasterEgg`). Takes `title`/`description` props and renders a `<slot />`. Pages wrap their content in this.
- `src/components/Head.astro`: native `<head>` metadata with default title and description fallbacks.
- `src/components/`: presentational pieces (`Feature`, `SocialNav`, `EasterEgg`).

### Conventions

- **Import aliases** (defined in `tsconfig.json`): `@assets/*`, `@components/*`, `@layouts/*`, `@styles/*`. Prefer these over relative paths.
- **TypeScript** extends `astro/tsconfigs/strictest`; keep code type-clean or the build fails.
- **Styling** is Tailwind v4, wired through the `@tailwindcss/vite` plugin in `astro.config.ts` (not a PostCSS config) and imported via `@import "tailwindcss"` in `src/styles/global.css`. There is no `tailwind.config.js`; v4 configures via CSS, and a stray JS config would be inert unless referenced with `@config`.
- **Icons** come from `astro-icon` using the `mdi` set (`<Icon name="mdi:..." />`).
- **Images** use Astro's `<Image>` from `astro:assets` with assets imported from `@assets`.

### Notable details

- **The Konami easter egg.** `src/components/EasterEgg.astro` listens for the Konami code (`konami-code-js`) and, when triggered, creates a fullscreen privacy-enhanced YouTube iframe. The overlay can be dismissed with its close button or the Escape key.

- **`public/_headers`.** Copied into `./dist/` at build time; Cloudflare Workers static assets reads it (along with `_redirects`, if present) to set response headers. It currently adds `X-Content-Type-Options: nosniff` and a 1-year immutable cache for content-hashed `/_astro/*` assets. `astro dev`/`preview` ignore it; test it locally with `npx wrangler dev`. The file format does not support comments. HSTS is configured in the Cloudflare dashboard, not here.
