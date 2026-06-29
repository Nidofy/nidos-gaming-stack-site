# Implementation Plan

本计划用于把“Nido的游戏小栈”从规范阶段推进到可运行的 Astro 站点。当前阶段只建立工程规范，不安装依赖、不实现完整网页。

## 当前仓库状态

截至本文件创建时，当前目录没有检测到 `package.json`，也不是 Git 仓库。因此 Phase 0 应先初始化项目，再安装依赖。不要在未确认前切换包管理器。

## Phase 0：仓库初始化与依赖安装

目标：

- 初始化 Astro + TypeScript + Tailwind CSS + MDX 项目。
- 建立基础目录、代码格式化和内容集合 schema。
- 保持后续内容驱动架构。

建议命令：

```powershell
npm create astro@latest .
npm install
npx astro add tailwind
npx astro add mdx
```

如用户偏好 pnpm 或 yarn，应在执行前确认。若初始化工具会覆盖已有文件，必须先检查 diff 并保留本阶段创建的 `AGENTS.md`、`spec/`、`skills/`、`subagents/` 和 `docs/`。

建议目录：

```text
src/
  components/
  content/
    games/
    posts/
    wechat/
  data/
    releases/
  i18n/
  layouts/
  pages/
  styles/
  types/
public/
  media/
  releases/
```

验收：

- `npm run build` 可运行。
- Tailwind 和 MDX 可用。
- 内容集合 schema 初版存在。
- 未破坏本阶段规范文件。

## Phase 1：首页与基础设计系统

目标：

- 实现 `/zh/` 和 `/en/` 首页。
- 建立基础布局、导航、页脚、SEO 组件、按钮、媒体展示组件和设计 token。
- 首页展示当前重点作品，同时保留未来多个游戏入口。

实现重点：

- 首页从 games 内容集合读取 featured game 和作品列表。
- 使用大标题、大媒体、清晰 CTA 和留白建立产品展示感。
- 不复制 Apple 页面结构或素材。
- 移动端优先，首屏可读，按钮不拥挤。

验收：

- 新增第二个游戏内容后首页无需改模板。
- 中英文首页结构一致。
- Lighthouse 基础性能和可访问性无明显阻塞。

## Phase 2：TI 模拟器游戏详情页

目标：

- 新增 TI 模拟器的中英文游戏内容。
- 实现通用游戏详情模板 `/zh/games/[slug]/` 和 `/en/games/[slug]/`。

实现重点：

- 用架空化、原创化、描述性表达介绍项目。
- 不使用未经授权的 Dota/Valve/The International/战队/选手素材作为核心资产。
- 页面包含状态、玩法、截图/视频、平台、下载 CTA、FAQ、开发日志入口。

验收：

- TI 模拟器只是 games 集合中的一个条目。
- 中英文字段一致。
- 所有媒体有 alt 和授权说明。

## Phase 3：下载页、release 数据、latest.json

目标：

- 建立 release 数据模型。
- 实现下载中心和单游戏下载页。
- 建立 `public/releases/latest.json` 的维护或生成策略。

实现重点：

- `src/data/releases/[gameSlug].json` 管理版本。
- 下载按钮统一引用 release 数据。
- 区分 stable、beta、alpha、history。
- 展示平台、文件大小、sha256、发布日期和 known issues。

验收：

- latest.json 与 release 数据一致。
- 不存在页面内临时手写下载链接。
- 未发布平台不显示可下载状态。

## Phase 4：公众号微信落地页

目标：

- 实现 `/zh/wechat/[campaign]/`。
- 支持公众号文章读者进入站点后快速了解项目、查看媒体、下载或继续阅读。

实现重点：

- 微信落地页内容来自 `src/content/wechat/`。
- 每个 campaign 关联一个 game slug。
- 页面包含文章 hook、快速上下文、截图/视频、下载 CTA、FAQ 和返回正式项目页链接。

验收：

- 移动端微信内置浏览器阅读体验良好。
- 分享标题、摘要、图片明确。
- 不替代正式游戏详情页。

## Phase 5：开发日志系统

目标：

- 实现中英文开发日志列表和详情。
- 支持按游戏、标签、日期筛选或聚合。

实现重点：

- 使用 MDX 编写日志。
- 每篇日志包含 locale、gameSlug、date、summary、tags、seo。
- 中文可更像公众号延伸，英文更直接说明开发进展。

验收：

- `/zh/devlog/`、`/en/devlog/`、详情页可用。
- 游戏详情页能展示相关日志。
- 中英文日志主题一致。

## Phase 6：SEO、移动端、性能与可访问性检查

目标：

- 补齐 SEO、社交分享、结构化数据、移动端 QA、性能预算和无障碍检查。

实现重点：

- 统一 SEO 组件。
- canonical、hreflang、Open Graph、Twitter/X Card。
- 游戏页使用 VideoGame 或 SoftwareApplication JSON-LD。
- 图片尺寸、懒加载、视频海报和替代文本。
- 键盘导航和可读颜色对比。

验收：

- 构建通过。
- 核心页面无明显移动端溢出。
- 关键页面有完整元数据。
- 下载流程从首页到文件链接可追溯。

## Phase 7：部署到 Cloudflare Pages / Vercel 的说明

目标：

- 编写部署说明，并完成可选部署配置。
- 优先考虑中美访问、静态站点稳定性和下载资源策略。

Cloudflare Pages 建议：

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 使用项目 `.nvmrc` 或平台设置固定。

Vercel 建议：

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

实现重点：

- 明确环境变量。
- 明确 redirects 和 headers。
- 为 `public/releases/latest.json` 设置合理缓存策略。
- 大文件下载可考虑独立对象存储或 release hosting，不把所有大型安装包直接塞进站点仓库。

验收：

- 部署文档可复现。
- 构建命令和输出目录明确。
- 下载文件托管策略明确。
- 未在仓库中提交敏感 token。

## 第二阶段建议 Prompt

```text
你现在继续作为本仓库的实现 agent。请先阅读 AGENTS.md、spec/PRODUCT_SPEC.md、spec/CONTENT_MODEL.md、spec/DESIGN_SYSTEM.md、spec/ROUTING_SPEC.md 和 docs/IMPLEMENTATION_PLAN.md。

进入 Phase 0 和 Phase 1：在不破坏现有规范文件的前提下，初始化 Astro + TypeScript + Tailwind CSS + MDX 项目。如果没有 package.json，使用 npm 初始化；如果已有包管理器锁文件，沿用现有包管理器。然后建立基础目录、内容集合 schema、站点配置、i18n UI 字符串、基础布局、SEO 组件、首页骨架和最小可运行的 /zh/、/en/ 首页。

本阶段不要实现完整 TI 模拟器详情页，不要添加真实下载文件，不要使用未经授权的 Dota/Valve/The International/战队/选手素材。首页应从 games 内容集合读取示例数据，并保证未来新增其他游戏无需改模板。完成后运行构建并汇报修改文件、验证结果和未解决事项。
```

## 当前不确定事项

- 默认根路径 `/` 应跳转中文、英文，还是展示语言选择。
- TI 模拟器的正式英文名、中文名、logo 和原创视觉资产尚未确认。
- 下载文件将托管在 GitHub Releases、Cloudflare R2、对象存储、自建服务器或其他平台尚未确认。
- 包管理器偏好尚未确认；当前建议暂用 npm，除非后续发现已有锁文件。
