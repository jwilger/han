# Instruction Priority Hierarchy

When instructions conflict, follow this precedence (highest to lowest):

1. **User explicit instructions** — what the user just told you to do
2. **Skill/plugin instructions** — the active skill's procedure, hat steps
3. **Project CLAUDE.md** — project-level conventions and rules
4. **Default behavior** — Claude Code's built-in behavior

If a skill says "always run tests" but the user says "skip tests this time," follow the user. If the skill says "run tests" and CLAUDE.md says "use pytest," follow both. Lower levels never override higher levels.

## Why This Matters

Without explicit precedence, agents guess which instruction to follow when they conflict. This leads to inconsistent behavior — sometimes following the skill, sometimes the user, sometimes CLAUDE.md.

## Edge Cases

- **User instruction contradicts safety** — Follow the user, but flag the risk
- **Two skills conflict** — The more specific skill wins (domain skill > general skill)
- **CLAUDE.md contradicts a skill** — Skill wins (skills are designed for the task)
