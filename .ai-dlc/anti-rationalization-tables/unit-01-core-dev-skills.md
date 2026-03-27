---
status: pending
depends_on: []
branch: ai-dlc/anti-rationalization-tables/01-core-dev-skills
discipline: documentation
pass: ""
workflow: ""
ticket: ""
---

# unit-01-core-dev-skills

## Description

Add anti-rationalization guardrails to Han's 8 core development/workflow skills. These are the most critical skills because they define the actual development processes agents follow — skipping steps here directly leads to low-quality code.

## Discipline

documentation — This unit modifies skill markdown files (no code changes).

## Domain Entities

8 core skills that define development workflows:

| Skill | File | Lines | Insertion Point |
|-------|------|-------|----------------|
| develop | `plugins/core/skills/develop/SKILL.md` | 446 | After "## Overview", before "## Phase 1: Discover" |
| test | `plugins/core/skills/test/SKILL.md` | 61 | After "## Key Principles", before "## Examples" |
| fix | `plugins/core/skills/fix/SKILL.md` | 132 | After "## Bug Fixing Principles", before "## Examples" |
| refactor | `plugins/core/skills/refactor/SKILL.md` | 639 | After "## Core Principle", before "## The Refactoring Cycle" |
| debug | `plugins/core/skills/debug/SKILL.md` | ~100 | After core description, before process steps |
| code-review | `plugins/core/skills/code-review/SKILL.md` | ~200 | After overview, before review process |
| review | `plugins/core/skills/review/SKILL.md` | 485 | After "## Overview", before "## How It Works" |
| optimize | `plugins/core/skills/optimize/SKILL.md` | ~150 | After principles, before techniques |

## Data Sources

- Each SKILL.md file on disk (read current content, identify insertion point, add section)
- superpowers reference patterns (documented in intent.md Context section)

## Technical Specification

For each of the 8 skills, add an `## Anti-Rationalization Guardrails` section at the identified insertion point containing:

1. An `<EXTREMELY_IMPORTANT>` XML wrapper
2. An iron law specific to that skill's purpose
3. A 2-column `Rationalization` | `Reality` table with 8-10 domain-specific rows

**Example for the `test` skill:**

```markdown
## Anti-Rationalization Guardrails

<EXTREMELY_IMPORTANT>

**Iron Law:** `NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST`

| Rationalization | Reality |
|----------------|---------|
| "Too simple to test" | Simple code breaks in surprising ways. |
| "I'll write tests after" | Tests-after verify implementation, not intent. |
| "Already manually tested" | Manual testing has no record and can't re-run. |
| "Tests will slow me down" | Debugging without tests is slower. |
| "The existing code has no tests" | You're improving it. Start now. |
| "Test is hard to write = skip it" | Hard to test means hard to use. Listen to the test. |
| "Edge cases aren't important" | Edge cases are where bugs hide. |
| "Mocking is close enough" | Mocks diverge from reality. Test boundaries. |

</EXTREMELY_IMPORTANT>
```

**Rationalization categories by skill:**

- **develop**: Skipping phases, skipping user clarification, implementing before designing
- **test**: Skipping TDD, inadequate coverage, writing tests after
- **fix**: Guessing at fixes, not reproducing bugs, treating symptoms
- **refactor**: Changing behavior during refactor, skipping tests, big-bang changes
- **debug**: Jumping to conclusions, not gathering evidence, confirmation bias
- **code-review**: Rubber-stamp approvals, ignoring edge cases, scope creep suggestions
- **review**: Low confidence threshold, skipping reviewer types, filtering legitimate issues
- **optimize**: Premature optimization, optimizing without measurement, micro-optimization

## Success Criteria

- [ ] All 8 skills have `## Anti-Rationalization Guardrails` section
- [ ] Each table has 8-10 domain-specific rationalizations (not generic)
- [ ] Each iron law is specific to the skill's core purpose
- [ ] Tables are placed at the correct insertion point (after philosophy, before implementation)
- [ ] Section format matches the convention in intent.md exactly
- [ ] Rationalizations reference actual behaviors the skill is trying to enforce

## Risks

- **Table placement disrupts reading flow**: Mitigation: Keep tables concise (8-10 rows max) and place after philosophy, before implementation steps so they're read during setup, not mid-flow.
- **Generic rationalizations**: Mitigation: Each table must reference the specific workflow steps of that skill. A "develop" rationalization should mention phases; a "test" rationalization should mention TDD; a "review" rationalization should mention confidence scoring.

## Boundaries

This unit covers ONLY the 8 development/workflow core skills. Design principle skills (solid-principles, simplicity-principles, etc.) are in unit-02. Discipline agents are in units 03-05. The behavioral eval suite is in unit-06.

## Notes

- This unit establishes the pattern that units 03-05 will follow for discipline agents. The table quality here sets the bar.
- Read each skill file completely before writing its table — the rationalizations must match what the skill actually prescribes.
- The `develop` skill has 8 phases — its table should target the most commonly skipped phases (Discover, Explore, Clarify, Design).
- The `review` skill uses multi-agent confidence scoring — its table should target confidence threshold rationalizations.
