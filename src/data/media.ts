import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/types/i18n";

export const tiSimulatorPreviewMedia = {
  "zh-CN": {
    hero: "/images/hero/ti-simulator-zh.png",
    og: "/images/og/ti-simulator-zh.png",
  },
  en: {
    hero: "/images/hero/ti-simulator-en.png",
    og: "/images/og/ti-simulator-en.png",
  },
} satisfies Record<Locale, { hero: string; og: string }>;

export const tiSimulatorShareMedia = {
  "zh-CN": {
    wechatCover: "/images/wechat/ti-simulator-preview-cover.png",
    homepageOg: "/images/og/homepage-og.png",
  },
  en: {
    wechatCover: "/images/wechat/ti-simulator-preview-cover-en.png",
    homepageOg: "/images/og/homepage-og-en.png",
  },
} satisfies Record<Locale, { wechatCover: string; homepageOg: string }>;

function publicAssetExists(path: string) {
  return existsSync(join(process.cwd(), "public", ...path.split("/").filter(Boolean)));
}

export function getTiSimulatorWechatCover(locale: Locale) {
  const localizedCover = tiSimulatorShareMedia[locale].wechatCover;
  if (publicAssetExists(localizedCover)) return localizedCover;

  const defaultCover = tiSimulatorShareMedia["zh-CN"].wechatCover;
  if (publicAssetExists(defaultCover)) return defaultCover;

  return tiSimulatorPreviewMedia[locale].hero;
}

export function getHomepageOgImage(locale: Locale) {
  const localizedOg = tiSimulatorShareMedia[locale].homepageOg;
  if (publicAssetExists(localizedOg)) return localizedOg;

  const defaultOg = tiSimulatorShareMedia["zh-CN"].homepageOg;
  if (publicAssetExists(defaultOg)) return defaultOg;

  return tiSimulatorPreviewMedia[locale].og;
}
