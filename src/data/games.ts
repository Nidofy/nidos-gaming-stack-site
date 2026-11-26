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

export type GameFact = {
  label: string;
  value: string;
};

export type LocalizedGameFact = {
  label: LocalizedString;
  value: LocalizedString;
};

export type GameCta = {
  label: string;
  href: string;
  external?: boolean;
};

export type LocalizedGameCta = {
  label: LocalizedString;
  href: Record<Locale, string>;
  external?: boolean;
};

export type GameSourceLink = {
  label: string;
  href: string;
};

export type LocalizedGameSourceLink = {
  label: LocalizedString;
  href: string;
};

export type GameContent = {
  slug: string;
  locale: Locale;
  title: string;
  shortTitle: string;
  status: GameStatus;
  statusLabel: string;
  versionLabel?: string;
  tagline: string;
  summary: string;
  description: string;
  platforms: string[];
  tags: string[];
  accent: string;
  accentRgb: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    placeholderLabel: string;
    placeholderNote: string;
  };
  facts: GameFact[];
  features: GameFeature[];
  sections: GameFeature[];
  faq: GameFeature[];
  primaryCta: GameCta;
  secondaryCta: GameCta;
  detailPrimaryCta: GameCta;
  detailSecondaryCta: GameCta;
  sourceLinks: GameSourceLink[];
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
  versionLabel?: LocalizedString;
  tagline: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  platforms: Array<{
    id: string;
    displayName: LocalizedString;
  }>;
  tags: LocalizedStringArray;
  accent: string;
  accentRgb: string;
  hero: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    subtitle: LocalizedString;
    placeholderLabel: LocalizedString;
    placeholderNote: LocalizedString;
  };
  facts: LocalizedGameFact[];
  features: LocalizedGameFeature[];
  sections: LocalizedGameFeature[];
  faq?: LocalizedGameFeature[];
  primaryCta: LocalizedGameCta;
  secondaryCta: LocalizedGameCta;
  detailPrimaryCta?: LocalizedGameCta;
  detailSecondaryCta?: LocalizedGameCta;
  sourceLinks?: LocalizedGameSourceLink[];
  seo: {
    title: LocalizedString;
    description: LocalizedString;
  };
  legalNotes: LocalizedString;
};

export const OUT_OF_TOKENS_PLAY_URL = "https://nidofy.github.io/out-of-tokens/";
export const OUT_OF_TOKENS_REPO_URL = "https://github.com/Nidofy/out-of-tokens";

