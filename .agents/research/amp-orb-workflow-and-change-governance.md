# Research: Amp Orb Workflow Snapshots and Change Governance

**Date:** 2026-08-16
**Status:** complete
**Question:** What do Amp's "What Are Orbs" overview, the "That's not SOC 2 compliant" note, and Time Capsules 1-3 establish, and which public posts should incorporate them?

## Recommendation

Treat the five sources as two clusters. The time capsules and the orbs overview are dated vendor workflow snapshots: they strengthen the Amp case study's proof-loop, delegation-placement, and sizing sections with concrete desk-level examples, but they are not transferable benchmarks. The SOC 2 note is the most durable item: it documents change governance as a controls contract (authorized, tested, approved, recorded) rather than a pull-request ritual, with an explicit small-team boundary. Incorporate all of this only into `src/content/posts/amp-factory-era-case-study.md`; the other public posts already carry stronger independent support for the same points.

## Key Findings

- The "What Are Orbs" page is Amp's current orb capability overview: Portals, in-orb review (files, diffs, evidence, terminal), Multiplayer, scheduled Automations, Slack, Webhooks, and agent-to-agent thread creation. It repeats the five-size `a1` table and rates from the Orbs manual, and documents three sizing scopes: per thread, per project default, and a workspace default for new projects. The workspace default is new relative to the 2026-08-12 orb-sizing note.
- The page's "orbs are infinite" framing (no port conflicts, no worktree bookkeeping, stop treating agent machines as pets) is positioning, but it names a real workflow shift: execution capacity stops being the scarce resource, so admission and review capacity become the binding constraints.
- "That's not SOC 2 compliant" (Will Dollman, 2026-08-13) documents that Amp passes SOC 2 while pushing to `main` without pull requests. Their auditors asked what the change process was, not for PRs; the Trust Services Criteria require changes to be authorized, tested, approved, and recorded. Controls: restricted push access explained by business function, GitHub-enforced signed commits on `main`, a blocking CI pipeline, and commits linked to the Amp threads that produced them as the audit trail. Code review is explicitly not on the list.
- The note states its own boundary: Amp is ~20 people, mostly engineers, high-trust, and does not claim a 2,000-person company should let everyone push to main. Its scalable claim is risk-based thinking — ask what risks pull requests actually manage in a given system before copying or deleting them.
- Time Capsule 1 (Quinn Slack, 2026-07-27, 24:31) is a desk-level snapshot: many parallel orb threads ("thrilling and addictive, but very overwhelming"), ~95% dictated prompts, agents asked for screenshots, video walkthroughs, and comprehensive test passes because "the agent's time is cheap" [01:31]-[02:16], review depth scaled to blast radius — code review skipped only for analysis code or purely visual changes [07:38]-[08:30], [11:14] — agents asked to build their own test scaffolding, deferred actions ("once we've figured out a good way... then go make another orb thread") [13:39], the Ship button pushing to main with project-level Push to Branch and Custom Ship alternatives [16:46]-[18:17], and a runner used for a macOS-specific bug [21:31]-[23:05].
- Time Capsule 2 (Quinn Slack, 2026-07-28, 4:59) shows execution placement following environment requirements: native iOS/macOS work stays on a real Mac with Xcode certificates and attached devices, reached through an Amp runner (`amp --no-tui`); an agent in an orb creates and messages a thread on that runner, which rebuilds and reinstalls on a connected iPhone [00:51]-[03:34]. Darwin orbs are named as possible future work, not product.
- Time Capsule 3 (Thorsten Ball, 2026-08-11, 4:18) shows the portal proof loop: a storybook route running in an orb to preview all resource-warning copy variants [00:29]-[01:14], review comments sent directly from the portal page ("more token efficient" than annotating screenshots) [01:14]-[01:56], visual iteration with an agent-added debug toggle, and shipping from the thread [03:54].

## Content Incorporation

