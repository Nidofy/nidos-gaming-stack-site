import { dictionary, type DictionaryKey } from "@/i18n/dictionary";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";
import type { LocalizedString, LocalizedStringArray } from "@/types/i18n";

export function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function getLocalized(value: LocalizedString, locale: Locale): string;
export function getLocalized(value: LocalizedStringArray, locale: Locale): string[];
export function getLocalized(value: LocalizedString | LocalizedStringArray, locale: Locale) {
  return value[locale] ?? value[defaultLocale];
}

export function t(locale: Locale, key: DictionaryKey, replacements: Record<string, string> = {}) {
  let value: string = dictionary[locale][key] ?? dictionary[defaultLocale][key];

  for (const [name, replacement] of Object.entries(replacements)) {
    value = value.replaceAll(`{${name}}`, replacement);
  }

  return value;
}

export function useTranslations(locale: Locale) {
  return (key: DictionaryKey, replacements?: Record<string, string>) => t(locale, key, replacements);
}
