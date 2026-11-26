# Out of Tokens 项目页规范

## 范围与定位

- 新增双语项目详情页 `/zh-CN/games/out-of-tokens` 与 `/en/games/out-of-tokens`，并将 `out-of-tokens` 设为全站首屏默认主推作品。
- 全站作品展示顺序（首页切换标签、首页作品总览、详情页底部互跳、试玩与下载页、开发日志）统一为：
  1. `out-of-tokens`（Out of Tokens · 开源万事屋 / Out of Tokens）
  2. `ai-village`（AI 小院 / AI Village）
  3. `untitled-action-rpg`（未定名横版动作 RPG / Untitled Side-Scrolling Action RPG）
  4. `ti-simulator`（TI 模拟器 / TI Simulator）

## 事实与发布边界

- 内容依据本地仓库 `D:\Documents\FeiyangChen\devApps\ai-game\out-of-tokens` 与配套实机录屏/美术归档核实。
- 当前形态：纯前端确定性经营模拟游戏，已开放 GitHub Pages 网页试玩版（`https://nidofy.github.io/out-of-tokens/`）与开源仓库（`https://github.com/Nidofy/out-of-tokens`）。
- 运行与存档边界：
  - 游戏内的“Token”与“本地算力”均为虚构经营资源，**无需填写任何大模型 API Key、无需联网调用付费接口、不消耗真实额度**。
  - 网页试玩版支持桌面与手机浏览器访问，进度默认保存在当前浏览器本地存储（IndexedDB），支持导出/导入 JSON 备份；清除浏览器数据或更换设备前需手动导出。
  - DSH 插件宿主与 Tauri 桌面端仍在工程适配与验证阶段，页面如实标注为“实验适配中”，不提供未发布的桌面安装包链接。
- 世界观与授权边界：
  - 与《AI 小院》共享 12 位 Q 版角色设定，但各自独立存档、互不改写数据。
  - 角色名与行业梗属于独立同人戏仿与技术日常调侃，与任何商业模型厂商、公司或官方产品无关联。

## 媒体素材要求

- 素材统一存放于 `public/media/out-of-tokens/`，转为 WebP 格式并保留清晰宽高比（16:9），避免裁切游戏 UI 边缘。
- 明确区分“主题宣传插画（非实机截图）”、“实机画面”与“游戏内地图”，每张图片具备准确的中英文 `alt` 与 `caption`。
- 配套生成或导出双语 Open Graph 分享图，使首页与 `out-of-tokens` 详情页在社交分享时展示当前主推作品视觉。
