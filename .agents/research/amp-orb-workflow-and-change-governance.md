# Research: Amp Orb Workflow Snapshots and Change Governance

**Date:** 2026-08-31
**Status:** complete
**Question:** What do Amp's current orb workflow sources and Chronicle updates through 2026-08-31 establish, and which public posts should incorporate them?

## Recommendation

Treat Chronicle items as dated product and workflow evidence subordinate to the current Amp Docs, which replaced the Owner's Manual URLs. The durable contract remains: keep stable setup reviewable, choose agent mode separately from machine capacity, and treat collaboration or client surfaces as coordination rather than proof. The August 27-31 delta adds three boundaries: a multi-repository project is one execution context but only its primary repository owns automatic setup; a verified Git identity separates commit attribution from the Amp login; and native apps plus per-thread calls expand control and communication surfaces without documenting a change to acceptance, ownership, or access rules. No current public post needs an update because none of these additions makes an existing claim or citation stale.

## Key Findings

- “Space to Talk” (2026-08-31) adds a call to every thread with camera and screen sharing while the agent works. The announcement describes brainstorming, whiteboarding, talking with agents, and spawning threads as possible future directions, not current features. It does not document who may join, whether calls are recorded, how long call data persists, or whether Multiplayer's access and billing rules apply. Treat Space as a co-located communication surface, not a new authority or evidence boundary.
- “Amp on iOS & macOS” (2026-08-28) announces native clients for controlling threads, orbs, and Puck. The current app page labels both clients beta, requires macOS 26+ or iOS/iPadOS 26+, distributes the mobile build through TestFlight, and warns of missing features and breaking changes. This is interface availability, not evidence that a native client changes execution or review outcomes.
- “No Mailmap Required” (2026-08-28) and the current Customizing Orbs docs let a user select a Git name and verified email independently of the Amp account identity. A personal default applies to personal projects unless overridden; workspace admins choose Amp, Amp Account, or User Choice policy. Amp sets `GIT_AUTHOR_*` and `GIT_COMMITTER_*` in the orb and signs only when signing is enabled and the selected email is verified. This makes commit attribution configurable and attestable; it does not by itself prove who approved or verified a change.
- “Projects with Multiple Repositories” (2026-08-27) and current orb setup docs let one project include a primary repository plus up to 20 additional repositories. Amp checks additional repositories out under `../repos/` relative to the primary root, makes the agent aware of them, and shows their combined diffs in the Changes panel. Only the primary repository's `.agents/setup` runs automatically, so that script must initialize any additional repositories. Co-location removes a context-transfer step; it does not make cross-repository edits independent or atomic.
- “When Tokens Flow Like Electricity” (2026-08-27) is a speculative Amp practitioner discussion, not a cost forecast or benchmark. Its durable point matches this note's existing governance boundary: cheaper implementation does not remove product judgment, foundational systems work, safe deployment, or organizational review capacity. The existing public Season 2 summary and canonical series resource already cover the episode, so no additional public citation or manifest entry is needed.
- The old `/manual` and `/manual/orbs` pages now direct readers to Amp Docs. The current canonical pages preserve the relevant contracts: one task per thread, layered `AGENTS.md`, four Dial modes selected by task difficulty, isolated specialist subagents, Oracle as a higher-cost second opinion, per-thread orbs, committed lifecycle hooks, supervised portal services, Multiplayer, Automations, and event-driven webhooks. Public citations should target the dedicated `/docs/**` pages rather than retired Manual anchors.
- “So Long, TUI Sidebar” (2026-08-27) announces removal of the TUI sidebar. Amp assigns the TUI to local, interactive threads in one environment, where terminal tabs and panes already provide multiplexing, and assigns the web and native apps to tracking larger thread sets across orbs, runners, teams, and cross-agent messages. This is dated interface direction, not evidence that remote execution or a particular client improves outcomes; the announcement does not give a removal version or date.
- "Setup Without a Commit" (2026-08-25) and the current Customizing Orbs docs add project-stored scripts outside the repository. A pre-clone script runs before repository access and can install Git extensions, certificates, proxies, private-network access, or credential helpers; a pre-setup script runs immediately before `.agents/setup`. The normal lifecycle remains pre-clone → clone/update → pre-setup → committed `.agents/setup` → credentials → committed `.agents/resume`. This is useful for clone prerequisites and transitional setup, but stable shared setup remains easier to review and version when committed.
- "Explain Usage" (2026-08-21) lets Puck read personal and per-thread token, credit, and orb usage. The same data is available through `amp usage --details` and `amp threads usage <thread-id> --details`. This supports evidence-based cost and orb-size review; it does not turn agent mode into a machine-capacity control or establish a transferable performance benchmark.
- "Friendly URLs for Sharing Orbs" (2026-08-23) adds managed hostnames and personal or workspace custom domains. Current Portal docs say a custom hostname remains assigned after its thread is archived and can be moved with `--take-over`; access remains separate from naming, and a configured URL can exist after readiness failure. A friendlier address improves review distribution, not proof.
- "Orbs, Explained" (2026-08-25) is a first-party conceptual overview of an orb as a remote machine plus agent, controlled from web, phone, or CLI, with sleeping/waking, Portals, thread sharing, Multiplayer, schedules, and agent-to-agent work. It adds no stronger contract than the dedicated Docs pages and is best kept as dated practitioner positioning.
- The "What Are Orbs" page is Amp's current orb capability overview: Portals, in-orb review (files, diffs, evidence, terminal), Multiplayer, scheduled Automations, Slack, Webhooks, and agent-to-agent thread creation. Rechecked on 2026-08-26, it still lists five `a1` sizes with 60 GB disks, per-thread/project/workspace-default sizing, by-the-minute billing, and five-minute auto-pause.
- “Pass the Orb to the Left Hand Side” (2026-08-19) says an `@` mention can invite a teammate to view, drive, and send chat messages to an orb thread. The announcement does not document ownership transfer, participant-scoped permissions, billing changes, or duration. The current Multiplayer docs still assign all agent and orb costs to the thread owner and say active Multiplayer exposes the thread, orb, secrets, files, portals, and terminal to workspace members. Treat the mention as an invitation surface, not a least-privilege role or accountability transfer.
- “MCP in Orbs” (2026-08-19) documents personal and workspace remote MCP configuration across orbs, the TUI, runners, and Puck. It supports hosted Streamable HTTP servers with OAuth or Bearer tokens and MCP tools only—not Apps, Resources, or Prompts. This expands the execution environment and its trust boundary; it does not become repository memory.
- “Talk to Puck” (2026-08-18) documents realtime voice delegating to the normal Puck agent, then speaking a summary while preserving the full response in the thread. It is a coordination surface for surveying or steering work, not implementation evidence.
- “Education Discount” (2026-08-18) and current Pricing confirm a $10/month offer for self-declared students and teachers. Keep it in research: the offer is volatile and does not strengthen a durable workflow contract.
- The page's "orbs are infinite" framing (no port conflicts, no worktree bookkeeping, stop treating agent machines as pets) is positioning, but it names a real workflow shift: execution capacity stops being the scarce resource, so admission and review capacity become the binding constraints.
- "That's not SOC 2 compliant" (Will Dollman, 2026-08-13) documents that Amp passes SOC 2 while pushing to `main` without pull requests. Their auditors asked what the change process was, not for PRs; the Trust Services Criteria require changes to be authorized, tested, approved, and recorded. Controls: restricted push access explained by business function, GitHub-enforced signed commits on `main`, a blocking CI pipeline, and commits linked to the Amp threads that produced them as the audit trail. Code review is explicitly not on the list.
- The note states its own boundary: Amp is ~20 people, mostly engineers, high-trust, and does not claim a 2,000-person company should let everyone push to main. Its scalable claim is risk-based thinking — ask what risks pull requests actually manage in a given system before copying or deleting them.
- Time Capsule 1 (Quinn Slack, 2026-07-27, 24:31) is a desk-level snapshot: many parallel orb threads ("thrilling and addictive, but very overwhelming"), ~95% dictated prompts, agents asked for screenshots, video walkthroughs, and comprehensive test passes because "the agent's time is cheap" [01:31]-[02:16], review depth scaled to blast radius — code review skipped only for analysis code or purely visual changes [07:38]-[08:30], [11:14] — agents asked to build their own test scaffolding, deferred actions ("once we've figured out a good way... then go make another orb thread") [13:39], the Ship button pushing to main with project-level Push to Branch and Custom Ship alternatives [16:46]-[18:17], and a runner used for a macOS-specific bug [21:31]-[23:05].
- Time Capsule 2 (Quinn Slack, 2026-07-28, 4:59) shows execution placement following environment requirements: native iOS/macOS work stays on a real Mac with Xcode certificates and attached devices, reached through an Amp runner (`amp --no-tui`); an agent in an orb creates and messages a thread on that runner, which rebuilds and reinstalls on a connected iPhone [00:51]-[03:34]. Darwin orbs are named as possible future work, not product.
- Time Capsule 3 (Thorsten Ball, 2026-08-11, 4:18) shows the portal proof loop: a storybook route running in an orb to preview all resource-warning copy variants [00:29]-[01:14], review comments sent directly from the portal page ("more token efficient" than annotating screenshots) [01:14]-[01:56], visual iteration with an agent-added debug toggle, and shipping from the thread [03:54].