export const gameEntries: LocalizedGameContent[] = [
  {
    slug: "out-of-tokens",
    title: {
      "zh-CN": "Out of Tokens · 开源万事屋",
      en: "Out of Tokens",
    },
    shortTitle: {
      "zh-CN": "Out of Tokens",
      en: "Out of Tokens",
    },
    status: "playtest",
    statusLabel: {
      "zh-CN": "网页试玩已开放",
      en: "Web preview live",
    },
    versionLabel: {
      "zh-CN": "Web 试玩版 · 开源更新中",
      en: "Browser preview · Open source",
    },
    tagline: {
      "zh-CN": "接手一间街角 AI 万事屋，在把额度烧光前把单子交出去。",
      en: "Run a scrappy corner AI studio and ship client work before your Token quota hits zero.",
    },
    summary: {
      "zh-CN": "读懂甲方话里有话的委托，在开源本地算力与云端额度之间排班组队，顺便照顾好 12 位 Q 版伙伴的作息与心情。",
      en: "Clarify vague client briefs, balance local compute against daily cloud Token quotas, and look after a crew of 12 chibi teammates.",
    },
    description: {
      "zh-CN":
        "《Out of Tokens · 开源万事屋》是一款与《AI 小院》同世界观的轻策略经营游戏。你接手了一家账面紧张的车库小工坊，每天分上、下午、晚上、深夜四个时段推进：白天看委托、找甲方问清隐藏条件、按专长安排执行与审查岗位；傍晚停工去食堂或图书馆喘口气，周末还要应付房租、套餐订阅和本地电费。游戏打开浏览器就能玩，所有“Token”都是局内经营资源，不需要填任何真实 API Key。",
      en: "Out of Tokens is a light-strategy studio management game set in the same chibi universe as AI Village. You take over a cash-strapped garage workshop running on four periods a day: spend mornings and afternoons reading briefs, uncovering hidden client requirements, and assigning planners, workers, and reviewers; use evenings to rest at the canteen or library before weekly rent, subscriptions, and power bills land. It plays right in the browser, and every 'Token' is purely an in-game resource—no real API keys or model accounts involved.",
    },
    platforms: [
      { id: "web", displayName: { "zh-CN": "Web 浏览器即玩", en: "Play in Browser" } },
      { id: "pwa", displayName: { "zh-CN": "支持离线缓存与存档导出", en: "Offline PWA & JSON Saves" } },
      { id: "experimental", displayName: { "zh-CN": "DSH / 桌面端实验适配中", en: "DSH & Desktop (Experimental)" } },
    ],
    tags: {
      "zh-CN": ["工作室经营", "委托审题", "Q 版伙伴", "网页即玩", "开源项目"],
      en: ["Studio Sim", "Client Briefs", "Chibi Crew", "Browser Playable", "Open Source"],
    },
    accent: "#3d6b52",
    accentRgb: "61 107 82",
    hero: {
      eyebrow: {
        "zh-CN": "当前主推 · 网页经营模拟",
        en: "Featured Game · Studio Management Sim",
      },
      title: {
        "zh-CN": "先问清甲方到底要什么，再算算今天的 Token 够不够用。",
        en: "Figure out what the client actually meant—before today's Token budget runs dry.",
      },
      subtitle: {
        "zh-CN": "带着开源车库四人组起步，接单、排班、处理 429 限流与幻觉翻车，把摇摇欲坠的小工坊慢慢经营成有声有色的万事屋。",
        en: "Start with four open-source garage regulars, dispatch teams, survive rate limits and hallucinated citations, and keep your tiny workshop solvent week after week.",
      },
      placeholderLabel: {
        "zh-CN": "Out of Tokens 画面加载中",
        en: "Out of Tokens media loading",
      },
      placeholderNote: {
        "zh-CN": "包含主题插画与浏览器实机画面。",
        en: "Includes promotional artwork and real browser captures.",
      },
    },
    facts: [
      {
        label: { "zh-CN": "游玩方式", en: "How to play" },
        value: { "zh-CN": "桌面与手机浏览器点开即玩", en: "Instant play on desktop & mobile web" },
      },
      {
        label: { "zh-CN": "运行成本", en: "API & cost" },
        value: { "zh-CN": "纯本地确定性模拟 · 无需 API Key", en: "Deterministic local rules · No API key" },
      },
      {
        label: { "zh-CN": "进度保存", en: "Save data" },
        value: { "zh-CN": "浏览器本地保存 · 支持导出 JSON", en: "Saved in browser · JSON export/import" },
      },
    ],
    features: [
      {
        title: {
          "zh-CN": "甲方的话不能只听一半",
          en: "Read between the client's lines",
        },
        description: {
          "zh-CN": "嘴上说“就改一个小按钮”，背后往往藏着旧机型兼容或额外验收线。开工前派伙伴花一个时段澄清需求，能少踩很多返工的坑。",
          en: "A 'tiny button fix' usually hides legacy device checks or stricter pass thresholds. Spending one period to clarify the brief beats failing delivery later.",
        },
      },
      {
        title: {
          "zh-CN": "开源跑本地，云端省额度",
          en: "Local compute vs. cloud quota",
        },
        description: {
          "zh-CN": "开源伙伴可以切到本地部署吃算力和周结电费，闭源或云端模式则消耗每日刷新的 Token 配额。派遣前能直接对比工期、开销和质量区间。",
          en: "Run open-source teammates locally on studio hardware and weekly power bills, or use daily cloud Token quotas. Live forecasts show cost and quality before you commit.",
        },
      },
      {
        title: {
          "zh-CN": "突发状况真会影响交单",
          en: "Tech hiccups with real stakes",
        },
        description: {
          "zh-CN": "429 限流排队、上下文塞满、看着像真的幻觉引用、客户临时改主意都会在推进时跳出来要你拍板；漏掉的隐患到了验收就会扣分。",
          en: "429 rate limits, context overflow, plausible-looking fake citations, and mid-sprint scope changes force on-the-spot calls—and uncaught defects hurt at review.",
        },
      },
      {
        title: {
          "zh-CN": "下班后也有小院式的日常",
          en: "Evenings off in a living town",
        },
        description: {
          "zh-CN": "傍晚默认停工休整，大家会去食堂、图书馆，或者在工坊喝下午茶、水群聊、攒搭档默契。硬排加班和通宵会实打实掏空第二天状态。",
          en: "Work pauses in the evening so the crew can visit the canteen, read at the library, share tea breaks, or chat in the group thread. Constant overtime burns everyone out.",
        },
      },
    ],
    sections: [
      {
        title: {
          "zh-CN": "三分钟能推完一个时段，也能慢慢打满五章",
          en: "Built for three-minute breaks or multi-chapter runs",
        },
        description: {
          "zh-CN": "每个时段开始前都会停下来等你安排，点下推进才结算，随时关页面也不会丢进度。从最初四人三张桌的开源车库做起，随着声望和研发点积累，可以添置算力机柜、解锁新伙伴与进阶形态，体验多条结局路线。",
          en: "Time only moves when you hit Advance, so you can play a single period over coffee or settle in for a full campaign—growing from a three-desk garage to a twelve-member studio with hardware upgrades and multiple endings.",
        },
      },
      {
        title: {
          "zh-CN": "确定性规则内核，和《AI 小院》共享角色但不串档",
          en: "Deterministic core, shared cast, separate saves",
        },
        description: {
          "zh-CN": "底层经营引擎用纯 TypeScript 编写，同样的随机种子与操作序列一定会算出相同结果，并通过数千局自动模拟校准收支曲线。角色形象延续了《AI 小院》的 12 位伙伴，但两边存档完全独立，放心折腾也不会把小院搞破产。",
          en: "The simulation core is pure deterministic TypeScript—identical seeds and commands always produce identical ledgers, tuned across thousands of automated test runs. It shares AI Village's 12-character cast while keeping save data completely separate.",
        },
      },
    ],
    faq: [
      {
        title: {
          "zh-CN": "玩这个需要填大模型 API Key 或者花钱买 Token 吗？",
          en: "Do I need an LLM API key or real money for Tokens?",
        },
        description: {
          "zh-CN": "完全不需要。游戏里的 Token、订阅套餐和电费全都是虚构的经营数值，所有台词、事件和结算都在你本地浏览器里离线运算，不会请求任何外部大模型接口。",
          en: "Not at all. Tokens, subscription tiers, and power bills are 100% fictional in-game numbers. Dialogue, events, and math run locally in your browser with zero external AI API calls.",
        },
      },
      {
        title: {
          "zh-CN": "手机上能玩吗？存档存在哪里？",
          en: "Does it work on mobile, and where are saves stored?",
        },
        description: {
          "zh-CN": "可以，界面针对桌面宽屏和 390px 手机竖屏都做了排版适配。进度默认保存在当前浏览器的本地存储（IndexedDB）中；清理浏览器缓存或换设备前，建议在存档面板里点一次“导出 JSON”。",
          en: "Yes—the UI adapts to both desktop widescreen and portrait phone viewports. Saves live in your browser's local IndexedDB; use JSON Export in the save menu before clearing site data or switching devices.",
        },
      },
      {
        title: {
          "zh-CN": "可以装进 DSH 或者下载桌面安装包吗？",
          en: "Is there a DSH plugin package or desktop installer yet?",
        },
        description: {
          "zh-CN": "仓库里已经包含 DSH 宿主适配层与 Tauri 桌面端工程，但目前还在做宿主版本兼容与长驻性能复核，暂未放出正式安装包。现阶段最推荐直接玩网页试玩版。",
          en: "The repository includes experimental DSH host and Tauri desktop targets, but host-version compatibility checks are still underway. For now, the GitHub Pages browser build is the best way to play.",
        },
      },
    ],
    primaryCta: {
      label: {
        "zh-CN": "网页在线试玩",
        en: "Play in Browser",
      },
      href: {
        "zh-CN": OUT_OF_TOKENS_PLAY_URL,
        en: OUT_OF_TOKENS_PLAY_URL,
      },
      external: true,
    },
    secondaryCta: {
      label: {
        "zh-CN": "查看项目介绍",
        en: "Project details",
      },
      href: {
        "zh-CN": "/zh-CN/games/out-of-tokens",
        en: "/en/games/out-of-tokens",
      },
    },
    detailPrimaryCta: {
      label: {
        "zh-CN": "打开网页版直接玩",
        en: "Launch Browser Build",
      },
      href: {
        "zh-CN": OUT_OF_TOKENS_PLAY_URL,
        en: OUT_OF_TOKENS_PLAY_URL,
      },
      external: true,
    },
    detailSecondaryCta: {
      label: {
        "zh-CN": "查看 GitHub 源码",
        en: "View GitHub Repo",
      },
      href: {
        "zh-CN": OUT_OF_TOKENS_REPO_URL,
        en: OUT_OF_TOKENS_REPO_URL,
      },
      external: true,
    },
    sourceLinks: [
      {
        label: { "zh-CN": "在线试玩（GitHub Pages） ↗", en: "Play on GitHub Pages ↗" },
        href: OUT_OF_TOKENS_PLAY_URL,
      },
      {
        label: { "zh-CN": "GitHub 开源仓库 ↗", en: "GitHub Repository ↗" },
        href: OUT_OF_TOKENS_REPO_URL,
      },
    ],
    seo: {
      title: {
        "zh-CN": "Out of Tokens · 开源万事屋 — Q 版 AI 工作室经营网页游戏 | Nido的游戏小栈",
        en: "Out of Tokens — Cozy AI Studio Management Game in Your Browser | Nido's Gaming Stack",
      },
      description: {
        "zh-CN": "在浏览器里经营一间街角 AI 万事屋：澄清甲方隐藏需求、调配开源本地算力与云端额度、照顾 12 位 Q 版伙伴的日常。无需 API Key，点开即玩。",
        en: "Run a scrappy chibi AI studio in your browser: clarify hidden client briefs, juggle local compute and cloud Token quotas, and care for 12 teammates. Free web preview, no API key needed.",
      },
    },
    legalNotes: {
      "zh-CN":
        "独立开发的同人戏仿与经营模拟作品，与任何商业大模型公司或官方产品无关联。游戏内“Token”仅为局内虚拟数值，不调用外部付费接口；代码与美术资源许可详见仓库说明。",
      en: "An independent parody and management sim unaffiliated with any commercial AI provider. In-game Tokens are purely fictional mechanics with no paid API calls; see the repository for code and asset license notices.",
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
    versionLabel: {
      "zh-CN": "原型打磨期 · 暂未开放下载",
      en: "Prototype stage · No build yet",
    },
    tagline: {
      "zh-CN": "单机章节制的 2D Q 版横版动作 RPG 练习作。",
      en: "A single-player, chapter-based 2D chibi side-scrolling action RPG.",
    },
    summary: {
      "zh-CN": "捏一个顺眼的纸娃娃角色，从热闹的小镇出发接悬赏、闯横版关卡，再靠摸清招式节奏打赢多阶段 Boss。",
      en: "Dress up a paper-doll hero, pick up jobs in a lively town hub, clear side-scrolling stages, and learn multi-phase boss patterns.",
    },
    description: {
      "zh-CN":
        "这是一个正在业余推进的 2D 横版动作小项目，正式名字还没想好。结构上按单机小章节来设计：平时在城镇里找 NPC 接委托、换装、强化趁手的武器；出门进入横版地图跑跳探索、打几波锁屏遭遇战，攒够准备后推开底部的 Boss 房大门。目前先把一章的跑跳攻击手感、纸娃娃换装和第一只 Boss 做扎实，再去扩地图。",
      en: "This is a 2D side-scrolling action RPG in active development—final title still TBD. It's structured around compact single-player chapters: hang out in a town hub to take quests, swap outfits, and upgrade weapons, then head into side-scrolling stages for platforming, lock-screen skirmishes, and a multi-phase boss fight at the end. Current work is focused on getting movement, hit feel, paper-doll layering, and the first full chapter feeling right before scaling up.",
    },
    platforms: [
      { id: "pc", displayName: { "zh-CN": "PC 端优先开发", en: "PC first" } },
      { id: "mobile", displayName: { "zh-CN": "预留手柄与触屏操作映射", en: "Controller & touch friendly layout" } },
    ],
    tags: {
      "zh-CN": ["横版动作", "Q 版纸娃娃", "城镇日常", "Boss 战"],
      en: ["Side-Scroller", "Paper-Doll Outfits", "Town Hub", "Boss Fights"],
    },
    accent: "#b72f45",
    accentRgb: "183 47 69",
    hero: {
      eyebrow: {
        "zh-CN": "开发中项目 · 2D 动作冒险",
        en: "In Development · 2D Action RPG",
      },
      title: {
        "zh-CN": "在小镇换好行头，去横版关卡里打一场痛快仗。",
        en: "Gear up in town, then test your timing in side-scrolling boss rooms.",
      },
      subtitle: {
        "zh-CN": "体量不大但五脏俱全的单机冒险：把跳跃闪避的手感调顺，让穿搭自由和装备属性分开，每章留一场值得背板的 Boss 战。",
        en: "A compact single-player adventure focused on crisp jump-and-slash controls, stats decoupled from outfits, and readable boss fights worth learning.",
      },
      placeholderLabel: {
        "zh-CN": "横版动作 RPG 画面整理中",
        en: "Action RPG art in preparation",
      },
      placeholderNote: {
        "zh-CN": "目前展示概念宣传图，实机录屏会在首个可玩章节完成后替换。",
        en: "Showing concept art while the first playable chapter is in progress.",
      },
    },
    facts: [
      {
        label: { "zh-CN": "游戏类型", en: "Genre" },
        value: { "zh-CN": "单机章节制 2D 横版动作 RPG", en: "Single-player 2D action RPG" },
      },
      {
        label: { "zh-CN": "当前重点", en: "Current focus" },
        value: { "zh-CN": "移动连段手感、纸娃娃分层与首章 Boss", en: "Movement feel, paper-doll rig & Boss 1" },
      },
      {
        label: { "zh-CN": "试玩计划", en: "Playable build" },
        value: { "zh-CN": "首章跑通后放出 PC 试玩包", en: "PC demo planned after Chapter 1" },
      },
    ],
    features: [
      {
        title: {
          "zh-CN": "先把跑跳和挥刀调顺手",
          en: "Controls before content sprawl",
        },
        description: {
          "zh-CN": "起跳、急停、转向、连段收招和受击硬直优先反复调校，保证操作跟手、判框清楚，再去往上叠技能与怪物种类。",
          en: "Jump arcs, turnarounds, combo recovery, and hitstop come first so basic movement feels snappy and fair before adding more skills or monsters.",
        },
      },
      {
        title: {
          "zh-CN": "穿什么衣服不影响面板属性",
          en: "Wear what you like without losing stats",
        },
        description: {
          "zh-CN": "武器与护符负责数值和词条，发型、帽子、时装只管好看，不用为了凑暴击率被迫穿一身混搭怪衣服。",
          en: "Weapons and charms handle combat stats while hair, hats, and outfits stay purely cosmetic—no mismatched clown suits for crit rate.",
        },
      },
      {
        title: {
          "zh-CN": "一镇一关一 Boss 的紧凑章节",
          en: "Focused chapter loop",
        },
        description: {
          "zh-CN": "首个试玩目标就做透一座小镇、一条野外路线、一场守关 Boss 和几段支线日常，让人半小时内就能体验到头尾完整的冒险。",
          en: "The first milestone nails one lively town, one field route, one boss room, and a handful of side errands that play well in a single sitting.",
        },
      },
    ],
    sections: [
      {
        title: {
          "zh-CN": "打累了回镇上歇脚，逛店钓鱼换身衣服",
          en: "A warm town hub between fights",
        },
        description: {
          "zh-CN":
            "城镇里有铁匠铺、服装摊、钓鱼点、料理锅和会随章节闲聊变化的居民。连打几局想松口气时，回镇上敲两件装备、换套新造型，节奏会舒服很多。",
          en: "Between stages you can drop by the smithy, outfit stall, fishing spot, or cooking pot and chat with townsfolk whose dialogue shifts as chapters progress.",
        },
      },
      {
        title: {
          "zh-CN": "看清起手预兆，靠熟悉招式赢下 Boss",
          en: "Bosses with clear tells and fair openings",
        },
        description: {
          "zh-CN":
            "Boss 的每次蓄力、位移和转阶段都有明确的动作与地面提示。初见吃亏很正常，摸清出招预兆后抓后摇反打，比单纯刷等级硬扛更有成就感。",
          en: "Major attacks have clear wind-ups, ground markers, and phase transitions. Learning when to dodge and punish matters far more than grinding levels.",
        },
      },
    ],
    faq: [
      {
        title: {
          "zh-CN": "现在有可以下载的试玩版吗？",
          en: "Is there a playable demo to download yet?",
        },
        description: {
          "zh-CN": "还没有。目前正在打磨第一章节的动作手感和纸娃娃骨骼换装，等首个完整可玩切片稳定后会在本站下载页放出 PC 试玩包。",
          en: "Not yet. Core movement, combat feel, and the paper-doll rig are still being built; a PC demo will go up on the Download page once Chapter 1 plays smoothly end to end.",
        },
      },
      {
        title: {
          "zh-CN": "页面上的图片是实机画面吗？",
          en: "Are the images on this page in-game screenshots?",
        },
        description: {
          "zh-CN": "当前三张配图是为确定美术基调制作的原创/生成概念宣传图，用来展示角色比例、城镇氛围与横版战斗构图；后续会逐步替换为真实引擎录屏与截图。",
          en: "The current three images are original/generated concept visuals created to set character proportions, town mood, and combat framing. Real engine captures will replace them as milestones wrap.",
        },
      },
    ],
    primaryCta: {
      label: {
        "zh-CN": "查看项目介绍",
        en: "View project details",
      },
      href: {
        "zh-CN": "/zh-CN/games/untitled-action-rpg",
        en: "/en/games/untitled-action-rpg",
      },
    },
    secondaryCta: {
      label: {
        "zh-CN": "阅读开发日志",
        en: "Read devlog",
      },
      href: {
        "zh-CN": "/zh-CN/devlog",
        en: "/en/devlog",
      },
    },
    detailPrimaryCta: {
      label: {
        "zh-CN": "浏览概念画面",
        en: "Browse concept art",
      },
      href: {
        "zh-CN": "#gallery",
        en: "#gallery",
      },
    },
    detailSecondaryCta: {
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
        "zh-CN": "未定名横版动作 RPG — 2D Q 版纸娃娃动作冒险 | Nido的游戏小栈",
        en: "Untitled Side-Scrolling Action RPG — 2D Chibi Action Adventure | Nido's Gaming Stack",
      },
      description: {
        "zh-CN": "开发中的单机章节制 2D 横版动作 RPG，主打跟手的跳跃连段、外观与属性分离的纸娃娃换装、温暖城镇日常与可背板的多阶段 Boss 战。",
        en: "A single-player chapter-based 2D side-scrolling action RPG in development, featuring responsive platform combat, cosmetic paper-doll outfits, a cozy town hub, and pattern-driven bosses.",
      },
    },
    legalNotes: {
      "zh-CN":
        "本页概念宣传图与设定均为独立项目自有内容，不复刻任何商业作品的商标、界面、角色或素材。正式定名与实机演示完成后将同步更新。",
      en: "Concept visuals and design notes belong to this independent project and do not copy trademarks, UI, characters, or assets from existing commercial titles.",
    },
  },
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
      "zh-CN": "Windows 内部试玩",
      en: "Windows playtest",
    },
    versionLabel: {
      "zh-CN": "0.2.0-preview · Windows x64 便携版",
      en: "0.2.0-preview · Windows x64 portable",
    },
    tagline: {
      "zh-CN": "用架空战队与战术抉择，推演一整届世界级电竞杯赛。",
      en: "Guide a fictional esports squad through group stages, bracket pressure, and match-day calls.",
    },
    summary: {
      "zh-CN": "在关键回合权衡稳扎稳打还是搏命翻盘，看状态起伏、兵线局势和淘汰赛签表一步步把比赛推向终局。",
      en: "Make safe, balanced, or high-risk calls at match checkpoints and watch team form, map pressure, and double-elimination drama play out.",
    },
    description: {
      "zh-CN":
        "《TI 模拟器》是一个偏桌面推演感的架空电竞杯赛模拟小游戏。它把繁琐的即时微操抽离出来，留住杯赛里最让人心跳的部分：赛程排布、队伍状态冷热、局内关键节点的三选一拍板，以及打完一整轮系列赛后的技术统计与故事复盘。目前放出了 Windows x64 免安装便携包，供小范围试玩与收集反馈。",
      en: "TI Simulator distills an international-style esports championship into a compact tactical sim. Instead of real-time mechanical micro, you focus on match-day decisions: managing team form across a grueling schedule, choosing between safe, balanced, or risky plays at key checkpoints, reading lane momentum, and reviewing post-game breakdowns. A portable Windows x64 build is available now for early playtesting.",
    },
    platforms: [{ id: "windows", displayName: { "zh-CN": "Windows x64 便携版", en: "Windows x64 Portable" } }],
    tags: {
      "zh-CN": ["赛事推演", "战术抉择", "架空战队", "Windows 试玩包"],
      en: ["Tournament Sim", "Tactical Choices", "Fictional Teams", "Windows Playtest"],
    },
    accent: "#1470f5",
    accentRgb: "20 112 245",
    hero: {
      eyebrow: {
        "zh-CN": "Windows 便携试玩 · 架空杯赛模拟",
        en: "Windows Playtest · Esports Cup Sim",
      },
      title: {
        "zh-CN": "二十分钟打完一届杯赛，每次抉择都可能改写淘汰赛走向。",
        en: "Play through a full championship bracket where a single call can swing the series.",
      },
      subtitle: {
        "zh-CN": "全部采用原创架空队伍与数值规则。从小组积分、局内关键决策到赛后数据复盘，体验带队冲冠的跌宕起伏。",
        en: "Built entirely with fictional rosters and custom simulation rules—from group-stage scrambles and mid-match calls to post-series stat reports.",
      },
      placeholderLabel: {
        "zh-CN": "TI 模拟器画面加载中",
        en: "TI Simulator media loading",
      },
      placeholderNote: {
        "zh-CN": "展示当前 Windows 预览包的局内界面。",
        en: "Showing interface captures from the Windows preview build.",
      },
    },
    facts: [
      {
        label: { "zh-CN": "运行平台", en: "Platform" },
        value: { "zh-CN": "Windows x64 免安装 ZIP 便携包", en: "Windows x64 portable ZIP" },
      },
      {
        label: { "zh-CN": "下载方式", en: "Mirrors" },
        value: { "zh-CN": "GitHub Release 与百度网盘双镜像", en: "GitHub Release & Baidu Netdisk" },
      },
      {
        label: { "zh-CN": "单局节奏", en: "Session length" },
        value: { "zh-CN": "本地单机运行 · 随时开局复盘", en: "Offline single-player · Quick runs" },
      },
    ],
    features: [
      {
        title: {
          "zh-CN": "关键节点三选一拍板",
          en: "Checkpoint risk-reward calls",
        },
        description: {
          "zh-CN": "比赛推进到中期团战或资源争夺时会停下给出稳健、均衡、搏命等不同方案，收益与翻车概率一目了然。",
          en: "Matches pause at pivotal moments with clear safe, balanced, and high-risk plays, showing likely rewards and backfire odds up front.",
        },
      },
      {
        title: {
          "zh-CN": "直观的兵线与局势图",
          en: "Clear lane & objective view",
        },
        description: {
          "zh-CN": "不用盯满屏特效，通过简洁的战术地图就能看清三路兵线压力、关键目标状态和双方经济差。",
          en: "Read three-lane pressure, objective timers, and gold swings at a glance on a clean tactical board before making your next call.",
        },
      },
      {
        title: {
          "zh-CN": "有记忆点的赛后统计与成就",
          en: "Post-match recaps & local milestones",
        },
        description: {
          "zh-CN": "每场打完都会汇总比分、关键先生和走势摘要，配合本地档案里的阶段成就，方便截图发给朋友复盘。",
          en: "Every series wraps with a readable scoreboard, standout performers, and local profile achievements that are easy to screenshot and share.",
        },
      },
    ],
    sections: [
      {
        title: {
          "zh-CN": "纸面实力占七分，临场波动和签运占三分",
          en: "Form swings and bracket drama built in",
        },
        description: {
          "zh-CN": "强队连续高强度作战也会状态下滑，黑马抓对两次节奏同样能把头号种子踢进败者组。参数调节与适度随机混在一起，让每一届淘汰赛走出的剧本都不太一样。",
          en: "Favorites can stumble under schedule fatigue, and an underdog stringing together two bold calls can knock a top seed into the lower bracket. No two tournament runs play out quite the same.",
        },
      },
      {
        title: {
          "zh-CN": "完全架空的杯赛世界，解压即玩",
          en: "Fictional rosters, portable setup",
        },
        description: {
          "zh-CN": "项目中的赛区、队伍、选手与界面均为独立虚构设计。当前测试包无需安装运行库，下载 ZIP 解压后双击脚本即可启动，并附带了中英文新手上手说明。",
          en: "Regions, teams, players, and UI are all fictional creations. The current preview needs no installer—just unzip to a normal folder, launch Start-Game.bat, and check the included starter guide if needed.",
        },
      },
    ],
    faq: [
      {
        title: {
          "zh-CN": "下载后双击没反应或被 Windows 拦截怎么办？",
          en: "What if Windows SmartScreen warns me on first launch?",
        },
        description: {
          "zh-CN": "请先确认已把整个 ZIP 完整解压到普通文件夹（不要在压缩包预览窗口里直接运行），再双击 Start-Game.bat。因个人测试包未购买商业签名，首次弹出保护提示时点击“更多信息 → 仍要运行”即可。",
          en: "Make sure you extract the entire ZIP to a regular folder first rather than running from inside an archive viewer, then double-click Start-Game.bat. Because indie test builds are unsigned, click 'More info → Run anyway' if SmartScreen prompts.",
        },
      },
      {
        title: {
          "zh-CN": "有 macOS、Linux 或网页版计划吗？",
          en: "Are macOS, Linux, or browser builds available?",
        },
        description: {
          "zh-CN": "当前 0.2.0 预览阶段仅打包并验证了 Windows x64 版本。如果想直接在浏览器或手机上体验站内作品，可以先试试首页主推的《Out of Tokens》。",
          en: "The current 0.2.0 playtest is packaged and tested for Windows x64 only. If you want something playable right in a browser or on mobile, check out Out of Tokens on the homepage.",
        },
      },
    ],
    primaryCta: {
      label: {
        "zh-CN": "下载 Windows 试玩包",
        en: "Download Windows Playtest",
      },
      href: {
        "zh-CN": "/zh-CN/download#ti-simulator",
        en: "/en/download#ti-simulator",
      },
    },
    secondaryCta: {
      label: {
        "zh-CN": "阅读游玩指引",
        en: "Read play guide",
      },
      href: {
        "zh-CN": "/zh-CN/guides/ti-simulator",
        en: "/en/guides/ti-simulator",
      },
    },
    detailPrimaryCta: {
      label: {
        "zh-CN": "前往下载与网盘镜像",
        en: "Get Windows Build & Mirrors",
      },
      href: {
        "zh-CN": "/zh-CN/download#ti-simulator",
        en: "/en/download#ti-simulator",
      },
    },
    detailSecondaryCta: {
      label: {
        "zh-CN": "查看新手指引",
        en: "Open starter guide",
      },
      href: {
        "zh-CN": "/zh-CN/guides/ti-simulator",
        en: "/en/guides/ti-simulator",
      },
    },
    sourceLinks: [
      {
        label: { "zh-CN": "Windows 试玩包下载与镜像", en: "Windows Playtest & Mirrors" },
        href: "/zh-CN/download#ti-simulator",
      },
      {
        label: { "zh-CN": "中文游玩指引", en: "Starter Play Guide" },
        href: "/zh-CN/guides/ti-simulator",
      },
    ],
    seo: {
      title: {
        "zh-CN": "TI 模拟器 — 架空电竞杯赛推演与战术模拟 | Nido的游戏小栈",
        en: "TI Simulator — Fictional Esports Tournament & Tactical Sim | Nido's Gaming Stack",
      },
      description: {
        "zh-CN": "一款架空电竞杯赛推演与战术抉择模拟游戏，已开放 Windows x64 便携版试玩包（GitHub Release 与百度网盘双镜像）。",
        en: "A fictional esports championship simulator focused on match-day decisions and bracket momentum. Windows x64 portable playtest available now.",
      },
    },
    legalNotes: {
      "zh-CN":
        "本项目采用完全架空与原创设定，与任何真实电竞赛事、俱乐部、选手、Dota、Valve 或 The International 不存在关联或授权关系。",
      en: "TI Simulator uses entirely fictional teams and original rules. It is not affiliated with, endorsed by, or built from assets owned by Dota, Valve, The International, or real esports teams.",
    },
  },
];

