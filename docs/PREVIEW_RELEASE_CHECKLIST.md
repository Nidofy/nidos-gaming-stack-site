# Preview Release 0.1 Checklist

This checklist prepares Nido's Gaming Stack for a small private preview release. Keep the scope narrow: attach real artifacts, verify download data, test mobile paths, collect feedback, and avoid introducing unrelated features.

## Before Release

- Confirm `npm run check` passes.
- Confirm `npm run build` passes and generates all expected routes.
- Confirm the current Git working tree contains only intended release changes.
- Confirm `src/data/downloads.ts` and `public/releases/latest.json` describe the same latest release.
- Confirm every public release is clearly labeled as `alpha`, `beta`, or `stable`.
- Confirm unavailable platforms are omitted or show Coming Soon without download links.
- Confirm no `example.com`, `example.cn`, or other placeholder external download URLs remain.

## Internal Playtest Download Package

- Do not commit large playtest zip files to this website repository unless intentionally publishing them as static assets.
- Prefer external mirrors for internal testing:
  - GitHub Release asset for the global mirror.
  - Baidu Netdisk share URL for the China mirror.
- Keep macOS and Linux omitted or Coming Soon until real packages exist.
- When the Windows zip is ready, update the Windows file entry in `src/data/downloads.ts`:
  - `filename`: exact zip filename.
  - `size`: human-readable file size, for example `151.1 MiB`.
  - `sha256`: full SHA-256 checksum.
  - `globalMirror`: verified GitHub Release asset URL, or leave empty until available.
  - `chinaMirror`: verified China mirror URL, or leave empty until available.
  - `available`: `true` only after at least one referenced mirror works.
- Sync `public/releases/latest.json` manually from `src/data/downloads.ts` until a generation script exists.

## How To Fill File Size

- On Windows PowerShell:

```powershell
Get-Item "<local-path-to>\TI15Simulator-portable-windows-x64-20260701-preview.zip" | Select-Object Name,Length
```

- Convert bytes to a readable value such as `128 MB`.
- Use the same value in `src/data/downloads.ts` and `public/releases/latest.json`.

## How To Fill SHA-256

- On Windows PowerShell:

```powershell
Get-FileHash "<local-path-to>\TI15Simulator-portable-windows-x64-20260701-preview.zip" -Algorithm SHA256
```

- Copy the full hash into `sha256`.
- Keep the value identical in `src/data/downloads.ts` and `public/releases/latest.json`.

## Mobile Device Testing

- Test `/zh-CN` and `/en` on a 360-430 px wide phone viewport.
- Test `/zh-CN/games/ti-simulator` and `/en/games/ti-simulator`.
- Test `/zh-CN/download` and `/en/download`.
- Confirm there is no horizontal page scroll.
- Confirm the mobile header navigation is visible and scrollable.
- Confirm CTA buttons are easy to tap and do not overflow.
- Confirm screenshot cards keep their aspect ratio.

## WeChat Browser Testing

- Send `/zh-CN/wechat` to a WeChat chat or test article.
- Open it in the WeChat built-in browser.
- Confirm the first screen is readable in portrait orientation.
- Confirm the download CTA opens `/zh-CN/download`.
- Confirm the feedback CTA either opens the configured form or stays on the Coming Soon explanation.
- Confirm the page is understandable outside WeChat as a normal browser page.

## Download Flow Testing

- If `available` is `false`, verify the card shows Coming Soon and no link is clickable.
- If `available` is `true`, verify each rendered mirror opens or downloads successfully.
- If `globalMirror` is empty, confirm the GitHub Release button is not rendered.
- If `chinaMirror` is configured, verify it opens independently and includes any required extraction code.
- Confirm platform, version, date, file size, and SHA-256 are visible on mobile.
- Confirm the file checksum shown on the page matches the artifact.

## Feedback Entry Testing

- Configure `feedbackConfig.feedbackFormUrl` in `src/data/social.ts` when a real form exists.
- Verify `/zh-CN/wechat` changes from Coming Soon to the real feedback label/link.
- Verify `/zh-CN/download` changes from Coming Soon to the real feedback label/link.
- Keep the URL empty until the form is ready.

## Deployment Check

- Build command: `npm run build`.
- Output directory: `dist`.
- Confirm `public/releases/latest.json` is included in the deployed output.
- Confirm local zip artifacts are not committed to the website repository unless intentionally released as static assets.
- Confirm no secrets, tokens, or unpublished private URLs are committed.
- Confirm canonical and hreflang output are reasonable for `/zh-CN`, `/en`, and `/zh-CN/wechat`.

## After Release

- Ask testers to report OS, browser, device, download source, and reproduction steps.
- Track whether failures come from download hosting, installation, startup, gameplay, or UI confusion.
- Update known issues before sending the next preview link.
- Archive exact artifact filename, size, SHA-256, release date, and tester-facing changelog.
