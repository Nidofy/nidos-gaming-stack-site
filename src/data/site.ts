import { getLocalizedPath } from "@/i18n/routing";
import { t } from "@/i18n/utils";
import { defaultLocale, locales, type Locale } from "@/i18n/locales";
import type { LocalizedString } from "@/types/i18n";

export type { Locale };
export { defaultLocale, locales };

const baseUrl = import.meta.env.PUBLIC_SITE_URL ?? "https://www.nidogamingstack.com";

export const site = {
  name: {
    "zh-CN": "Nido的游戏小栈",
    en: "Nido's Gaming Stack",
  },
  shortName: "Nido",
  baseUrl,
  defaultLocale,
  description: {
    "zh-CN": "Nido 的个人独立游戏小站，收录网页经营游戏《Out of Tokens · 开源万事屋》、DSH 插件《AI 小院》、横版动作 RPG 与《TI 模拟器》。",
    en: "Nido's personal indie game site featuring the browser studio sim Out of Tokens, the AI Village DSH plugin, a side-scrolling action RPG, and TI Simulator.",
  },
  author: "Nido",
  email: "hello@nido.dev",
} satisfies {
  name: LocalizedString;
  shortName: string;
  baseUrl: string;
  defaultLocale: Locale;
  description: LocalizedString;
  author: string;
  email: string;
};

export const navItems = Object.fromEntries(
  locales.map((locale) => [
    locale,
    [
      { label: t(locale, "nav.games"), href: getLocalizedPath(locale, "games") },
      { label: t(locale, "nav.download"), href: getLocalizedPath(locale, "download") },
      { label: t(locale, "nav.devlog"), href: getLocalizedPath(locale, "devlog") },
    ],
  ])
) as Record<Locale, Array<{ label: string; href: string }>>;
