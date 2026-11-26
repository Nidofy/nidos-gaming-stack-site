import { getPortfolioItems } from "@/data/portfolio";
import { site } from "@/data/site";
import { locales } from "@/i18n/locales";

const staticPaths = [
  "/",
  "/zh-CN",
  "/en",
  "/zh-CN/download",
  "/en/download",
  "/zh-CN/devlog",
  "/en/devlog",
  "/zh-CN/guides/ti-simulator",
  "/en/guides/ti-simulator",
  "/zh-CN/wechat",
  "/zh-CN/privacy",
  "/en/privacy",
  "/zh-CN/terms",
  "/en/terms",
  "/privacy",
  "/terms",
];

export function GET() {
  const projectPaths = locales.flatMap((locale) => getPortfolioItems(locale).map((item) => item.detailHref));
  const urls = [...new Set([...staticPaths, ...projectPaths])].map((path) => new URL(path, site.baseUrl).toString());
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join("\n")}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
