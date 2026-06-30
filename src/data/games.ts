import { locales, type Locale } from "@/i18n/locales";
import { getLocalized } from "@/i18n/utils";
import type { LocalizedString, LocalizedStringArray } from "@/types/i18n";

export type GameStatus = "prototype" | "in-development" | "playtest" | "released" | "archived";

export type GameFeature = {
  title: string;
  description: string;
};

export type LocalizedGameFeature = {
  title: LocalizedString;
  description: LocalizedString;
};

export type GameContent = {
  slug: string;
  locale: Locale;
  title: string;
  shortTitle: string;
  status: GameStatus;
  statusLabel: string;
  tagline: string;
  summary: string;
  description: string;
  platforms: string[];
  tags: string[];
  accent: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    placeholderLabel: string;
    placeholderNote: string;
  };
  features: GameFeature[];
  sections: GameFeature[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  seo: {
    title: string;
    description: string;
  };
  legalNotes: string;
};

export type LocalizedGameContent = {
  slug: string;
  title: LocalizedString;
  shortTitle: LocalizedString;
  status: GameStatus;
  statusLabel: LocalizedString;
  tagline: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  platforms: Array<{
    id: string;
    displayName: LocalizedString;
  }>;
  tags: LocalizedStringArray;
  accent: string;
  hero: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    subtitle: LocalizedString;
    placeholderLabel: LocalizedString;
    placeholderNote: LocalizedString;
  };
  features: LocalizedGameFeature[];
  sections: LocalizedGameFeature[];
  primaryCta: {
    label: LocalizedString;
    href: Record<Locale, string>;
  };
  secondaryCta: {
    label: LocalizedString;
    href: Record<Locale, string>;
  };
  seo: {
    title: LocalizedString;
    description: LocalizedString;
  };
  legalNotes: LocalizedString;
};

export const gameEntries: LocalizedGameContent[] = [
  {
    slug: "ti-simulator",
    title: {
      "zh-CN": "TI 模拟器",
      en: "TI Simulator",
    },
    shortTitle: {
      "zh-CN": "TI 模拟器",
      en: "TI Simulator",
    },
    status: "playtest",
    statusLabel: {
      "zh-CN": "测试版筹备中",
      en: "Playtest build planned",
    },
    tagline: {
      "zh-CN": "一款架空电竞赛事经营与模拟项目。",
      en: "A fictional esports tournament simulation project.",
    },
    summary: {
      "zh-CN": "从赛程、队伍状态到淘汰赛走势，模拟一场属于你的幻想电竞大赛。",
      en: "Simulate tournament momentum, team form, bracket pressure, and a fictional championship run.",
    },
    description: {
      "zh-CN":
        "TI 模拟器是一个仍在开发中的实验性模拟器。它关注赛事节奏、队伍强弱变化、赛程推进和结果叙事，目标是让玩家快速生成一段可信但完全架空的电竞赛事故事。",
      en: "TI Simulator is an experimental simulator in active development. It focuses on tournament rhythm, fictional team strength, bracket progression, and readable outcomes without relying on real-world teams, players, event branding, or official assets.",
    },
    platforms: [
      { id: "windows", displayName: { "zh-CN": "Windows", en: "Windows" } },
      { id: "macos", displayName: { "zh-CN": "macOS", en: "macOS" } },
      { id: "linux", displayName: { "zh-CN": "Linux", en: "Linux" } },
    ],
    tags: {
      "zh-CN": ["模拟器", "赛事叙事", "独立开发", "测试版"],
      en: ["Simulator", "Tournament Story", "Indie", "Playtest"],
    },
    accent: "#1470f5",
    hero: {
      eyebrow: {
        "zh-CN": "当前重点项目",
        en: "Featured project",
      },
      title: {
        "zh-CN": "把一场幻想电竞大赛装进口袋。",
        en: "A fictional esports tournament in a compact simulator.",
      },
      subtitle: {
        "zh-CN": "没有真实授权素材，没有官方赛事包装；只有原创规则、可调参数和不断迭代的模拟体验。",
        en: "Original rules, tunable parameters, and clean tournament storytelling for early testers.",
      },
      placeholderLabel: {
        "zh-CN": "TODO: 替换为原创截图或录屏",
        en: "TODO: Replace with original screenshots or capture",
      },
      placeholderNote: {
        "zh-CN": "首版先保留干净的产品展示占位区，避免使用未经授权的赛事或战队视觉。",
        en: "The first version keeps a neutral product media area until authorized original visuals are ready.",
      },
    },
    features: [
      {
        title: {
          "zh-CN": "架空赛事结构",
          en: "Fictional tournament model",
        },
        description: {
          "zh-CN": "使用原创队伍与描述性规则表达赛事推进，不依赖真实赛事、战队或选手素材。",
          en: "Original teams and descriptive systems keep the project separate from real events or official branding.",
        },
      },
      {
        title: {
          "zh-CN": "快速生成走向",
          en: "Readable outcomes",
        },
        description: {
          "zh-CN": "围绕小组、淘汰、状态波动和结果摘要，帮助玩家快速看到一轮赛事故事。",
          en: "Group flow, bracket pressure, form swings, and summary text help each run feel like a short story.",
        },
      },
      {
        title: {
          "zh-CN": "适合持续扩展",
          en: "Built for iteration",
        },
        description: {
          "zh-CN": "后续可加入更多参数、历史记录、导出结果和社区测试反馈。",
          en: "Future versions can add tuning, history, exportable results, and tester feedback loops.",
        },
      },
    ],
    sections: [
      {
        title: {
          "zh-CN": "从参数开始，而不是从结论开始",
          en: "Start with parameters, not a fixed script",
        },
        description: {
          "zh-CN": "你可以关注队伍强度、波动和赛程压力，让模拟结果自然展开。",
          en: "Team strength, volatility, and schedule pressure shape how each simulated tournament unfolds.",
        },
      },
      {
        title: {
          "zh-CN": "保留叙事空间",
          en: "Keep the story shareable",
        },
        description: {
          "zh-CN": "每次模拟都应能形成简洁的故事线，方便截图、复盘和分享给朋友。",
          en: "Each run should be easy to skim, replay, screenshot, and send to another tester.",
        },
      },
    ],
    primaryCta: {
      label: {
        "zh-CN": "查看测试版下载",
        en: "View playtest downloads",
      },
      href: {
        "zh-CN": "/zh-CN/download",
        en: "/en/download",
      },
    },
    secondaryCta: {
      label: {
        "zh-CN": "微信快速入口",
        en: "Read devlog",
      },
      href: {
        "zh-CN": "/zh-CN/wechat",
        en: "/en/devlog",
      },
    },
    seo: {
      title: {
        "zh-CN": "TI 模拟器 - Nido的游戏小栈",
        en: "TI Simulator - Nido's Gaming Stack",
      },
      description: {
        "zh-CN": "TI 模拟器是一款开发中的架空电竞赛事经营与模拟项目，提供 Windows、macOS、Linux 测试版下载占位。",
        en: "TI Simulator is a fictional esports tournament simulator in development, with placeholder playtest downloads for Windows, macOS, and Linux.",
      },
    },
    legalNotes: {
      "zh-CN": "本站内容为原创或架空表达，未使用真实赛事、战队、选手、Dota、Valve 或 The International 的授权素材作为核心资产。",
      en: "This project uses original and fictional presentation. It is not affiliated with, endorsed by, or built from assets owned by real tournaments, teams, players, Dota, Valve, or The International.",
    },
  },
];

