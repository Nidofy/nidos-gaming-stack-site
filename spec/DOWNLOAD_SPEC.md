# Download Spec

## 目标

定义游戏下载和版本发布信息的管理方式，确保玩家能清楚获取最新版本、历史版本、平台要求、校验信息和变更记录。

## 约束

- 下载链接不得散落在页面正文中。
- latest.json 必须与 release 数据一致。
- 下载页必须区分平台、版本、渠道、发布日期和文件状态。
- 未发布或不可用平台不能显示为可下载。
- 文件托管方式需考虑中美访问稳定性。

## 推荐实现方式

Release 数据建议位于：

```text
src/data/releases/[gameSlug].json
public/releases/latest.json
```

每个 release 包含：

- `gameSlug`
- `version`
- `channel`: stable、beta、alpha、nightly
- `releasedAt`
- `files`: platform、url、size、sha256、mirrorUrls
- `requirements`
- `changelog`
- `knownIssues`
- `isLatest`

下载页展示：

- 最新稳定版优先。
- 预览版明确标注风险。
- 历史版本折叠展示。
- 每个文件展示平台、大小、校验值、发布时间和备用链接。

## 后续 Codex 修改代码时必须遵守的检查项

- 页面下载按钮是否引用 release 数据。
- latest.json 是否同步最新版本。
- 是否区分 Windows、macOS、Linux、Web 等平台。
- 是否显示校验值或未来可扩展校验字段。
- 是否避免把测试版误导为稳定版。
- 是否检查链接在目标地区可访问或提供备用镜像策略。
