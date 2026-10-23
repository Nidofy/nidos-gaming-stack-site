import type { Locale } from "@/i18n/locales";

export interface PluginCopy {
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  status: string;
  explore: string;
  source: string;
  install: string;
  featuresTitle: string;
  features: Array<{ title: string; description: string }>;
  previewTitle: string;
  previewDescription: string;
  galleryTitle: string;
  images: Array<{ alt: string; caption: string }>;
  facts: Array<{ label: string; value: string }>;
  installTitle: string;
  installNote: string;
  steps: Array<{ title: string; description: string }>;
  faqTitle: string;
  faq: Array<{ title: string; description: string }>;
  sourcesTitle: string;
  sourcesNote: string;
  license: string;
  seo: { title: string; description: string };
}

export interface PluginEntry {
  slug: string;
  status: "in-development" | "released" | "archived";
  repository: string;
  documentation: string;
  release: { version: string; channel: string; verifiedAt: string; host: string; platform: string; sourceRevision: string };
  media: Array<{
    src: string; width: number; height: number;
    role: "hero" | "feature" | "gallery";
    kind: string;
    locales: Record<Locale, { alt: string; caption: string }>;
  }>;
  copy: Record<Locale, PluginCopy>;
}
