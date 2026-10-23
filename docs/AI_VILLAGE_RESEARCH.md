# AI 小院页面资料核对

## 当前网页素材包改版：0.8.0-preview.1

本节取代下方 0.7 初版资料作为当前页面依据。输入为用户指定的 `D:/Documents/FeiyangChen/devApps/dsh_plugin/output/ai-village-web-kit-2026-10-23/`，已读取 HANDOFF.txt、copy.json、release.json 和 assets.json。

- 双语 copy 导入 `src/data/ai-village/copy.json`，仅将安装包名称改为 `{packageFile}` 占位符，由 release 单一来源渲染；其余文案保留。
- 版本与 HEAD 来自包内 release.json：0.8.0-preview.1、9b4c89632df2644305188d276c45995859cfdc30。未把本地预览误作公开发布。
- 5 张 WebP 已校验 SHA-256 后原样复制，未重绘、裁剪、改图或生成新素材。来源保存在 `docs/ai-village-assets.json`；旧图保留但页面不再引用。
- 首屏共读插画与偶遇插画保持完整 3:2，明确标注非游戏截图；画廊为 0.8 实机照片、0.8 英文桌面界面及历史 0.7 棋局照片。媒体按角色分配，不依赖旧数组索引。
- 首页加入 AI 小院标签与新版预览卡，导航名称来自同一插件数据，hash 直接激活对应面板。默认重点仍是 TI 模拟器。详情页 SEO 采用包内完整标题。
- 构建及 i18n 检查通过，Astro 54 文件 0 errors / 0 warnings / 0 hints；静态 HTML 核验五图、版本、包名和单一 h1 均通过。
- 浏览器已核验 1440px 桌面、390px 手机和 320px 中英文；无横向溢出，插画比例保持 1.5。首页 hash 入口、预览 CTA、Home/End 切换、安装锚点及 FAQ 键盘展开通过。真实移动设备尚未测试。
- 新版预览文件前缀为 `ai-village-v08-`，与下方旧版截图区分。尚未部署或提交 Git。

---

以下为 0.7 初版研究与预览历史，非当前页面内容。

核对时间：2026-10-23。用户已明确要求网页内容以本地版本为准。

## 版本依据

本地仓库：`D:/Documents/FeiyangChen/devApps/dsh_plugin`。
核对 HEAD：`41f512d61c39aae099190c538a555fc81cfd6466`。

- `packages/ai-village/package.json` 与 `dist/manifest.json`：`@nidofy/dsh-ai-village`，`0.7.0-preview.3`；Windows x64，官方 DSH `0.2.1-rc.2`。
- `packages/ai-village/README.md`：当前加载填色修复、preview.2 棋局、preview.1 连续生活及历史功能。最新说明优先于同文件下方的历史安装示例。
- `docs/ai-village/table-preview/IMPLEMENTATION.md`：餐桌棋局、键盘落子、共同经历与同桌棋子、用餐时棋盘暂收、迁移限制。
- `docs/ai-village/living-v07-v09/IMPLEMENTATION.md`：自主日常与故事内容来源。
- `docs/ai-village/ui-v1.1/RESULTS.md`：既有界面与验收边界。
- `docs/install.md`：宿主安装、启用与重启方式；其中历史包版本不作为当前版本来源。

