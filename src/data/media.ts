import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/types/i18n";

export type GameGalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export type GamePreviewMedia = {
  hero: string;
  og: string;
  alt: string;
  disclaimer: string;
  width?: number;
  height?: number;
  gallery?: {
    eyebrow: string;
    title: string;
    description: string;
    images: GameGalleryImage[];
  };
};

export const outOfTokensPreviewMedia = {
  "zh-CN": {
    hero: "/media/out-of-tokens/hero-garage.webp",
    og: "/media/out-of-tokens/og-cover.jpg",
    alt: "Out of Tokens 开源车库四人组（Mistral、Bluewhale、Llama、Qwen）在阳光工坊中准备开工的主题宣传插画。",
    disclaimer: "主题宣传插画 · 基于游戏角色与车库场景绘制，非实机截图",
    width: 1536,
    height: 864,
    gallery: {
      eyebrow: "实机画面与场景",
      title: "从审题澄清、算力排班到小镇日常的实际界面",
      description: "以下包含浏览器实机录屏画面与游戏内园区地图，均可点击查看原尺寸大图。",
      images: [
        {
          src: "/media/out-of-tokens/studio-workshop.webp",
          alt: "Out of Tokens 开源车库实机画面，展示顶部资金与 Token 额度栏、四位 Q 版伙伴工位状态及底部时段推进按钮。",
          caption: "浏览器实机画面 · 开源车库工坊日常与时段推进",
          width: 1600,
          height: 900,
        },
        {
          src: "/media/out-of-tokens/commission-clarify.webp",
          alt: "Out of Tokens 委托日志实机画面，展示派伙伴澄清后揭示出的旧手机兼容验证隐藏条件与合同报酬。",
          caption: "浏览器实机画面 · 接单前派人澄清隐藏需求，看清真实工作量",
          width: 1600,
          height: 900,
        },
        {
          src: "/media/out-of-tokens/dispatch-forecast.webp",
          alt: "Out of Tokens 团队派遣实机画面，展示本地部署与云端模式切换、本地算力电费预估与条件质量区间。",
          caption: "浏览器实机画面 · 切换本地算力与云端模式，实时预估工期和验收区间",
          width: 1600,
          height: 900,
        },
        {
          src: "/media/out-of-tokens/world-town-map.webp",
          alt: "Out of Tokens 水彩小镇园区地图，包含左下角开源车库工坊、中部绿棚食堂、右上角图书馆与右下角远征拱门。",
          caption: "游戏内地图 · 车库工坊、食堂、图书馆与远征入口",
          width: 1280,
          height: 720,
        },
      ],
    },
  },
  en: {
    hero: "/media/out-of-tokens/hero-garage.webp",
    og: "/media/out-of-tokens/og-cover.jpg",
    alt: "Promotional illustration for Out of Tokens showing the four starting garage teammates (Mistral, Bluewhale, Llama, and Qwen) in their sunlit workshop.",
    disclaimer: "Promotional illustration · Based on the game's cast and garage set; not a raw UI capture",
    width: 1536,
    height: 864,
    gallery: {
      eyebrow: "In-Game Captures & Map",
      title: "Real browser screens from reading briefs to town life",
      description: "Direct captures from the playable browser build alongside the in-game campus map. Click any image to inspect full size.",
      images: [
        {
          src: "/media/out-of-tokens/studio-workshop.webp",
          alt: "Out of Tokens browser gameplay screen showing the sunlit open-source garage, cash and Token HUD, chibi teammates at desks, and the period advance button.",
          caption: "Browser gameplay · Open-Source Garage HUD, chibi crew, and period controls",
          width: 1600,
          height: 900,
        },
        {
          src: "/media/out-of-tokens/commission-clarify.webp",
          alt: "Out of Tokens commission log showing a revealed legacy-phone compatibility requirement and contract pass line before accepting.",
          caption: "Browser gameplay · Clarifying hidden client requirements before taking a contract",
          width: 1600,
          height: 900,
        },
        {
          src: "/media/out-of-tokens/dispatch-forecast.webp",
          alt: "Out of Tokens dispatch workbench comparing local compute vs. cloud mode with live completion timing, power bills, and quality range.",
          caption: "Browser gameplay · Toggling local compute vs. cloud quota with live quality forecasts",
          width: 1600,
          height: 900,
        },
        {
          src: "/media/out-of-tokens/world-town-map.webp",
          alt: "Out of Tokens watercolor campus map showing the garage studio, green-awning canteen, arched library, and expedition gate.",
          caption: "In-game map · Garage workshop, canteen, library, and expedition portal",
          width: 1280,
          height: 720,
        },
      ],
    },
  },
} satisfies Record<Locale, GamePreviewMedia>;

