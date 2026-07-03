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
      "zh-CN": "内部试玩测试",
      en: "Internal playtest",
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
        "TI 模拟器是一个仍在开发中的实验性模拟器。它关注赛事节奏、队伍强弱变化、赛程推进和结果叙事，目标是让玩家快速生成一段可信但完全架空的电竞赛事故事。当前内部试玩包仅提供 Windows x64 便携版。",
      en: "TI Simulator is an experimental simulator in active development. It focuses on tournament rhythm, fictional team strength, bracket progression, and readable outcomes without relying on real-world teams, players, event branding, or official assets. The current internal playtest package is Windows x64 portable only.",
    },
    platforms: [{ id: "windows", displayName: { "zh-CN": "Windows", en: "Windows" } }],
    tags: {
      "zh-CN": ["模拟器", "赛事叙事", "独立开发", "内部试玩"],
      en: ["Simulator", "Tournament Story", "Indie", "Internal Playtest"],
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
        "zh-CN": "原创媒体正在准备中",
        en: "Original media in preparation",
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
        "zh-CN": "下载 Windows 内测包",
        en: "Download Windows playtest",
      },
      href: {
        "zh-CN": "/zh-CN/download",
        en: "/en/download",
      },
    },
    secondaryCta: {
      label: {
        "zh-CN": "查看开发日志",
        en: "Read devlog",
      },
      href: {
        "zh-CN": "/zh-CN/devlog",
        en: "/en/devlog",
      },
    },
    seo: {
      title: {
        "zh-CN": "TI 模拟器 - Nido的游戏小栈",
        en: "TI Simulator - Nido's Gaming Stack",
      },
      description: {
        "zh-CN": "TI 模拟器是一款开发中的架空电竞赛事经营与模拟项目，当前提供 Windows x64 便携版内部试玩包。",
        en: "TI Simulator is a fictional esports tournament simulator in development, currently providing a Windows x64 portable internal playtest build.",
      },
    },
    legalNotes: {
      "zh-CN":
        "本站内容为原创或架空表达，未使用真实赛事、战队、选手、Dota、Valve 或 The International 的授权素材作为核心资产。",
      en: "This project uses original and fictional presentation. It is not affiliated with, endorsed by, or built from assets owned by real tournaments, teams, players, Dota, Valve, or The International.",
    },
  },
  {
    slug: "untitled-action-rpg",
    title: {
      "zh-CN": "未定名横版动作 RPG",
      en: "Untitled Side-Scrolling Action RPG",
    },
    shortTitle: {
      "zh-CN": "未定名 RPG",
      en: "Untitled RPG",
    },
    status: "in-development",
    statusLabel: {
      "zh-CN": "开发中",
      en: "In development",
    },
    tagline: {
      "zh-CN": "一款 Q 版横版动作 RPG 练习作。",
      en: "A chibi side-scrolling action RPG in development.",
    },
    summary: {
      "zh-CN": "自定义纸娃娃角色，在城镇接任务、进入横版关卡战斗，并挑战可学习的多阶段 Boss。",
      en: "Customize a paper-doll hero, take quests from a town hub, fight through side-scrolling stages, and learn readable multi-phase bosses.",
    },
    description: {
      "zh-CN":
        "这是一个正在同步开发的 2D 横版动作 RPG 小项目，正式游戏名称尚未确定。当前方向是单机、章节式推进：玩家先在城镇 Hub 接取任务、调整外观和成长路线，再进入野外关卡完成平台跳跃、锁屏战斗和材料收集，最终通过 Boss 战推进章节。第一阶段会优先验证跑跳手感、攻击反馈、轻量装备成长和外观收集闭环。",
      en: "This is a small 2D side-scrolling action RPG project in active development, with the final game title still undecided. The current direction is a single-player, chapter-based loop: take quests in a town hub, customize appearance and growth, enter field stages for platforming and lock-on combat, collect materials, and progress through readable boss fights. The first phase focuses on movement feel, combat feedback, lightweight gear growth, and cosmetic collection.",
    },
    platforms: [
      { id: "pc", displayName: { "zh-CN": "PC 优先", en: "PC first" } },
      { id: "mobile", displayName: { "zh-CN": "移动端架构预留", en: "Mobile-ready architecture" } },
    ],
    tags: {
      "zh-CN": ["横版动作", "Q 版 RPG", "纸娃娃", "Boss 战", "开发中"],
      en: ["Side-scrolling Action", "Chibi RPG", "Paper Doll", "Boss Fights", "In Development"],
    },
    accent: "#b72f45",
    hero: {
      eyebrow: {
        "zh-CN": "同步开发中的第二个小游戏",
        en: "Second game in active development",
      },
      title: {
        "zh-CN": "轻量成长、爽快战斗和可爱的横版冒险。",
        en: "A compact side-scrolling adventure built around feel, fashion, and boss mastery.",
      },
      subtitle: {
        "zh-CN":
          "目标不是做 MMO 或开放大世界，而是把城镇、野外关卡、锁屏战斗和 Boss 房压缩成清晰可玩的章节闭环。",
        en: "The goal is not an MMO or open world. It is a focused loop of town hub, field stage, lock-on encounters, and readable boss rooms.",
      },
      placeholderLabel: {
        "zh-CN": "未定名横版动作 RPG 宣传图准备中",
        en: "Untitled action RPG promotional media in preparation",
      },
      placeholderNote: {
        "zh-CN": "页面优先使用原创/生成宣传图和后续实机截图，避免复刻任何现有游戏的商标、界面或素材。",
        en: "The page uses original/generated promotional art and future captures, avoiding trademarks, UI, or assets from existing games.",
      },
    },
    features: [
      {
        title: {
          "zh-CN": "手感优先",
          en: "Feel first",
        },
        description: {
          "zh-CN": "跑、跳、落地、转身、攻击和受击会先于内容规模打磨，确保基础操作轻快、可控、容错清晰。",
          en: "Running, jumping, landing, turning, attacking, and hit reactions come before content scale so the core controls feel responsive and readable.",
        },
      },
      {
        title: {
          "zh-CN": "纸娃娃与数值分离",
          en: "Cosmetics separated from stats",
        },
        description: {
          "zh-CN": "装备影响战斗成长，外观只影响视觉，减少为了属性牺牲造型的压力。",
          en: "Gear drives combat progression while outfits stay visual, reducing the pressure to sacrifice style for stats.",
        },
      },
      {
        title: {
          "zh-CN": "小而完整的章节闭环",
          en: "Small but complete chapter loop",
        },
        description: {
          "zh-CN": "第一版以一个城镇、一条野外关卡、一个 Boss 房和少量任务验证完整流程，而不是堆大量地图。",
          en: "The first version validates one town, one field stage, one boss room, and a few quests instead of chasing a large map list.",
        },
      },
    ],
    sections: [
      {
        title: {
          "zh-CN": "城镇不是菜单，而是节奏缓冲区",
          en: "The town is more than a menu",
        },
        description: {
          "zh-CN":
            "玩家在城镇中接任务、强化装备、学习技能、换外观，也能看到 NPC 和生活内容，为战斗之间提供轻松的停顿。",
          en: "The town supports quests, gear upgrades, skill learning, outfit changes, NPCs, and life-skill flavor so combat has a warmer rhythm around it.",
        },
      },
      {
        title: {
          "zh-CN": "Boss 战强调读招与成长",
          en: "Boss fights reward learning",
        },
        description: {
          "zh-CN":
            "Boss 会强调前摇、电报、阶段变化和失败后的学习空间，让挑战来自理解与执行，而不是单纯数值碾压。",
          en: "Bosses emphasize tells, phase changes, readable patterns, and post-failure learning rather than raw stat checks.",
        },
      },
    ],
    primaryCta: {
      label: {
        "zh-CN": "查看宣传页",
        en: "View project page",
      },
      href: {
        "zh-CN": "/zh-CN/games/untitled-action-rpg",
        en: "/en/games/untitled-action-rpg",
      },
    },
    secondaryCta: {
      label: {
        "zh-CN": "返回作品列表",
        en: "Back to games",
      },
      href: {
        "zh-CN": "/zh-CN/#games",
        en: "/en/#games",
      },
    },
    seo: {
      title: {
        "zh-CN": "未定名横版动作 RPG - Nido的游戏小栈",
        en: "Untitled Side-Scrolling Action RPG - Nido's Gaming Stack",
      },
      description: {
        "zh-CN": "这是一款开发中的单机章节式 2D 横版动作 RPG，正式名称尚未确定，主打 Q 版纸娃娃、流畅平台动作、锁屏战斗、轻量成长和 Boss 挑战。",
        en: "This is a single-player chapter-based 2D side-scrolling action RPG in development with a final title still undecided, focused on chibi paper-doll customization, platforming, lock-on combat, lightweight progression, and boss fights.",
      },
    },
    legalNotes: {
      "zh-CN":
        "当前页面使用原创/生成宣传图和自有项目描述；项目不复刻任何既有游戏的商标、官方界面、角色、素材或运营体系。正式游戏名称确定后，本页会同步更新。",
      en: "This page uses original/generated promotional art and project-owned descriptions. It does not copy trademarks, official UI, characters, assets, or live-service structures from existing games. The page will be updated when the final game title is decided.",
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