## Content Incorporation

- **Incorporate:** `src/content/posts/amp-factory-era-case-study.md`.
  - Docs migration → replace retired Manual links with canonical Prompting, AGENTS.md, Dial, Modes & Models, Tools, Orbs, Automations, Event-Driven Orbs, Runners, and Plugin API pages.
  - Setup Without a Commit → environment section: distinguish committed, reviewable lifecycle hooks from project-stored pre-clone and pre-setup scripts.
  - Explain Usage → environment section: choose orb capacity from workload evidence and inspect personal or per-thread usage instead of conflating machine size with agent mode.
  - SOC 2 note → acceptance/proof section: change governance as a controls contract; thread-linked commits as audit trail; explicit small-team boundary.
  - Time Capsules 1 and 3 → proof section: desk-level examples of agent-led verification, portal review comments, and review depth scaled to blast radius.
  - Time Capsule 2 → delegation section: addressable threads on runners when the environment (certificates, devices) binds execution placement.
  - What Are Orbs → sizing section (workspace default for new projects) and sources list as the current orb capability overview.
  - Talk to Puck → delegation section: voice delegates to Puck and leaves the full response in the thread; coordination does not replace implementation ownership or proof.
  - MCP in Orbs → context section: remote tools are part of the execution environment and trust boundary, not durable repo state.
  - Pass the Orb → orchestration section: teammate mentions are an invitation surface; ownership, cost attribution, access scope, and expiry remain separate controls.
