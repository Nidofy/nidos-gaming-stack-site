import type { Locale } from "@/i18n/locales";

export type { Locale };

export type LocalizedString = Record<Locale, string>;

export type LocalizedStringArray = Record<Locale, string[]>;
