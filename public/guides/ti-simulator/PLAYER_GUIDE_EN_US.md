# TI15 Simulator English Play Guide

This guide is for playtesters who receive the Windows preview package. It explains how to verify, extract, start, play, and report feedback for a full BO3 run.

## Before You Play

- This is an unofficial tournament RPG / strategy simulator using fictional mock data.
- Teams, players, tournament context, and story beats are fictional and do not represent real TI15 participants.
- The game does not simulate real-time Dota combat. It uses an abstract statistical model based on draft, heroes, item-build archetypes, team strategy, map decisions, morale, and seeded randomness.
- Some hero names and common shorthand use a Dota-like vocabulary, but the project does not include official team logos, official images, Valve branding, or Dota branding assets.
- The current preview package is unsigned. Windows SmartScreen may show a warning. Only run a package downloaded from this site's download page or provided directly by the developer.

## Download And Extract

The download page provides two mirrors. Use the filename shown on the download page:

- GitHub Release: `TI15Simulator-portable-windows-x64-20260703-alpha02-test-fix4.zip`
- Baidu Netdisk: `TI15Simulator-portable-windows-x64-20260703-alpha02-test-fix4.zip`

Download the ZIP, extract it fully, and then start the game. Do not run the game from the ZIP preview window.

## Start The Game

1. Right-click the ZIP file and choose "Extract All", or extract it with 7-Zip.
2. Do not run the game directly from the ZIP preview window.
3. Open the extracted folder.
4. Double-click `Start-Game.bat`.
5. Wait for the desktop game window to open.

If Windows SmartScreen appears:

1. Confirm that the ZIP came from this site's download page or a mirror provided directly by the developer.
2. Click "More info".
3. If you trust the package source, choose "Run anyway".

If startup fails, send the `data/logs` folder from the extracted package to the developer.

## What To Do In Your First Game

For the first run, follow the default Chinese-localized flow and avoid opening every advanced panel immediately.

Recommended first-run flow:

1. Start a new journey.
2. Choose or confirm your team.
3. Choose the role you want to play.
4. Pick your first-game hero.
5. Pick your first-game simple game plan.
6. Start the first BO3.
7. Choose action cards at checkpoints.
8. Review the postgame report after at least one game.
9. Try to finish the full BO3.
10. Export playtest notes and write down your feedback.

The first run is not about finding the optimal strategy. Focus on whether:

- You know what to do next.
- The action cards are readable.
- The game result creates a clear story.
- The postgame report explains why the game was won or lost.

## Core Concepts

### Journey

A journey is one tournament run. It stores:

- Current tournament record.
- Next pending opponent.
- Completed matches.
- Team morale.
- Player morale.
- Achievement progress.
- Any in-progress BO3 or checkpoint game.

### BO3

BO3 means best of three. Each game can use a different hero, item-build archetype, strategy, teammate suggestion, and ban priority.

For the current preview, the recommended route is game-by-game checkpoint play instead of only using full quick simulation. This exposes map decisions, morale, events, and detailed postgame reports.

### Checkpoints

Checkpoints are key moments inside a game, such as early rotations, a midgame Roshan window, high-ground pressure, or late buyback timing.

You do not control last hits, movement, or spells. Instead, the game compresses the situation into a tactical decision:

- Current field state.
- Opponent threat.
- Map, Roshan, or high-ground state.
- Three action cards.
- Result feedback after your choice.

### Action Cards

Action cards usually represent safe, balanced, and risky calls. You do not need to understand every underlying number. Read each card as a strategic call and choose the one that matches what you want the team to do.

Common action directions include:

- Protect core farm.
- Contest Roshan vision.
- Smoke pickoff.
- Trade farm.
- High-ground defense.
- Aegis push.
- Backline jump or core hunt.

After you choose an action, the game shows:

- Teammate response.
- What helped.
- What hurt.
- Kill change.
- Economy and XP change.
- Next threat or opportunity.

### Morale And Personality Events

Teams and selected players have morale states. Morale is not a guaranteed win button, but it can lightly affect stability, coordination, mistake risk, and clutch performance.

Personality events are story flavor, such as pause taunts, communication mistakes, or premature celebration. They should add memorable texture without overwhelming the strategic decision.

### Achievements

Achievements track important journey moments, such as comebacks, clutch calls, Roshan decisions, MVP performances, and morale rescues. Achievements are stored locally and do not require an account.

## Main Screens

### Home / Journey Entry

Use this area to:

- Start a new journey.
- Continue an existing save.
- Import or export saves.
- Switch the UI language.

The default local playtest language is Simplified Chinese.

### Matchday Briefing

Before the next player-controlled BO3, the matchday briefing can show:

- Opponent summary.
- Likely bans.
- Main threats.
- Key matchup.
- Morale or media expectation.
- Risk tags.

If you repeat the same hero or strategy, the briefing may surface scouting, counter-preparation, or ban risk.

### BP / Draft Setup

Before each game, you can choose:

