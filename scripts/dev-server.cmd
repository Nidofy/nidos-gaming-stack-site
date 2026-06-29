@echo off
set ASTRO_TELEMETRY_DISABLED=1
npm.cmd run dev -- --host 127.0.0.1 --port 4321
