import { spawn } from "node:child_process";
import { resolve } from "node:path";

const args = process.argv.slice(2);
const astroBin = resolve("node_modules", "astro", "astro.js");

const child = spawn(process.execPath, [astroBin, ...args], {
  stdio: "inherit",
  shell: false,
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: "1",
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
