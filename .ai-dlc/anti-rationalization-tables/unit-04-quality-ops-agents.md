---
status: pending
depends_on:
  - unit-01-core-dev-skills
branch: ai-dlc/anti-rationalization-tables/04-quality-ops-agents
discipline: documentation
pass: ""
workflow: ""
ticket: ""
---

# unit-04-quality-ops-agents

## Description

Add anti-rationalization guardrails to ~20 discipline agents in quality, security, operations, data, and ML categories, plus the core ci-watcher agent. These agents guard the quality and reliability gates — their rationalizations target corner-cutting on testing, security shortcuts, observability gaps, and "ship it and see" mentality.

## Discipline

documentation — This unit modifies agent markdown files (no code changes).

## Domain Entities

20 discipline agents + 1 core agent:

**Data Engineering (3)**
- `plugins/disciplines/data-engineering/agents/data-pipeline-engineer.md`
- `plugins/disciplines/data-engineering/agents/data-warehouse-engineer.md`
- `plugins/disciplines/data-engineering/agents/streaming-engineer.md`

**Machine Learning (3)**
- `plugins/disciplines/machine-learning/agents/ml-inference-engineer.md`
- `plugins/disciplines/machine-learning/agents/ml-pipeline-engineer.md`
- `plugins/disciplines/machine-learning/agents/mlops-engineer.md`

**Observability Engineering (3)**
- `plugins/disciplines/observability-engineering/agents/logging-engineer.md`
- `plugins/disciplines/observability-engineering/agents/monitoring-engineer.md`
- `plugins/disciplines/observability-engineering/agents/observability-engineer.md`

**Performance Engineering (3)**
- `plugins/disciplines/performance-engineering/agents/optimization-engineer.md`
- `plugins/disciplines/performance-engineering/agents/performance-engineer.md`
- `plugins/disciplines/performance-engineering/agents/scalability-engineer.md`

**Quality Engineering (2)**
- `plugins/disciplines/quality-engineering/agents/quality-strategist.md`
- `plugins/disciplines/quality-engineering/agents/test-architect.md`

**Security Engineering (1)**
- `plugins/disciplines/security-engineering/agents/security-engineer.md`

**Site Reliability Engineering (1)**
- `plugins/disciplines/site-reliability-engineering/agents/site-reliability-engineer.md`

**Accessibility Engineering (3)**
- `plugins/disciplines/accessibility-engineering/agents/accessibility-engineer.md`
- `plugins/disciplines/accessibility-engineering/agents/assistive-tech-specialist.md`
- `plugins/disciplines/accessibility-engineering/agents/inclusive-design-engineer.md`

**Core Agent (1)**
- `plugins/core/agents/ci-watcher.md`

## Data Sources

- Each agent .md file on disk
- Unit-01 tables as pattern reference
- superpowers reference patterns (documented in intent.md Context section)

## Technical Specification

For each agent, add `## Anti-Rationalization Guardrails` section after `## Core Responsibilities` (or `## Role` for ci-watcher), before the first pattern section. Contains:

1. `<EXTREMELY_IMPORTANT>` XML wrapper
2. Iron law specific to that agent's quality/ops domain
3. 2-column `Rationalization` | `Reality` table with 7-8 domain-specific rows

**Rationalization themes by sub-discipline:**

- **Data Engineering**: Skipping data validation, ignoring schema evolution, "data is clean enough"
- **Machine Learning**: Skipping model validation, training on biased data, "accuracy is good enough"
- **Observability**: "We'll add logging later", skipping metrics, alert fatigue normalization
- **Performance**: Premature optimization, optimizing without profiling, "it's fast enough"
- **Quality Engineering**: Reducing test scope, skipping edge cases, "happy path is what matters"
- **Security**: "Internal only = no auth needed", ignoring OWASP, "security is someone else's job"
- **Site Reliability**: Ignoring failure modes, skipping runbooks, "it hasn't failed yet"
- **Accessibility**: "We'll add a11y later", "screen readers don't use this", "small user base"
- **CI Watcher**: Auto-dismissing failures, "flaky test, skip it", not investigating root causes

**Example for security-engineer:**

```markdown
## Anti-Rationalization Guardrails

<EXTREMELY_IMPORTANT>

**Iron Law:** `NO SECURITY ASSESSMENT WITHOUT THREAT MODEL FIRST`

| Rationalization | Reality |
|----------------|---------|
| "It's internal only" | Internal networks get compromised. Auth everything. |
| "We'll add security later" | Retrofitting security is 10x harder. Build it in. |
| "This is low risk" | Low risk is still risk. Quantify it, don't dismiss it. |
| "Nobody would attack this" | Attackers find what you didn't protect. |
| "The framework handles security" | Frameworks have CVEs. Verify, don't assume. |
| "Input validation is overkill" | Injection is OWASP #1 for a reason. Validate. |
| "Encryption slows things down" | Breach costs more than latency. Encrypt. |
| "Security review will catch it" | Review is verification, not primary defense. |

</EXTREMELY_IMPORTANT>
```

**Note on ci-watcher**: This is a background agent (not read-only). Its insertion point is after `## Role`, before `## Behavior`. Its iron law should target the temptation to auto-dismiss CI failures.

**Note on read-only agents**: security-engineer, test-architect, quality-strategist have `disallowedTools: ["Write", "Edit"]`. Their iron laws should reference analysis quality, not implementation.

## Success Criteria

- [ ] All 21 agents (20 discipline + 1 core) have `## Anti-Rationalization Guardrails` section
- [ ] Each table has 7-8 domain-specific rationalizations
- [ ] Each iron law matches the agent's quality/ops domain
- [ ] Section placed at the correct insertion point per agent
- [ ] Format matches the convention in intent.md exactly
- [ ] Accessibility agent tables specifically target a11y-dismissal rationalizations

## Risks

- **Security and quality rationalizations are well-documented elsewhere**: Mitigation: Don't copy generic security advice. Write rationalizations that an AI agent specifically would use when working with this agent role — not what a human developer would rationalize.
- **ML/data agents have specialized domains**: Mitigation: Reference specific ML concerns (data leakage, distribution shift, feature drift) rather than generic "data is clean enough."

## Boundaries

This unit covers ONLY the quality, security, operations, data, ML, and accessibility discipline agents listed above, plus ci-watcher. Engineering/architecture agents are in unit-03. Product/content agents are in unit-05.

## Notes

- The security-engineer has 733 lines — it's the most detailed agent. Its table should be proportionally thoughtful.
- The test-architect has 833 lines — the longest agent. Its table should target test architecture shortcuts, not just test-writing shortcuts.
- Accessibility rationalizations are especially important because a11y is the most commonly rationalized-away concern in software development.
