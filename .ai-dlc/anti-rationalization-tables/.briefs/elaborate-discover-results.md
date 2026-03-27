---
status: success
error_message: ""
---

# Discovery Results

## Domain Model Summary

### Entities
- **Core Skill** — 22 SKILL.md files in `plugins/core/skills/*/SKILL.md`. Workflow-oriented or principle-reference skills with YAML frontmatter. Line counts: 61-639.
- **Discipline Agent** — 69 agent .md files in `plugins/disciplines/*/agents/*.md`. Specialized role definitions with complex YAML frontmatter (color, model, isolation, maxTurns, disallowedTools, hooks). Line counts: 116-833.
- **Core Agent** — 1 agent in `plugins/core/agents/ci-watcher.md`. Background agent with simpler frontmatter.
- **Rationalization Table** — Markdown table with `Rationalization` | `Reality` columns, 7-10 rows per file, domain-specific.
- **Iron Law** — Single non-negotiable rule per file, format: `NO [action] WITHOUT [prerequisite] FIRST`, rendered in all-caps.
- **Behavioral Eval** — Prompt + expected compliance measurement to validate table effectiveness.

### Relationships
- Each Core Skill gets exactly 1 Rationalization Table + 1 Iron Law
- Each Discipline Agent gets exactly 1 Rationalization Table + 1 Iron Law
- Core Agent (ci-watcher) gets 1 Rationalization Table + 1 Iron Law
- Behavioral Evals reference specific Skills/Agents to test

### Data Sources
- **Filesystem**: All 92 target files are markdown in the Han repo
- **superpowers reference**: obra/superpowers on GitHub — proven pattern for table format, size, and enforcement
- **No external APIs needed** — this is a pure markdown change

### Data Gaps
- Need to craft domain-specific rationalizations for each of 92 files — can be grouped by category (development skills, testing skills, review skills, design principle skills, discipline agent categories)
- Need behavioral eval suite design — what prompts to use, how to measure compliance

## Key Findings

1. **Universal insertion point for agents**: After `## Core Responsibilities`, before first pattern section — all 69 agents follow this structure consistently
2. **Skill insertion point varies by skill**: After the core philosophy/principles section, before implementation steps — but the exact section name differs per skill
3. **superpowers uses 7-12 rationalizations per skill** — too few (under 5) provides insufficient coverage, too many (over 15) gets ignored
4. **Two-column format works best**: `Excuse` | `Reality` — terse rebuttals under 15 words are most effective
5. **Iron Laws use prohibition format**: `NO [action] WITHOUT [prerequisite] FIRST` — always absolute, never hedged
6. **Layered enforcement is critical**: Tables alone aren't enough — superpowers uses tables + iron laws + XML tags + red flags + never-lists
7. **Han already uses `<important>` tags** in hooks — should adopt `<EXTREMELY_IMPORTANT>` for table sections to differentiate enforcement level
8. **Token optimization concern was rejected** by superpowers maintainer — per-skill tables outperform consolidated tables based on extensive testing

## Open Questions

1. Should design-principle skills (solid-principles, simplicity-principles, etc.) get "I don't need to apply this because..." rationalizations, or should they get rationalizations about common misapplications?
2. For discipline agents with `disallowedTools: ["Write", "Edit"]` (read-only agents like security-engineer, backend-architect), should the iron law reference their consulting/review role rather than implementation?
3. How should the behavioral eval suite be structured — standalone test files, or integrated into an existing test framework?
