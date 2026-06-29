# SEO Spec

## 目标

建立适合个人游戏站的 SEO、社交分享和媒体预览规范，使中文、英文、微信、国际社区和搜索引擎都能正确理解页面内容。

## 约束

- SEO 元数据必须来自内容模型，不在多个组件中重复硬编码。
- 中英文页面必须有独立 title、description、canonical 和 hreflang。
- Open Graph 图片必须使用授权或原创素材。
- 不使用受保护商标制造误导性搜索流量。

## 推荐实现方式

每个页面应生成：

- `<title>`
- meta description
- canonical URL
- alternate hreflang
- Open Graph title、description、image、type、url
- Twitter/X card
- JSON-LD，优先使用 WebSite、VideoGame、SoftwareApplication、Article 等合适类型

站点层配置建议：

- `siteName`
- `baseUrl`
- `defaultLocale`
- `locales`
- `socialImageFallback`
- `publisher`

## 后续 Codex 修改代码时必须遵守的检查项

- title 和 description 是否按语言区分。
- 是否为游戏详情页生成适合分享的 OG 图。
- 是否设置 canonical，避免中英文互相抢索引。
- 是否使用结构化数据表达游戏、软件、文章。
- 是否避免未经授权商标关键词堆砌。
- 微信分享预览是否有合适标题、摘要和图片。
