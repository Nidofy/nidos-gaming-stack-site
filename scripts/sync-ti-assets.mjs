import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, "..");
const workspaceRoot = resolve(projectRoot, "..");
const sourceDir = resolve(workspaceRoot, "shared", "exports", "ti-simulator");
const targetDir = resolve(projectRoot, "public", "generated", "ti-simulator");

if (!existsSync(sourceDir)) {
  console.warn(`No TI Simulator export found at ${sourceDir}`);
  console.warn("Skipping TI asset sync. The website remains buildable without generated assets.");
  process.exit(0);
}

const manifestPath = resolve(sourceDir, "manifest.json");
if (!existsSync(manifestPath)) {
  console.warn(`No manifest.json found at ${manifestPath}`);
  console.warn("Skipping TI asset sync. Run the simulator website export first.");
  process.exit(0);
}

await rm(targetDir, { recursive: true, force: true });
await mkdir(targetDir, { recursive: true });

await cp(manifestPath, resolve(targetDir, "manifest.json"), { force: true });

for (const dirname of ["images", "data"]) {
  const sourceSubdir = resolve(sourceDir, dirname);
  const targetSubdir = resolve(targetDir, dirname);
  await rm(targetSubdir, { recursive: true, force: true });
  if (existsSync(sourceSubdir)) {
    await cp(sourceSubdir, targetSubdir, { recursive: true });
  }
}

console.log(`Synced TI Simulator website assets to ${targetDir}`);
