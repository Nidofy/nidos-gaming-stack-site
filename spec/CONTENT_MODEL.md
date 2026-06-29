# Content Model

## 目标

定义站点内容结构，确保首页、游戏详情页、下载页、开发日志、SEO 和微信公众号落地页都能从统一数据源生成，支持当前 TI 模拟器和未来更多作品。

## 约束

- 不允许只为 TI 模拟器写死字段或页面。
- 中英文内容必须字段结构一致，即使文案风格不同。
- 下载链接、版本信息和 latest.json 必须引用 release 数据，不在页面正文中重复维护。
- 图片、视频、封面和截图必须有授权来源或由作者原创。

## 推荐实现方式

建议内容目录：

```text
src/
  content/
    games/
      ti-simulator.zh.mdx
      ti-simulator.en.mdx
    posts/
      2026-xx-ti-devlog.zh.mdx
      2026-xx-ti-devlog.en.mdx
    wechat/
      ti-simulator-launch.zh.mdx
  data/
    releases/
      ti-simulator.json
    navigation.ts
    site.ts
```

建议游戏字段：

- `slug`
- `locale`
- `title`
- `shortTitle`
- `status`
- `summary`
- `description`
- `tags`
- `platforms`
- `heroMedia`
- `gallery`
- `primaryCta`
- `releaseRef`
- `wechatCampaignRef`
- `seo`
- `legalNotes`

建议 release 字段：

- `gameSlug`
- `version`
- `channel`
- `releasedAt`
- `platforms`
- `files`
- `checksum`
- `size`
- `minimumRequirements`
- `changelog`
- `knownIssues`
- `latest`

## 后续 Codex 修改代码时必须遵守的检查项

- 新增内容是否通过 schema 校验。
- 中文和英文是否有相同 slug、相同核心字段和可对应结构。
- 下载信息是否只来自 release 数据。
- 媒体资源是否有 alt、caption 和授权说明。
- 内容字段是否足够支持未来第二、第三个游戏，无需改动核心页面模板。
