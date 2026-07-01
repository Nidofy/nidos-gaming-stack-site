import { site } from "@/data/site";

export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap.xml", site.baseUrl).toString()}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
