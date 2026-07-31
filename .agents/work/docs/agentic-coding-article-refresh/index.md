# Agentic coding article refresh

Status: completed
Category: docs
Updated: 2026-07-31

## Summary

Review and refresh the draft post backlog now that `agentic-coding-2026`, `durable-context-coding-agents`, `make-the-agent-prove-it`, `small-threads-durable-state`, and `amp-factory-era-case-study` are public. The public series is broader agentic-coding guidance: alignment, evidence, context hygiene, good friction, codebase infrastructure, and multi-agent/factory workflows. Amp appears as one concrete tool case study, not the whole framing.

On 2026-07-31, the Amp source research was refreshed for the two July 29 Chronicle announcements. Amp's default-model migration behind the Dial supports a durable capability/context/review contract, but its usage telemetry is not a controlled quality comparison. Amp Labs' embedded Westpac partnership establishes current enterprise modernization work, but the announcement does not provide delivery outcomes, architecture, security, or governance evidence. The research keeps those boundaries explicit so the public case study does not turn product direction into proof.

The public case study now incorporates those bounded claims and carries a 2026-07-31 verification date. Oracle approved the refresh with no material findings; its one low-severity attribution improvement and optional telemetry-clarity edit were applied before the final site checks.

The prior refresh covered OIDC orb identity, Puck and Slack coordination, schedules, multiplayer, and event-driven orbs. The case study treats those releases as a shift from manually launched parallel workers toward time- and event-triggered agent services, with explicit trigger trust, idempotency, identity/permissions, collaborator access, ownership, spend, expiry, proof, and cleanup contracts. It also records that the Manual now documents the current mode names and fixes its former subscription/pay-as-you-go contradiction, while core plugin agent APIs are first-class and durable webhooks remain experimental.

The prior public refresh covered [From Agent to Agent](https://ampcode.com/news/from-agent-to-agent): Amp agents can spawn other agents as their own threads across local machines, orbs, and runners, then exchange messages and files. The case study distinguishes that primitive from isolated built-in subagents and treats target executor, transfer inputs, budget, stop conditions, proof, return paths, and integration ownership as delegation contracts. A follow-up review corrected billing guidance after the 2026-07-18 [Subscriptions, At Last](https://ampcode.com/news/subscriptions) announcement and the dedicated [Pricing page](https://ampcode.com/pricing) went live: optional subscriptions now coexist with pay-as-you-go, while exact beta plan details remain in research rather than durable public prose. Earlier July passes cover The Dial, orbs, runners, and long-thread retrieval.

## Artifacts

- Research: `research.md`
- Task 7 Amp source prep: `research/amp-official-sources-2026.md`
- Audit template/output: `audit.md`
- Published series map: `src/content/posts/agentic-coding-2026.md`
- Published proof-stack post: `src/content/posts/make-the-agent-prove-it.md`
- Published small-thread practice post: `src/content/posts/small-threads-durable-state.md`
- Published Amp case study: `src/content/posts/amp-factory-era-case-study.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Decisions: none

## Next Action

- No immediate action. Future changes should continue to re-run the Manual/Orbs/Models/Plugin API/Chronicle/pricing sweep, especially after changes to schedules, event triggers, identity, multiplayer, modes/models, or billing.

## Open Questions

- [x] Should the refreshed public series stay Amp-specific, or should Amp be one concrete tool inside broader agentic-coding guidance? Decision: broader agentic-coding guidance; Amp is one concrete tool/example when useful.
- [x] Should near-publish transcript-backed posts like the Simon Willison article appear as posts, resource summaries, or both? Decision: no strong channel preference, but keep public posts few and high-signal; do not pollute posts with duplicated summary information unless the post adds a distinct, relevant thesis.
- [x] Which current public Amp product source should be used for close-to-publish verification before any Amp case study or revived Amp tutorial/handout? Decision: use the current Amp Manual, Plugin API, Models page, and a fresh Chronicle/latest-news sweep as the canonical product-source bundle; use dated notes only as dated workflow examples, and re-check before publication.
