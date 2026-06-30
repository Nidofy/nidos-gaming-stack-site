# Preview Release 0.1 Checklist

This checklist prepares Nido's Gaming Stack for a small private preview release. Keep the scope narrow: attach real artifacts, verify download data, test mobile paths, collect feedback, and avoid introducing unrelated features.

## Before Release

- Confirm `npm run check` passes.
- Confirm `npm run build` passes and generates all expected routes.
- Confirm the current Git working tree contains only intended release changes.
- Confirm `src/data/downloads.ts` and `public/releases/latest.json` describe the same latest release.
- Confirm every public release is clearly labeled as `alpha`, `beta`, or `stable`.
- Confirm unavailable platforms show Coming Soon and do not render download links.
- Confirm no `example.com`, `example.cn`, or other placeholder external download URLs remain.

## Local Alpha Download Package

- Put local preview artifacts under `public/downloads/ti-simulator/`.
- Windows package naming convention:
  - `ti-simulator-0.1.0-alpha-win-x64.zip`
- Keep macOS and Linux as Coming Soon until real packages exist.
- Do not commit large or unverified files by accident.
- When the Windows zip is ready, update the Windows file entry in `src/data/downloads.ts`:
  - `filename`: exact zip filename.
  - `size`: human-readable file size, for example `128 MB`.
  - `sha256`: full SHA-256 checksum.
  - `globalMirror`: `/downloads/ti-simulator/ti-simulator-0.1.0-alpha-win-x64.zip` or a verified external URL.
  - `chinaMirror`: verified China mirror URL, or leave empty until available.
  - `available`: `true` only after the referenced file or URL works.
- Sync `public/releases/latest.json` manually from `src/data/downloads.ts` until a generation script exists.

## How To Fill File Size

- On Windows PowerShell:

```powershell
Get-Item public/downloads/ti-simulator/ti-simulator-0.1.0-alpha-win-x64.zip | Select-Object Name,Length
```

- Convert bytes to a readable value such as `128 MB`.
- Use the same value in `src/data/downloads.ts` and `public/releases/latest.json`.

## How To Fill SHA-256

- On Windows PowerShell:

```powershell
Get-FileHash public/downloads/ti-simulator/ti-simulator-0.1.0-alpha-win-x64.zip -Algorithm SHA256
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
- If `available` is `true`, verify the Global Mirror opens or downloads successfully.
- If China Mirror is configured, verify it opens independently.
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
- Confirm `public/downloads/ti-simulator/` artifacts are included only when intentionally released.
- Confirm no secrets, tokens, or unpublished private URLs are committed.
- Confirm canonical and hreflang output are reasonable for `/zh-CN`, `/en`, and `/zh-CN/wechat`.

## After Release

- Ask testers to report OS, browser, device, download source, and reproduction steps.
- Track whether failures come from download hosting, installation, startup, gameplay, or UI confusion.
- Update known issues before sending the next preview link.
- Archive exact artifact filename, size, SHA-256, release date, and tester-facing changelog.