公开 [GitHub 仓库](https://github.com/Nidofy/dsh_plugin) 已查阅。根 README 仍主要介绍 0.6.1，因此只用作公开源码入口，不能覆盖本地版本事实。网页不把未经核实的 GitHub 文档称为当前预览完整安装说明。

## 页面表达

- 中文名称 AI 小院，英文 AI Village；分类为 DSH 插件，状态为开发中、内部预览。
- 居民日常、玩家故事、家具预设锚点、真实拍照、相册、手账、棋局均来自本地已实现说明。
- 不宣称联网智能体驱动、自由网格装修、浏览器即玩、多平台兼容或正式发布。
- 没有离线推进、每日惩罚、关系离线衰减；小院不需 API key；与 Git/Hg 共存、与 Live2D 互斥。
- 页面有安装方式，但不提供 tgz 下载，不把构建时间当作发布日期。公开包地址和正式发布日期仍待后续发行确认。

## 素材

复用作者提供仓库的游戏内照片和 UI-v1.1 截图。图片仅做 WebP 压缩，无裁剪、重绘或新生成；原始路径、输入/输出 SHA-256、尺寸与体积见 `public/media/ai-village/provenance.json`。

- 主图：`docs/ai-village/table-preview/native/check-05/native-board-postcard.png`，720×960。属于 preview.2 棋局证据，玩法沿用至 preview.3。
- 展开界面：`packages/ai-village/art/QA/ui-v11/visual/1080x760-light-zh-default.png`。
- 深色居民面板：`packages/ai-village/art/QA/ui-v11/visual/1080x760-dark-zh-residents.png`。
- 所有截图按开发阶段标注，含外围测试界面；不宣称是当前版本重新拍摄。
- 不使用 ART_REVIEW 门庭候选或其他插件的 Live2D/皮肤资源。MIT 代码许可不扩展为全部美术许可；网页明确保留该区别。

## 实现和假设

通用模板 `PluginPage.astro` + `PluginEntry` 类型 + `plugins.ts` 双语数据；版本事实集中在 `plugin-releases.ts`。通过动态路由生成两个语言版本，复用站点 SEO 和语言切换，接入首页、导航和 sitemap。

假设：插件作为网站实验作品的独立分类，不归入游戏下载中心。TODO：正式公开安装包及发行日期确认后，接入包含文件大小、SHA-256 和渠道的 release 数据。

## 验证结果

- `npm run build` 通过，双语检查通过，Astro 54 文件诊断为 0 errors / 0 warnings / 0 hints。构建仍输出项目已有 Cloudflare sharp 运行时与 node 内置模块 externalization 提示。
- 检查生成的中英文 HTML：单一 h1、版本、canonical、hreflang、SoftwareApplication、首页入口、sitemap 和全部图片文件通过。
- 构建产物 HTTP 200；浏览器 666px 窄屏双语均无横向溢出、图片加载正常；安装锚点、FAQ Enter 展开、双向语言切换正常。
- 首轮只验证了 666px；后续已通过浏览器 viewport 能力补齐桌面与手机检查，见下节。
- `npm run dev` 受本机 Cloudflare Workers 运行时启动失败及配置日志目录权限影响；改用构建产物静态预览完成上述检查，未改动部署配置。
- 未新增依赖、未提交 Git、未部署线上。

## 桌面 / 手机预览复核（2026-10-23）

使用现有构建产物，以浏览器真实视口覆盖检查，无页面代码变更。

| 视口 | 中文 | 英文 |
| --- | --- | --- |
| 1440 × 1000 | 双栏首屏、双栏截图，无横向溢出 | 双栏布局，无横向溢出 |
| 390 × 844 | 单栏布局，主按钮高度至少 44px，无横向溢出 | 单栏布局，无横向溢出 |
| 320 × 740 | 无横向溢出，main 内无越界元素 | 无横向溢出 |

- 已保存中文桌面/手机首屏、全页长图及手机 FAQ 展开截图。
- 手机安装锚点定位在固定导航下方；FAQ 用 Enter 正常展开，焦点轮廓清晰；语言切换正常。浏览器无捕获的 error 日志。
- 桌面全页已目视复核；手机主图从首屏底部开始出现，首屏主要承载介绍与 CTA，此为当前排版选择，未擅自调整。
- 此为 Chromium 响应式视口检查，不代表 iOS Safari 或真实触屏设备验收。未做新的性能跑分。
- 截图目录：`C:/Users/enxi1/.codex/visualizations/2026/10/23/01a16668-580a-7550-990d-847a61176227/`，文件前缀 `ai-village-desktop` / `ai-village-mobile`。
