import type { Locale } from "./site";

export const socialLinks = [
  {
    label: "Email",
    href: "mailto:hello@nido.dev",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
  },
];

export const feedbackConfig = {
  feedbackFormUrl: "",
  labels: {
    "zh-CN": "反馈问卷",
    en: "Feedback form",
  },
  comingSoonLabels: {
    "zh-CN": "反馈问卷即将开放",
    en: "Feedback form coming soon",
  },
};

export function getFeedbackLink(locale: Locale) {
  const available = feedbackConfig.feedbackFormUrl.length > 0;

  return {
    available,
    href: available ? feedbackConfig.feedbackFormUrl : "#feedback-coming-soon",
    label: available ? feedbackConfig.labels[locale] : feedbackConfig.comingSoonLabels[locale],
  };
}