- **Incorporate:** `src/content/posts/right-sized-threads-durable-state.md` only to replace retired Manual links with current Prompting and Orbs Docs URLs; the new items do not change its thread-sizing thesis.
- **Research-only:** Friendly URLs and Orbs, Explained. They add sharing convenience and a first-party overview but do not change the case study's acceptance or proof contract.
- **Research-only:** So Long, TUI Sidebar. The Amp case study intentionally omits interface details, and the general field guide already describes thread tracking and coordination as the constraint created by many workers. The announcement sharpens product-surface guidance but changes neither article's load-bearing workflow.
- **Research-only:** Projects with Multiple Repositories and No Mailmap Required. They add durable execution and attribution controls, but the Amp case study makes no stale single-repository or commit-identity claim. Add them only if a future article covers cross-repository integration or shipping governance directly.
- **Research-only:** Amp on iOS & macOS and Space to Talk. They add beta client and communication surfaces, not a new task, ownership, proof, or access contract. Space's participant and retention boundaries are not yet documented.
- **Already covered:** Raising an Agent Season 2 Episode 3. Its public summary and the existing series manifest describe the episode's speculative economics and durable organizational bottleneck; another case-study citation would duplicate support.
- **Research-only:** Education Discount. The $10/month offer was reconfirmed on 2026-08-26 but remains volatile and is not load-bearing for task sizing or cost governance.
- **Research-only:** `src/content/posts/make-the-agent-prove-it.md` and `src/content/posts/agentic-coding-2026.md`. The capsules' verification examples duplicate support those posts already have from stronger independent sources; the Amp recap belongs in the case study.
- **No resource-manifest entries.** The time capsules and notes are dated vendor workflow snapshots used as inline citations; the manifest's "Raising an Agent Season 2" entry already covers Amp's practitioner series. Revisit only if the Time Capsules series grows into a durable curated resource.

## Evidence

### What Are Orbs

Current overview page (checked 2026-08-26). Confirms the `a1.tiny`-`a1.xxlarge` table, by-the-minute billing, no charge while paused, and five-minute auto-pause, matching the Sizes & Costs docs. Adds the workspace-default sizing scope for new projects and a one-page map of orb-attached capabilities: Portals, review surfaces, Multiplayer, Automations, Slack, Webhooks, agent-to-agent.