export function localizeGame(game: LocalizedGameContent, locale: Locale): GameContent {
  const primaryCta: GameCta = {
    label: getLocalized(game.primaryCta.label, locale),
    href: game.primaryCta.href[locale],
    external: game.primaryCta.external,
  };
  const secondaryCta: GameCta = {
    label: getLocalized(game.secondaryCta.label, locale),
    href: game.secondaryCta.href[locale],
    external: game.secondaryCta.external,
  };

  return {
    slug: game.slug,
    locale,
    title: getLocalized(game.title, locale),
    shortTitle: getLocalized(game.shortTitle, locale),
    status: game.status,
    statusLabel: getLocalized(game.statusLabel, locale),
    versionLabel: game.versionLabel ? getLocalized(game.versionLabel, locale) : undefined,
    tagline: getLocalized(game.tagline, locale),
    summary: getLocalized(game.summary, locale),
    description: getLocalized(game.description, locale),
    platforms: game.platforms.map((platform) => getLocalized(platform.displayName, locale)),
    tags: getLocalized(game.tags, locale),
    accent: game.accent,
    accentRgb: game.accentRgb,
    hero: {
      eyebrow: getLocalized(game.hero.eyebrow, locale),
      title: getLocalized(game.hero.title, locale),
      subtitle: getLocalized(game.hero.subtitle, locale),
      placeholderLabel: getLocalized(game.hero.placeholderLabel, locale),
      placeholderNote: getLocalized(game.hero.placeholderNote, locale),
    },
    facts: game.facts.map((fact) => ({
      label: getLocalized(fact.label, locale),
      value: getLocalized(fact.value, locale),
    })),
    features: game.features.map((feature) => ({
      title: getLocalized(feature.title, locale),
      description: getLocalized(feature.description, locale),
    })),
    sections: game.sections.map((section) => ({
      title: getLocalized(section.title, locale),
      description: getLocalized(section.description, locale),
    })),
    faq: (game.faq ?? []).map((item) => ({
      title: getLocalized(item.title, locale),
      description: getLocalized(item.description, locale),
    })),
    primaryCta,
    secondaryCta,
    detailPrimaryCta: game.detailPrimaryCta
      ? {
          label: getLocalized(game.detailPrimaryCta.label, locale),
          href: game.detailPrimaryCta.href[locale],
          external: game.detailPrimaryCta.external,
        }
      : primaryCta,
    detailSecondaryCta: game.detailSecondaryCta
      ? {
          label: getLocalized(game.detailSecondaryCta.label, locale),
          href: game.detailSecondaryCta.href[locale],
          external: game.detailSecondaryCta.external,
        }
      : secondaryCta,
    sourceLinks: (game.sourceLinks ?? []).map((link) => ({
      label: getLocalized(link.label, locale),
      href: link.href.startsWith("/zh-CN/") && locale === "en" ? link.href.replace(/^\/zh-CN\//, "/en/") : link.href,
    })),
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