export const tiSimulatorPreviewMedia = {
  "zh-CN": {
    hero: "/images/hero/ti-simulator-zh.png",
    og: "/images/og/ti-simulator-zh.png",
    alt: "TI 模拟器界面预览，包含模拟赛程、局势面板与策略选项。",
    disclaimer: "开发期预览画面，仅供非商业展示",
    gallery: {
      eyebrow: "预览包界面",
      title: "一局架空杯赛从排兵到复盘的核心界面",
      description: "以下五张图来自当前 Windows 预览包，分别对应总览、回合拍板、战术态势、阶段成就和赛后统计。",
      images: [
        {
          src: "/generated/ti-simulator/images/hero-gameplay.png",
          alt: "TI 模拟器玩法总览画面，包含阵容、赛程进程、地图与数据统计面板。",
          caption: "杯赛与对局总览",
        },
        {
          src: "/generated/ti-simulator/images/decision-screen.png",
          alt: "TI 模拟器决策画面，展示关键节点上的稳健、均衡与冒险选项。",
          caption: "关键回合三选一拍板",
        },
        {
          src: "/generated/ti-simulator/images/strategy-map.png",
          alt: "TI 模拟器战术地图画面，展示三路兵线、资源点与推进态势。",
          caption: "三路兵线与资源态势",
        },
        {
          src: "/generated/ti-simulator/images/achievement-screen.png",
          alt: "TI 模拟器成就界面，展示本地档案里程碑与达成进度。",
          caption: "本地档案与阶段目标",
        },
        {
          src: "/generated/ti-simulator/images/match-summary.png",
          alt: "TI 模拟器赛后总结界面，展示比分、关键选手表现与复盘报告。",
          caption: "赛后数据与系列赛复盘",
        },
      ],
    },
  },
  en: {
    hero: "/images/hero/ti-simulator-en.png",
    og: "/images/og/ti-simulator-en.png",
    alt: "TI Simulator preview illustration showing simulated match flow and tactical panels.",
    disclaimer: "In-development preview capture for non-commercial showcase",
    gallery: {
      eyebrow: "Preview Screens",
      title: "Key interfaces from early calls to post-series stats",
      description: "Five screens from the current Windows playtest build covering match overview, checkpoint choices, map state, milestones, and post-match recap.",
      images: [
        {
          src: "/generated/ti-simulator/images/hero-gameplay-en.png",
          alt: "TI Simulator overview screen showing roster, match flow, map, and stat panels.",
          caption: "Match & bracket overview",
        },
        {
          src: "/generated/ti-simulator/images/decision-screen-en.png",
          alt: "TI Simulator checkpoint screen showing safe, balanced, and risky tactical options.",
          caption: "Checkpoint tactical calls",
        },
        {
          src: "/generated/ti-simulator/images/strategy-map-en.png",
          alt: "TI Simulator strategy map showing three lanes, objectives, and map pressure.",
          caption: "Lane & objective state",
        },
        {
          src: "/generated/ti-simulator/images/achievement-screen-en.png",
          alt: "TI Simulator achievement screen showing local profile milestones and progress.",
          caption: "Profile milestones",
        },
        {
          src: "/generated/ti-simulator/images/match-summary-en.png",
          alt: "TI Simulator match summary screen showing series score, standout players, and recap notes.",
          caption: "Post-series breakdown",
        },
      ],
    },
  },
} satisfies Record<Locale, GamePreviewMedia>;