- Your hero.
- Item-build archetype.
- Team strategy.
- Teammate hero suggestions.
- Ban priorities.

Notes:

- A hero cannot be picked twice across both teams.
- Banned heroes cannot be picked.
- Teammate suggestions are suggestions; AI will still validate legality and draft needs.
- Hero search supports English names, Chinese names, aliases, and shorthand such as `SF`, `AM`, and Chinese nicknames.

### Tactical Map

The tactical map is abstract. It is not an exact Dota map coordinate system. It helps you quickly read:

- Which lane has pressure.
- Who is moving toward Roshan.
- Which high ground is threatened.
- Rough player-team and opponent hero intentions.
- Recommended action, risk, and reward.

Green usually represents the player team. Red usually represents the opponent.

### Postgame Report

After each game, read the story summary first, then open detailed tabs if needed.

Common tabs include:

- Overview: winner, score, duration, MVP, and main story.
- Team Stats: kills, deaths, assists, net worth, XP, GPM, and XPM.
- Player Stats: all ten players with KDA, GPM, XPM, net worth, and hero.
- Timeline / Objectives: key item timings, objective events, key fights, and peak gold/XP lead.
- Draft / Ban-Pick: bans, BP log, final drafts, explanations, and warnings.

If a result feels wrong, record the game heroes, strategies, checkpoint choices, and postgame report screenshot.

## Suggested Playtest Routes

### Quick Impression Route

Use this if you only want to understand the basic feel.

1. Start a new journey.
2. Use default teams and names.
3. Choose a familiar role and hero.
4. Finish the first checkpoint game.
5. Read the postgame report.
6. Export playtest notes.

Expected time: 10 to 20 minutes.

### Standard Feedback Route

Use this if you want to give useful product feedback.

1. Start a new journey.
2. Customize team or player names.
3. Finish one full BO3.
4. Try a different strategy or hero in each game.
5. Experience at least one Roshan, high-ground, or defensive checkpoint.
6. Review the BO3 summary, postgame reports, and achievements.
7. Export playtest notes.
8. Write down the most confusing and most memorable moments.

Expected time: 30 to 60 minutes.

### Stress-Test Route

Use this if you want to help find balance or flow problems.

1. Repeat the same core hero across multiple games.
2. Repeat the same strategy across multiple games.
3. Check whether opponents start banning, countering, or showing adaptation warnings.
4. Try extreme patterns, such as always greedy farming or always risky fighting.
5. Play a longer journey from Swiss rounds into playoffs.
6. Export both the save and playtest notes.

Focus feedback on whether a pattern feels too strong, too weak, too repetitive, or hard to understand.

## Saves, Import, And Export

Saves are stored inside the extracted package under the `data` folder. Do not move only one EXE file. If you want to move the playtest package with saves, copy the entire extracted folder.

The UI can:

- Rename saves.
- Export journey JSON.
- Import journey JSON.
- Delete test saves.
- Export playtest notes as Markdown.

The most useful feedback artifacts are:

- Exported playtest notes Markdown.
- Screenshots before and after a confusing moment.
- Journey JSON that reproduces the issue.
- `data/logs` if startup fails.

## What To Record

Prioritize these notes:

- Did you know what to do in the first minute?
- Which button or label confused you?
- Did the three action cards feel like real tactical choices?
- Was the tactical map readable?
- Were Roshan, high ground, Aegis, and defense states explained clearly?
- Did the postgame report explain the win or loss?
- Did any hero, strategy, or repeated pattern feel too strong?
- Were personality events too frequent, too random, or too disruptive?
- Did any Chinese UI text show mojibake, leftover English, or awkward wording?
- Did you want to start another run?

## FAQ

### Why are there no real teams or players?

The current version uses fictional mock data only. Real team, player, and external data-source work is deferred until the data boundary is stable.

### Why am I not manually controlling the match?

This is an abstract tournament RPG / strategy simulator, not a real-time action game. Your main inputs are pregame preparation and key timing-window decisions.

### Why did I lose with a high win chance?

The model estimates win probability, but results still include randomness. A high win chance means a team is favored, not guaranteed to win.

### Why do identical seeds produce identical results?

Seeded determinism makes bugs and balance changes reproducible. The same seed and the same choices should usually produce the same result.

### Why does Windows show a security warning?

The current preview package is unsigned. For small friend playtests, only use the mirrors on this site's download page or files provided directly by the developer. Public distribution should use proper code signing and publisher reputation.

### Can I play offline?

Yes. The Windows portable preview package is designed to run offline. It does not require Python, Node.js, or an installed browser. Extract the full ZIP and run `Start-Game.bat`.

## Short Message For Playtesters

```text
This is an unsigned internal preview package for small playtests only. Download the ZIP from this site's download page, extract it fully, and run Start-Game.bat. The game is a fictional-data abstract tournament RPG, not a real-time Dota combat simulator. After playing, please export playtest notes and tell me what was confusing and what was memorable.
```
