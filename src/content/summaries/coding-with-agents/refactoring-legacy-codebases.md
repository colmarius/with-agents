---
title: "Refactoring Legacy Codebases"
resourceId: 113
date: "2026-09-03"
---

Cursor's field-engineering team demonstrates a migration workflow using WordPress: audit test gaps, narrow the scope, turn a plan into tickets, delegate implementation, and review the evidence. The durable lesson is the handoff structure, not the workshop's model preferences or product comparisons.

### Main takeaways

- **Audit before choosing the migration slice.** [13:02](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=782s)–[19:42](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=1182s): the presenter asks Canvas to map test coverage and gaps while a separate planning agent develops a PHP-to-React migration. Clarifying questions reduce the initial broad request to one screen, with a reusable phased pattern. The plan requests regression tests and diagrams of current and target architecture; the generated coverage visualization is an audit aid, not independently verified coverage data.
- **Make the plan a reviewable handoff.** [25:31](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=1531s)–[28:14](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=1694s) and [32:16](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=1936s)–[35:16](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=2116s): a Confluence template structures the editable plan, which is then split into Jira tickets through the Atlassian integration. Tickets include goals, scope, acceptance criteria, tests, dependencies, and notes. The cloud agent is asked to work through assigned tickets, open a separate PR for each, and return screenshots or recordings.
- **Give remote execution an environment and review evidence.** [33:24](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=2004s)–[38:19](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=2299s): the presenter describes reusing a prepared cloud environment, connecting MCP tools, and inspecting diffs and CI. A recording from a different repository illustrates browser interaction by an agent. Such evidence helps a reviewer inspect the exercised workflow; it does not establish that all regressions have been ruled out.
- **Separate a live attempt from completed examples.** [45:14](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=2714s)–[47:44](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=2864s): the live migration is still running, so the presenter switches to an earlier PHP-to-React migration with a test recording, then a separate multi-ticket run to show navigation between PRs. The recommendation is to keep components or services in manageable review units rather than one enormous PR.
- **Use recurring maintenance to reduce future migration work.** [40:21](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=2421s)–[45:14](https://www.youtube.com/watch?v=hiSkMVXdSfA&t=2714s): the workshop sketches a scheduled feature-flag cleanup that consults observability tools, proposes removals with tests, and sends a PR for review. Some integrations are not connected during the demo, so this is an automation setup example, not a demonstrated successful cleanup. Dependency updates and incident investigation are additional suggested uses.

### Practical interpretation

Treat migration as a sequence of explicit contracts: a bounded component, an agreed target design, ticket-level acceptance tests, a reproducible execution environment, and human review of code plus test evidence. This is editorial synthesis. A vendor workshop illustrates the workflow but does not independently establish cost savings, migration correctness, or the safety of deleting a feature flag based on apparent inactivity.

Full video: [Cursor — Refactoring Legacy Codebases](https://www.youtube.com/watch?v=hiSkMVXdSfA).
