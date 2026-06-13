# [caycehouse.com](https://caycehouse.com)

My personal website and blog powered by Astro.

## 🚀 Deployment

Hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) static assets, configured in `wrangler.jsonc`. Deploy with `npx wrangler deploy` (Wrangler runs `npm run build` first). Use `npx wrangler dev` to preview the site through the real Workers runtime locally.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