As rechecked on 2026-08-26, both current pages list 60 GB disks for every `a1` size. The sizing details and subscription allowances remain volatile; the current values live in [amp-orb-sizing.md](amp-orb-sizing.md).

### "That's not SOC 2 compliant"

Dated 2026-08-13. SOC 2 and its auditors accepted a no-PR process built from restricted push access, signed commits, blocking CI, and an Amp-thread-linked audit trail. The Trust Services Criteria never mention git or pull requests. The durable, transferable claim is the method — enumerate the risks a gate manages, then choose controls that manage them — not the specific control set, which the note ties to a 20-person high-trust team shipping customer-facing production software.

### Time Capsules 1-3

Dated first-person workflow recordings with transcripts on ampcode.com (2026-07-27, 2026-07-28, 2026-08-11). Useful as bounded practitioner reports of orb-era workflow: parallel isolated threads, dictation as primary input, agent-led verification artifacts, portal-based review feedback, ship-workflow options, and runner placement for environment-bound work. None provides measured outcomes or controlled comparisons.

### August 18-19 Chronicle updates

The four new items after the prior research pass split cleanly by durable value. Talk to Puck documents a voice front end that delegates to Puck and preserves the full answer in the thread. MCP in Orbs documents a remote-tool configuration and authentication boundary. Pass the Orb documents a teammate invitation workflow, while the Multiplayer docs retain ownership, billing, expiry, and broad workspace access as separate contracts. Education Discount is current pricing, not workflow evidence.

### August 21-25 Chronicle updates

The three news items split by workflow role. Explain Usage exposes personal and per-thread usage through Puck and CLI commands, which makes right-sizing inspectable. Setup Without a Commit adds project-stored pre-clone and pre-setup scripts for repository-access prerequisites and transitional setup. Friendly URLs improves Portal sharing, but current Portal docs preserve separate access and readiness contracts. The Orbs, Explained note is a useful first-party map, not a replacement for canonical documentation or independent evidence.

### August 27 Chronicle and podcast updates

So Long, TUI Sidebar assigns different coordination scales to different clients: the TUI remains for closely supervised local work in one environment, while web and native apps own the growing cross-environment thread inventory. Projects with Multiple Repositories co-locates up to 20 additional repositories, exposes their diffs together, and assigns all automatic initialization to the primary repository's setup script. The current Customizing Orbs docs confirm the `../repos/` layout and primary-setup ownership. When Tokens Flow Like Electricity argues that implementation cost is falling while product judgment, foundations, deployment safety, and organizational throughput remain limiting; it offers no measured cost or productivity evidence.

### August 28 Chronicle updates

No Mailmap Required is now backed by the Customizing Orbs Git configuration contract: selected identities require verified email, project and workspace policy determine the selection, orb commits receive matching author and committer environment variables, and signing is optional and limited to verified identities. Amp on iOS & macOS is a beta distribution announcement: the app page documents TestFlight/direct-download delivery and OS 26 requirements, but no new execution or acceptance semantics.

### August 31 Chronicle update

Space to Talk ships camera, screen sharing, and live team conversation inside each thread. Its future-looking examples are explicitly not current behavior, and neither the announcement nor the Multiplayer docs establish Space-specific participant, recording, retention, or billing rules. The feature can reduce coordination distance, but a call is not a durable decision record or verification artifact unless the team records the resulting decision and evidence elsewhere.

### Docs migration

The retired Owner's Manual URLs now land on Amp Docs. Dedicated Docs pages provide narrower, more stable anchors for prompting, `AGENTS.md`, modes and subagents, Oracle, orb lifecycle, sizes, portals, collaboration, automation, webhooks, runners, and plugins. The current docs preserve the case study's main operating contract while adding project-stored setup scripts and more explicit portal-readiness boundaries.

## Sources

