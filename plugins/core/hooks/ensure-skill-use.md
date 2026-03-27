# Mandatory Skill Selection

**ALWAYS review available skills BEFORE starting work.**

## Skills to always assess for use

- professional-honesty
- proof-of-work
- solid-principles
- structural-design-principles
- orthogonality-principle
- simplicity-principles
- boy-scout-rule
- baseline-restorer
- legacy-code-safety

## Process

1. Check `<available_skills>` in system prompt
2. Read skill descriptions - they tell you when to use them
3. Match descriptions to current task
4. Select ALL applicable skills
5. Announce selection to user

## Skill Categories

Mental checklist for skill selection:

- **Core Philosophy** - Code quality, honesty, evidence-based claims?
- **Design Principles** - Architecture, modularity, coupling, simplicity?
- **Testing & Quality** - TDD, code review, verification?
- **Process & Recovery** - Debugging strategies, baseline restoration?
- **Code Improvement** - Refactoring, incremental improvements?
- **Technology-Specific** - Framework/language patterns (Jutsu skills)?

## Communication

**At task start:**

```
"Using these skills:
- skill-name (reason it applies)"
```

**During work (if new skills identified):**

```
"Identified additional skill needed:
- skill-name (reason)"
```

## The 1% Rule

If there is even a 1% chance that a skill applies to the current task, you MUST invoke it using the Skill tool.

Skills exist to prevent known failure modes. Skipping a relevant skill because "it probably doesn't apply" is exactly how failures happen. The cost of invoking an unnecessary skill (~100 tokens) is trivial compared to the cost of missing a failure mode it would have caught.

**Before starting any task:**
1. Scan all available skills
2. For each, ask: "Could this help?"
3. If the answer is anything other than "definitely not," invoke it

## Key Points

- Skill descriptions are source of truth
- Multiple skills often apply to one task
- Quality/verification skills apply to most tasks
- Announce skills BEFORE coding, not after

**Review skills FIRST, not after work starts.**
