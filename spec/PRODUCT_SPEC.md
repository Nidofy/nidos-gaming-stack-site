# Product Spec

## 目标

建立一个长期维护的个人独立游戏发布站，中文名定稿为“Nido的游戏小栈”，英文名定稿为“Nido's Gaming Stack”。站点当前主推作品为《Out of Tokens · 开源万事屋》（`out-of-tokens`），并按统一作品序列展示 `out-of-tokens`、`ai-village`（AI 小院）、`untitled-action-rpg`（未定名横版动作 RPG）和 `ti-simulator`（TI 模拟器），同时支持后续继续加入小游戏、插件、下载页、开发日志和微信公众号推广落地页。

核心目标：

- 作为中美都能访问的官方发布入口。
- 给玩家提供清晰的项目介绍、在线试玩或下载入口、截图与版本说明。
- 给媒体、社区和英文用户提供结构化项目说明。
- 给微信公众号读者提供中文传播后的落地和转化路径。

## 约束

- 不做单一游戏硬编码，所有游戏、插件、release、日志和媒体信息应由内容或数据驱动。
- 作品展示顺序由统一配置控制，当前固定为：`out-of-tokens` → `ai-village` → `untitled-action-rpg` → `ti-simulator`。
- 不复制 Apple 的页面结构、素材、图标、字体或文案，只借鉴其克制留白与产品叙事方法。
- 不使用未经授权的真实赛事、战队、选手、Dota、Valve、The International 或商业大模型厂商官方品牌标识作为核心资产。
- 中英文内容结构保持一致，行文自然平实，避免“不是……而是……”“沉淀/闭环/赋能”等套路化 AI 腔与生硬机翻词。

## 推荐实现方式

- 使用 Astro + TypeScript + Tailwind CSS + MDX。
- 使用 Astro Content Collections 管理 games、posts、wechat-campaigns、releases 或等价结构。
- 页面模板按内容类型划分：主页、游戏详情、下载页、开发日志、微信公众号落地页。
- 首页展示重点作品和作品列表，不绑定单一游戏。
- 每个游戏定义统一字段：slug、title、locale、status、summary、hero、gallery、platforms、downloads、seo、legalNotes。

## 后续 Codex 修改代码时必须遵守的检查项

- 是否仍能在不改模板的情况下新增第二个游戏。
- 是否所有用户可见的游戏信息都来自内容模型或数据源。
- 是否避免了受保护商标和未经授权视觉资产。
- 是否明确区分中文传播文案和英文国际介绍。
- 是否维护了移动端、性能、SEO、可访问性和下载一致性。
