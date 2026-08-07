# Research: Amp Orb Sizing

**Date:** 2026-08-07
**Status:** complete
**Question:** What does Amp's “Size the Orbs of Production!” announcement establish, and how should it change durable guidance about remote agent execution?

## Recommendation

Treat agent mode and orb size as independent controls. Choose model capability from reasoning uncertainty, choose orb capacity from the repository's runtime demands, and choose worker count from task independence plus downstream integration capacity. Set the project default to the smallest size that handles ordinary setup and checks reliably, then override exceptional threads rather than overprovisioning every run.

## Key Findings

- Amp introduced five `a1` orb sizes from 1 CPU and 2 GB of memory through 16 CPUs and 32 GB, with a new 4-CPU, 8-GB `a1.medium` tier.
- A project owns the default orb size, while individual threads can use another size. The CLI supports `amp -ox "..." --orb-size <size>`, and an agent can be asked to create a thread in a smaller or larger orb.
- Current orbs are billed by the minute, cost nothing while paused, and auto-pause after five minutes without activity. The main pricing page separately packages orb-hour allowances with Amp subscriptions.
- Amp says the new `a1.medium` is 50% cheaper and a better fit for most projects than the former `a0.medium`. That is a dated vendor recommendation, not a workload benchmark; projects still need to validate setup time, peak memory, test parallelism, and build behavior on their own codebase.
- Amp also reports faster startup, especially when another team member recently created an orb in the same project. The announcement provides no benchmark boundary, so use this as dated product direction rather than a transferable performance estimate.
- Smaller fan-out workers can lower compute cost, but compute availability does not make overlapping mutation safe or create review capacity. Apply a parallel-work admission policy first, then size each admitted worker.

## Current Size And Billing Reference

Verified against the Orbs manual on 2026-08-07:

| Size | CPU | Memory | Disk | Individual/team rate |
| --- | ---: | ---: | ---: | ---: |
| `a1.tiny` | 1 | 2 GB | 40 GB | $0.08/hour |
| `a1.small` | 2 | 4 GB | 40 GB | $0.17/hour |
| `a1.medium` | 4 | 8 GB | 40 GB | $0.33/hour |
| `a1.large` | 8 | 16 GB | 40 GB | $0.66/hour |
| `a1.xxlarge` | 16 | 32 GB | 40 GB | $1.32/hour |

The Orbs manual currently names `a1.large` as the general project default and `a1.small` as the default for Megawatt personal projects. Enterprise workspace rates are 50% higher. These defaults and rates are volatile product details; recheck the manual before using them for a budget.

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

- **Incorporate:** `src/content/posts/amp-factory-era-case-study.md`. Orb sizing directly strengthens its existing task-sizing and cost-governance thesis, is confirmed by current canonical documentation, and adds the missing distinction between reasoning and machine capacity.
- **Research only:** `src/content/posts/parallel-agents-need-an-admission-policy.md`. The announcement's smaller fan-out example is compatible with the article, but it does not change the article's load-bearing constraint: downstream integration capacity. Product-specific execution controls already belong in the Amp case study.
- **Ignore for now:** the remaining public posts. None depends on Amp's orb lineup, rates, or per-thread size control.

## Evidence

### Size the Orbs of Production!

Amp's 2026-08-07 announcement introduced the `a1` lineup, described the new `a1.medium`, reduced inactivity auto-pause from 15 to 5 minutes, reported improved startup, and announced per-thread sizing through the web, the CLI's `--orb-size` flag, and agent-created threads. It also states that projects were automatically moved to equivalent new sizes and can change their default in project settings or through `amp projects` commands.

### Current Orbs Manual

The canonical manual confirms the five sizes, current rates and defaults, by-the-minute billing, no charge while paused, five-minute inactivity pause, project settings, the CLI override, and agent-directed smaller or larger orb creation. It also documents that each orb thread starts from a fresh clone, so size validation must include repository setup and required services rather than only the agent process.

### Current Pricing Page

The pricing page confirms subscription-level orb allowances but does not list the per-size metered rate table. Use the Orbs manual for current machine rates and the pricing page for plan allowances.

## Sources

- [Size the Orbs of Production!](https://ampcode.com/news/size-the-orbs-of-production) — Dated announcement for the new lineup, per-thread controls, shorter auto-pause window, and startup claims.
- [Amp Orbs manual](https://ampcode.com/manual/orbs) — Canonical current sizes, rates, defaults, billing behavior, and thread-creation controls.
- [Amp pricing](https://ampcode.com/pricing) — Current subscription allowances and general billing model.
- [Amp Owner's Manual](https://ampcode.com/manual) — Current agent-mode, project, and agent-thread contracts.
