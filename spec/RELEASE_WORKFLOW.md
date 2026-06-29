# Release Workflow

## 目标

定义从准备版本、更新 release 数据、生成下载页、检查 latest.json 到发布站点的流程，降低下载链接、版本号、文案和 SEO 不一致的风险。

## 约束

- 不允许直接在页面正文中手写临时下载链接。
- 不允许把 beta/alpha 版本描述为稳定版。
- 发布前必须检查中英文页面、下载数据、latest.json、移动端和基本可访问性。
- 不在没有用户明确要求时自动 git commit。

## 推荐实现方式

发布步骤：

1. 准备游戏构建产物和校验值。
2. 上传文件到主下载源和必要镜像。
3. 更新 `src/data/releases/[gameSlug].json`。
4. 更新或生成 `public/releases/latest.json`。
5. 更新中英文 changelog 或开发日志。
6. 本地构建并检查下载页、游戏详情页、SEO 元数据。
7. 部署到 Cloudflare Pages 或 Vercel。
8. 发布公众号文章或社交媒体内容，并链接到微信落地页或游戏下载页。

建议自动化：

- 后续可添加脚本校验 release schema。
- 后续可添加脚本从 release 数据生成 latest.json。
- 后续可添加 CI 检查构建、链接、图片 alt 和基础无障碍。

## 后续 Codex 修改代码时必须遵守的检查项

- 版本号是否在 release 数据、latest.json、页面和 changelog 中一致。
- 下载文件是否有平台、大小、sha256 和发布日期。
- 中英文下载说明是否同步。
- 最新稳定版和预览版是否明确区分。
- 构建、链接检查和移动端检查是否通过或记录未执行原因。
