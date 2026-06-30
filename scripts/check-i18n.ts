import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const locales = ["zh-CN", "en"] as const;
const failures: string[] = [];

function fail(message: string) {
  failures.push(message);
}

function readProjectFile(path: string) {
  return readFileSync(join(root, path), "utf8");
}

function extractObjectBlock(source: string, marker: string) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) return "";

  const start = source.indexOf("{", markerIndex);
  if (start < 0) return "";

  let depth = 0;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start + 1, index);
    }
  }

  return "";
}

function extractDictionaryKeys(locale: (typeof locales)[number]) {
  const source = readProjectFile("src/i18n/dictionary.ts");
  const block = extractObjectBlock(source, locale === "zh-CN" ? '"zh-CN": {' : "en: {");
  const keys = new Set<string>();
  for (const match of block.matchAll(/"([^"]+)":\s*"/g)) {
    keys.add(match[1]);
  }
  return keys;
}

function checkDictionary() {
  const zhKeys = extractDictionaryKeys("zh-CN");
  const enKeys = extractDictionaryKeys("en");

  if (zhKeys.size === 0) fail("dictionary.zh-CN has no keys.");
  if (enKeys.size === 0) fail("dictionary.en has no keys.");

  for (const key of zhKeys) {
    if (!enKeys.has(key)) fail(`dictionary.en is missing key: ${key}`);
  }

  for (const key of enKeys) {
    if (!zhKeys.has(key)) fail(`dictionary.zh-CN is missing key: ${key}`);
  }
}

function checkSourceLocalizedPairs() {
  const requiredFiles = [
    "src/data/site.ts",
    "src/data/games.ts",
    "src/data/downloads.ts",
    "src/data/social.ts",
  ];

  for (const path of requiredFiles) {
    const source = readProjectFile(path);
    if (!source.includes('"zh-CN"')) fail(`${path} has no zh-CN localized fields.`);
    if (!/\ben\s*:/.test(source)) fail(`${path} has no en localized fields.`);
  }

  const dataSource = requiredFiles.map(readProjectFile).join("\n");
  for (const expectedType of ["LocalizedString", "LocalizedStringArray"]) {
    if (!dataSource.includes(expectedType)) fail(`data files do not reference ${expectedType}.`);
  }
}

function checkLatestJson() {
  const latestPath = "public/releases/latest.json";
  const latest = JSON.parse(readProjectFile(latestPath)) as {
    localized?: Record<string, unknown>;
    files?: Array<{
      displayName?: Record<string, string>;
      globalMirror?: string;
      chinaMirror?: string;
      available?: boolean;
    }>;
  };

  if (!latest.localized) fail(`${latestPath} is missing localized.`);

  for (const locale of locales) {
    const localized = latest.localized?.[locale] as Record<string, unknown> | undefined;
    if (!localized) {
      fail(`${latestPath} is missing localized.${locale}.`);
      continue;
    }

    for (const field of ["displayDate", "summary", "changelog", "knownIssues"]) {
      if (!(field in localized)) fail(`${latestPath} is missing localized.${locale}.${field}.`);
    }
  }

  for (const [index, file] of (latest.files ?? []).entries()) {
    for (const locale of locales) {
      if (!file.displayName?.[locale]) fail(`${latestPath} files[${index}].displayName.${locale} is missing.`);
    }

    if (!file.available && (file.globalMirror || file.chinaMirror)) {
      fail(`${latestPath} files[${index}] has mirrors while available is false.`);
    }
  }
}

function listFiles(dir: string): string[] {
  const entries = readdirSync(dir);
  const files: string[] = [];

  for (const entry of entries) {
    if (["node_modules", "dist", ".astro", ".git"].includes(entry)) continue;
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      files.push(...listFiles(path));
    } else if (/\.(astro|ts|json|md|mjs)$/.test(entry)) {
      files.push(path);
    }
  }

  return files;
}

function checkFakeLinks() {
  for (const file of listFiles(root)) {
    const source = readFileSync(file, "utf8");
    if (/https?:\/\/(?:www\.)?example\.(com|cn)/i.test(source)) {
      fail(`${relative(root, file)} contains an example domain URL.`);
    }
  }
}

checkDictionary();
checkSourceLocalizedPairs();
checkLatestJson();
checkFakeLinks();

if (failures.length > 0) {
  console.error("i18n check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("i18n check passed.");
