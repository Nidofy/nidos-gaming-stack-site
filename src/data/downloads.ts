import type { LocalizedString, LocalizedStringArray } from "@/types/i18n";

export type DownloadPlatform = "windows" | "macos" | "linux";
export type ReleaseChannel = "alpha" | "beta" | "stable";

export type DownloadFile = {
  platform: DownloadPlatform;
  displayName: LocalizedString;
  filename: string;
  globalFilename?: string;
  chinaFilename?: string;
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
    version: "0.1.1-preview.20260701-r3",
    channel: "alpha",
    releasedAt: "2026-07-01",
    displayDate: {
      "zh-CN": "2026-07-01",
      en: "2026-07-01",
    },
    summary: {
      "zh-CN": "TI15 模拟器 Windows 内部试玩测试包。当前仅面向朋友小范围测试，提供便携版 zip 下载镜像，下载后可解压运行。",
      en: "TI15 Simulator Windows internal playtest build. This preview is shared with a small group of friends as portable zip download mirrors.",
    },
    files: [
      {
        platform: "windows",
        displayName: { "zh-CN": "Windows x64 便携版", en: "Windows x64 Portable" },
        filename: "TI15Simulator Windows x64 portable preview zip",
        globalFilename: "TI15Simulator-portable-windows-x64-20260701-preview-r3.zip",
        chinaFilename: "TI15Simulator-portable-windows-x64-20260701-preview-r3.zip",
        size: "",
        sha256: "",
        globalMirror:
          "https://github.com/Nidofy/nidos-gaming-stack-site/releases/download/preview-0.1.1/TI15Simulator-portable-windows-x64-20260701-preview-r3.zip",
        chinaMirror: "https://pan.baidu.com/s/1VtsDP0PGqyfVUQVPvZ0iRQ?pwd=naqa",
        available: true,
      },
    ],
    changelog: {
      "zh-CN": [
        "提供 Windows x64 便携版内部试玩包。",
        "提供 GitHub Release 与百度网盘两个下载镜像。",
        "当前测试范围为朋友内部试玩，暂不发布 macOS、Linux 或正式安装包。",
      ],
      en: [
        "Provide a Windows x64 portable internal playtest package.",
        "Provide both GitHub Release and Baidu Netdisk download mirrors.",
        "Limit this build to a small internal playtest; macOS, Linux, and formal installers are not published yet.",
      ],
    },
    knownIssues: {
      "zh-CN": [
        "当前仅提供 Windows 版本，macOS 和 Linux 暂未发布。",
        "这是内部试玩测试包，可能存在启动、显示、存档或玩法流程问题。",
        "GitHub Release 和百度网盘镜像均已提供；如果某个镜像临时不可用，请切换另一个镜像重试。",
      ],
      en: [
        "Only the Windows build is available for now; macOS and Linux builds are not published.",
        "This is an internal playtest package and may include startup, display, save, or gameplay-flow issues.",
        "Both GitHub Release and Baidu Netdisk mirrors are provided; if one mirror is temporarily unavailable, try the other.",
      ],
    },
    latest: true,
  },
];

export function getLatestRelease(gameSlug: string) {
  return releases.find((release) => release.gameSlug === gameSlug && release.latest);
}
