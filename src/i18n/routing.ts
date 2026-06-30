import { defaultLocale, type Locale } from "@/i18n/locales";

export const routePaths = {
  home: { "zh-CN": "/zh-CN", en: "/en" },
  games: { "zh-CN": "/zh-CN/#games", en: "/en/#games" },
  download: { "zh-CN": "/zh-CN/download", en: "/en/download" },
  devlog: { "zh-CN": "/zh-CN/devlog", en: "/en/devlog" },
  wechat: { "zh-CN": "/zh-CN/wechat", en: "/en" },
  privacy: { "zh-CN": "/privacy", en: "/privacy" },
  terms: { "zh-CN": "/terms", en: "/terms" },
  tiSimulator: { "zh-CN": "/zh-CN/games/ti-simulator", en: "/en/games/ti-simulator" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routePaths;

export function getLocalizedPath(locale: Locale, routeKeyOrPath: RouteKey | string): string {
  if (routeKeyOrPath in routePaths) {
    return routePaths[routeKeyOrPath as RouteKey][locale];
  }

  if (routeKeyOrPath.startsWith("/zh-CN")) {
    return locale === "zh-CN" ? routeKeyOrPath : routeKeyOrPath.replace(/^\/zh-CN/, "/en");
  }

  if (routeKeyOrPath.startsWith("/en")) {
    return locale === "en" ? routeKeyOrPath : routeKeyOrPath.replace(/^\/en/, "/zh-CN");
  }

  return locale === defaultLocale ? routeKeyOrPath : routeKeyOrPath;
}
