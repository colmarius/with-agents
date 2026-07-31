# Research: Coding-agent outcome measurement evidence

**Date:** 2026-07-31
**Status:** complete
**Question:** Does newer 2025–2026 evidence make `Measure Outcomes, Not Agent
Activity` obsolete, and what is the smallest evidence-safe refresh?

## Recommendation

Refresh the existing article rather than replace it. Its thesis remains current,
but its evidence hierarchy overweights one conference-presented observational
estimate. Use controlled evidence to establish that measured task and throughput
effects vary, current enterprise evidence to make review displacement explicit,
and limited qualitative and skill evidence only for pilot guardrails.

## Evidence Matrix

| Source | Design and result | Use in the article | Main limit |
| --- | --- | --- | --- |
| Cui et al., *Management Science* (2026) | Randomized workplace access at Microsoft, Accenture, and an anonymous Fortune 100 company; 4,867 developers; pooled completed-task increase 26.08%, SE 10.3%. | `incorporate`: positive controlled evidence at the completed-work layer. | 2022–2023 completion-era Copilot; noisy individual experiments; limited take-up/separation; Microsoft authors and vendor participation; no customer, review, or delayed-quality outcome. |
| Google enterprise RCT | 96 Google engineers on one standardized task in summer 2024; 96 versus 114 minutes; best adjusted estimate about 21% less time, but wide uncertainty and \(p=.086\). | `research-only`: confirms positive bounded-task evidence but is unnecessary in the concise body. | One short task, internal tools, volunteer population, Google authors, no quality or system-level outcome. |
| METR early-2025 RCT | 16 experienced open-source developers, 246 self-selected real tasks in familiar repositories; AI-allowed tasks took 19% longer, CI +2% to +39%. | `incorporate`: bounded counterweight and support for task/population segmentation. | Small selected population and early-2025 tools; not a universal current slowdown. |
| METR February 2026 update | 57 developers, 143 repositories, 800+ tasks; later point estimates favored speedups, but participant refusal, 30–50% task withholding, pay changes, concurrency, and outcome ambiguity made the signal unreliable. | `incorporate`: measurement-design caution, not a current uplift estimate. | Authors explicitly reject a clean causal interpretation. |
| Enterprise “2×” mandate preprint (July 2026) | One AI-forward company, 802 developers and 196,212 PRs; per-active-developer throughput reached 2.09× and the preferred within-developer estimate was about 1.46×. PR volume grew 3.1×, reviewer pool 1.5×, per-reviewer load 2×; human review fell 89%→68%, automated review rose ~19%→84%, substantive human review fell ~39%→21%. | `incorporate`: quantified review displacement and the limits of throughput targets. | Preprint; single favorable firm; nonrandom adoption; endogenous use; public PR target; coarse short-horizon quality proxies; model effects unidentifiable. |
| DORA March 2026 | Thematic analysis of 1,110 open-ended Q3 2025 responses from Google engineers found verification burden, review displacement, production-readiness friction, and skill concerns. | `incorporate`: bounded qualitative corroboration of costs to instrument. | Qualitative, potentially prompted, Google program studying Google engineers; no causal effect size. |
| Anthropic skill-formation RCT | 52 mostly junior Python developers learning Trio; AI group scored 50% versus 67% on an immediate quiz, \(d=.738\), \(p=.01\); task-time difference was not significant. | `incorporate`: one bounded comprehension guardrail in the pilot. | Small, short, vendor-affiliated experiment; no durable-skill result; interaction clusters exploratory. |
| Vella and Blincoe longitudinal preprint | 95 matched continuing users across six months; 84% perceived productivity at both waves while negative developer experience on at least one dimension rose 14%→27%. | `research-only`: supports future DevEx work but is not needed for this refresh. | Self-report, survivor/recall bias, and late-2024/early-2025 tools. |

## Synthesis

The studies estimate different treatments and outcome layers, so their signs do
not identify one universal productivity effect. Controlled studies show that AI
can either accelerate or slow bounded work depending on population, task, tool,
and period. The strongest current enterprise evidence shows that large throughput
gains can coexist with review displacement. None establishes a universal customer-
value uplift.

The existing playlist talks remain useful operating evidence, especially for
adoption denominators, presenter-reported throughput, and intermediate review
signals. More presenter reports would not close the article's gaps in causal
identification, independent evidence, delayed quality, reviewer burden, or skill
retention.

Two independent read-only reviewers and Oracle agreed that the article is under-
sourced rather than obsolete. Oracle recommended an in-place, roughly length-
neutral refresh; one retained but clearly demoted use of the Denisov-Blanch ranges;
review displacement as a first-class outcome; a tighter pilot contract; and no
companion article now.

## Sources

- [Cui et al., *The Effects of Generative AI on High-Skilled Work*](https://doi.org/10.1287/mnsc.2025.00535) — Multi-firm randomized workplace evidence.
- [Google enterprise RCT](https://arxiv.org/html/2410.12944) — Bounded enterprise-task estimate and limitations.
- [METR early-2025 study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — Randomized slowdown in a narrow population.
- [METR 2026 design update](https://metr.org/blog/2026-02-24-uplift-update/) — Selection, concurrency, and estimand failures.
- [Enterprise “2×” mandate preprint](https://arxiv.org/html/2607.01904) — Throughput and review-displacement case.
- [DORA, “Balancing AI tensions”](https://dora.dev/insights/balancing-ai-tensions/) — Qualitative verification and production-readiness evidence.
- [Anthropic skill-formation study](https://www.anthropic.com/research/AI-assistance-coding-skills) — Short-term comprehension experiment.
- [Vella and Blincoe longitudinal study](https://arxiv.org/html/2605.23135v1) — Perceived productivity and developer-experience drift.

## Open Questions

None blocks the refresh. The enterprise mandate study remains a July 2026 preprint,
and every use must retain its single-company, observational, and short-horizon
quality limits.
