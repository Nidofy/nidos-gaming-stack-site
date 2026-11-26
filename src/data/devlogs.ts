import type { Locale } from "@/i18n/locales";
import { getLocalized } from "@/i18n/utils";
import type { LocalizedString, LocalizedStringArray } from "@/types/i18n";

export interface LocalizedDevlogEntry {
  id: string;
  date: string;
  projectSlug: string;
  projectName: LocalizedString;
  badge: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  highlights: LocalizedStringArray;
  projectHref: Record<Locale, string>;
}

export const devlogEntries: LocalizedDevlogEntry[] = [
  {
    id: "2026-11-out-of-tokens-web-preview",
    date: "2026-11",
    projectSlug: "out-of-tokens",
    projectName: { "zh-CN": "Out of Tokens · 开源万事屋", en: "Out of Tokens" },
    badge: { "zh-CN": "网页试玩开放", en: "Web Preview Live" },
    title: {
      "zh-CN": "《Out of Tokens》开放浏览器直接试玩，补齐 12 位伙伴表情与小镇地图",
      en: "Out of Tokens launches its playable browser preview with full 12-partner expressions and town map",
    },
    summary: {
      "zh-CN": "把确定性经营内核、车库工坊昼夜场景、需求澄清与本地/云端算力编队整合成了点开即玩的网页版本，并接入了客户圆章、园区地图与全员对话差分表情。",
      en: "Brought the deterministic studio simulation, day-night garage scenes, brief clarification, and local-vs-cloud dispatch forecast into a zero-install browser build, complete with client seals, the watercolor campus map, and 12-character expression sets.",
    },
    highlights: {
      "zh-CN": [
        "支持桌面与手机竖屏浏览器直接运行，默认保存在本地 IndexedDB 并可导出 JSON 存档。",
        "实装下午茶歇、礼物偏好、搭档默契加成与 0 槽群聊抽屉，晚上默认停工回血。",
        "DSH 宿主与 Tauri 桌面端仍在推进版本兼容与长驻性能核验，现阶段优先在 GitHub Pages 维护网页试玩版。",
      ],
      en: [
        "Runs in desktop and mobile browsers with local IndexedDB autosaves and one-click JSON backup export.",
        "Added daily tea breaks, gift preferences, duo synergy bonuses, and the zero-cost group chat drawer.",
        "DSH host and Tauri desktop targets remain under compatibility testing while the browser build leads.",
      ],
    },
    projectHref: {
      "zh-CN": "/zh-CN/games/out-of-tokens",
      en: "/en/games/out-of-tokens",
    },
  },
  {
    id: "2026-10-ai-village-08-preview",
    date: "2026-10",
    projectSlug: "ai-village",
    projectName: { "zh-CN": "AI 小院", en: "AI Village" },
    badge: { "zh-CN": "0.8.0-preview.1", en: "0.8.0-preview.1" },
    title: {
      "zh-CN": "《AI 小院》0.8 本地预览：加入两段庭院偶遇与手账收藏分类",
      en: "AI Village 0.8 local preview adds two breeze encounters and journal collection tabs",
    },
    summary: {
      "zh-CN": "围绕无压力陪伴节奏新增了“飞走的留言”与“叶子的来信”两场双人偶遇，完成后可在院内摆上风信叶子盆等纪念物，手账也按分类整理了过往回忆。",
      en: "Added two optional two-resident courtyard encounters ('A Windblown Note' and 'A Letter from the Leaves') that reward placeable keepsakes, plus categorized collection tabs in the journal.",
    },
    highlights: {
      "zh-CN": [
        "继续保持纯本地规则驱动与收起自动停表，不消耗任何模型 API 额度。",
        "保留 0.7 预览期的餐桌三连棋玩法，并在项目页补充了存档备份与安装说明。",
      ],
      en: [
        "Continues to run 100% on local rules with zero model API calls and automatic pause while hidden.",
        "Retains the 0.7 tabletop tic-tac-toe preview alongside updated save-backup and setup notes.",
      ],
    },
    projectHref: {
      "zh-CN": "/zh-CN/plugins/ai-village",
      en: "/en/plugins/ai-village",
    },
  },
  {
    id: "2026-07-untitled-rpg-concept",
    date: "2026-07",
    projectSlug: "untitled-action-rpg",
    projectName: { "zh-CN": "未定名横版动作 RPG", en: "Untitled Action RPG" },
    badge: { "zh-CN": "原型开发中", en: "In Development" },
    title: {
      "zh-CN": "立项单机 2D 横版动作 RPG 练习作，先定调首章结构与纸娃娃换装",
      en: "Kicking off a compact 2D side-scrolling action RPG focused on feel and paper-doll outfits",
    },
    summary: {
      "zh-CN": "确定按“一座小镇 + 一条横版关卡 + 一场多阶段 Boss”的紧凑单机章节推进，把外观穿搭和战斗数值彻底拆开。",
      en: "Scoped the first milestone around one warm town hub, one side-scrolling field stage, and one readable multi-phase boss, keeping cosmetic outfits separate from gear stats.",
    },
    highlights: {
      "zh-CN": [
        "优先调校跳跃、急停、挥砍连段与受击反馈，暂不盲目堆叠大地图。",
        "首章跑通并稳定后再开放 PC 试玩包下载。",
      ],
      en: [
        "Prioritizing jump arcs, turnaround responsiveness, and boss attack tells before expanding map count.",
        "A downloadable PC demo will follow once Chapter 1 plays cleanly end to end.",
      ],
    },
    projectHref: {
      "zh-CN": "/zh-CN/games/untitled-action-rpg",
      en: "/en/games/untitled-action-rpg",
    },
  },
  {
    id: "2026-07-ti-simulator-020",
    date: "2026-07",
    projectSlug: "ti-simulator",
    projectName: { "zh-CN": "TI 模拟器", en: "TI Simulator" },
    badge: { "zh-CN": "0.2.0-preview", en: "0.2.0-preview" },
    title: {
      "zh-CN": "《TI 模拟器》更新 0.2.0 Windows 便携试玩包与双下载镜像",
      en: "TI Simulator 0.2.0 portable Windows playtest & dual download mirrors",
    },
    summary: {
      "zh-CN": "整理了架空杯赛从关键节点三选一决策、三路战术态势到赛后复盘统计的完整单局流程，并提供免安装 ZIP 包与新手上手指引。",
      en: "Packaged a full fictional tournament loop—checkpoint decisions, three-lane map state, and post-series stat recaps—into a portable Windows x64 zip with starter guides.",
    },
    highlights: {
      "zh-CN": [
        "同步上传 GitHub Release 与百度网盘镜像，解压后双击 Start-Game.bat 即可启动。",
        "补充中英文游玩说明，方便测试朋友记录启动、操作理解与赛后报告反馈。",
      ],
      en: [
        "Hosted on both GitHub Release and Baidu Netdisk; unzip to a normal folder and run Start-Game.bat.",
        "Included bilingual play guides for early playtesters.",
      ],
    },
    projectHref: {
      "zh-CN": "/zh-CN/games/ti-simulator",
      en: "/en/games/ti-simulator",
    },
  },
];

export function getLocalizedDevlogs(locale: Locale) {
  return devlogEntries.map((entry) => ({
    id: entry.id,
    date: entry.date,
    projectSlug: entry.projectSlug,
    projectName: getLocalized(entry.projectName, locale),
    badge: getLocalized(entry.badge, locale),
    title: getLocalized(entry.title, locale),
    summary: getLocalized(entry.summary, locale),
    highlights: getLocalized(entry.highlights, locale),
    projectHref: entry.projectHref[locale],
  }));
}
