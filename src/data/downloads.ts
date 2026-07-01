import type { LocalizedString, LocalizedStringArray } from "@/types/i18n";

export type DownloadPlatform = "windows" | "macos" | "linux";
export type ReleaseChannel = "alpha" | "beta" | "stable";

export type DownloadFile = {
  platform: DownloadPlatform;
  displayName: LocalizedString;
  filename: string;
  size: string;
  sha256: string;
  globalMirror: string;
  chinaMirror: string;
  available: boolean;
};

export type GameRelease = {
  gameSlug: string;
  version: string;
  channel: ReleaseChannel;
  releasedAt: string;
  displayDate: LocalizedString;
  summary: LocalizedString;
  files: DownloadFile[];
  changelog: LocalizedStringArray;
  knownIssues: LocalizedStringArray;
  latest: boolean;
};

export const releases: GameRelease[] = [
  {
    gameSlug: "ti-simulator",
    version: "0.1.0-playtest",
    channel: "alpha",
    releasedAt: "2026-07-15",
    displayDate: {
      "zh-CN": "预计 2026-07-15",
      en: "Planned for 2026-07-15",
    },
    summary: {
      "zh-CN": "Preview Release 0.1 网站预览版。游戏安装包尚未公开发布，当前用于展示项目介绍、截图和下载状态。",
      en: "Preview Release 0.1 website build. Game installers are not publicly released yet; this page currently presents the project, screenshots, and release status.",
    },
    files: [
      {
        platform: "windows",
        displayName: { "zh-CN": "Windows", en: "Windows" },
        filename: "ti-simulator-0.1.0-playtest-win-x64.zip",
        size: "",
        sha256: "",
        globalMirror: "",
        chinaMirror: "",
        available: false,
      },
      {
        platform: "macos",
        displayName: { "zh-CN": "macOS", en: "macOS" },
        filename: "ti-simulator-0.1.0-playtest-macos-universal.zip",
        size: "",
        sha256: "",
        globalMirror: "",
        chinaMirror: "",
        available: false,
      },
      {
        platform: "linux",
        displayName: { "zh-CN": "Linux", en: "Linux" },
        filename: "ti-simulator-0.1.0-playtest-linux-x64.tar.gz",
        size: "",
        sha256: "",
        globalMirror: "",
        chinaMirror: "",
        available: false,
      },
    ],
    changelog: {
      "zh-CN": ["准备 Preview Release 0.1 网站。", "展示真实宣传图和玩法示意截图。", "下载入口保持待发布状态，避免提供无效安装包链接。"],
      en: ["Prepare the Preview Release 0.1 website.", "Show real promotional artwork and gameplay preview screenshots.", "Keep download entries in Coming Soon state to avoid invalid installer links."],
    },
    knownIssues: {
      "zh-CN": ["游戏安装包尚未公开下载。", "文件大小和 SHA-256 会在真实构建产物发布时补齐。"],
      en: ["The game installer is not publicly downloadable yet.", "File size and SHA-256 will be added when real build artifacts are published."],
    },
    latest: true,
  },
];

export function getLatestRelease(gameSlug: string) {
  return releases.find((release) => release.gameSlug === gameSlug && release.latest);
}
