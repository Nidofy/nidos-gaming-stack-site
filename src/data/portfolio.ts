import { getGame } from "@/data/games";
import { getGamePreviewMedia } from "@/data/media";
import { pluginEntries } from "@/data/plugins";
import type { Locale } from "@/i18n/locales";
import { t } from "@/i18n/utils";

export const portfolioOrder = [
  "out-of-tokens",
  "ai-village",
  "untitled-action-rpg",
  "ti-simulator",
] as const;

export type PortfolioSlug = (typeof portfolioOrder)[number];

export interface PortfolioCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface PortfolioImage {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export interface PortfolioItem {
  slug: string;
  kind: "game" | "plugin";
  tabLabel: string;
  title: string;
  eyebrow: string;
  statusLabel: string;
  versionLabel?: string;
  summary: string;
  description: string;
  tags: string[];
  accent: string;
  accentRgb: string;
  detailHref: string;
  primaryCta: PortfolioCta;
  secondaryCta: PortfolioCta;
  heroMedia: PortfolioImage;
  featuresTitle: string;
  features: Array<{ title: string; description: string }>;
  gallery?: {
    eyebrow: string;
    title: string;
    description: string;
    images: PortfolioImage[];
  };
}

export function getPortfolioItems(locale: Locale): PortfolioItem[] {
  const items: PortfolioItem[] = [];

  for (const slug of portfolioOrder) {
    if (slug === "ai-village") {
      const plugin = pluginEntries.find((entry) => entry.slug === slug);
      if (!plugin) continue;
      const c = plugin.copy[locale];
      const hero = plugin.media.find((m) => m.role === "hero") ?? plugin.media[0]!;
      const previewImages = plugin.media.filter((m) => m.role !== "hero");

      items.push({
        slug: plugin.slug,
        kind: "plugin",
        tabLabel: c.name,
        title: c.name,
        eyebrow: c.eyebrow,
        statusLabel: c.status,
        versionLabel: plugin.release.version,
        summary: c.summary,
        description: c.previewDescription,
        tags: c.facts.map((fact) => fact.value),
        accent: "#7c5a38",
        accentRgb: "124 90 56",
        detailHref: `/${locale}/plugins/${plugin.slug}`,
        primaryCta: {
          label: c.explore,
          href: `/${locale}/plugins/${plugin.slug}`,
        },
        secondaryCta: {
          label: c.source,
          href: plugin.repository,
          external: true,
        },
        heroMedia: {
          src: hero.src,
          alt: hero.locales[locale].alt,
          caption: hero.locales[locale].caption,
          width: hero.width,
          height: hero.height,
        },
        featuresTitle: c.featuresTitle,
        features: c.features,
        gallery: {
          eyebrow: plugin.release.version,
          title: c.galleryTitle,
          description: c.previewDescription,
          images: previewImages.map((media) => ({
            src: media.src,
            alt: media.locales[locale].alt,
            caption: media.locales[locale].caption,
            width: media.width,
            height: media.height,
          })),
        },
      });
      continue;
    }

    const game = getGame(locale, slug);
    if (!game) continue;
    const media = getGamePreviewMedia(slug, locale);
    const pointsPrimaryToSelf = game.primaryCta.href === `/${locale}/games/${game.slug}`;

    items.push({
      slug: game.slug,
      kind: "game",
      tabLabel: game.shortTitle,
      title: game.title,
      eyebrow: game.hero.eyebrow,
      statusLabel: game.statusLabel,
      versionLabel: game.versionLabel,
      summary: game.summary,
      description: game.description,
      tags: game.tags,
      accent: game.accent,
      accentRgb: game.accentRgb,
      detailHref: `/${locale}/games/${game.slug}`,
      primaryCta: game.primaryCta,
      secondaryCta: pointsPrimaryToSelf
        ? game.secondaryCta
        : {
            label: t(locale, "game.detailsCta"),
            href: `/${locale}/games/${game.slug}`,
          },
      heroMedia: {
        src: media.hero,
        alt: media.alt,
        caption: media.disclaimer,
        width: media.width,
        height: media.height,
      },
      featuresTitle: game.tagline,
      features: game.features,
      gallery: media.gallery,
    });
  }

  return items;
}
