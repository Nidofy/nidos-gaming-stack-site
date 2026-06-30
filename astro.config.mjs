import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://games.nido.dev",
  i18n: {
    locales: ["zh-CN", "en"],
    defaultLocale: "zh-CN",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [mdx(), tailwind({ applyBaseStyles: false })],
});
