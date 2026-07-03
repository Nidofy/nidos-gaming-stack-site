import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/types/i18n";

export type GameGalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type GamePreviewMedia = {
  hero: string;
  og: string;
  alt: string;
  disclaimer: string;
  gallery?: {
    eyebrow: string;
    title: string;
    description: string;
    images: GameGalleryImage[];
  };
};

export const tiSimulatorPreviewMedia = {
  "zh-CN": {
    hero: "/images/hero/ti-simulator-zh.png",
    og: "/images/og/ti-simulator-zh.png",
    alt: "TI15 模拟器娱乐向宣传示意图，展示模拟比赛界面和策略决策面板。",
    disclaimer: "临时娱乐向预览图，非商业展示。",
  },
  en: {
    hero: "/images/hero/ti-simulator-en.png",
    og: "/images/og/ti-simulator-en.png",
    alt: "Entertainment preview illustration for TI15 Simulator showing a simulated match interface and strategy panels.",
    disclaimer: "Temporary non-commercial preview illustration.",
  },
} satisfies Record<Locale, GamePreviewMedia>;

export const gamePreviewMedia: Record<string, Record<Locale, GamePreviewMedia>> = {
  "ti-simulator": tiSimulatorPreviewMedia,
  "untitled-action-rpg": {
    "zh-CN": {
      hero: "/images/untitled-action-rpg/overview.png",
      og: "/images/untitled-action-rpg/overview.png",
      alt: "未定名横版动作 RPG 宣传拼图，展示 Q 版角色、横版探索、锁定战斗、Boss 挑战和装备成长。",
      disclaimer: "原创/生成宣传图，开发中画面以实际版本为准。",
      gallery: {
        eyebrow: "宣传图",
        title: "从城镇、野外到 Boss 战的章节式冒险。",
        description:
          "这些宣传图用于表达当前设计方向：Q 版纸娃娃、自定义外观、横版平台动作、锁屏战斗、城镇 Hub 和轻量成长闭环。",
        images: [
          {
            src: "/images/untitled-action-rpg/overview.png",
            alt: "未定名横版动作 RPG 总览宣传图，展示角色自定义、探索、战斗、成长和胜利奖励。",
            caption: "玩法总览",
          },
          {
            src: "/images/untitled-action-rpg/combat-hero.png",
            alt: "未定名横版动作 RPG 战斗宣传图，展示横版平台、技能连段和大型 Boss 战。",
            caption: "横版动作与 Boss 战",
          },
          {
            src: "/images/untitled-action-rpg/town-life.png",
            alt: "未定名横版动作 RPG 城镇生活宣传图，展示任务、制作、钓鱼、时装和伙伴互动。",
            caption: "城镇 Hub 与生活内容",
          },
        ],
      },
    },
    en: {
      hero: "/images/untitled-action-rpg/overview.png",
      og: "/images/untitled-action-rpg/overview.png",
      alt: "Untitled side-scrolling action RPG promotional collage showing chibi characters, exploration, lock-on combat, boss fights, and gear growth.",
      disclaimer: "Original/generated promotional art. Final visuals may change during development.",
      gallery: {
        eyebrow: "Promotional Art",
        title: "A chapter-based adventure from town life to boss fights.",
        description:
          "These images communicate the current direction: chibi paper-doll avatars, side-scrolling action, lock-on encounters, a town hub, and lightweight progression.",
        images: [
          {
            src: "/images/untitled-action-rpg/overview.png",
            alt: "Untitled side-scrolling action RPG overview art showing character customization, exploration, combat, progression, and rewards.",
            caption: "Gameplay overview",
          },
          {
            src: "/images/untitled-action-rpg/combat-hero.png",
            alt: "Untitled side-scrolling action RPG combat art showing side-scrolling platforms, skill combos, and a large boss battle.",
            caption: "Action and boss fights",
          },
          {
            src: "/images/untitled-action-rpg/town-life.png",
            alt: "Untitled side-scrolling action RPG town-life art showing quests, crafting, fishing, fashion, and character interactions.",
            caption: "Town hub and life skills",
          },
        ],
      },
    },
  },
};

export function getGamePreviewMedia(slug: string, locale: Locale): GamePreviewMedia {
  return gamePreviewMedia[slug]?.[locale] ?? tiSimulatorPreviewMedia[locale];
}

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
