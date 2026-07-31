# Research: Amp Official Sources for Case-Study Maintenance

**Date:** 2026-06-28
**Last updated:** 2026-07-31
**Status:** complete through the 2026-07-31 source refresh
**Question:** Which current public Amp sources should anchor case-study maintenance, and which older Amp claims are stale or risky?

## Recommendation

Use the current [Amp Manual](https://ampcode.com/manual), [Pricing page](https://ampcode.com/pricing), [Orbs manual](https://ampcode.com/manual/orbs), [Plugin API](https://ampcode.com/manual/plugin-api), [Models](https://ampcode.com/models), and a fresh [Chronicle](https://ampcode.com/chronicle) sweep as the canonical product-source bundle for case-study maintenance. Treat dated Chronicle/news/notes pages as evidence of product direction or workflow examples, not timeless feature documentation. For any public article, mark product details with the verification date or avoid exact product claims entirely. If first-party surfaces conflict, record the contradiction and prefer the newer dedicated page or announcement for the changed feature.

The published article should remain an Amp case study for factory-era coding-agent workflows: task sizing, delegation, context, review, feedback loops, extensibility, agent-to-agent coordination, and cost governance. It should not regress to the old draft's stale feature catalog, Oracle-as-mode framing, Handoff section, fixed token thresholds, old model names, old speed/cost claims, or draft-only practice-path links.

The 2026-07-31 sweep adds two complementary directions. Amp's [Who Cares About the Model?](https://ampcode.com/news/who-cares-about-the-model) reports that users largely accepted a default-model swap when it arrived behind the new Dial, reinforcing a task-level contract based on capability, context, and review rather than a fixed model brand. [Banking on the Frontier](https://ampcode.com/news/amp-labs-westpac) announces an embedded Amp Labs team working with Westpac engineers on enterprise technology, including data-system migration and modernization. The former is product telemetry rather than a controlled quality study; the latter is a partnership announcement rather than evidence of outcomes, governance, or safety. Use both as dated product-direction evidence, not universal proof.

The prior sweep shows Amp moving beyond agent-to-agent thread spawning into longer-lived, event-driven orchestration: Puck and Slack can coordinate work, agents can schedule their own wake-ups, workspace members can share control of orb threads, and durable webhooks can wake orbs from external events. OIDC workload identity gives outbound orb access a short-lived, claim-scoped trust path. These additions do not invalidate the public case study's contracts; they make lifecycle, identity, event trust, idempotency, access, ownership, and recurring-spend boundaries more important. Keep exact subscription prices and quotas, orb prices, sizes, flags, keybindings, model assignments, webhook limits, usage percentages, customer claims, and UI screenshots out of durable prose unless they are reverified immediately before publication.

## Refresh Sweep — 2026-07-31

Freshly checked sources:

- [Chronicle](https://ampcode.com/chronicle): two announcements dated 2026-07-29 now follow Event Driven Orbs: [Banking on the Frontier](https://ampcode.com/news/amp-labs-westpac) and [Who Cares About the Model?](https://ampcode.com/news/who-cares-about-the-model).
- [Who Cares About the Model?](https://ampcode.com/news/who-cares-about-the-model): Amp says the Dial changed its default from `smart` on Claude Opus 4.8 to `medium` on GPT-5.6 Sol. Its production telemetry says `smart` handled 55% of new threads the day before the Dial, reached zero a week later, the four Dial modes handled 93% of new threads in the reported final week, `medium` handled two-thirds, and 69% of Dial users never changed from `medium`. Amp also says almost nobody installed its classic-mode plugins and that it received no complaints about the swap.
- The model post's durable product claim is abstraction: users express task difficulty through the Dial while Amp owns model evaluation and routing. Its workflow claim is that task difficulty, supplied context, and review matter more than choosing among current frontier model brands. Treat that second claim as Amp's interpretation of its usage data, not as a controlled comparison of output quality; no complaint and low plugin adoption do not prove identical results across models, users, or tasks.
- [Banking on the Frontier](https://ampcode.com/news/amp-labs-westpac): Amp Labs has partnered with Westpac and is building a Sydney-based team to work alongside Westpac engineers. The announcement names migration and modernization of data systems used by millions as an example of the intended enterprise work.
- The Westpac post gives no project scope, architecture, security or governance controls, benchmarks, shipped outcomes, or customer testimonial. It supports a narrow direction claim—Amp is pairing agents with an embedded engineering team in a high-consequence enterprise setting—not a claim that the approach has already transformed delivery or proven safe at scale.

Article-maintenance recommendation: refresh the case study's verification date and use the model-switch telemetry, with the caveat above, to strengthen its existing distinction between durable task contracts and volatile model wiring. Keep the Westpac partnership in research: it does not add implementation or outcome evidence, and stronger sources already support the article's human-judgment boundary. Do not add the model names, telemetry percentages, team roster, or marketing language to durable public prose.

## Public-Article Incorporation Gate

A fresh Chronicle item belongs in research by default, not automatically in the public article. Incorporate it only when all of these checks pass:

1. **Thesis fit:** it directly strengthens or changes one of the article's existing work contracts.
2. **Evidence strength:** it documents product behavior, measured outcomes, or an operative contract—not only a partnership, launch, aspiration, or customer name.
3. **Durability:** the useful lesson survives model, pricing, UI, and implementation churn.
4. **Novelty:** a stronger existing source does not already support the same point.
5. **Claim-to-caveat ratio:** the useful claim remains substantial after necessary caveats; if the caveat is the main story, keep the item in research.
6. **Load-bearing value:** removing the item would make the article's argument materially weaker or less current.

Classify each item as **incorporate**, **research-only**, or **ignore** before drafting article prose. For this sweep, the model-routing announcement is incorporated because it directly tests the Dial abstraction. The Westpac announcement is research-only because it reports intent and team structure without implementation or outcome evidence, while stronger existing sources already support the human-judgment boundary.

## Refresh Sweep — 2026-07-28

Freshly checked sources:

- [Chronicle](https://ampcode.com/chronicle): the newest release sequence is [Event Driven Orbs](https://ampcode.com/news/event-driven-orbs) (2026-07-23), [Multiplayer](https://ampcode.com/news/multiplayer) (2026-07-22), [Right on Schedule](https://ampcode.com/news/schedule) (2026-07-21), [Meet Puck](https://ampcode.com/news/meet-puck) and [Amp Is Now In Slack](https://ampcode.com/news/slack-integration) (both 2026-07-20), [Subscriptions, At Last](https://ampcode.com/news/subscriptions) (2026-07-18), [From Agent to Agent](https://ampcode.com/news/from-agent-to-agent) (2026-07-17), and [Secrets of the Orb](https://ampcode.com/news/secrets-of-the-orb) (2026-07-14).
- [Amp Manual](https://ampcode.com/manual): now documents the four current modes; project and changes-workflow management; thread finding and archiving; runners; schedules; Slack; multiplayer; current skill and MCP precedence; and corrected pricing language. The former internal pricing contradiction is gone: subscriptions are recommended, while pay-as-you-go credits require no subscription or commitment.
- [Orbs manual](https://ampcode.com/manual/orbs) and [OIDC guide](https://ampcode.com/manual/orbs/oidc): orbs can mint short-lived RS256 OIDC identity tokens for one audience. Relying services must verify signature, issuer, audience, expiry, and identity claims; an audience is not an authorization secret. The current guide recommends immutable workspace/project/user/thread IDs over email and gives GCP, AWS, and Tailscale federation recipes.
- [Meet Puck](https://ampcode.com/news/meet-puck) and [Amp Is Now In Slack](https://ampcode.com/news/slack-integration): Puck is an explicitly experimental, always-available meta-agent for finding/managing threads, creating projects, and launching/coordinating agents. Slack mentions route to each user's Puck, which can search Slack context, answer codebase questions, manage threads, and initiate agent work.
- [Right on Schedule](https://ampcode.com/news/schedule): an agent can save a one-time or recurring prompt, wake its existing thread, and continue with its context and history. The release explicitly composes schedules with Slack, Puck, skills, and spawned agents. Treat completion conditions, recurrence, budget, notification destination, and schedule cleanup as part of the work contract.
- [Multiplayer](https://ampcode.com/news/multiplayer) and the Manual's multiplayer section: a non-private orb thread can temporarily give workspace members the ability to message the agent and access the orb's files, changes, portals, secrets, and shared terminal. The thread owner pays the agent and orb costs. The current default duration is three hours and can be changed or ended; access automatically expires.
- [Event Driven Orbs](https://ampcode.com/news/event-driven-orbs): a project plugin can register a durable webhook that stores an external event and wakes the owning orb even when it is paused. The release's GitHub example verifies signatures, deduplicates delivery, passes trusted metadata separately, and treats issue text as untrusted input rather than instructions. Handlers can continue the owning thread or spawn a fresh orb thread and post results back to the originating service.
- [Plugin API](https://ampcode.com/manual/plugin-api): `createAgent`, `getBuiltinAgent`, and `registerAgentMode` are now first-class top-level APIs, while experimental aliases remain for compatibility. Built-in handles are `low`, `medium`, `high`, and `ultra`; deprecated `rush`, `smart`, and `deep` handles map to replacements. `createWebhook` is still experimental: its capability URL is a credential, delivery is at least once, effects must be idempotent by `event.id`, handlers have a 30-second deadline before retry, and the current endpoint limit is a burst of 10 events refilling at 10 per minute.
- [Models](https://ampcode.com/models): now lists Puck as a separate meta-agent using GPT-5.6 Terra, alongside updated mode, subagent, and system-model assignments. This reinforces the existing decision to keep exact model wiring out of durable public prose.
- [Pricing page](https://ampcode.com/pricing): optional beta subscriptions and pay-as-you-go remain available. The page now also documents linked ChatGPT and X subscriptions, workspace billing behavior, and mode-access caveats. Keep those exact terms in dated research rather than the public case-study thesis.

Article-maintenance decision, applied 2026-07-28: `src/content/posts/amp-factory-era-case-study.md` now extends its orchestration contract from spawned workers to scheduled and event-triggered work. It covers who or what may wake the agent, trusted versus untrusted event data, duplicate delivery, identity and permissions, multiplayer access, spend ownership, expiry, proof, and cleanup without copying volatile setup details into public prose. `agentic-coding-2026.md` remains accurate and does not need another release-detail paragraph; transcript-backed resource summaries remain historical rather than being rewritten as current product docs.

## Refresh Sweep — 2026-07-17

Freshly checked sources:

- [From Agent to Agent](https://ampcode.com/news/from-agent-to-agent): an Amp agent can spawn other agents as their own Amp threads in orbs, on the local machine, or on another machine/runner. Agents can send messages and files to each other. First-party examples include offloading side quests while the parent continues, fanning tests out across low-mode workers, recovering files from abandoned threads, sending a test matrix to another machine, and coordinating API documentation in another project.
- [Agents, Anywhere](https://ampcode.com/news/agents-anywhere): remote thread creation remains opt-in. An enabled interactive client accepts new threads in its working directory; `amp --no-tui` starts a headless runner. Multiple runners can run on one host when they use different directories.
- [The Dial](https://ampcode.com/news/the-dial): `low`, `medium`, `high`, and `ultra` remain the four built-in capability/cost tiers. `medium` is the default; every tier has an oracle; plugins can register custom modes. Exact model wiring is explicitly expected to change.
- [Subscriptions, At Last](https://ampcode.com/news/subscriptions): the beta subscription page was first observed during this sweep and now carries the canonical publication date 2026-07-18. Megawatt is $20/month with 750 hours of small orbs, $20 of agent usage, and low/medium modes; Gigawatt is $200/month with 1,000 hours of large orbs, $200 of agent usage, and all modes. The announcement explicitly says pay-as-you-go remains available and subscriptions are not required.
- [Chronicle](https://ampcode.com/chronicle): From Agent to Agent is dated 2026-07-17; the subscription announcement now carries 2026-07-18. Both followed The Dial and Agents, Anywhere.
- [Pricing page](https://ampcode.com/pricing): the supplied URL initially returned HTTP 404 during the 2026-07-17 sweep, then went live with the subscription launch and now returns HTTP 200. It presents optional Megawatt and Gigawatt subscriptions alongside pay-as-you-go at API prices. Treat the exact beta plan prices, included agent usage, orb-hour quotas, and mode restrictions as high-churn details.
- [Manual pricing section](https://ampcode.com/manual#pricing): at the time of this sweep, the opening recommended an optional monthly subscription while a later sentence still said “There is no subscription or commitment for Amp.” The 2026-07-28 Manual fixes this: pay-as-you-go credits, rather than Amp as a whole, require no subscription or commitment.

Article-maintenance decision: distinguish isolated built-in subagents from spawned threads. Add target executor/project, transferred files/context, budget, stop condition, proof target, return message, and integration ownership to the delegation contract. In durable public prose, say subscriptions are optional and pay-as-you-go remains available; omit exact beta plan prices, quotas, orb prices, and model assignments.

## Refresh Sweep — 2026-07-09

Freshly checked source:

- [The Dial](https://ampcode.com/news/the-dial): Amp's built-in agent modes are now `low`, `medium`, `high`, and `ultra`; they replace `smart`, `deep`, `rush`, and `large`. The product framing is capability-versus-cost, with `medium` as the default, `low` for exact bounded work, `high` for hard changes in known areas, and `ultra` for clear outcomes with many unknowns. Reasoning effort is now part of the tier rather than a separate knob. Each built-in tier has an oracle for second opinions. Plugins can still register custom modes, and classic mode plugins exist for users who want the old names back.

Article-maintenance decision: update `src/content/posts/amp-factory-era-case-study.md` so the task-sizing section talks about the dial rather than the old `rush`/`smart`/`deep` built-ins. Keep the reusable claim stable: choose the smallest capable worker when done-ness and path are clear; turn capability up when the agent must discover more before the change can be right. Do not include exact current model assignments in article prose because The Dial itself says the wiring will change as models improve.

## Refresh Sweep — 2026-07-08

Freshly checked sources:

- [Chronicle](https://ampcode.com/chronicle): newest relevant items are The Dial (2026-07-09), Agents, Anywhere (2026-07-08), More Orb Sizes (2026-07-03), Read Bigger Threads (2026-07-02), Putting an Agent in an Orb (2026-07-02 note), Agents in Orbs (2026-06-30), and Custom Agents (2026-06-19).
- [Agents, Anywhere](https://ampcode.com/news/agents-anywhere): ampcode.com can start new agents on any opted-in machine where `amp` is running; runner mode is headless and waits to start/run new threads; multiple runners can run on one host if they use different directories.
- [Agents in Orbs](https://ampcode.com/news/agents-in-orbs): orb-backed threads run on fresh remote machines containing code, plugins, and tools; users can control them like local agents, review/browse files, use a terminal, sync changes locally, and launch orb threads from CLI/TUI surfaces.
- [More Orb Sizes](https://ampcode.com/news/more-orb-sizes) and the [Orbs manual](https://ampcode.com/manual/orbs): orb CPU/memory/disk and pricing are configurable per project and high-churn; the manual is canonical for projects, secrets/env vars, setup/resume lifecycle hooks, included tools, billing, pausing, and current sizes.
- [Putting an Agent in an Orb](https://ampcode.com/notes/putting-an-agent-in-an-orb): best workflow source for making remote agents effective through `.agents/setup`, `.agents/resume`, idempotent dev-server scripts, dev auth endpoints, preflight JSON, port metadata, logs, screenshot artifacts, and AGENTS.md guidance.
- [Read Bigger Threads](https://ampcode.com/news/read-bigger-threads): `read_thread` is now a subagent that searches long/compacted threads, checks for newer revisions or reverts, and can inspect the current thread. Use this as product-context direction, not as a reason to stop recording durable repo-local decisions.

Article-maintenance decision: update `src/content/posts/amp-factory-era-case-study.md` to treat orbs/runners as another factory-era contract: where the agent runs, how the environment is prepared, how humans inspect and sync the work, and what proof comes back. Do not turn the article into an Orbs tutorial.

## Fresh Publication Sweep — 2026-06-28

Re-ran the close-to-publication Amp source sweep before editing the article. No current first-party source contradicted the Task 7 thesis. The fresh sweep supported publishing a broader case study if exact model names, pricing, setup, UI keybindings, token thresholds, and stale Handoff guidance are omitted.

Freshly checked canonical sources:

- [Amp Manual](https://ampcode.com/manual): still lists built-in modes `deep`, `smart`, and `rush`; describes Oracle as a second-opinion model/tool rather than a mode; documents subagent isolation and final-summary behavior; documents Librarian for GitHub code research with default-branch-only search; documents `AGENTS.md`, skills, MCP, thread references, code review, Checks, permissions, plugins, and thread sharing visibility.
- [Plugin API](https://ampcode.com/manual/plugin-api): supports events, commands, tools, UI, AI helpers, `createAgent`, `registerAgentMode`, built-in mode handles for `smart`/`deep`/`rush`, custom subagents, thread creation/append/wait APIs, and `parentThreadID`; still includes experimental API caveats.
- [Models](https://ampcode.com/models): current mode and subagent model assignments remain high-churn; Task 7 article intentionally uses role-based mode descriptions instead of exact model names.
- [Chronicle](https://ampcode.com/chronicle): latest/relevant product items checked include Agents Everywhere, Custom Agents, A Faster Librarian, Diffs, Faster Deep & Rush, End of Public Threads, Plugins Everywhere, Drop the Neo/Amp Rebuilt, Rush 2.0, npm Package Changes, current model announcements, The Coding Agent Is Dead, Liberating Code Review, and older historical items as stale-claim inventory only.

Freshly checked current/relevant news and notes used for article claims:

- [Amp Rebuilt](https://ampcode.com/news/neo): remote-controllable, compaction-first, plugin-powered CLI; auto-compaction; Handoff removed; thread references remain; permissions moved into Plugin API policy surface.
- [Agents Everywhere](https://ampcode.com/news/agents-everywhere): current web/mobile/CLI surfaces for watching and driving active agents.
- [Custom Agents](https://ampcode.com/news/custom-agents): plugins can create custom agents, run one-shot agents, create/continue threads, and connect background work to a parent thread.
- [Diffs](https://ampcode.com/news/diffs): review/request changes/stage thread changes in Amp, with human-comprehension framing.
- [Rush 2.0](https://ampcode.com/news/rush-2.0): qualitative boundary for `rush` as small, bounded, known-done work; avoid exact dated speed/cost claims.
- [Faster Deep & Rush](https://ampcode.com/news/faster-deep-rush) and [A Faster Librarian](https://ampcode.com/news/a-faster-librarian): performance/model details are dated and should not be durable article claims.
- [The End of Public Threads](https://ampcode.com/news/end-of-public-threads): public discoverable thread sharing removed; unlisted/workspace sharing remains.
- [npm Package Changes](https://ampcode.com/news/npm-package-changes): old `@sourcegraph/amp` package name is stale; article avoids install instructions.
- [Plugins Everywhere](https://ampcode.com/news/plugins-everywhere): plugin UI is current on web/TUI.
- [Liberating Code Review](https://ampcode.com/news/liberating-code-review): `amp review`, review requests in threads, and `.agents/checks/` as review criteria backed by separate agents.
- [The Coding Agent Is Dead](https://ampcode.com/news/the-coding-agent-is-dead): confirms old editor-extension/sidebar guidance is stale product-direction context.
- [Feedback Loopable](https://ampcode.com/notes/feedback-loopable), [Mainframe Magic](https://ampcode.com/notes/mainframe-magic), and [How to Pair With an Agent](https://ampcode.com/notes/how-to-pair-with-an-agent): current workflow/case-study support for feedback loops, playgrounds, manifests, deterministic checks, and definition-of-done prompting.

Task 7 publish decision from this sweep: publish a listed case study as `src/content/posts/amp-factory-era-case-study.md`, using Amp as the concrete example and deleting the stale old `amp-power-patterns.md` draft route. The slug intentionally avoids preserving the old “power patterns” route, because the article is no longer a feature catalog and the old route should remain absent from production output.

## Source Hierarchy for Task 7

1. **Current canonical product docs:** Manual, Orbs manual, Plugin API, Models, and current homepage/install/manual sections.
2. **Recent first-party product changes:** Chronicle items from May-July 2026, especially Event Driven Orbs, Multiplayer, Right on Schedule, Meet Puck, Amp Is Now In Slack, From Agent to Agent, Secrets of the Orb, The Dial, Agents Anywhere, Agents in Orbs, More Orb Sizes, Read Bigger Threads, Amp Rebuilt, Agents Everywhere, Custom Agents, Diffs, End of Public Threads, npm Package Changes, and Plugins Everywhere.
3. **Recent first-party workflow notes:** Putting an Agent in an Orb, Feedback Loopable, Mainframe Magic, How to Pair With an Agent, and Liberating Code Review.
4. **Archived guidance:** Context Management in Amp and 200k Tokens Is Plenty only for durable principles; do not use them for current Handoff/token-threshold guidance.
5. **Old local draft material:** `src/content/posts/amp-power-patterns.md` only as raw material to replace, not as an authority.

## Current Product Facts Safe to Use Carefully

- Amp agents can spawn other agents as their own Amp threads in orbs, on the local machine, or on another runner, then exchange messages and files. Keep spawned threads separate from built-in subagents, which the Manual still describes as isolated workers that return final summaries.
- Agents can attach one-time or recurring schedules to a thread, wake with a saved prompt, and continue with that thread's context and history. Treat recurrence, completion, notification, spend, and cleanup as explicit contracts rather than assuming a scheduled agent will stop itself safely.
- Puck is an experimental meta-agent for managing Amp projects and threads and launching/coordinating agents. Slack mentions route through the user's Puck. Use Puck/Slack as current orchestration direction, not as a stable API or generic requirement.
- Event-driven orb plugins can register durable webhooks that wake paused orbs and either continue the owning thread or launch another. The capability URL must be protected, external payloads remain untrusted, signature verification belongs in the integration, and at-least-once delivery requires idempotent effects.
- Multiplayer temporarily exposes a non-private orb thread's agent, files, changes, portals, secrets, and shared terminal to workspace members. The thread owner owns billing. Access scope and expiry therefore belong in the same delegation contract as worker scope and budget.
- Amp currently presents four built-in dial tiers: `low`, `medium`, `high`, and `ultra`. They replace the old `smart`, `deep`, `rush`, and `large` built-ins. `medium` is the default; `low` is for exact bounded work; `high` is for hard changes in known areas; `ultra` is for clear outcomes where the path has many unknowns.
- Oracle is **not** a mode. It is a second-opinion tool/subagent for complex reasoning, planning, debugging, or review.
- Current model assignments are on `/models` and age quickly. The Dial lists current under-the-hood wiring for `low`/`medium`/`high`/`ultra`, but also says that wiring will change as models improve. Prefer dial-level capability descriptions over model names in durable public prose.
- Amp now supports web/mobile/CLI surfaces for watching and driving active agent threads. Use this as a current product-direction point, not as a generic coding-agent requirement.
- Amp now supports orb-backed remote agents and opted-in remote thread creation from ampcode.com onto any machine running Amp. Use this as remote-execution/orchestration direction, not as setup guidance.
- Orbs are fresh remote machines associated with projects and configured through project settings; `.agents/setup` and `.agents/resume` are current repo lifecycle hooks for preparing and resuming orb work. Orbs can mint short-lived OIDC identity tokens, but relying services must authorize immutable claims as well as checking the audience. Exact sizes/prices/flags should be verified from the Orbs manual immediately before publication.
- `read_thread` has been rewritten for long, compacted threads. This reduces product-context loss, but public workflow guidance should still keep decisions, acceptance criteria, and proof in repo-local state.
- Plugins are the current extensibility surface: events, tools, commands, UI, AI classification, configuration, thread APIs, custom agents, custom modes, custom subagents, and experimental durable webhooks. Core agent creation and mode registration are now first-class APIs; webhook registration remains experimental.
- Project/user/system `AGENTS.md`, skills, checks, MCP configuration, thread references, review, and thread sharing are all current manual concepts.
- Librarian can search public GitHub and connected private GitHub repositories, but the manual says it reads only the default branch.
- Amp does not ask for approval before running tools by default. Permissions can still be implemented via plugins or legacy settings. Frame this as a configurable security boundary, not a blanket recommendation.
- Manual thread sharing currently supports private, workspace-shared, group-shared, and unlisted visibility. Chronicle says public discoverable thread sharing was removed on 2026-06-02.
- Amp now offers optional beta subscriptions with included agent and orb usage while retaining pay-as-you-go at provider API prices. The Manual says individuals and non-enterprise workspaces pay zero markup on pay-as-you-go usage, and its former internal contradiction has been fixed. Treat worker count, dial tier, recurring schedules, and event-triggered wake-ups as budget controls, and reverify subscription tiers, included usage, Enterprise pricing, and credit rules before publication.

## Stale or High-Risk Claims to Remove from the Old Draft

- “Oracle mode,” old built-in mode trees centered on `rush`/`smart`/`deep`, and any mode decision tree that omits the current `low`/`medium`/`high`/`ultra` dial.
- Old model claims such as Rush using Claude Haiku 4.5, Smart using Claude Sonnet 4.5, or Oracle using GPT-5.
- Exact old speed/cost claims such as “Rush is 67% cheaper, 50% faster.” If performance is discussed, use recent dated sources and prefer qualitative framing.
- Fixed token thresholds such as “start new threads around 50-100k” or “quality degrades beyond 100k.” The current 200k note is archived and explicitly says auto-compaction makes longer threads fine/productive.
- Handoff as current product guidance. Amp Rebuilt says Handoff is gone; current guidance should use auto-compaction, thread references, and durable repo/work-item state instead.
- Old VS Code extension/sidebar assumptions. The February 2026 “Coding Agent Is Dead” post announced killing the editor extensions; May/June 2026 sources describe rebuilt web/mobile/CLI surfaces and a new sidebar. Verify UI details immediately before publishing.
- Setup/install claims using `@sourcegraph/amp`; npm Package Changes says the CLI package is now `@ampcode/cli`, with direct installation recommended.
- Pricing, subscription, free-tier, or Enterprise-premium claims unless reverified from the dedicated Pricing page, current Manual, and latest billing announcement at publication time.
- Do not quote the Manual's former “There is no subscription or commitment for Amp” sentence as current policy. The Manual now correctly says pay-as-you-go credits require no subscription or commitment.
- Exact orb sizes, prices, CLI flags, runner setup details, keybindings, or UI screenshots unless reverified from the current Orbs manual and latest news on the publication date.
- Exact schedule recurrence rules, webhook rate limits/deadlines, multiplayer durations, Puck capabilities, Slack permissions, OIDC claims, portal behavior, or plugin signatures unless reverified from the current Manual and Plugin API.
- Any claim that an external event body is trusted agent instruction, or that a webhook handler runs exactly once. Current guidance separates verified metadata from untrusted content and documents at-least-once delivery.
- Draft-only route links: `/posts/amp-first-win-15-minutes`, `/posts/what-is-an-agent`, `/posts/agent-workflows-that-stick`, `/posts/agent-planning-workflow`, `/posts/amp-power-patterns`, and `/posts/coding-with-agents-2025`.
- Generic “use N subagents for N files” advice without independence, conflict, and review caveats.

## Per-Resource Notes

### Amp Manual — <https://ampcode.com/manual>

**Recency/status:** current canonical manual; force-refetched 2026-06-28, 2026-07-08, and 2026-07-28. The current page now incorporates The Dial and the July 20-22 orchestration releases.
**Best use:** primary source for current product terminology and feature existence.

Key points:

- The Manual now directly documents `low`, `medium`, `high`, and `ultra`; the 2026-07-08 `deep`/`smart`/`rush` snapshot is superseded.
- Prompting guidance emphasizes explicit outcomes, one thread per task, naming known files/commands, using `AGENTS.md`, and telling the agent how to verify its work.
- `AGENTS.md` files are included from cwd/parents, subtree guidance when files are read, and user/system locations. Mentioned files and glob-scoped guidance are supported.
- Thread references are current: users can reference Amp thread URLs/IDs; Amp extracts relevant information from the referenced thread.
- Subagents are useful for independent multi-step work, large-output operations, or parallel work, but they are isolated, cannot be guided mid-task, and only return final summaries.
- Oracle is a read-only second-opinion model/tool for complex reasoning/review/debugging, not a mode.
- Librarian searches external codebases on GitHub, including connected private repos, and only default branches.
- Projects now include repository identity and configurable Ship/Push to Branch/Custom Ship changes workflows. The Manual also documents finding and archiving threads.
- Plugins, skills, MCP, code review/checks, permissions, CLI execute/stream JSON, thread sharing, remote control, remote thread creation, orbs, schedules, Slack, and multiplayer are current product areas.
- The current pricing section no longer contradicts the subscription launch: it recommends subscriptions and separately says pay-as-you-go credits require no subscription or commitment.

Task 7 use:

- Anchor current limitations and safe feature descriptions here.
- Use the manual to correct the old draft’s Oracle/subagent/Librarian sections, but use The Dial for current built-in mode names.
- Avoid copying install/pricing details unless the article truly needs them; reverify close to publication.

### Manual Plugins Section — <https://ampcode.com/manual#plugins>

**Recency/status:** current manual section; force-refetched 2026-06-28 as part of the manual.
**Best use:** concise overview of when plugins are appropriate.

Key points:

- Plugins are TypeScript files that extend Amp.
- Plugins can handle events, add tools, add commands, show UI, and classify with AI.
- The manual positions extension mechanisms distinctly: `AGENTS.md` for durable instructions, skills for task-specific guidance, plugins for custom tools/event-driven behavior, and MCP when integrating MCP servers.
- Legacy toolboxes are no longer supported; migrate old toolbox scripts to plugins.
- Plugins execute code, so only use trusted plugins.
- Project plugins live in `.amp/plugins/*.ts`; system plugins live under user config; global plugins are experimental/limited.

Task 7 use:

- Good source for “Amp as an extensibility case study.”
- Do not turn the article into a plugin tutorial; link to docs if examples are needed.

### Plugin API Reference — <https://ampcode.com/manual/plugin-api>

**Recency/status:** current generated/reference documentation; force-refetched 2026-06-28, 2026-07-08, and 2026-07-28. Core agent APIs are now first-class; durable webhooks are experimental.
**Best use:** precise API capabilities when discussing custom agents/orchestration.

Key points:

- Example plugin covers `session.start`, `tool.call`, `tool.result`, `agent.start`, `agent.end`, commands, UI, tools, thread append, runtime/config, and `amp.ai.ask`.
- Current first-class API includes `createAgent`, `getBuiltinAgent`, `registerAgentMode`, cross-thread handles, thread append/wait/cancel/messages, command availability, plugin tools, and helpers for tool calls/files.
- Built-in handles are `low`, `medium`, `high`, and `ultra`. Deprecated `rush`, `smart`, and `deep` handles are compatibility aliases that spawn replacement modes.
- Custom agents can run one-shot or create background threads on local, orb, or runner executors; `parentThreadID` connects spawned work to a parent thread, and orb thread creation can request a multiplayer TTL.
- Experimental `createWebhook` registers a durable capability URL scoped to a plugin and owning orb thread. Delivery is at least once; handlers must use `event.id` for idempotency and finish within the current 30-second deadline or be retried.
- Some APIs and exact signatures remain experimental or compatibility aliases; plugin/custom-agent/webhook details can churn.

Task 7 use:

- Use for “factory/orchestration surface” claims.
- Keep code examples small or avoid them; plugin details are too dense for a broad article.

### Amp Chronicle — <https://ampcode.com/chronicle>

**Recency/status:** current release/news index; force-refetched 2026-06-28, 2026-07-08, 2026-07-17, and 2026-07-28.
**Best use:** latest-product-change sweep before editing/publishing.

Important recent items:

- 2026-07-23 Event Driven Orbs: durable plugin webhooks can wake paused orbs from external HTTP events; integrations own verification, filtering, idempotency, and safe handling of untrusted payloads.
- 2026-07-22 Multiplayer: workspace members can temporarily share control of a non-private orb thread and its agent, portal, changes, files, and terminal.
- 2026-07-21 Right on Schedule: agents can save one-time or recurring prompts, wake, and continue with existing context/history.
- 2026-07-20 Meet Puck: experimental meta-agent/home base for finding/managing work and launching/coordinating agents.
- 2026-07-20 Amp Is Now In Slack: Slack mentions route through personal Puck instances for codebase questions, thread management, context search, and agent work.
- 2026-07-18 Subscriptions, At Last: optional beta plans add included agent and orb usage while pay-as-you-go remains available.
- 2026-07-17 From Agent to Agent: agents can spawn other agents as their own threads across local machines, orbs, and other runners, then send messages and files between spawned threads.
- 2026-07-14 Secrets of the Orb: Amp-managed orbs can mint short-lived OIDC tokens with workspace/project/user/thread identity claims for workload federation.
- 2026-07-09 The Dial: built-in modes are now `low`, `medium`, `high`, and `ultra`, replacing `smart`, `deep`, `rush`, and `large`; reasoning effort is part of the tier; plugins can still register custom modes.
- 2026-07-08 Agents Anywhere: start new agents remotely from ampcode.com on any opted-in machine or headless runner that can run `amp`.
- 2026-07-03 More Orb Sizes: project-level orb CPU/memory choices; exact prices and sizes are date-sensitive.
- 2026-07-02 Read Bigger Threads: `read_thread` became a subagent for long/compacted threads that checks for revisions and reverts.
- 2026-07-02 Putting an Agent in an Orb note: making a codebase work for headless remote agents through setup/resume hooks, dev auth, preflight checks, logs, and screenshots.
- 2026-06-30 Agents in Orbs: launch Amp agents remotely in fresh orbs; inspect files, use terminal, sync changes, and run multiple agents without local resource clashes.
- 2026-06-19 Custom Agents: plugins can create agents, run them once, and keep talking to their threads.
- 2026-06-18 A Faster Librarian: current performance/model note for Librarian; exact numbers are date-sensitive.
- 2026-06-16 Diffs: review and stage changes directly in Amp.
- 2026-06-05 Faster Deep & Rush: deep/rush speed improvements; exact numbers are date-sensitive.
- 2026-06-04 Agents Everywhere: watch/drive agents from web, CLI, and mobile; active-thread sidebar.
- 2026-06-04 Opus 4.8: current smart-mode model card; exact eval/model claims are date-sensitive.
- 2026-06-02 End of Public Threads: public discoverable thread sharing removed; unlisted/workspace sharing remains.
- 2026-05-28 Plugins Everywhere: plugin UI on web.
- 2026-05-27 Drop the Neo: rebuilt Amp became Amp for everyone.
- 2026-05-21 Rush 2.0: rush retuned for small, bounded tasks on GPT-5.5/no reasoning.
- 2026-05-14 npm Package Changes: direct install recommended; CLI npm package is `@ampcode/cli`, not `@sourcegraph/amp`.
- 2026-05-06 Amp Rebuilt: remote-controllable, compaction-first, plugin-powered CLI; Handoff removed.
- 2026-02-19 The Coding Agent Is Dead: Amp shifted away from editor-extension/sidebar assumptions toward CLI/longer-leash agents.
- 2026-02-04 Liberating Code Review: review agent became composable via `amp review` and thread requests; checks live in `.agents/checks/`.

Task 7 use:

- Re-run Chronicle before publication; this is the source most likely to reveal stale product claims.
- Use dated announcements for direction and examples, not timeless claims.

### From Agent to Agent — <https://ampcode.com/news/from-agent-to-agent>

**Recency/status:** 2026-07-17 product announcement; followed by the July 20-23 Puck, Slack, schedule, multiplayer, and event-trigger releases.
**Best use:** current source for agent-driven orchestration across spawned Amp threads and executors.

Key points:

- An Amp agent can spawn another agent in an orb, on the local machine, or on another machine/runner.
- Agents can send messages and files to each other across threads.
- First-party examples cover unrelated side quests, parallel browser testing, recovering useful files from abandoned work, test execution on another machine, and cross-project documentation.
- This is distinct from built-in subagents: it creates addressable threads with execution environments and transfer paths rather than isolated in-turn workers that only summarize back.

Case-study use:

- Treat agent-to-agent work as a delegation protocol: target project/executor, inputs, budget, stop condition, proof, return message, and integration owner.
- Do not translate the examples into generic "spawn many agents" advice. Fan-out is useful only when work is independent and review/cost remain bounded.

### Secrets of the Orb and OIDC Manual — <https://ampcode.com/news/secrets-of-the-orb>, <https://ampcode.com/manual/orbs/oidc>

**Recency/status:** 2026-07-14 announcement plus current dedicated guide, force-refetched 2026-07-28.
**Best use:** current source for workload identity and least-privilege access from Amp-managed orbs.

Key points:

- An orb can mint an RS256-signed OIDC token for one audience with `amp orb id-token`; the default lifetime is 10 minutes and the documented configurable range is 60 seconds to one hour.
- Tokens carry standard identity claims plus available workspace, project, user, thread, and verified-email claims. The subject combines the stable identity segments available to that orb.
- An audience identifies the recipient but is not an authorization secret. Relying services must verify signature, issuer, audience, and expiry, then authorize immutable identity claims such as workspace/project/user/thread IDs.
- The guide covers GCP workload identity federation, AWS IAM federation, and Tailscale trust credentials. The release frames this as safer than injecting long-lived credentials into every orb.

Case-study use:

- Add identity and granted permissions to the remote-execution contract; do not imply that putting a task in an orb automatically makes production access safe.
- Keep commands, claims, TTL ranges, and provider recipes in research/tutorial material rather than the broad case study.

### Meet Puck and Amp in Slack — <https://ampcode.com/news/meet-puck>, <https://ampcode.com/news/slack-integration>

**Recency/status:** two 2026-07-20 product announcements; Puck is explicitly labeled an experiment.
**Best use:** current source for meta-agent coordination and chat-triggered agent work.

Key points:

- Puck is an always-available assistant on ampcode.com that can find and archive threads, create projects, start agents in projects or orbs, and coordinate/fan out work.
- Slack mentions send a request to the mentioning user's personal Puck. The integration can answer codebase questions, start investigations or fixes, find/manipulate threads, and search Slack for relevant context.
- The announcement examples include responding to screenshot bug reports and production alerts. These are product examples, not evidence that unsupervised incident response is safe by default.

Case-study use:

- Treat Puck as a triage/coordinator role and Slack as another external-input/notification boundary.
- Keep authorization, channel context, target project, action scope, proof, notification, and escalation explicit; do not present chat mention as sufficient approval for high-impact work.

### Right on Schedule — <https://ampcode.com/news/schedule>

**Recency/status:** 2026-07-21 product announcement; schedules are also documented in the current Manual.
**Best use:** current source for time-triggered continuation of an Amp thread.

Key points:

- Agents can create one-time or recurring schedules. When a schedule fires, the owning thread wakes with a saved prompt and continues with its context and history.
- First-party examples include polling a backfill until completion, later feature-flag cleanup, daily query investigation, and hourly error triage that spawns more threads and reports to Slack.
- Schedules compose with Puck, Slack, skills, and agent-to-agent thread creation, which makes recurring fan-out possible as well as recurring observation.

Case-study use:

- Add cadence, completion condition, maximum duration/spend, escalation destination, and schedule deletion to the delegation contract.
- Prefer finite monitoring that clears itself when the stated condition is reached over indefinite recurrence without an owner.

### Multiplayer — <https://ampcode.com/news/multiplayer>

**Recency/status:** 2026-07-22 product announcement; access and billing behavior confirmed in the 2026-07-28 Manual.
**Best use:** current source for shared human control of one orb-backed unit of work.

Key points:

- A non-private orb thread can temporarily become multiplayer. Workspace members can send messages and access the orb's files, changes, portals, secrets, and shared terminal.
- The current Manual says multiplayer lasts three hours by default, can be extended or ended, and expires automatically. All agent and orb costs stay with the thread owner.
- The release frames the orb as a unit that increasingly combines problem description, code, running computation, and review artifacts.

Case-study use:

- Multiplayer makes collaborator identity, access scope, authority to steer, billing ownership, and expiry part of the environment contract.
- Do not frame multiplayer as ordinary thread sharing: it grants live environment and secret access, not merely visibility into a conversation.

### Event Driven Orbs — <https://ampcode.com/news/event-driven-orbs>

**Recency/status:** 2026-07-23 product announcement; `createWebhook` contract checked in the Plugin API on 2026-07-28 and still marked experimental.
**Best use:** current source for external events that durably wake and drive orb work.

Key points:

- A plugin can register a durable webhook for its owning orb thread. The URL survives plugin reloads and orb restarts, and an incoming request can wake a paused orb.
- The GitHub example verifies the provider signature, deduplicates delivery, scopes accepted repositories/events, starts a fresh read-only orb thread with trusted metadata, and keeps issue text classified as untrusted input rather than instructions.
- A handler can append to the owning thread, launch a fresh local/orb/runner thread, preserve durable state, stop after a matching event, or post results to the originating service.
- The capability URL is a credential. The current Plugin API documents at-least-once delivery, `event.id` for idempotency, a 30-second handler deadline before retry, and a current endpoint rate limit. These exact limits are high-churn implementation details.

Case-study use:

- Extend the orchestration contract with trigger authenticity, allowed event scope, trusted metadata, untrusted content handling, idempotency, execution permissions, retry behavior, budget, output destination, and endpoint deletion.
- This is the strongest new source for the article's broader lesson: once agents become event-driven services, operational safety matters as much as prompt quality.

### Pricing — <https://ampcode.com/pricing>

**Recency/status:** dedicated page checked 2026-07-17 and force-refetched 2026-07-28; subscription plans are explicitly beta. Cross-checked against the 2026-07-18 [Subscriptions, At Last](https://ampcode.com/news/subscriptions) announcement and the Manual's [Pricing section](https://ampcode.com/manual#pricing).
**Best use:** current billing rules that affect task sizing, mode choice, and parallelism.

Key points:

- Megawatt is $20/month and currently includes 750 hours of small orbs plus $20 of agent usage restricted to low and medium modes.
- Gigawatt is $200/month and currently includes 1,000 hours of large orbs plus $200 of agent usage across all modes.
- Subscriptions are optional. Pay-as-you-go remains available at API prices for all features.
- The Manual says individuals and non-enterprise workspaces pay provider API prices with zero markup and that the minimum credit purchase is $5.
- The Manual says Enterprise usage is 50% more expensive and currently starts with a one-time $1,000 purchase that grants $1,000 of Enterprise usage.
- The former Manual contradiction is fixed. The current wording recommends subscriptions while correctly saying pay-as-you-go credits require no subscription or commitment.
- The current Pricing page also includes linked third-party subscriptions, workspace billing behavior, and high/ultra access caveats. These are volatile plan details rather than durable workflow guidance.

Case-study use:

- Cost is part of the work contract when selecting a dial tier or fanning work out to multiple agents.
- Keep the public article durable: say optional subscriptions include agent/orb usage and pay-as-you-go remains available. Date-stamp and reverify exact beta tier prices, included usage, mode restrictions, credit rules, and the Enterprise premium before publishing them.

### Models — <https://ampcode.com/models>

**Recency/status:** model matrix force-refetched 2026-06-28, 2026-07-08, 2026-07-17, and 2026-07-28; the July 8 assignments below are retained only as a superseded snapshot.
**Best use:** current mode/subagent/system model assignments if model names must appear.

Key points:

- Modes are framed as a combination of system prompt, tools, and model.
- Superseded 2026-07-08 mode assignments: Deep = GPT-5.5, Smart = Claude Opus 4.8, Rush = GPT-5.5. The Dial replaced these built-ins with `low`/`medium`/`high`/`ultra` and says exact wiring will change.
- Superseded 2026-07-08 subagent snapshot: Review = GPT-5.5, Search = Gemini 3 Flash, Oracle = GPT-5.5, Librarian = GPT-5.5, Read Thread = GLM 5.2. Do not label these assignments current.
- Current Oracle detail rechecked 2026-07-28: the standalone Oracle uses GPT-5.6 Sol with high reasoning; in `high` mode, where GPT-5.6 Sol is the main model, Oracle uses Claude Fable 5 so the second opinion comes from a different frontier model.
- The 2026-07-28 page adds Puck as a separate meta-agent using GPT-5.6 Terra. Keep the role distinction; omit the exact model from durable public prose.
- Superseded 2026-07-08 system-model snapshot: View Media = Gemini 3 Flash, Painter = GPT Image 2, Titling = Claude Haiku 4.5, and Compaction = GPT-5.4. The 2026-07-17 Models page already lists Compaction as GPT-5.6 Sol, illustrating why exact wiring should stay out of durable prose.

Task 7 use:

- Prefer dial-level descriptions (`low` for exact bounded tasks, `medium` as default, `high` for hard changes, `ultra` for unknown paths) over model names.
- If model names survive, mark them verified as of the publication date and expect churn.

### Amp Rebuilt — <https://ampcode.com/news/neo>

**Recency/status:** 2026-05-06 product architecture announcement; still relevant because Drop the Neo made rebuilt Amp generally available on 2026-05-27.
**Best use:** transition source for obsolete Handoff/manual-context claims.

Key points:

- Amp CLI was rebuilt as remote-controllable, compaction-first, plugin-powered, and faster.
- Auto-compaction replaced manual context pressure: when context fills, Amp summarizes and starts a fresh window.
- Handoff is explicitly described as gone; thread references remain.
- Plugins became the policy/customization surface, including permissions.
- Tool approvals are no longer default unless legacy permission settings activate the built-in permissions plugin.
- User-invokable skills and old skill-management commands were removed in this rebuild.

Task 7 use:

- Strong source for removing the old draft’s Handoff and token-management sections.
- Strong source for “Amp is moving toward longer-leash, remote-controllable, plugin-powered agent work.”

### Agents Everywhere — <https://ampcode.com/news/agents-everywhere>

**Recency/status:** 2026-06-04 product announcement.
**Best use:** current multi-agent UI/orchestration direction.

Key points:

- Amp has a new UI/sidebar for watching and driving agents across web, mobile, and CLI.
- The rebuilt foundation is described as a distributed system with durable execution for the agent loop and plugin API.
- Users can remote-control all active threads in one place.
- CLI sidebar access is described with `Opt+S` / `Alt+S`; keybindings are high-churn and should be reverified if published.

Task 7 use:

- Good source for factory-era UI/orchestration framing.
- Avoid over-indexing on exact keybindings/screens/UI unless reverified immediately before publish.

### Agents Anywhere — <https://ampcode.com/news/agents-anywhere>

**Recency/status:** 2026-07-08 product announcement.
**Best use:** latest source for starting agents remotely from ampcode.com on machines other than Amp-managed orbs.

Key points:

- Users can start new agents remotely from ampcode.com anywhere they can run `amp`.
- Remote thread creation must be enabled; each started Amp client accepts and runs new threads in its working directory.
- Runner mode is headless and waits to start/run new threads.
- Multiple runners can run on the same machine if started in different directories; runners are identified by host and working directory.

Task 7 use:

- Use as the newest source for “controlling and creating agents from the web” and for the factory-era idea that the agent runner can be any prepared machine.
- Avoid exact commands/settings in public prose unless writing a tutorial and rechecking on publish day.

### Agents in Orbs and Orbs Manual — <https://ampcode.com/news/agents-in-orbs>, <https://ampcode.com/manual/orbs>

**Recency/status:** 2026-06-30 product announcement plus current Orbs manual, force-refetched 2026-07-08 and 2026-07-28.
**Best use:** current source for Amp-managed remote machines where agents can run without local resource contention.

Key points:

- Orbs are remote machines where an Amp agent can run without supervision; a new orb thread gets a fresh clone of the repository plus project configuration.
- The product surfaces include file browsing/review, an orb terminal, local sync of remote changes, CLI/TUI ways to start orb-backed threads, project selection, and project-scoped secrets/env vars.
- The manual says committed `.agents/setup` and `.agents/resume` scripts run from the repo root as lifecycle hooks for fresh/resumed orbs.
- The current manual adds OIDC workload identity, supervised services through `.amp/services.yaml`, authenticated portal URLs, and portal manifests under `.amp/portals/`.
- The manual lists current included tools, current sizes/pricing, billing, and pausing; those details are explicitly date-sensitive.

Task 7 use:

- Use as the main source for remote execution and environment-boundary claims.
- Frame orbs as another contract to design for: repo bootstrap, secrets, tools, proof, and human inspection.
- Do not publish exact sizes/prices/commands unless freshly reverified.

### Putting an Agent in an Orb — <https://ampcode.com/notes/putting-an-agent-in-an-orb>

**Recency/status:** 2026-07-02 workflow note following the Orbs launch.
**Best use:** strongest concrete example of making a codebase work for a headless remote agent.

Key points:

- Amp’s own repo uses `.agents/setup` to prepare databases, seed users, install toolchains/dependencies, and write orb-specific AGENTS.md guidance.
- `.agents/resume` is for fast idempotent wake-up repair.
- Their agent-friendly dev environment uses a dev-server skill/script, port metadata, development auth endpoints, preflight JSON, logs, browser console forwarding, and screenshot artifacts.
- The note’s practical thesis: “don’t make them guess.” Put how to run, authenticate, observe, and verify in codebase tooling and docs.

Task 7 use:

- Use as proof-loop/environment-contract support, especially when saying remote agents need repo-local setup and inspectable feedback paths.
- Avoid presenting Amp-internal endpoint names as a universal recipe; use them as examples of agent-friendly affordances.

### Read Bigger Threads — <https://ampcode.com/news/read-bigger-threads>

**Recency/status:** 2026-07-02 product announcement.
**Best use:** current source for long-thread context retrieval and compaction-era thread references.

Key points:

- `read_thread` is now a subagent tuned to extract information from long threads.
- It searches the thread, reads messages, and checks whether later work revised, superseded, reverted, or contradicted earlier findings.
- It works on the current thread as well as explicitly referenced threads.

Task 7 use:

- Use to update context claims: Amp product context retrieval is stronger than in the June sweep.
- Still recommend durable repo-local decision/proof records for information that future work must trust.

### Custom Agents — <https://ampcode.com/news/custom-agents>

**Recency/status:** 2026-06-19 product announcement.
**Best use:** freshest source for plugin-created agents/background threads.

Key points:

- Plugins can create custom agents for main-agent modes or subagents.
- Agents can run once, create threads, append user messages, wait for responses, and run background reviews connected to a parent thread.
- The announcement uses examples like a focused-reviewer agent and async review thread.

Task 7 use:

- Good source for “Amp as factory/orchestration case study.”
- Caveat as an advanced/extensible product surface, not beginner guidance.

### Diffs — <https://ampcode.com/news/diffs>

**Recency/status:** 2026-06-16 product announcement.
**Best use:** current human-review/control source.

Key points:

- Users can review and stage changes directly in Amp on desktop or mobile while a thread has an active environment.
- Amp emphasizes human comprehension: “Outsource your coding, but not your understanding of the code.”
- Diff algorithm includes duplicate block detection to reduce cognitive load.
- CLI users can open current thread diffs in the browser from the command palette.

Task 7 use:

- Good source for review/proof loop examples.
- Pair with `make-the-agent-prove-it` instead of duplicating proof-stack mechanics.

### Rush 2.0 — <https://ampcode.com/news/rush-2.0>

**Recency/status:** 2026-05-21 product announcement.
**Best use:** current qualitative guidance for `rush`.

Key points:

- `rush` is tuned for small coding tasks that do not require contemplating the whole repo.
- Good `rush` tasks have known scope and done-ness: fix a failing test, match styling in a specific component, rename a flag.
- Do not use `rush` for transient bugs, architecture changes, migrations, complex features, or tasks where “done” is unclear.
- Suggested pattern: let `rush` build; ask Oracle to plan, criticize, or review for bounded-but-not-trivial work.
- The announcement includes eval, speed, cost, and model details; treat those as dated and optional.

Task 7 use:

- Use qualitative task-shaping and `rush`+Oracle pattern.
- Do not center exact cost/speed/eval numbers.

### Faster Deep & Rush — <https://ampcode.com/news/faster-deep-rush>

**Recency/status:** 2026-06-05 product announcement.
**Best use:** dated performance context only.

Key points:

- Amp reported first token 87% faster and full responses 32% faster, p50, in `deep` and `rush`.
- Gains were attributed mostly to OpenAI websockets and partly to the rebuilt Amp foundation.

Task 7 use:

- Avoid exact speed numbers in a durable article unless there is a clear reason and date stamp.
- Use only to support “performance is an active product area.”

### Opus 4.8 — <https://ampcode.com/news/opus-4.8>

**Recency/status:** 2026-06-04 model card/news item.
**Best use:** dated support for `smart` behavior and current model assignment.

Key points:

- Opus 4.8 powers `smart` mode as of the article.
- The note emphasizes tighter changes, better self-checking, more appropriate tool/subagent use, and use of `librarian` when outside context is needed.

Task 7 use:

- Avoid making model names the article’s thesis.
- Use the pattern (“say how far to go; give verification”) rather than exact model-eval details.

### A Faster Librarian — <https://ampcode.com/news/a-faster-librarian>

**Recency/status:** 2026-06-18 performance announcement.
**Best use:** dated current note for Librarian performance/model.

Key points:

- Librarian is described as faster/cheaper while maintaining quality, now using GPT-5.5/no reasoning with websocket mode and more parallel exploration.
- The article includes exact latency/cost/quality numbers; these are high-churn.

Task 7 use:

- If discussing Librarian, use manual for capability/limitations and this page only for current dated product movement.

### Liberating Code Review — <https://ampcode.com/news/liberating-code-review>

**Recency/status:** 2026-02-04 product announcement; more current than the 2025 Review/Agentic Review extension-only posts.
**Best use:** current-ish review/checks source, backed by current manual.

Key points:

- Review agent can be invoked via `amp review` or requested in a thread with natural language.
- Review comments can feed back into the main agent or another command.
- Checks are defined under `.agents/checks/`; the `code_review` tool runs separate agents for checks.
- Checks can encode stack-specific performance/security/style/migration/compliance invariants.

Task 7 use:

- Strong source for the “review is part of the factory” section.
- Use current manual’s Code Review section to confirm details before publish.

### Agentic Review — <https://ampcode.com/news/agentic-code-review>

**Recency/status:** 2025-12-18; partially superseded by February 2026 Liberating Code Review and June 2026 Diffs.
**Best use:** historical evolution only.

Key points:

- Introduced a review agent in the VS Code extension review panel.
- Mentions Gemini 3 Pro and editor keybindings; likely stale after rebuilt Amp and current models.

Task 7 use:

- Avoid as primary source. Prefer Liberating Code Review, Diffs, Manual, and Models.

### The Coding Agent Is Dead — <https://ampcode.com/news/the-coding-agent-is-dead>

**Recency/status:** 2026-02-19 product-direction essay.
**Best use:** why old editor/sidebar framing is stale.

Key points:

- Amp argued the frontier shifted away from local editor-sidebar agents toward longer-leash agents.
- The post announced killing VS Code/Cursor editor extensions and switching to CLI-first work.
- It says bottlenecks moved from agent wrappers toward codebase organization and organizational usage.

Task 7 use:

- Useful framing source for why an old “sidebar power patterns” draft is stale.
- Do not quote dramatic claims as neutral industry fact; use as Amp’s stated product direction.

### End of Public Threads — <https://ampcode.com/news/end-of-public-threads>

**Recency/status:** 2026-06-02 product/security announcement.
**Best use:** current thread-sharing caution.

Key points:

- Public, discoverable thread sharing was removed.
- Workspace and unlisted sharing remain.
- Existing public-discoverable threads were converted to unlisted.
- Reason: agents read more files as models improve, increasing risk of sensitive snippets in shared threads.

Task 7 use:

- If using thread links as examples, distinguish unlisted/workspace sharing from public-discoverable sharing.

### npm Package Changes — <https://ampcode.com/news/npm-package-changes>

**Recency/status:** 2026-05-14 product/install announcement.
**Best use:** avoid stale install/package claims.

Key points:

- Direct installation remains recommended.
- CLI npm package became `@ampcode/cli`; old `@sourcegraph/amp` name was an alias to be removed.
- TypeScript SDK became `@ampcode/sdk`.

Task 7 use:

- Do not include setup unless required. If included, verify from manual/install immediately before publish.

### Plugins Everywhere — <https://ampcode.com/news/plugins-everywhere>

**Recency/status:** 2026-05-28 product announcement.
**Best use:** plugin UI scope.

Key points:

- Plugin UI is available on the web.
- Supported UI: notifications, confirmation dialogs, input fields, and select elements.

Task 7 use:

- Supports plugin UI claims when paired with manual/plugin API.

### Agent Skills — <https://ampcode.com/news/agent-skills>

**Recency/status:** 2025-12-10; mostly superseded/confirmed by current manual.
**Best use:** historical/supporting source for skills; manual is primary.

Key points:

- Skills lazily load specific instructions/tools and can live in `.agents/skills/` or user-level skill directories.
- The article mentions compatibility with Claude skills.

Task 7 use:

- Use manual for current details; note that user-invokable skills were later removed in Amp Rebuilt.

### Efficient MCP Tool Loading — <https://ampcode.com/news/lazy-load-mcp-with-skills>

**Recency/status:** 2026-01-08; still conceptually relevant and echoed by current manual.
**Best use:** why skills + MCP matter for context/tool hygiene.

Key points:

- MCP tool definitions can consume substantial context.
- Amp can bundle MCP server configs in skills so tool definitions load only when a skill is invoked.
- `includeTools` can restrict exposed MCP tools.

Task 7 use:

- Good source for context/tool-surface hygiene.
- Exact token comparisons are dated; use qualitatively unless date-stamped.

### Slashing Custom Commands — <https://ampcode.com/news/slashing-custom-commands>

**Recency/status:** 2026-01-29; partly superseded by Amp Rebuilt’s removal of user-invokable skills, but still useful for custom-command migration history.
**Best use:** do not recommend old custom commands.

Key points:

- Custom commands were removed in favor of skills.
- Markdown/executable commands can be migrated into skill directories.

Task 7 use:

- Avoid old custom-command guidance; use skills/plugins/manual instead.

### Handoff and Handoff, Please — <https://ampcode.com/news/handoff>, <https://ampcode.com/news/ask-to-handoff>

**Recency/status:** October 2025 and January 2026; superseded by Amp Rebuilt in May 2026.
**Best use:** historical only.

Key points:

- Older posts positioned Handoff as context transfer between threads.
- Amp Rebuilt later says Handoff is gone and auto-compaction is in.

Task 7 use:

- Remove Handoff section from future public Amp article.
- If discussing old workflows, explicitly say this is no longer current Amp product guidance.

### Context Management in Amp — <https://ampcode.com/guides/context-management>

**Recency/status:** archived; written November 2025 for an earlier model/context era.
**Best use:** durable context-window fundamentals only.

Key points:

- Page is explicitly archived and says models have become more forgiving, while clarity about what you want remains important.
- Durable principles still useful: context affects output; keep tasks clear; provide relevant files; thread references can extract relevant information.
- Current-stale parts: Handoff, manual context-pressure advice, file-truncation specifics, and old UI details.

Task 7 use:

- Do not use this as a current product source.
- Use only as historical support for “context still matters, but old manual management advice aged.”

### 200k Tokens Is Plenty — <https://ampcode.com/notes/200k-tokens-is-plenty>

**Recency/status:** archived; written December 2025 for an older model/context-window era.
**Best use:** historical short-thread principle, with caveat.

Key points:

- The archive notice says auto-compaction now makes longer threads work well, and it is fine/productive to go beyond 200k tokens.
- Durable principle: small focused tasks/threads are easier to reason about and review.
- Stale as product guidance: any fixed “200k is enough” or 50-100k threshold advice.

Task 7 use:

- If used, pair with current Amp Rebuilt and public `small-threads-durable-state` article.
- Avoid token thresholds.

### Feedback Loopable — <https://ampcode.com/notes/feedback-loopable>

**Recency/status:** 2026-02-05 workflow note; not product reference.
**Best use:** feedback-loop design patterns.

Key points:

- Agents are strongest when they can validate against reality.
- Make problems feedback-loopable by building playgrounds, experiments, and fast inner loops.
- Use URL state, static/reproducible cases, logs, CLI/headless tools, and visual confirmation when needed.
- Human role shifts toward high-level validation and guidance.

Task 7 use:

- Strong source for the Amp case study’s proof/feedback-loop section.
- Avoid unverified claims that “Amp takes screenshots” unless sourced to current manual/tool availability.

### Mainframe Magic — <https://ampcode.com/notes/mainframe-magic>

**Recency/status:** 2026-02-24 workflow/case-study note.
**Best use:** example of agent factory with deterministic checks and manifests.

Key points:

- COBOL migration example used custom skills/tools to parse, map dependencies, create manifests, compile programs, run smoke tests, and hand off ready tasks.
- The useful reusable pattern is source maps/manifests/task queues plus deterministic compile/smoke-test gates.
- The note includes broad claims such as “agents write 90%+- of code” and “100% of code with agents”; use only as author/case-study claim, not general fact.

Task 7 use:

- Good example for “factory/orchestration” and “feedback loops over faith.”
- Caveat broad productivity/code-authorship claims or omit them.

### How to Pair With an Agent — <https://ampcode.com/notes/how-to-pair-with-an-agent>

**Recency/status:** 2026-01-14 workflow note.
**Best use:** task specification and verification habits.

Key points:

- Failure mode is under-specification; give direction, traps, references, and definition of done.
- Agents move faster than human verification, so prompts should engineer feedback loops.
- “Trust isn’t a feeling, it’s a passing test suite.”

Task 7 use:

- Supports the broad article theme: Amp examples should teach task shaping and proof, not just feature selection.

## Oracle Feedback Incorporated

Consulted Oracle on 2026-06-28 after the first evidence pass. High-confidence feedback incorporated here:

- Do not frame Oracle as a mode. This remains true after The Dial: current built-in tiers are `low`, `medium`, `high`, and `ultra`; Oracle is a second-opinion planning/review/debugging tool.
- Use The Dial for current mode naming; treat the earlier `rush`/`smart`/`deep` framing as superseded product terminology.
- Remove old model names and Rush numbers rather than refreshing them into the main copy.
- Treat Handoff as obsolete for current Amp product guidance.
- Use archived context pages only for durable principles.
- Add explicit source-hierarchy and stale-risk warnings.
- Record Librarian’s default-branch limitation.
- Treat plugin/custom-agent APIs as current but high-churn advanced surfaces.
- Frame permissions as a configurable security boundary, not a blanket recommendation.

## Recommended Public Article Refresh

Working title: **Amp Power Patterns in the Factory Era** or **Amp as a Factory-Era Coding-Agent Case Study**.

Suggested structure:

1. **Tools change; patterns persist.** Amp is the example, while the reusable lessons are task sizing, feedback loops, review, context hygiene, and delegation.
2. **Set the dial by uncertainty.** `low` for exact bounded tasks; `medium` as the default; `high` for hard work in a known area; `ultra` for clear outcomes with many unknowns; Oracle for second-opinion planning/review/debugging.
3. **Delegate with contracts.** Subagents for independent work, Oracle for critique, Librarian for external/default-branch code research, review/check agents for codified review criteria.
4. **Context is product plus repo state.** Use auto-compaction, thread references, `AGENTS.md`, skills, and lazy-loaded MCP; link to public context articles for durable state instead of recreating them.
5. **Make the factory prove its work.** Use Diffs, `amp review`, Checks, Feedback Loopable, and Mainframe Magic as Amp-specific proof-loop examples; link to `make-the-agent-prove-it` for mechanics.
6. **Orchestration is becoming a service boundary.** Use agent-to-agent threads, Puck/Slack, schedules, multiplayer, and event-driven orbs to show the move from manually launched workers to time- and event-triggered work without turning the article into release notes.
7. **Identity, trust, and lifecycle are part of the contract.** Add OIDC identity, trigger authenticity, trusted metadata versus untrusted event bodies, at-least-once idempotency, collaborator access/expiry, recurring spend, and explicit cleanup.
8. **What not to copy forward.** Explicitly remove Oracle-as-mode, Handoff, token thresholds, old models, old speed/cost, old VS Code/sidebar assumptions, stale install claims, and draft-only links.

## Follow-Up Before Editing or Publishing Task 7

- [ ] Re-run the Chronicle/manual/models/plugin API sweep on the publish date, especially after mode/model announcements like The Dial.
- [ ] Decide whether the article needs exact model names; if not, omit them.
- [ ] If pricing appears, reverify subscription tiers, prices, included agent/orb usage, linked-provider behavior, mode restrictions, pay-as-you-go rules, and the Enterprise premium.
- [ ] Reverify schedules, multiplayer, OIDC, Puck/Slack, and Event Driven Orbs from the current Manual and Chronicle; keep exact mechanics out unless they are necessary.
- [ ] If webhooks appear, reverify `createWebhook` stability, authentication, delivery/retry semantics, idempotency key, deadline, rate limits, and deletion behavior from the current Plugin API.
- [ ] State the service-era contract in durable terms: trigger, trusted/untrusted inputs, identity/permissions, owner, budget, proof/output, retry behavior, expiry, and stop/cleanup condition.
- [ ] If exact model wiring appears, reverify it from the Models page and Manual; never promote a dated model snapshot as current.
- [ ] Check whether current manual still says Handoff is absent and auto-compaction/thread references are the right framing.
- [ ] Verify current UI/keybinding/sidebar details only if screenshots or instructions survive.
- [ ] Compare rewritten article against `agentic-coding-2026`, `make-the-agent-prove-it`, and `small-threads-durable-state` to avoid overlap.
- [ ] Run normal site checks only after public content/frontmatter/navigation changes; for prep-only research, `git diff --check` is sufficient.
