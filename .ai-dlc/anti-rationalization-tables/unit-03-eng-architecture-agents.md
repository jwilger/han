---
status: pending
depends_on:
  - unit-01-core-dev-skills
branch: ai-dlc/anti-rationalization-tables/03-eng-architecture-agents
discipline: documentation
pass: ""
workflow: ""
ticket: ""
---

# unit-03-eng-architecture-agents

## Description

Add anti-rationalization guardrails to ~23 discipline agents in the engineering and architecture categories. These agents advise on system design, infrastructure, and core engineering — their rationalizations target shortcuts in architectural thinking, premature technology choices, and skipping operational concerns.

## Discipline

documentation — This unit modifies agent markdown files (no code changes).

## Domain Entities

23 discipline agents organized by sub-discipline:

**API Engineering (3)**
- `plugins/disciplines/api-engineering/agents/api-contract-engineer.md`
- `plugins/disciplines/api-engineering/agents/api-designer.md`
- `plugins/disciplines/api-engineering/agents/api-gateway-engineer.md`

**Backend Development (2)**
- `plugins/disciplines/backend-development/agents/api-designer.md`
- `plugins/disciplines/backend-development/agents/backend-architect.md`

**Compiler Engineering (3)**
- `plugins/disciplines/compiler-engineering/agents/compiler-engineer.md`
- `plugins/disciplines/compiler-engineering/agents/language-designer.md`
- `plugins/disciplines/compiler-engineering/agents/vm-engineer.md`

**Database Engineering (3)**
- `plugins/disciplines/database-engineering/agents/database-designer.md`
- `plugins/disciplines/database-engineering/agents/database-reliability-engineer.md`
- `plugins/disciplines/database-engineering/agents/query-optimizer.md`

**Embedded Development (3)**
- `plugins/disciplines/embedded-development/agents/embedded-engineer.md`
- `plugins/disciplines/embedded-development/agents/firmware-engineer.md`
- `plugins/disciplines/embedded-development/agents/iot-engineer.md`

**Infrastructure Engineering (1)**
- `plugins/disciplines/infrastructure-engineering/agents/devops-engineer.md`

**Network Engineering (3)**
- `plugins/disciplines/network-engineering/agents/distributed-systems-engineer.md`
- `plugins/disciplines/network-engineering/agents/network-protocol-engineer.md`
- `plugins/disciplines/network-engineering/agents/service-mesh-engineer.md`

**Platform Engineering (3)**
- `plugins/disciplines/platform-engineering/agents/developer-experience-engineer.md`
- `plugins/disciplines/platform-engineering/agents/infrastructure-engineer.md`
- `plugins/disciplines/platform-engineering/agents/platform-engineer.md`

**System Architecture (2)**
- `plugins/disciplines/system-architecture/agents/solution-architect.md`
- `plugins/disciplines/system-architecture/agents/system-architect.md`

## Data Sources

- Each agent .md file on disk
- Unit-01 tables as pattern reference (read to match format and quality bar)
- superpowers reference patterns (documented in intent.md Context section)

## Technical Specification

For each agent, add an `## Anti-Rationalization Guardrails` section after `## Core Responsibilities`, before the first pattern/framework section. Contains:

1. `<EXTREMELY_IMPORTANT>` XML wrapper
2. Iron law specific to that agent's domain
3. 2-column `Rationalization` | `Reality` table with 7-8 domain-specific rows

**Rationalization themes by sub-discipline:**

- **API Engineering**: Breaking contracts, skipping versioning, ignoring backward compatibility, exposing internal models
- **Backend Development**: Premature optimization, ignoring operational concerns, monolith-vs-microservice shortcuts
- **Compiler Engineering**: Skipping formal verification, ignoring edge cases in parsing, "it works for the common case"
- **Database Engineering**: Skipping migrations, denormalizing prematurely, ignoring index design, "we'll optimize later"
- **Embedded Development**: Ignoring memory constraints, skipping hardware testing, "it works in simulation"
- **Infrastructure Engineering**: Skipping IaC, manual deployments, ignoring disaster recovery
- **Network Engineering**: Ignoring failure modes, skipping circuit breakers, "the network is reliable"
- **Platform Engineering**: Building for edge cases before core, ignoring developer ergonomics
- **System Architecture**: Over-engineering, under-documenting decisions, ignoring operational costs

**Example for database-designer:**

```markdown
## Anti-Rationalization Guardrails

<EXTREMELY_IMPORTANT>

**Iron Law:** `NO SCHEMA CHANGES WITHOUT MIGRATION AND ROLLBACK PLAN`

| Rationalization | Reality |
|----------------|---------|
| "We'll normalize later" | Later never comes. Get the schema right now. |
| "Denormalization is fine for speed" | Measure first. Premature denormalization creates bugs. |
| "No need for an index yet" | Indexes are cheaper to add now than after data grows. |
| "This column won't need constraints" | Constraints prevent data corruption. Add them. |
| "We can change the schema later" | Schema changes with data are expensive and risky. |
| "One big table is simpler" | Simplicity now is complexity at scale. |
| "Foreign keys hurt performance" | Integrity matters more than micro-performance. |

</EXTREMELY_IMPORTANT>
```

**Note on read-only agents**: Some agents (backend-architect, system-architect, etc.) have `disallowedTools: ["Write", "Edit"]` — they are consulting/review agents. Their iron laws should reference their advisory role: "NO ARCHITECTURAL RECOMMENDATION WITHOUT TRADE-OFF ANALYSIS" rather than implementation-focused laws.

## Success Criteria

- [ ] All 23 agents have `## Anti-Rationalization Guardrails` section
- [ ] Each table has 7-8 domain-specific rationalizations
- [ ] Each iron law matches the agent's role (advisory agents get advisory iron laws)
- [ ] Section placed after `## Core Responsibilities`, before first pattern section
- [ ] Format matches the convention in intent.md exactly
- [ ] Rationalizations reference domain-specific shortcuts (not generic)

## Risks

- **23 agents is a lot of domain-specific content**: Mitigation: Group by sub-discipline and write tables in batches. Agents within the same sub-discipline share common rationalization themes.
- **Read-only vs. implementation agents need different iron laws**: Mitigation: Check each agent's `disallowedTools` in frontmatter. If `["Write", "Edit"]` is present, the agent advises — iron law should be about analysis/recommendation quality, not implementation.

## Boundaries

This unit covers ONLY the engineering and architecture discipline agents listed above. Quality/security/ops agents are in unit-04. Product/content agents are in unit-05.

## Notes

- Read unit-01's completed tables before starting this unit to match format and quality bar.
- The `backend-development/api-designer.md` and `api-engineering/api-designer.md` are different agents — read both to write distinct tables.
- Compiler and embedded agents have domain-specific concerns (formal verification, hardware constraints) that generic AI rationalizations won't cover — research the domain if needed.
