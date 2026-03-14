# Session Code Review

Backpressure code review plugin that validates changes against `REVIEW.md` before commits and session completion.

## How It Works

This plugin uses Claude Code's [agent-based hooks](https://code.claude.com/docs/en/hooks#agent-based-hooks) to provide automatic code review at two critical points:

### Stop Hook — Session Review

When Claude finishes responding, an agent reviewer examines all uncommitted and staged changes against your `REVIEW.md` and `CLAUDE.md` guidelines. If issues are found, Claude continues working to fix them instead of stopping.

### PreToolUse Hook — Commit/Push Gate

Before any `git commit` or `git push` command executes, an agent reviewer checks the staged or branch changes. If issues are found, the commit/push is blocked and Claude is told what to fix.

## REVIEW.md

Create a `REVIEW.md` file at your repository root to define review rules. The plugin auto-discovers this file — no configuration needed.

Example `REVIEW.md`:

```markdown
# Review Guidelines

## Required

- All API routes must validate authentication tokens
- Database queries must use parameterized statements
- Error responses must not leak internal implementation details
- All new public functions must have JSDoc comments

## Do Not Flag

- Formatting issues (handled by Biome)
- Test file naming conventions
- Import ordering
```

The plugin also respects `CLAUDE.md` files for project-specific conventions.

## Installation

```bash
claude plugin install session-code-review@han
```

Recommended scope: **project** (since review rules are project-specific):

```bash
han plugin install session-code-review --scope project
```

## On-Demand Review

Use the `/code-review` skill to manually trigger a review of your current branch:

```
/code-review
/code-review --branch develop
```

## Design Philosophy

- **High signal only** — Only flags issues with high confidence. False positives erode trust.
- **REVIEW.md driven** — Your team's rules, not generic suggestions.
- **Backpressure, not gatekeeping** — Issues are fixed in-session, not posted as comments to review later.
- **Complements Anthropic's Code Review** — Anthropic's review runs on PRs in CI. This plugin catches issues earlier, before code is even committed.