- [What Are Orbs](https://ampcode.com/what-are-orbs) — Current orb capability overview, sizing scopes including workspace default, and size/rate table.
- [“That's not SOC 2 compliant”](https://ampcode.com/notes/thats-not-soc-2-compliant) — Dated note documenting Amp's no-PR change controls under SOC 2 and their small-team boundary.
- [Time Capsule 1: Building Software With Amp and Orbs](https://ampcode.com/time-capsules/1) — 2026-07-27 workflow snapshot: parallel threads, dictation, agent-led verification, ship workflow, runners.
- [Time Capsule 2: Native iOS and macOS Development With Amp](https://ampcode.com/time-capsules/2) — 2026-07-28 snapshot: orb agent delegating native work to a Mac runner with certificates and devices.
- [Time Capsule 3: Iterating With Agents in Orbs Using Portals](https://ampcode.com/time-capsules/3) — 2026-08-11 snapshot: storybook-in-orb previews, portal review comments, ship from thread.
- [Amp Docs](https://ampcode.com/docs) — Current documentation entry point after the Owner's Manual migration (checked 2026-08-31).
- [Prompting](https://ampcode.com/docs/prompting), [AGENTS.md](https://ampcode.com/docs/customize/agents-md), [Modes & Models](https://ampcode.com/docs/models-and-subagents), and [Tools](https://ampcode.com/docs/tools) — Current task, repository-guidance, subagent, and Oracle contracts.
- [Getting Started With Orbs](https://ampcode.com/docs/orbs/getting-started), [Customizing Orbs](https://ampcode.com/docs/orbs/customizing), [Sizes & Costs](https://ampcode.com/docs/orbs/sizes-and-costs), [Portals](https://ampcode.com/docs/orbs/portals), [Multiplayer](https://ampcode.com/docs/orbs/multiplayer), [Automations](https://ampcode.com/docs/orbs/automations), and [Event-Driven Orbs](https://ampcode.com/docs/orbs/event-driven) — Current multi-repository setup, execution, review, collaboration, scheduling, and webhook contracts.
- [Amp Chronicle](https://ampcode.com/chronicle) — Publication context and dates for the notes, time capsules, podcast, and August updates (checked 2026-08-31).
- [Space to Talk](https://ampcode.com/news/space) — Dated in-thread camera, screen-sharing, and live-conversation announcement.
- [Amp on iOS & macOS](https://ampcode.com/news/amp-on-ios-and-macos) and [app download page](https://ampcode.com/app) — Dated native-client announcement plus current beta, distribution, and operating-system boundaries.
- [No Mailmap Required](https://ampcode.com/news/no-mailmap-required) — Dated custom Git name, verified email, and commit-signing announcement.
- [Projects with Multiple Repositories](https://ampcode.com/news/multi-repo-projects) — Dated additional-repository limit, checkout, diff, and setup behavior.
- [When Tokens Flow Like Electricity](https://ampcode.com/podcast/season-02/episode-03) — Dated practitioner discussion of cheaper intelligence, build versus buy, foundations, and organizational bottlenecks.
- [So Long, TUI Sidebar](https://ampcode.com/news/so-long-tui-sidebar) — Dated client-surface direction: local interactive work in the TUI; cross-environment thread tracking in web and native apps.
- [Setup Without a Commit](https://ampcode.com/news/setup-without-a-commit) — Dated project-stored pre-clone and pre-setup workflow.
- [Explain Usage](https://ampcode.com/news/explain-usage) — Dated Puck and CLI usage-inspection workflow.
- [Friendly URLs for Sharing Orbs](https://ampcode.com/news/friendly-urls-for-sharing-orbs) — Dated managed-hostname and custom-domain announcement.
- [Orbs, Explained](https://ampcode.com/notes/orbs-explained) — Dated first-party conceptual overview of orb workflows.
- [Pass the Orb to the Left Hand Side](https://ampcode.com/news/pass-the-orb-to-the-left-hand-side) — Dated teammate-mention workflow for inviting collaborators into an orb thread.
- [MCP in Orbs](https://ampcode.com/news/mcp-in-orbs) — Dated remote MCP scope, transports, authentication methods, surfaces, and unsupported MCP capabilities.
- [Talk to Puck](https://ampcode.com/news/talk-to-puck) — Dated realtime voice-to-Puck delegation and spoken-summary workflow.
- [Education Discount](https://ampcode.com/news/edu-discount) — Dated offer, retained as volatile pricing research rather than article evidence.
- [Amp Pricing](https://ampcode.com/pricing) — Current subscription and education-offer authority (checked 2026-08-26).

## Open Questions

- None blocks the recommendation. Space does not yet document participant, recording, retention, or billing rules, and current sources do not define whether shipping changes across multiple repositories is transactional. Do not infer either contract. The teammate-mention announcement also does not create participant-scoped access, transfer ownership, or create a least-privilege role.
