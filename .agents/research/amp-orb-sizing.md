# Research: Amp Orb Sizing

**Date:** 2026-08-12
**Status:** complete
**Question:** What do Amp's current orb controls and recent practitioner reports establish, and how should they change durable guidance about remote agent execution?

## Recommendation

Treat agent mode and orb size as independent controls. Choose model capability from reasoning uncertainty, choose orb capacity from the repository's runtime demands, and choose worker count from task independence plus downstream integration capacity. Set the project default to the smallest size that handles ordinary setup and checks reliably, then override exceptional threads rather than overprovisioning every run.

## Key Findings

- Amp introduced five `a1` orb sizes from 1 CPU and 2 GB of memory through 16 CPUs and 32 GB, with a new 4-CPU, 8-GB `a1.medium` tier.
- A project owns the default orb size, while individual threads can use another size. The CLI supports `amp -ox "..." --orb-size <size>`, and an agent can be asked to create a thread in a smaller or larger orb. The current [What Are Orbs](https://ampcode.com/what-are-orbs) overview (checked 2026-08-16) adds a third scope: a workspace default for new projects. It repeats the same `a1` size and rate table.
- Current orbs are billed by the minute, cost nothing while paused, and auto-pause after five minutes without activity. The main pricing page separately packages orb-hour allowances with Amp subscriptions.
- Amp says the new `a1.medium` is 50% cheaper and a better fit for most projects than the former `a0.medium`. That is a dated vendor recommendation, not a workload benchmark; projects still need to validate setup time, peak memory, test parallelism, and build behavior on their own codebase.
- Amp also reports faster startup, especially when another team member recently created an orb in the same project. The announcement provides no benchmark boundary, so use this as dated product direction rather than a transferable performance estimate.
- In “Orbs and Jellyware,” Amp's founders report that near-zero startup friction, isolation, Portals, OIDC, and improved reliability changed their own team's orb adoption. This is a dated vendor practitioner report, not a controlled study or a sizing benchmark. It strengthens the case for measuring setup friction and usable feedback paths, but does not determine which CPU or memory tier a repository needs.
- Smaller fan-out workers can lower compute cost, but compute availability does not make overlapping mutation safe or create review capacity. Confirm that work is independent and reviewable before adding workers, then size each worker.

## Current Size And Billing Reference

Verified against the Orbs manual on 2026-08-12:

| Size | CPU | Memory | Disk | Individual/team rate |
| --- | ---: | ---: | ---: | ---: |
| `a1.tiny` | 1 | 2 GB | 40 GB | $0.08/hour |
| `a1.small` | 2 | 4 GB | 40 GB | $0.17/hour |
| `a1.medium` | 4 | 8 GB | 40 GB | $0.33/hour |
| `a1.large` | 8 | 16 GB | 40 GB | $0.66/hour |
| `a1.xxlarge` | 16 | 32 GB | 40 GB | $1.32/hour |

The Orbs manual says each project can choose its default size and names `a1.small` as the default for Megawatt personal projects; it does not name one universal default for other projects. Enterprise workspace rates are 50% higher. These defaults and rates are volatile product details; recheck the manual before using them for a budget.

The pricing page currently includes 750 hours of small orbs with Megawatt and 1,000 hours of xxlarge orbs with Gigawatt. Subscription allowances and metered rates answer different budgeting questions and should not be conflated.

## Durable Operating Contract

```text
agent mode  = reasoning uncertainty
orb size    = setup, build, test, and service load
worker count = independent work bounded by integration capacity
```

Use the project default for the common case. Override a thread when evidence shows that its job is materially lighter or heavier—for example, a read-only search versus a full build with several local services. Record the execution size in a delegated task's budget contract when it differs from the default, along with the stop condition and proof target.

A larger orb changes available CPU and memory, not the agent's reasoning capability. A higher agent mode changes the capability preset, not the machine capacity. More workers change queue and integration pressure, not either worker's capacity. Keeping those controls separate makes cost and failure diagnosis more legible.

## Content Incorporation

- **Incorporate:** `src/content/posts/amp-factory-era-case-study.md`. Orb sizing directly strengthens its task-sizing and cost-governance thesis. “Orbs and Jellyware” also adds concrete, dated examples of using remote runtime for exhaustive matrices, demo artifacts, frame-level UI inspection, staged monitoring, and rollback rather than merely producing more changes.
- **Research only:** `src/content/posts/agentic-coding-2026.md` and `src/content/posts/make-the-agent-prove-it.md`. The episode supports their feedback-loop and evidence arguments, but both already use stronger independent sources. Adding another Amp recap would duplicate support rather than change either thesis.
- **Ignore for now:** the remaining public posts. None depends on Amp's orb lineup, rates, per-thread size control, or the episode's “jellyware” framing.

## Evidence

### Size the Orbs of Production!

Amp's 2026-08-07 announcement introduced the `a1` lineup, described the new `a1.medium`, reduced inactivity auto-pause from 15 to 5 minutes, reported improved startup, and announced per-thread sizing through the web, the CLI's `--orb-size` flag, and agent-created threads. It also states that projects were automatically moved to equivalent new sizes and can change their default in project settings or through `amp projects` commands.

### Current Orbs Manual

The canonical manual confirms the five sizes, current rates and defaults, by-the-minute billing, no charge while paused, five-minute inactivity pause, project settings, the CLI override, and agent-directed smaller or larger orb creation. It also documents that each orb thread starts from a fresh clone, so size validation must include repository setup and required services rather than only the agent process.

### Current Pricing Page

The pricing page confirms subscription-level orb allowances but does not list the per-size metered rate table. Use the Orbs manual for current machine rates and the pricing page for plan allowances.

### Raising an Agent, Season 2 Episode 2

Amp's August 11, 2026 episode is useful as a bounded practitioner report about workflow rather than product authority or transferable performance evidence. Quinn Slack and Thorsten Ball say adoption increased after isolation, Portals, OIDC, stability, and low startup friction came together [01:00]-[13:17]. They describe spending remote runtime on compatibility matrices, end-to-end reruns, demo videos, and frame-level UI inspection [13:17]-[18:54], [23:42]-[26:38].

The episode's highest-risk example is also its most useful boundary: an attachment-authentication migration began with warning-only logs, used read-only production access, monitored failure categories, tightened enforcement incrementally, enabled multiplayer intervention, and retained rollback [18:54]-[22:40]. That supports a durable rule—long-lived remote execution should buy staged evidence and bounded authority—not a general license for unattended production mutation.

## Sources

- [Size the Orbs of Production!](https://ampcode.com/news/size-the-orbs-of-production) — Dated announcement for the new lineup, per-thread controls, shorter auto-pause window, and startup claims.
- [Amp Orbs manual](https://ampcode.com/manual/orbs) — Canonical current sizes, rates, defaults, billing behavior, and thread-creation controls.
- [Amp pricing](https://ampcode.com/pricing) — Current subscription allowances and general billing model.
- [Amp Owner's Manual](https://ampcode.com/manual) — Current agent-mode, project, and agent-thread contracts.
- [What Are Orbs](https://ampcode.com/what-are-orbs) — Current orb capability overview confirming the size table and adding the workspace-default sizing scope (checked 2026-08-16). Workflow and governance follow-ups live in [amp-orb-workflow-and-change-governance.md](amp-orb-workflow-and-change-governance.md).
- [“Orbs and Jellyware”](https://ampcode.com/podcast/season-02/episode-02) — Dated Amp practitioner report on orb adoption, exhaustive verification, staged production feedback, and fast-changing software.
