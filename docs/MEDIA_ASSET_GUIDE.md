# Media Asset Guide

This guide defines where preview-release images should live and how to name them. Do not use real tournament, team, player, Valve, Dota, or The International branding as site assets.

## Directories

```text
public/images/og/
public/images/hero/
public/images/wechat/
public/generated/ti-simulator/
```

- `public/images/og/`: manually prepared Open Graph and social preview images.
- `public/images/hero/`: manually prepared hero images for pages or campaigns.
- `public/images/wechat/`: WeChat-specific portrait covers and article landing visuals.
- `public/generated/ti-simulator/`: synced generated simulator assets. Do not change the sync contract.

## Recommended Assets

- Homepage OG image:
  - Path: `public/images/og/homepage-og.png`
  - Suggested size: `1200x630`.
- TI Simulator OG image:
  - Path: `public/images/og/ti-simulator-og.png`
  - Suggested size: `1200x630`.
- WeChat landing page main visual:
  - Path: `public/images/wechat/ti-simulator-preview-cover.png`
  - Suggested size: `900x1200` or `1080x1440`.
- Landscape hero image:
  - Path: `public/images/hero/ti-simulator-hero-wide.png`
  - Suggested size: `1920x1080` or `1600x900`.
- Portrait WeChat cover:
  - Path: `public/images/wechat/ti-simulator-cover-portrait.png`
  - Suggested size: `1080x1440`.

## Naming Rules

- Use lowercase kebab-case.
- Include the game slug and usage:
  - `ti-simulator-og.png`
  - `ti-simulator-hero-wide.png`
  - `ti-simulator-cover-portrait.png`
- Include dimensions only when multiple crops exist:
  - `ti-simulator-og-1200x630.png`
  - `ti-simulator-cover-1080x1440.png`
- Prefer `.png` for generated artwork and UI composites.
- Prefer `.jpg` or `.webp` for photographic or high-detail raster images after checking quality.

## Alt Text Rules

- Describe what is visible and why it matters.
- Keep alt text factual and non-promotional.
- Avoid keyword stuffing.
- Avoid implying affiliation with real tournaments, teams, players, Valve, Dota, or The International.
- Good example:
  - `Abstract TI Simulator match summary screen showing fictional score, MVP, and postgame report panels.`
- Avoid:
  - `Official Dota TI scoreboard with real teams.`

## Preview Release Notes

- Generated simulator screenshots should continue to come from `public/generated/ti-simulator/manifest.json`.
- Use `recommendedAltText` from the generated manifest whenever available.
- Manual OG and WeChat images can be added later without changing the generated-asset sync flow.
- Do not add large placeholder image files just to fill these directories.
