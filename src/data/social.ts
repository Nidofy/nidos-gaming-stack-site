import { t } from "@/i18n/utils";
import type { Locale, LocalizedString } from "@/types/i18n";

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Nidofy",
  },
  {
    label: "Email",
    href: "mailto:hello@nido.dev",
  },
];

export const feedbackConfig = {
  feedbackFormUrl: "",
  labels: {
    "zh-CN": "填写反馈问卷",
    en: "Open feedback form",
  },
  comingSoonLabels: {
    "zh-CN": "反馈表整理中",
    en: "Feedback form pending",
  },
} satisfies {
  feedbackFormUrl: string;
  labels: LocalizedString;
  comingSoonLabels: LocalizedString;
};

export function getFeedbackLink(locale: Locale) {
  const available = feedbackConfig.feedbackFormUrl.length > 0;

  return {
    available,
    href: available ? feedbackConfig.feedbackFormUrl : "",
    label: available ? feedbackConfig.labels[locale] : t(locale, "feedback.comingSoonLabel"),
  };
}
