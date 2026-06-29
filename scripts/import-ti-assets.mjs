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
  console.warn("Skipping website asset import. Run the simulator export first when assets are needed.");
  process.exit(0);
}

await mkdir(resolve(projectRoot, "public", "generated"), { recursive: true });
await rm(targetDir, { recursive: true, force: true });
await cp(sourceDir, targetDir, { recursive: true });

console.log(`Imported TI Simulator website assets to ${targetDir}`);
