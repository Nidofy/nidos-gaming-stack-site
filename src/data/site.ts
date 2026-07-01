import { getLocalizedPath } from "@/i18n/routing";
import { t } from "@/i18n/utils";
import { defaultLocale, locales, type Locale } from "@/i18n/locales";
import type { LocalizedString } from "@/types/i18n";

export type { Locale };
export { defaultLocale, locales };

const baseUrl = import.meta.env.PUBLIC_SITE_URL ?? "https://games.nido.dev";

export const site = {
  name: {
    "zh-CN": "Nido的游戏小栈",
    en: "Nido's Gaming Stack",
  },
  shortName: "Nido",
  baseUrl,
  defaultLocale,
  description: {
    "zh-CN": "一个长期维护的个人独立游戏发布站，展示模拟器、小游戏和实验性游戏项目。",
    en: "A long-running personal indie game release site for simulators, small games, and experimental projects.",
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
