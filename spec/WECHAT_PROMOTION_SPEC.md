# WeChat Promotion Spec

## 目标

为微信公众号宣传提供中文落地页和内容协作规范，让公众号文章能有效引导读者了解项目、查看截图、下载游戏、订阅后续更新。

## 约束

- 微信落地页不是正式游戏详情页的替代品。
- 微信传播文案可以更故事化，但不能夸大功能或发布时间。
- 落地页必须能在普通浏览器中正常阅读。
- 不使用未经授权的赛事、战队、选手、Dota/Valve/The International 素材作为传播主视觉。

## 推荐实现方式

建议路由：

```text
/zh/wechat/[campaign]/
```

建议内容结构：

- campaign title
- related game
- article hook
- short context
- media block
- download CTA
- FAQ
- devlog links
- official site links
- share image

公众号文章与站点协作：

- 公众号文章负责讲故事和传播。
- 网站落地页负责承接信息、下载和后续浏览。
- 关键按钮使用明确文本，例如“下载 Windows 版”“查看开发日志”“返回项目主页”。

## 后续 Codex 修改代码时必须遵守的检查项

- 落地页是否关联正式 game slug。
- 是否能回到游戏详情页和下载页。
- 微信分享标题、摘要、封面是否设置。
- 是否适合移动端微信内置浏览器阅读。
- 是否避免只在微信生态内才成立的表达。
