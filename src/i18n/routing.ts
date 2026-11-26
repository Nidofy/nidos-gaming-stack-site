import { defaultLocale, type Locale } from "@/i18n/locales";

export const routePaths = {
  home: { "zh-CN": "/zh-CN", en: "/en" },
  games: { "zh-CN": "/zh-CN/#games", en: "/en/#games" },
  plugins: { "zh-CN": "/zh-CN/#project-ai-village", en: "/en/#project-ai-village" },
  download: { "zh-CN": "/zh-CN/download", en: "/en/download" },
  devlog: { "zh-CN": "/zh-CN/devlog", en: "/en/devlog" },
  wechat: { "zh-CN": "/zh-CN/wechat", en: "/en/games/ti-simulator" },
  privacy: { "zh-CN": "/zh-CN/privacy", en: "/en/privacy" },
  terms: { "zh-CN": "/zh-CN/terms", en: "/en/terms" },
  outOfTokens: { "zh-CN": "/zh-CN/games/out-of-tokens", en: "/en/games/out-of-tokens" },
  aiVillage: { "zh-CN": "/zh-CN/plugins/ai-village", en: "/en/plugins/ai-village" },
  untitledRpg: { "zh-CN": "/zh-CN/games/untitled-action-rpg", en: "/en/games/untitled-action-rpg" },
  tiSimulator: { "zh-CN": "/zh-CN/games/ti-simulator", en: "/en/games/ti-simulator" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routePaths;

export function getLocalizedPath(locale: Locale, routeKeyOrPath: RouteKey | string): string {
  if (routeKeyOrPath in routePaths) {
    return routePaths[routeKeyOrPath as RouteKey][locale];
  }

  if (routeKeyOrPath === "/privacy" || routeKeyOrPath === "/privacy/") {
    return routePaths.privacy[locale];
  }

  if (routeKeyOrPath === "/terms" || routeKeyOrPath === "/terms/") {
    return routePaths.terms[locale];
  }

  if (routeKeyOrPath === "/zh-CN/wechat" || routeKeyOrPath === "/zh-CN/wechat/") {
    return locale === "zh-CN" ? "/zh-CN/wechat" : "/en/games/ti-simulator";
  }

  if (routeKeyOrPath.startsWith("/zh-CN")) {
    return locale === "zh-CN" ? routeKeyOrPath : routeKeyOrPath.replace(/^\/zh-CN/, "/en");
  }

  if (routeKeyOrPath.startsWith("/en")) {
    return locale === "en" ? routeKeyOrPath : routeKeyOrPath.replace(/^\/en/, "/zh-CN");
  }

  return locale === defaultLocale ? "/zh-CN" : "/en";
}
