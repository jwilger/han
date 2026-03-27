---
workflow: default
git:
  change_strategy: intent
  auto_merge: true
  auto_squash: false
announcements: []
passes: []
active_pass: ""
created: 2026-03-26
status: active
epic: ""
---

# Anti-Rationalization Tables for Han Skills and Agents

## Problem

AI coding agents frequently skip steps, cut corners, and rationalize subpar work. The obra/superpowers project (112K stars) discovered that the most effective countermeasure is explicit "rationalization vs reality" tables embedded in skill files — tables listing 7-12 common excuses the AI uses to skip a step, each paired with a terse rebuttal. Han's 22 core skills, 69 discipline agents, and 1 core agent lack this defensive technique, meaning agents can easily talk themselves out of following prescribed workflows.

## Solution

Add anti-rationalization guardrails to all 92 Han skill and agent files using the proven superpowers pattern:

1. **Rationalization tables** — 2-column markdown (`Rationalization` | `Reality`) with 7-10 domain-specific rows per file
2. **Iron laws** — One non-negotiable rule per file in `NO [action] WITHOUT [prerequisite] FIRST` format
3. **XML enforcement tags** — `<EXTREMELY_IMPORTANT>` wrapper around the guardrails section
4. **Behavioral eval suite** — Test prompts measuring compliance rates before/after

This is a pure markdown change (zero code) with high behavioral impact.

## Domain Model

### Entities
- **Core Skill** (22 files) — SKILL.md files in `plugins/core/skills/*/SKILL.md`. Mix of workflow skills (develop, test, fix) and design principle references (solid-principles, simplicity-principles).
- **Discipline Agent** (69 files) — Agent .md files in `plugins/disciplines/*/agents/*.md`. Specialized role definitions with complex YAML frontmatter.
- **Core Agent** (1 file) — `plugins/core/agents/ci-watcher.md`. Background agent.
- **Rationalization Table** — Inline markdown table per file with domain-specific rationalizations.
- **Iron Law** — Single absolute prohibition per file.
- **Behavioral Eval** — Test prompts + compliance measurement.

### Relationships
- Each of 92 target files gets exactly 1 rationalization table + 1 iron law
- Tables are domain-specific (not shared/generic)
- Behavioral evals reference specific files

### Data Sources
- **Filesystem** — 92 markdown files in Han repo
- **superpowers** — Proven table format: 2-column, 7-12 rows, terse rebuttals under 15 words

### Data Gaps
- ~700-900 unique rationalization/rebuttal pairs need to be crafted across 92 files

## Success Criteria

- [ ] All 22 core skills have `## Anti-Rationalization Guardrails` section with domain-specific table (7-10 rows) + iron law
- [ ] All 69 discipline agents have `## Anti-Rationalization Guardrails` section with domain-specific table (7-10 rows) + iron law
- [ ] Core agent (ci-watcher) has `## Anti-Rationalization Guardrails` section with domain-specific table + iron law
- [ ] Each table uses `Rationalization` | `Reality` two-column format with terse rebuttals (under 15 words)
- [ ] Each iron law follows `NO [action] WITHOUT [prerequisite] FIRST` format in all-caps
- [ ] Each guardrails section is wrapped in `<EXTREMELY_IMPORTANT>` XML tags
- [ ] Tables placed at correct insertion point: after core philosophy/responsibilities, before implementation details
- [ ] Rationalizations are domain-specific to each file (not generic/shared)
- [ ] All tables use identical section structure across all 92 files (consistent format convention)
- [ ] Behavioral eval suite exists with 10+ test prompts covering top 5 skills, measuring compliance rates

## Context

### superpowers Pattern Reference
- Two-column format: `Excuse` | `Reality` (we use `Rationalization` | `Reality`)
- 7-12 rationalizations per skill (sweet spot — under 5 is insufficient, over 15 is ignored)
- Rebuttals are absolute, never hedged, under 15 words
- Iron laws always `NO [action] WITHOUT [prerequisite] FIRST` in all-caps
- `<EXTREMELY_IMPORTANT>` for section wrapping, `<HARD-GATE>` for workflow checkpoints
- Token optimization proposal (consolidating tables) was rejected — per-skill tables outperform consolidated based on extensive testing

### Section Format Convention (Cross-Cutting)
All 92 files must use this identical structure:

```markdown
## Anti-Rationalization Guardrails

<EXTREMELY_IMPORTANT>

**Iron Law:** `NO [action] WITHOUT [prerequisite] FIRST`

| Rationalization | Reality |
|----------------|---------|
| "..." | ... |
| "..." | ... |
(7-10 rows)

</EXTREMELY_IMPORTANT>
```

### Insertion Points
- **Core skills**: After the core philosophy/principles section, before implementation steps (varies per skill)
- **Discipline agents**: After `## Core Responsibilities`, before first pattern/framework section (consistent across all agents)
- **Core agent**: After `## Role`, before `## Behavior`