export function localizeGame(game: LocalizedGameContent, locale: Locale): GameContent {
  return {
    slug: game.slug,
    locale,
    title: getLocalized(game.title, locale),
    shortTitle: getLocalized(game.shortTitle, locale),
    status: game.status,
    statusLabel: getLocalized(game.statusLabel, locale),
    tagline: getLocalized(game.tagline, locale),
    summary: getLocalized(game.summary, locale),
    description: getLocalized(game.description, locale),
    platforms: game.platforms.map((platform) => getLocalized(platform.displayName, locale)),
    tags: getLocalized(game.tags, locale),
    accent: game.accent,
    hero: {
      eyebrow: getLocalized(game.hero.eyebrow, locale),
      title: getLocalized(game.hero.title, locale),
      subtitle: getLocalized(game.hero.subtitle, locale),
      placeholderLabel: getLocalized(game.hero.placeholderLabel, locale),
      placeholderNote: getLocalized(game.hero.placeholderNote, locale),
    },
    features: game.features.map((feature) => ({
      title: getLocalized(feature.title, locale),
      description: getLocalized(feature.description, locale),
    })),
    sections: game.sections.map((section) => ({
      title: getLocalized(section.title, locale),
      description: getLocalized(section.description, locale),
    })),
    primaryCta: {
      label: getLocalized(game.primaryCta.label, locale),
      href: game.primaryCta.href[locale],
    },
    secondaryCta: {
      label: getLocalized(game.secondaryCta.label, locale),
      href: game.secondaryCta.href[locale],
    },
    seo: {
      title: getLocalized(game.seo.title, locale),
      description: getLocalized(game.seo.description, locale),
    },
    legalNotes: getLocalized(game.legalNotes, locale),
  };
}

export const games = Object.fromEntries(
  locales.map((locale) => [locale, gameEntries.map((game) => localizeGame(game, locale))])
) as Record<Locale, GameContent[]>;

export function getGame(locale: Locale, slug: string) {
  const entry = gameEntries.find((game) => game.slug === slug);
  return entry ? localizeGame(entry, locale) : undefined;
}
