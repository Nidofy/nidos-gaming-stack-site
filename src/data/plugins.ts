import type { PluginEntry } from "@/types/plugin";
import { aiVillagePreview } from "@/data/plugin-releases";
import copy from "@/data/ai-village/copy.json";
import media from "@/data/ai-village/media.json";

export const pluginEntries: PluginEntry[] = [{
  slug: "ai-village",
  status: "in-development",
  repository: "https://github.com/Nidofy/dsh_plugin",
  documentation: "https://github.com/Nidofy/dsh_plugin/tree/main/packages/ai-village",
  release: aiVillagePreview,
  media: media.map((item) => {
    const role = item.role;
    if (role !== "hero" && role !== "feature" && role !== "gallery") throw new Error(`Unknown plugin media role: ${role}`);
    return { ...item, role };
  }),
  copy,
}];
