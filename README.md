# GDC 历年演讲中文资料站

纯 HTML/CSS/JS 静态站，可部署到 GitHub Pages、Netlify 或 Vercel。首页为 `index.html`。

## 本地预览

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。手机访问时，将站点部署到静态托管平台，或在同一局域网内访问电脑 IP 对应端口。

## 全文翻译扩展

公开 GDC 演讲、字幕和讲稿通常受版权保护。当前站点提供中文导读、关键概念和来源链接；若后续提供已授权的字幕或讲稿，可新增 `transcripts/` 并在 `data.js` 中接入全文译文展示。
