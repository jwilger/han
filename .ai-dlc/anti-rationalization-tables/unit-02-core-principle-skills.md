---
status: pending
depends_on: []
branch: ai-dlc/anti-rationalization-tables/02-core-principle-skills
discipline: documentation
pass: ""
workflow: ""
ticket: ""
---

# unit-02-core-principle-skills

## Description

Add anti-rationalization guardrails to Han's 14 core principle/reference skills. These skills define design principles and reference patterns — their rationalizations target "I don't need to apply this principle because..." and "This principle doesn't apply here because..." excuses.

## Discipline

documentation — This unit modifies skill markdown files (no code changes).

## Domain Entities

14 core skills that define design principles and reference patterns:

| Skill | File | Rationalization Theme |
|-------|------|----------------------|
| architect | `plugins/core/skills/architect/SKILL.md` | Skipping architecture, over/under-designing |
| baseline-restorer | `plugins/core/skills/baseline-restorer/SKILL.md` | Continuing to patch instead of restoring baseline |
| boy-scout-rule | `plugins/core/skills/boy-scout-rule/SKILL.md` | "Not my code", "no time to clean up" |
| document | `plugins/core/skills/document/SKILL.md` | "Code is self-documenting", skipping docs |
| explain | `plugins/core/skills/explain/SKILL.md` | Over-simplifying, assuming knowledge level |
| legacy-code-safety | `plugins/core/skills/legacy-code-safety/SKILL.md` | Modifying untested code, skipping characterization tests |
| orthogonality-principle | `plugins/core/skills/orthogonality-principle/SKILL.md` | "Coupling is necessary here", "it's simpler to share" |
| plan | `plugins/core/skills/plan/SKILL.md` | "I already know what to do", skipping planning |
| professional-honesty | `plugins/core/skills/professional-honesty/SKILL.md` | Being agreeable instead of honest, avoiding hard truths |
| project-memory | `plugins/core/skills/project-memory/SKILL.md` | "I'll remember this", skipping memory setup |
| proof-of-work | `plugins/core/skills/proof-of-work/SKILL.md` | Claiming results without evidence, skipping verification |
| simplicity-principles | `plugins/core/skills/simplicity-principles/SKILL.md` | Over-engineering, premature abstraction |
| solid-principles | `plugins/core/skills/solid-principles/SKILL.md` | "SOLID is overkill here", violating single responsibility |
| structural-design-principles | `plugins/core/skills/structural-design-principles/SKILL.md` | "Inheritance is simpler", violating Law of Demeter |

## Data Sources

- Each SKILL.md file on disk (read current content, identify insertion point)
- superpowers reference patterns (documented in intent.md Context section)

## Technical Specification

For each of the 14 skills, add an `## Anti-Rationalization Guardrails` section containing:

1. `<EXTREMELY_IMPORTANT>` XML wrapper
2. Iron law specific to that principle's core mandate
3. 2-column `Rationalization` | `Reality` table with 7-10 rows

**Insertion point**: After the skill's core philosophy/principle statement, before implementation details or examples. Read each file to find the exact section boundary.

**Rationalization style for principle skills**: Unlike workflow skills (unit-01) where rationalizations target step-skipping, principle skills have rationalizations that target principle-avoidance:

- "This principle doesn't apply to this situation"
- "Following this principle would be over-engineering"
- "The codebase already violates this, so maintaining consistency is better"
- "I understand the principle, I'm making a deliberate exception"
- "This is a small change, principles apply to big designs"

Each table must be specific to the principle. A `solid-principles` table should reference SRP, OCP, LSP, ISP, DIP by name. A `simplicity-principles` table should reference KISS, YAGNI, POLA by name.

**Example for `proof-of-work` skill:**

```markdown
## Anti-Rationalization Guardrails

<EXTREMELY_IMPORTANT>

**Iron Law:** `NO CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE`

| Rationalization | Reality |
|----------------|---------|
| "I'm confident it works" | Confidence is not evidence. Run it. |
| "It worked before" | Past results don't prove current state. |
| "The tests should pass" | "Should" is not "did". Show the output. |
| "I just checked" | Show the output from THIS run. |
| "Linter passed, so it's fine" | Linter checks style, not correctness. |
| "It's a trivial change" | Trivial changes cause non-trivial bugs. |
| "The CI will catch it" | CI is backstop, not substitute for local verification. |

</EXTREMELY_IMPORTANT>
```

## Success Criteria

- [ ] All 14 skills have `## Anti-Rationalization Guardrails` section
- [ ] Each table has 7-10 domain-specific rationalizations
- [ ] Each iron law references the specific principle the skill teaches
- [ ] Rationalizations target principle-avoidance, not step-skipping
- [ ] Section format matches the convention in intent.md exactly
- [ ] Tables are placed at the correct insertion point per skill

## Risks

- **Principle skills vary widely in structure**: Some are reference docs (solid-principles at ~200 lines), some are workflow-like (plan, document). Mitigation: Read each file completely to find the right insertion point rather than assuming a standard location.
- **Rationalizations may overlap across principle skills**: Mitigation: Focus on the specific principle name. Don't use generic "this is overkill" — use "SRP is overkill for this class" or "YAGNI doesn't apply here."

## Boundaries

This unit covers ONLY the 14 principle/reference core skills. Development workflow skills are in unit-01. Discipline agents are in units 03-05.

## Notes

- The `professional-honesty` and `proof-of-work` skills are meta-skills about agent behavior — their rationalizations should be particularly pointed about self-deception.
- The `legacy-code-safety` skill's table should emphasize the danger of modifying untested code.
- The `baseline-restorer` skill is used when fix attempts fail — its table should target "one more try" rationalizations.
- Design principle skills (solid, simplicity, structural-design, orthogonality) should name the specific sub-principles in their rationalizations.
