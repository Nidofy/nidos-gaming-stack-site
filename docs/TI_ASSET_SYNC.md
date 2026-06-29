# TI Simulator Asset Sync

The website consumes TI Simulator website assets from the shared workspace export directory:

```text
../shared/exports/ti-simulator/
```

The sync command copies the current export into:

```text
public/generated/ti-simulator/
```

## Expected Export Shape

```text
../shared/exports/ti-simulator/
  manifest.json
  images/
  data/
```

Only `manifest.json`, `images/`, and `data/` are copied. The generated website copy is ignored by Git.

## Update Workflow

1. Export fresh website assets from the TI Simulator project.
2. In this website project, run:

```powershell
npm.cmd run sync:ti-assets
```

3. Verify the website:

```powershell
npm.cmd run build
```

The website remains independently buildable if generated assets are missing. The homepage section falls back to a non-blocking empty state.
