# Research: 2026-08-19 Amp Chronicle refresh

**Date:** 2026-08-19
**Status:** complete
**Question:** Which first-party Amp updates published after the 2026-08-16
research pass materially change reusable research or public articles?

## Recommendation

Update the reusable orb-sizing note from 40 GB to the current 60 GB disk size,
and update the Amp case study's collaboration boundary with “Pass the Orb to the
Left Hand Side.” Treat the announcement as a teammate-invitation workflow, not
an ownership transfer: the current Manual still assigns billing to the thread
owner and documents broader Multiplayer access than the announcement itself.

Keep “MCP in Orbs” and “Talk to Puck” in the case study; its existing wording
matches their dated announcements and current canonical pages. Remove the
Education Discount from public prose: current Pricing confirms the offer, but a
volatile discount is not load-bearing evidence for the case study's operating
contracts.

## Fresh Source Audit

| Source | Classification | Reason |
| --- | --- | --- |
| [Pass the Orb to the Left Hand Side](https://ampcode.com/news/pass-the-orb-to-the-left-hand-side) | Incorporate | Adds a concrete collaboration entry point: `@`-mention teammates so they can view, drive, and message an orb thread. Its durable value is the distinction between inviting a collaborator and transferring ownership or accountability. |
| [MCP in Orbs](https://ampcode.com/news/mcp-in-orbs) | Incorporate; already current | Documents personal and workspace remote MCP configuration across orbs, TUI, runners, and Puck; hosted Streamable HTTP; OAuth or Bearer tokens; tools only, not Apps, Resources, or Prompts. The case study already states this bounded contract. |
| [Talk to Puck](https://ampcode.com/news/talk-to-puck) | Incorporate; already current | Documents realtime voice delegating to the normal Puck agent, then speaking a summary while preserving the full answer in the thread. This directly supports the case study's coordination-surface/proof distinction. |
| [Education Discount](https://ampcode.com/news/edu-discount) | Research-only | Current Pricing confirms $10/month eligibility for self-declared students and teachers. The detail is volatile, adds no durable workflow contract, and is not load-bearing in the case study. |

## Canonical Reconciliation

- The Chronicle lists only the four items above after the prior 2026-08-16
  research pass: two on August 18 and two on August 19.
- The August 19 announcement says a teammate mention allows the teammate to
  view, drive, and send chat messages. It does not document a change in thread
  ownership, billing, participant-level permission scope, or duration.
- The current Manual says Multiplayer applies only to non-private orb threads.
  While active, workspace members can send messages and access the orb's files,
  changes, portals, shared terminal, and secrets. Costs remain assigned to the
  thread owner, and Multiplayer expires. Therefore the article should not infer
  that an `@` mention transfers ownership or creates a least-privilege role.
- The current Orbs manual and What Are Orbs page list 60 GB disks for every
  `a1` size. The reusable sizing note's 40 GB table is stale.
- The current Pricing page says Megawatt includes “750 hours of orbs,” not “750
  hours of small orbs.” Gigawatt still names 1,000 hours of xxlarge orbs.
- Current Manual, Orbs manual, Models, Plugin API, Pricing, What Are Orbs, and
  Chronicle pages otherwise support the Amp case study's product claims as of
  2026-08-19.

## Article Scope

- **Edit:** `src/content/posts/amp-factory-era-case-study.md` — add the bounded
  mention workflow to the existing Multiplayer paragraph and remove the
  non-load-bearing education price detail.
- **Research-only:** `right-sized-threads-durable-state.md`,
  `capable-coworker-coding-agents.md`, `durable-context-coding-agents.md`, and
  `wake-verify-stop-durable-agent-workstreams.md`. The invitation workflow does
  not change their product-agnostic contracts, and they already have stronger
  sources for handoff, review, durable state, and authority boundaries.
- **No resource-manifest entry:** these are dated product announcements, not a
  durable curated resource that needs its own navigation job.

## Sources

- [Amp Chronicle](https://ampcode.com/chronicle) — Complete freshness audit of
  entries after 2026-08-16.
- [Pass the Orb to the Left Hand Side](https://ampcode.com/news/pass-the-orb-to-the-left-hand-side)
- [MCP in Orbs](https://ampcode.com/news/mcp-in-orbs)
- [Talk to Puck](https://ampcode.com/news/talk-to-puck)
- [Education Discount](https://ampcode.com/news/edu-discount)
- [Amp Owner's Manual](https://ampcode.com/manual)
- [Amp Orbs manual](https://ampcode.com/manual/orbs)
- [Amp Models](https://ampcode.com/models)
- [Amp Plugin API](https://ampcode.com/manual/plugin-api)
- [Amp Pricing](https://ampcode.com/pricing)
- [What Are Orbs](https://ampcode.com/what-are-orbs)

## Open Questions

- None material. The announcement does not document participant-scoped access;
  do not infer it unless canonical documentation adds that contract.
