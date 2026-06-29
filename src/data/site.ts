export type Locale = "zh-CN" | "en";

export const locales: Locale[] = ["zh-CN", "en"];

export const site = {
  name: {
    "zh-CN": "Nido的游戏小栈",
    en: "Nido's Gaming Stack",
  },
  shortName: "Nido",
  baseUrl: "https://games.nido.dev",
  defaultLocale: "zh-CN" satisfies Locale,
  description: {
    "zh-CN": "一个长期维护的个人独立游戏发布站，展示模拟器、小游戏和实验性游戏项目。",
    en: "A long-running personal indie game release site for simulators, small games, and experimental projects.",
  },
  author: "Nido",
  email: "hello@nido.dev",
};

export const navItems = {
  "zh-CN": [
    { label: "作品", href: "/zh-CN/#games" },
    { label: "下载", href: "/zh-CN/download" },
    { label: "开发日志", href: "/zh-CN/devlog" },
    { label: "微信", href: "/zh-CN/wechat" },
  ],
  en: [
    { label: "Games", href: "/en/#games" },
    { label: "Download", href: "/en/download" },
    { label: "Devlog", href: "/en/devlog" },
  ],
} satisfies Record<Locale, Array<{ label: string; href: string }>>;
