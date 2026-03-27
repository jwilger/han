---
intent_slug: anti-rationalization-tables
worktree_path: /Volumes/dev/src/github.com/thebushidocollective/han/.ai-dlc/worktrees/anti-rationalization-tables
project_maturity: established
provider_config: {"spec":null,"ticketing":null,"design":null,"comms":null,"vcsHosting":"github","ciCd":"github-actions"}
---

# Intent Description

Add anti-rationalization tables to ALL Han skills and agents. These are markdown tables embedded inline in each file listing common excuses an AI agent uses to skip steps, paired with rebuttals and rules. Also add Iron Law absolutes and `<EXTREMELY_IMPORTANT>` XML emphasis tags at critical enforcement points. This pattern is proven by obra/superpowers (112K stars) to dramatically improve agent compliance with prescribed workflows.

Target files:
- 22 core skills in `plugins/core/skills/*/SKILL.md`
- 69 discipline agents in `plugins/disciplines/*/agents/*.md`
- 1 core agent in `plugins/core/agents/ci-watcher.md`

Total: ~92 files to modify.

## Clarification Answers

Q: Should we add rationalization tables to all 70+ discipline agents or target a smaller set?
A: Everything — all 22 core skills + all 69 discipline agents + core agents.

Q: Should rationalization tables live directly in each agent/skill markdown, or in a shared reference file?
A: Inline in each file — each agent/skill has its own table with domain-specific rationalizations, no indirection.

Q: Should we adopt superpowers' emphasis patterns like <EXTREMELY_IMPORTANT> XML tags and Iron Laws?
A: Yes, both — use XML emphasis tags AND iron law absolutes for maximum behavioral impact.

Q: How should we validate that the tables actually change agent behavior?
A: Behavioral eval suite — create a set of prompts that trigger common rationalizations and measure compliance rates.

Q: AI-DLC is a separate plugin, not part of Han.
A: Confirmed. Anti-rationalization tables apply to Han's core skills, discipline agents, and core agents only.

## Key Context

- This is a pure markdown change — zero code required
- Each file needs domain-specific rationalizations (not generic)
- The superpowers pattern uses: table with Rationalization | Reality | Rule columns, Iron Laws as absolute statements, `<EXTREMELY_IMPORTANT>` XML tags
- Han already uses `<important>` tags in some hooks — need to decide on tag convention
- Files have varied structure: some have YAML frontmatter with complex metadata, some are simpler

## Discovery File Path

/Volumes/dev/src/github.com/thebushidocollective/han/.ai-dlc/worktrees/anti-rationalization-tables/.ai-dlc/anti-rationalization-tables/discovery.md
