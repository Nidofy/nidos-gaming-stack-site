# I18N Spec

## Scope

All user-visible website content must support `zh-CN` and `en`. This includes navigation, buttons, page headings, descriptions, alt text, aria labels, SEO metadata, download labels, release notes, feedback prompts, game content, and public JSON release metadata.

Development-facing names stay English: file names, variable names, type names, spec names, skills, subagents, scripts, and commit messages.

## Locales

- Supported locales: `zh-CN`, `en`
- Default locale: `zh-CN`
- Public localized routes keep prefixes for both languages: `/zh-CN` and `/en`
- `/` may remain a language entry or redirect page

## Data Rules

Short UI copy lives in `src/i18n/dictionary.ts`.

Structured content lives in typed data files:

- `src/data/site.ts`
- `src/data/games.ts`
- `src/data/downloads.ts`
- `src/data/social.ts`

User-visible fields use `LocalizedString` or `LocalizedStringArray`. Non-language fields such as slugs, versions, dates, file names, file sizes, SHA-256 values, booleans, and URLs stay as single values.

Release JSON under `public/releases/latest.json` must expose `localized.zh-CN` and `localized.en` for display date, summary, changelog, and known issues.

## Missing Copy

If final English copy is not ready, an English draft placeholder is still required. Missing localized fields are not allowed. Draft text should be explicit and should not imply a real download or released feature.

## Validation

Run:

```bash
npm run check:i18n
```

The check validates dictionary key parity, localized data coverage, `latest.json` localized release notes, and absence of `example.com` / `example.cn` fake links.
