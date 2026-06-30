# I18N Workflow

## Adding UI Copy

Add short interface copy to `src/i18n/dictionary.ts` with matching keys under `zh-CN` and `en`. Use `t(locale, key)` or `useTranslations(locale)` from `src/i18n/utils.ts` in components and pages.

Do not hardcode one language in shared components. Pass `locale` from the page or infer it with `getLocaleFromPath(pathname)` when needed.

## Adding a Game

Add the game to `src/data/games.ts`.

Every user-visible field must include both languages:

- `title`
- `shortTitle`
- `statusLabel`
- `tagline`
- `summary`
- `description`
- `platforms[].displayName`
- `tags`
- `hero`
- `features`
- `sections`
- CTA labels
- SEO title and description
- legal notes

Keep slugs, IDs, route keys, and type names in English.

## Adding a Devlog

When MDX/content collections are connected, each devlog entry should have matching `zh-CN` and `en` content or a clearly marked English draft. The paired posts should share game slug, date, tags, and core conclusion even if the wording is not a literal translation.

Until MDX is connected, keep devlog placeholder copy in `src/i18n/dictionary.ts`.

## Updating Release Notes

Update `src/data/downloads.ts` and keep `public/releases/latest.json` in sync.

For every release, keep these bilingual:

- `displayDate`
- `summary`
- `changelog`
- `knownIssues`
- platform `displayName`

Keep these as single non-localized fields:

- version
- channel
- release date
- file names
- file size
- SHA-256
- mirror URLs
- availability state

Do not add fake download links. If a file is not available, leave mirror URLs empty and set `available: false`.

## Checks

Before publishing or committing i18n changes, run:

```bash
npm run check:i18n
npm run check
npm run build
```

If the English text is not final, write a direct English draft and mark the content as draft or TODO in the text. Missing fields should be fixed before merge.
