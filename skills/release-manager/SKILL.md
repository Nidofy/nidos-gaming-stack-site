# release-manager

## name

release-manager

## description

管理游戏下载版本、release 数据、latest.json、下载页展示和发布检查的 skill。

## 何时触发

- 用户要求新增或更新下载版本。
- 用户要求生成 latest.json。
- 用户要求检查发布前状态。
- 用户要求整理 changelog、known issues 或平台文件。

## 工作步骤

1. 读取 `AGENTS.md`、`spec/DOWNLOAD_SPEC.md` 和 `spec/RELEASE_WORKFLOW.md`。
2. 确认 game slug、版本号、渠道、发布日期、平台、文件 URL、大小和校验值。
3. 更新 release 数据。
4. 更新或生成 latest.json。
5. 检查下载页和游戏详情页是否引用 release 数据。
6. 汇报稳定版、预览版、历史版本和未解决发布风险。

## 输入材料

- 构建产物信息。
- 下载 URL 或镜像 URL。
- sha256、文件大小、平台要求。
- changelog 和 known issues。

## 输出文件

- `src/data/releases/*.json`
- `public/releases/latest.json`
- changelog 或 release note 内容。
- 发布检查报告。

## 验收标准

- 版本信息一致。
- latest.json 与 release 数据一致。
- 平台和渠道清晰。
- 每个可下载文件有大小、校验值和发布日期。
- 下载页面无手写临时链接。

## 禁止事项

- 不把测试版伪装成稳定版。
- 不在 MDX 正文中散落下载链接。
- 不删除历史版本，除非用户明确要求。
- 不自动 git commit 或部署。
