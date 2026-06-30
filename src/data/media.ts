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
