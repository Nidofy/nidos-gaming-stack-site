import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "https://games.nido.dev";

export default defineConfig({
  site: siteUrl,

  i18n: {
    locales: ["zh-CN", "en"],
    defaultLocale: "zh-CN",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [mdx(), tailwind({ applyBaseStyles: false })],
  adapter: cloudflare()
});