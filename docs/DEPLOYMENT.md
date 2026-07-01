# Deployment

This site is a static Astro build for Nido's Gaming Stack. Preview Release 0.1 does not ship real game installers; download entries must stay in Coming Soon state until verified artifacts exist.

## Cloudflare Pages

Recommended settings:

- Platform: Cloudflare Pages
- Root directory: `/`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20` LTS or newer

Optional environment variable:

- `PUBLIC_SITE_URL`: canonical public URL, for example `https://games.nido.dev`.

If `PUBLIC_SITE_URL` is not set, the build falls back to `https://games.nido.dev`.

## Preview Deploys

Use Cloudflare Pages preview deployments for branch or pull request checks. Before sharing a preview URL, verify:

- `/`, `/zh-CN`, and `/en` render.
- `/zh-CN/games/ti-simulator` and `/en/games/ti-simulator` render.
- `/zh-CN/download` and `/en/download` show Coming Soon and no clickable fake download links.
- `/robots.txt` allows crawling and points to `/sitemap.xml`.
- `/sitemap.xml` contains the public localized routes.

## Production Domain

After binding the production domain:

1. Set `PUBLIC_SITE_URL` in Cloudflare Pages.
2. Run `npm run check`.
3. Run `npm run build`.
4. Deploy and inspect page source for canonical, hreflang, Open Graph, and Twitter image URLs.

## Post-Deploy Checks

- Open Chinese and English homepages on a phone viewport.
- Confirm hero images, OG images, and synced TI Simulator screenshots load.
- Confirm there is no horizontal scroll on mobile.
- Confirm `public/releases/latest.json` is reachable.
- Confirm download cards show Pending/Coming Soon while artifacts are unavailable.
- Confirm no `localhost`, `example.com`, `example.cn`, private URLs, or secrets appear in generated HTML.

## Vercel Alternative

Vercel can host this Astro static site with:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

Cloudflare Pages remains the preferred Preview Release target because the project expects a simple static deployment and future globally accessible asset delivery.
