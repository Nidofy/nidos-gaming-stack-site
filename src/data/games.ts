import type { Locale } from "./site";

export type GameStatus = "prototype" | "in-development" | "playtest" | "released" | "archived";

export type GameFeature = {
  title: string;
  description: string;
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

export const games: Record<Locale, GameContent[]> = {
  "zh-CN": [
    {
      slug: "ti-simulator",
      locale: "zh-CN",
      title: "TI 模拟器",
      shortTitle: "TI 模拟器",
      status: "playtest",
      statusLabel: "测试版筹备中",
      tagline: "一款架空电竞赛事经营与模拟项目。",
      summary: "从赛程、队伍状态到淘汰赛走势，模拟一场属于你的幻想电竞大赛。",
      description:
        "TI 模拟器是一个仍在开发中的实验性模拟器。它关注赛事节奏、队伍强弱变化、赛程推进和结果叙事，目标是让玩家快速生成一段可信但完全架空的电竞赛事故事。",
      platforms: ["Windows", "macOS", "Linux"],
      tags: ["模拟器", "赛事叙事", "独立开发", "测试版"],
      accent: "#1470f5",
      hero: {
        eyebrow: "当前重点项目",
        title: "把一场幻想电竞大赛装进口袋。",
        subtitle: "没有真实授权素材，没有官方赛事包装；只有原创规则、可调参数和不断迭代的模拟体验。",
        placeholderLabel: "TODO: 替换为原创截图或录屏",
        placeholderNote: "首版先保留干净的产品展示占位区，避免使用未经授权的赛事或战队视觉。",
      },
      features: [
        {
          title: "架空赛事结构",
          description: "使用原创队伍与描述性规则表达赛事推进，不依赖真实赛事、战队或选手素材。",
        },
        {
          title: "快速生成走向",
          description: "围绕小组、淘汰、状态波动和结果摘要，帮助玩家快速看到一轮赛事故事。",
        },
        {
          title: "适合持续扩展",
          description: "后续可加入更多参数、历史记录、导出结果和社区测试反馈。",
        },
      ],
      sections: [
        {
          title: "从参数开始，而不是从结论开始",
          description: "你可以关注队伍强度、波动和赛程压力，让模拟结果自然展开。",
        },
        {
          title: "保留叙事空间",
          description: "每次模拟都应能形成简洁的故事线，方便截图、复盘和分享给朋友。",
        },
      ],
      primaryCta: { label: "查看测试版下载", href: "/zh-CN/download" },
      secondaryCta: { label: "微信快速入口", href: "/zh-CN/wechat" },
      seo: {
        title: "TI 模拟器 - Nido的游戏小栈",
        description: "TI 模拟器是一款开发中的架空电竞赛事经营与模拟项目，提供 Windows、macOS、Linux 测试版下载占位。",
      },
      legalNotes:
        "本站内容为原创或架空表达，未使用真实赛事、战队、选手、Dota、Valve 或 The International 的授权素材作为核心资产。",
    },
  ],
  en: [
    {
      slug: "ti-simulator",
      locale: "en",
      title: "TI Simulator",
      shortTitle: "TI Simulator",
      status: "playtest",
      statusLabel: "Playtest build planned",
      tagline: "A fictional esports tournament simulation project.",
      summary: "Simulate tournament momentum, team form, bracket pressure, and a fictional championship run.",
      description:
        "TI Simulator is an experimental simulator in active development. It focuses on tournament rhythm, fictional team strength, bracket progression, and readable outcomes without relying on real-world teams, players, event branding, or official assets.",
      platforms: ["Windows", "macOS", "Linux"],
      tags: ["Simulator", "Tournament Story", "Indie", "Playtest"],
      accent: "#1470f5",
      hero: {
        eyebrow: "Featured project",
        title: "A fictional esports tournament in a compact simulator.",
        subtitle: "Original rules, tunable parameters, and clean tournament storytelling for early testers.",
        placeholderLabel: "TODO: Replace with original screenshots or capture",
        placeholderNote: "The first version keeps a neutral product media area until authorized original visuals are ready.",
      },
      features: [
        {
          title: "Fictional tournament model",
          description: "Original teams and descriptive systems keep the project separate from real events or official branding.",
        },
        {
          title: "Readable outcomes",
          description: "Group flow, bracket pressure, form swings, and summary text help each run feel like a short story.",
        },
        {
          title: "Built for iteration",
          description: "Future versions can add tuning, history, exportable results, and tester feedback loops.",
        },
      ],
      sections: [
        {
          title: "Start with parameters, not a fixed script",
          description: "Team strength, volatility, and schedule pressure shape how each simulated tournament unfolds.",
        },
        {
          title: "Keep the story shareable",
          description: "Each run should be easy to skim, replay, screenshot, and send to another tester.",
        },
      ],
      primaryCta: { label: "View playtest downloads", href: "/en/download" },
      secondaryCta: { label: "Read devlog", href: "/en/devlog" },
      seo: {
        title: "TI Simulator - Nido's Gaming Stack",
        description: "TI Simulator is a fictional esports tournament simulator in development, with placeholder playtest downloads for Windows, macOS, and Linux.",
      },
      legalNotes:
        "This project uses original and fictional presentation. It is not affiliated with, endorsed by, or built from assets owned by real tournaments, teams, players, Dota, Valve, or The International.",
    },
  ],
};

export function getGame(locale: Locale, slug: string) {
  return games[locale].find((game) => game.slug === slug);
}
