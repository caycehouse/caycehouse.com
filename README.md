# [caycehouse.com](https://caycehouse.com)

My personal website powered by Astro.

## 🚀 Deployment

Hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) static assets, configured in `wrangler.jsonc`. Cloudflare Workers Builds deploys every push to `main` by running `pnpm exec wrangler deploy`, which runs `pnpm run build` first. Use `pnpm exec wrangler dev` to preview the site through the real Workers runtime locally.

## 🧞 Commands

Node is pinned in `.node-version` and pnpm in `.mise/config.toml` (mirrored in `packageManager`); run `mise install` first. All commands are run from the root of the project, from a terminal:

| Command                 | Action                                          |
| :---------------------- | :---------------------------------------------- |
| `pnpm install`          | Installs dependencies                           |
| `pnpm run dev`          | Starts local dev server at `localhost:4321`     |
| `pnpm run build`        | Builds the production site in `./dist/`          |
| `pnpm run check`        | Builds and verifies generated internal links     |
| `pnpm run preview`      | Previews the build locally before deployment     |
| `pnpm exec astro ...`   | Runs CLI commands like `astro add`               |
| `pnpm exec astro --help` | Shows help for the Astro CLI                    |
