import type { Locale } from "./site";

export type DownloadPlatform = "Windows" | "macOS" | "Linux";
export type ReleaseChannel = "alpha" | "beta" | "stable";

export type DownloadFile = {
  platform: DownloadPlatform;
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
  displayDate: Record<Locale, string>;
  summary: Record<Locale, string>;
  files: DownloadFile[];
  changelog: Record<Locale, string[]>;
  knownIssues: Record<Locale, string[]>;
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
      "zh-CN": "第一轮封闭测试占位版本，用于验证核心模拟流程和下载分发页面。",
      en: "Initial closed playtest placeholder for validating the core simulation loop and download distribution page.",
    },
    files: [
      {
        platform: "Windows",
        filename: "ti-simulator-0.1.0-playtest-win-x64.zip",
        size: "TODO",
        sha256: "TODO-SHA256-WINDOWS",
        globalMirror: "https://example.com/releases/ti-simulator/windows",
        chinaMirror: "https://example.cn/releases/ti-simulator/windows",
        available: false,
      },
      {
        platform: "macOS",
        filename: "ti-simulator-0.1.0-playtest-macos-universal.zip",
        size: "TODO",
        sha256: "TODO-SHA256-MACOS",
        globalMirror: "https://example.com/releases/ti-simulator/macos",
        chinaMirror: "https://example.cn/releases/ti-simulator/macos",
        available: false,
      },
      {
        platform: "Linux",
        filename: "ti-simulator-0.1.0-playtest-linux-x64.tar.gz",
        size: "TODO",
        sha256: "TODO-SHA256-LINUX",
        globalMirror: "https://example.com/releases/ti-simulator/linux",
        chinaMirror: "https://example.cn/releases/ti-simulator/linux",
        available: false,
      },
    ],
    changelog: {
      "zh-CN": ["TODO: 接入真实构建产物。", "预留全局镜像和国内镜像入口。", "建立版本号、校验值和已知问题展示结构。"],
      en: ["TODO: Attach real build artifacts.", "Reserve global and China mirror links.", "Add version, checksum, and known issue display structure."],
    },
    knownIssues: {
      "zh-CN": ["测试版尚未公开下载。", "文件大小和 SHA-256 仍为占位。"],
      en: ["The playtest build is not publicly downloadable yet.", "File size and SHA-256 values are placeholders."],
    },
    latest: true,
  },
];

export function getLatestRelease(gameSlug: string) {
  return releases.find((release) => release.gameSlug === gameSlug && release.latest);
}