- **Incorporate:** `src/content/posts/amp-factory-era-case-study.md`.
  - SOC 2 note → acceptance/proof section: change governance as a controls contract; thread-linked commits as audit trail; explicit small-team boundary.
  - Time Capsules 1 and 3 → proof section: desk-level examples of agent-led verification, portal review comments, and review depth scaled to blast radius.
  - Time Capsule 2 → delegation section: addressable threads on runners when the environment (certificates, devices) binds execution placement.
  - What Are Orbs → sizing section (workspace default for new projects) and sources list as the current orb capability overview.
- **Research-only:** `src/content/posts/make-the-agent-prove-it.md` and `src/content/posts/agentic-coding-2026.md`. The capsules' verification examples duplicate support those posts already have from stronger independent sources; the Amp recap belongs in the case study.
- **Research-only:** `src/content/posts/right-sized-threads-durable-state.md`. Nothing in the five sources changes its thread-sizing or synchronization claims.
- **No resource-manifest entries.** The time capsules and notes are dated vendor workflow snapshots used as inline citations; the manifest's "Raising an Agent Season 2" entry already covers Amp's practitioner series. Revisit only if the Time Capsules series grows into a durable curated resource.

## Evidence

### What Are Orbs

Current overview page (checked 2026-08-16). Confirms the `a1.tiny`-`a1.xxlarge` table, by-the-minute billing, no charge while paused, and five-minute auto-pause, matching the Orbs manual. Adds the workspace-default sizing scope for new projects and a one-page map of orb-attached capabilities: Portals, review surfaces, Multiplayer, Automations, Slack, Webhooks, agent-to-agent.

### "That's not SOC 2 compliant"

Dated 2026-08-13. SOC 2 and its auditors accepted a no-PR process built from restricted push access, signed commits, blocking CI, and an Amp-thread-linked audit trail. The Trust Services Criteria never mention git or pull requests. The durable, transferable claim is the method — enumerate the risks a gate manages, then choose controls that manage them — not the specific control set, which the note ties to a 20-person high-trust team shipping customer-facing production software.

### Time Capsules 1-3

Dated first-person workflow recordings with transcripts on ampcode.com (2026-07-27, 2026-07-28, 2026-08-11). Useful as bounded practitioner reports of orb-era workflow: parallel isolated threads, dictation as primary input, agent-led verification artifacts, portal-based review feedback, ship-workflow options, and runner placement for environment-bound work. None provides measured outcomes or controlled comparisons.

## Sources

- [What Are Orbs](https://ampcode.com/what-are-orbs) — Current orb capability overview, sizing scopes including workspace default, and size/rate table.
- [“That's not SOC 2 compliant”](https://ampcode.com/notes/thats-not-soc-2-compliant) — Dated note documenting Amp's no-PR change controls under SOC 2 and their small-team boundary.
- [Time Capsule 1: Building Software With Amp and Orbs](https://ampcode.com/time-capsules/1) — 2026-07-27 workflow snapshot: parallel threads, dictation, agent-led verification, ship workflow, runners.
- [Time Capsule 2: Native iOS and macOS Development With Amp](https://ampcode.com/time-capsules/2) — 2026-07-28 snapshot: orb agent delegating native work to a Mac runner with certificates and devices.
- [Time Capsule 3: Iterating With Agents in Orbs Using Portals](https://ampcode.com/time-capsules/3) — 2026-08-11 snapshot: storybook-in-orb previews, portal review comments, ship from thread.
- [Amp Owner's Manual](https://ampcode.com/manual) — Current changes-workflow (Ship, Push to Branch, Custom Ship), runners, dictation, and multiplayer contracts (checked 2026-08-16).
- [Amp Chronicle](https://ampcode.com/chronicle) — Publication context and dates for the notes and time capsules (checked 2026-08-16).

## Open Questions

- [ ] None material. Recheck the What Are Orbs page and Orbs manual before reusing exact rates or sizing scopes; they are volatile product details.