export const gamePreviewMedia: Record<string, Record<Locale, GamePreviewMedia>> = {
  "out-of-tokens": outOfTokensPreviewMedia,
  "untitled-action-rpg": {
    "zh-CN": {
      hero: "/images/untitled-action-rpg/overview.png",
      og: "/images/untitled-action-rpg/overview.png",
      alt: "未定名横版动作 RPG 概念宣传图，展示 Q 版纸娃娃角色、横版关卡战斗、Boss 挑战与装备换装。",
      disclaimer: "原创/生成概念宣传图 · 实机画面随开发进度更新",
      gallery: {
        eyebrow: "概念视觉",
        title: "围绕小镇歇脚、横版闯关与 Boss 战的视觉设定",
        description: "这三张概念图用来定调角色头身比、横版平台打斗和城镇生活氛围，实机录屏会在首章跑通后补上。",
        images: [
          {
            src: "/images/untitled-action-rpg/overview.png",
            alt: "未定名横版动作 RPG 玩法总览概念图，展示纸娃娃换装、关卡探索、战斗与战利品。",
            caption: "角色换装与章节流程设定",
          },
          {
            src: "/images/untitled-action-rpg/combat-hero.png",
            alt: "未定名横版动作 RPG 横版战斗概念图，展示高低平台走位、技能挥砍与大型 Boss 对决。",
            caption: "高低平台走位与多阶段 Boss 战",
          },
          {
            src: "/images/untitled-action-rpg/town-life.png",
            alt: "未定名横版动作 RPG 城镇生活概念图，展示接委托、锻造、钓鱼与换装日常。",
            caption: "城镇铁匠铺、钓鱼点与日常歇脚",
          },
        ],
      },
    },
    en: {
      hero: "/images/untitled-action-rpg/overview.png",
      og: "/images/untitled-action-rpg/overview.png",
      alt: "Concept collage for the untitled side-scrolling action RPG showing chibi paper-doll characters, stage combat, boss fights, and gear.",
      disclaimer: "Original/generated concept art · In-engine captures will follow as Chapter 1 comes together",
      gallery: {
        eyebrow: "Concept Visuals",
        title: "Setting the tone for town life, stage combat, and bosses",
        description: "Three early concept sheets establishing chibi proportions, platform combat readability, and the town hub mood.",
        images: [
          {
            src: "/images/untitled-action-rpg/overview.png",
            alt: "Concept overview sheet showing paper-doll customization, field exploration, combat, and loot.",
            caption: "Paper-doll outfits & chapter loop",
          },
          {
            src: "/images/untitled-action-rpg/combat-hero.png",
            alt: "Combat concept art showing platform spacing, melee combos, and a large boss encounter.",
            caption: "Platform spacing & multi-phase bosses",
          },
          {
            src: "/images/untitled-action-rpg/town-life.png",
            alt: "Town hub concept art showing quest boards, smithing, fishing, and outfit stalls.",
            caption: "Town hub errands, smithing & fishing",
          },
        ],
      },
    },
  },
  "ti-simulator": tiSimulatorPreviewMedia,
};

export function getGamePreviewMedia(slug: string, locale: Locale): GamePreviewMedia {
  return gamePreviewMedia[slug]?.[locale] ?? outOfTokensPreviewMedia[locale];
}

export const tiSimulatorShareMedia = {
  "zh-CN": {
    wechatCover: "/images/wechat/ti-simulator-preview-cover.png",
    homepageOg: "/media/out-of-tokens/og-cover.jpg",
  },
  en: {
    wechatCover: "/images/wechat/ti-simulator-preview-cover-en.png",
    homepageOg: "/media/out-of-tokens/og-cover.jpg",
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

  return outOfTokensPreviewMedia[locale].og;
}
