---
intent: anti-rationalization-tables
created: 2026-03-26
status: active
---

# Discovery Log: Anti-Rationalization Tables

Elaboration findings persisted during domain discovery.
Builders: read section headers for an overview, then dive into specific sections as needed.


## Codebase Pattern: Core Skills Structure

22 core skills in `plugins/core/skills/*/SKILL.md`. All have YAML frontmatter with `name` and `description`. Structure varies:

| Skill | Lines | Key Sections | Table Insertion Point |
|-------|-------|-------------|----------------------|
| develop | 446 | 8-phase workflow (Discover→Document) | After "Overview", before "Phase 1" |
| test | 61 | TDD process, Key Principles | After "Key Principles", before "Examples" |
| review | 485 | Multi-agent review with confidence scoring | After "Overview", before "How It Works" |
| fix | 132 | Bug fixing process, principles | After "Bug Fixing Principles", before "Examples" |
| refactor | 639 | Core principle, refactoring cycle, safety checklist | After "Core Principle", before "The Refactoring Cycle" |

**Common pattern**: Insert anti-rationalization table after the core philosophy/principles section and before implementation details begin.

All 22 skills: architect, baseline-restorer, boy-scout-rule, code-review, debug, develop, document, explain, fix, legacy-code-safety, optimize, orthogonality-principle, plan, professional-honesty, project-memory, proof-of-work, refactor, review, simplicity-principles, solid-principles, structural-design-principles, test.

Note: Some skills (orthogonality-principle, simplicity-principles, solid-principles, structural-design-principles, boy-scout-rule) are design principle reference docs rather than workflow skills. These still benefit from anti-rationalization tables targeting "I don't need to apply this principle because..." rationalizations.

## Codebase Pattern: Discipline Agents Structure

69 discipline agents in `plugins/disciplines/*/agents/*.md` + 1 core agent (`ci-watcher.md`).

**Universal YAML frontmatter pattern:**
- `name`, `description` (with examples), `color`, `model: inherit`, `memory: project`
- `isolation: worktree`, `maxTurns: 10-100`, `disallowedTools: ["Write", "Edit"]`
- `hooks.Stop`: worktree-merge-prompt.sh

**Universal section sequence:**
1. `# {Agent Title}` — role description paragraph
2. `## Core Responsibilities` — itemized breakdown
3. **[OPTIMAL INSERTION POINT]**
4. Major pattern/framework sections
5. Best practices
6. (Optional) Consulting questions / philosophy

**Consistent insertion point**: After `## Core Responsibilities`, before first major pattern section. All 69 agents follow this structure.

Agent line counts range from 116 (ci-watcher) to 833 (test-architect). Average ~500 lines.

## External Research: superpowers Anti-Rationalization Pattern

obra/superpowers (112K stars) uses 6 layered enforcement patterns:

### 1. Rationalization Tables
Two-column format: `Excuse` | `Reality`
- Left: Quoted first-person rationalization
- Right: Terse declarative rebuttal (under 15 words)
- 7-12 rationalizations per skill (sweet spot)
- Rebuttals are absolute, never hedged

Example from TDD skill:
| Excuse | Reality |
|--------|---------|
| "Too simple to test" | Simple code breaks. Test takes 30 seconds. |
| "I'll test after" | Tests passing immediately prove nothing. |
| "TDD will slow me down" | TDD faster than debugging. Pragmatic = test-first. |

### 2. Iron Laws
One per skill, format: `NO [action] WITHOUT [prerequisite] FIRST`
- Always in all-caps code block
- Always an absolute prohibition
Examples:
- `NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST`
- `NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST`
- `NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE`

### 3. XML Enforcement Tags
- `<EXTREMELY_IMPORTANT>`: Used once at session-level for bootstrap
- `<HARD-GATE>`: Used within individual skills for workflow checkpoints
  - Contains: explicit prohibition + scope declaration + universality clause

### 4. Red Flags Lists
Warning signs that require stopping and restarting.

### 5. "Never:" Prohibition Lists
Explicit imperatives: "Never: Skip reviews", "Never: Proceed with unfixed issues"

### 6. Persuasion Principles (from writing-skills)
Based on 2025 study showing compliance rates doubled (33%→72%). Uses:
- Authority: Commanding language ("YOU MUST", "Never")
- Commitment: Explicit declarations
- Scarcity: Temporal urgency ("IMMEDIATELY")
- Social Proof: Universal patterns ("Every time", "Always")

**Key insight**: Bright-line rules reduce rationalization more effectively than nuanced guidance. Rebuttals work because they are absolute, not because they are detailed.

**Token optimization debate**: Issue #832 proposed consolidating all tables into one meta-skill. Owner rejected it — tables "are there for a reason" and based on extensive testing.

## Architecture Decision: Table Format for Han

Based on superpowers research and Han's existing structure:

**Table format**: Two columns — `Rationalization` | `Reality`
**Size**: 7-10 per file (skills get 8-10, discipline agents get 7-8)
**Iron Laws**: One per skill/agent, format: `NO [action] WITHOUT [prerequisite] FIRST`
**XML tags**: Use `<EXTREMELY_IMPORTANT>` wrapping the table section + iron law
**Placement**:
- Core skills: After core philosophy section, before implementation steps
- Discipline agents: After `## Core Responsibilities`, before first pattern section
**Section header**: `## Anti-Rationalization Guardrails`

