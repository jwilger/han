---
status: pending
depends_on:
  - unit-01-core-dev-skills
branch: ai-dlc/anti-rationalization-tables/05-product-content-agents
discipline: documentation
pass: ""
workflow: ""
ticket: ""
---

# unit-05-product-content-agents

## Description

Add anti-rationalization guardrails to ~26 discipline agents in product, design, content, gaming, graphics, and specialty categories. These agents handle user-facing work, creative output, and domain-specific engineering — their rationalizations target "users won't notice", content quality shortcuts, and scope creep in creative domains.

## Discipline

documentation — This unit modifies agent markdown files (no code changes).

## Domain Entities

26 discipline agents:

**Blockchain Development (3)**
- `plugins/disciplines/blockchain-development/agents/blockchain-engineer.md`
- `plugins/disciplines/blockchain-development/agents/smart-contract-engineer.md`
- `plugins/disciplines/blockchain-development/agents/web3-engineer.md`

**Claude Plugin Development (1)**
- `plugins/disciplines/claude-plugin-development/agents/plugin-developer.md`

**Content Creation (5)**
- `plugins/disciplines/content-creation/agents/blog-writer.md`
- `plugins/disciplines/content-creation/agents/copywriter.md`
- `plugins/disciplines/content-creation/agents/newsletter-writer.md`
- `plugins/disciplines/content-creation/agents/social-media-writer.md`
- `plugins/disciplines/content-creation/agents/technical-writer.md`

**Documentation Engineering (1)**
- `plugins/disciplines/documentation-engineering/agents/documentation-engineer.md`

**Frontend Development (1)**
- `plugins/disciplines/frontend-development/agents/presentation-engineer.md`

**Game Development (6)**
- `plugins/disciplines/game-development/agents/game-developer.md`
- `plugins/disciplines/game-development/agents/game-engine-architect.md`
- `plugins/disciplines/game-development/agents/game-performance-engineer.md`
- `plugins/disciplines/game-development/agents/game-tools-engineer.md`
- `plugins/disciplines/game-development/agents/gameplay-engineer.md`
- `plugins/disciplines/game-development/agents/technical-game-designer.md`

**Graphics Engineering (3)**
- `plugins/disciplines/graphics-engineering/agents/graphics-engineer.md`
- `plugins/disciplines/graphics-engineering/agents/shader-engineer.md`
- `plugins/disciplines/graphics-engineering/agents/visualization-engineer.md`

**Mobile Development (2)**
- `plugins/disciplines/mobile-development/agents/ios-developer.md`
- `plugins/disciplines/mobile-development/agents/mobile-developer.md`

**Product Management (1)**
- `plugins/disciplines/product-management/agents/the-visionary.md`

**Project Management (2)**
- `plugins/disciplines/project-management/agents/flow-coordinator.md`
- `plugins/disciplines/project-management/agents/technical-coordinator.md`

**Prompt Engineering (1)**
- `plugins/disciplines/prompt-engineering/agents/prompt-engineer.md`

**VoIP Engineering (1)**
- `plugins/disciplines/voip-engineering/agents/voip-engineer.md`

## Data Sources

- Each agent .md file on disk
- Unit-01 tables as pattern reference
- superpowers reference patterns (documented in intent.md Context section)

## Technical Specification

For each agent, add `## Anti-Rationalization Guardrails` section after `## Core Responsibilities` (or equivalent role section), before the first pattern section. Contains:

1. `<EXTREMELY_IMPORTANT>` XML wrapper
2. Iron law specific to that agent's domain
3. 2-column `Rationalization` | `Reality` table with 7-8 domain-specific rows

**Rationalization themes by sub-discipline:**

- **Blockchain**: Skipping audits, "it's just a view function", ignoring gas optimization, "testnet passed"
- **Claude Plugin Development**: Skipping plugin validation, ignoring marketplace schema, "it works locally"
- **Content Creation**: "Good enough copy", skipping audience research, filler content, SEO stuffing
- **Documentation Engineering**: "Code is self-documenting", outdated docs, missing examples
- **Frontend Development**: "Users won't notice", skipping responsive design, ignoring browser compatibility
- **Game Development**: "Ship and patch", ignoring frame budget, skipping playtesting, "it's fun enough"
- **Graphics Engineering**: "GPU handles it", ignoring draw call counts, skipping LOD
- **Mobile Development**: "Works on my device", ignoring battery/memory, skipping offline mode
- **Product Management**: Feature creep, ignoring user research, "we know what users want"
- **Project Management**: Ignoring blockers, optimistic status reporting, "we'll catch up later"
- **Prompt Engineering**: "The prompt works for this case", ignoring edge cases, skipping evaluation
- **VoIP Engineering**: "Packet loss is acceptable", ignoring jitter, skipping codec testing

**Example for content-creation/blog-writer:**

```markdown
## Anti-Rationalization Guardrails

<EXTREMELY_IMPORTANT>

**Iron Law:** `NO PUBLISHED CONTENT WITHOUT AUDIENCE AND PURPOSE DEFINED FIRST`

| Rationalization | Reality |
|----------------|---------|
| "The draft is good enough" | Good enough gets ignored. Revise until it's sharp. |
| "I know the audience" | Assumed audience is wrong audience. Research first. |
| "SEO keywords are the priority" | Keyword-stuffed content repels readers. Write for humans. |
| "Longer is more thorough" | Length is not depth. Every paragraph must earn its place. |
| "The topic speaks for itself" | No topic is self-evident. Frame the reader's problem first. |
| "We can fix it after publishing" | Published content is indexed immediately. Get it right. |
| "This section is filler" | If it's filler, delete it. Every word costs reader attention. |

</EXTREMELY_IMPORTANT>
```

## Success Criteria

- [ ] All 26 agents have `## Anti-Rationalization Guardrails` section
- [ ] Each table has 7-8 domain-specific rationalizations
- [ ] Each iron law matches the agent's creative/product domain
- [ ] Section placed after role/responsibilities section, before patterns
- [ ] Format matches the convention in intent.md exactly
- [ ] Content creation agent tables address content quality, not just process
- [ ] Game/graphics agent tables reference domain-specific performance concerns

## Risks

- **26 agents across very diverse domains**: Mitigation: Group writes by sub-discipline. Content creation agents (5 agents) share themes; game development agents (6 agents) share themes.
- **Creative domain rationalizations are less technical**: Mitigation: Keep rebuttals concrete. "The draft is good enough" is a content rationalization, but the rebuttal should reference measurable quality (engagement, clarity, accuracy), not subjective taste.

## Boundaries

This unit covers ONLY the product, content, gaming, graphics, and specialty discipline agents listed above. Engineering agents are in unit-03. Quality/ops agents are in unit-04.

## Notes

- The `the-visionary` (product management) agent is unique — it's a strategic role. Its rationalizations should target vision shortcuts, not implementation shortcuts.
- The `presentation-engineer` (frontend) has 530 lines — its rationalizations should target visual design shortcuts and accessibility.
- Game development has 6 agents — ensure each has distinct rationalizations even though they share a domain.
- The `prompt-engineer` agent's rationalizations are meta — it's about prompt quality for AI, which is directly relevant to this entire effort.
