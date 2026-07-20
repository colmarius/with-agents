---
title: "Il software si mangerà il mondo (ancora di più)"
videoId: JR0agWj8HMY
sourceUrl: "https://www.youtube.com/watch?v=JR0agWj8HMY"
publishedAt: "2026-01-23T19:09:50Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo argues that coding agents have permanently lowered the cost of producing software. Drawing mainly on his own Redis, open-source, and Flux.2 work, he predicts better software quality, severe pressure on small software vendors, stronger mid-sized companies, and broader expansion of software businesses into other industries.

## Key Ideas

- Sanfilippo rejects the scenario in which coding agents produce work that junior developers merely clean up. In his experience, well-directed agents reach problems too complex for that division of labor, while a poorly directed agent amplifies the judgment of the programmer supervising it. [00:03:41]-[00:06:03]
- He expects agent-assisted development to remove some subcontracting layers and make neglected defects cheaper to address. He estimates that software productivity has risen by roughly an order of magnitude, but presents that figure as a broad personal estimate rather than a measured study. [00:06:03]-[00:09:42]
- His evidence comes from using agents on Redis maintenance, pending open-source work, fork realignment, and a specialized Flux.2 inference implementation. He emphasizes that image-model work still requires difficult optimization, instrumentation, floating-point comparison, and detection of subtle errors that can leave plausible-looking output. [00:11:39]-[00:14:59]
- In that workflow, he says Claude Code gets him through roughly 80–90% of the work, while Codex with GPT-5.2 supplies occasional solutions to harder problems despite being less predictable. He also argues that a junior developer who learns to direct models and understand the process can exceed their previous output. [00:14:59]-[00:17:15]
- He predicts pressure on small software companies because individuals can cheaply recreate basic utility features and then turn prototypes into low-priced competitors. His Grammarly example estimates half a day for a personal minimum and weeks rather than a year for a presentable product; these are illustrative projections, not reported project measurements. [00:18:11]-[00:22:46]
- Programmers may encounter this mechanization before more regulated professions, he argues, because software work has weaker institutional barriers. Larger and mid-sized companies will still need people who connect technical possibilities to products customers value. [00:23:58]-[00:25:07]
- He expects some small or mid-sized software firms to shrink into profitable one- or two-person businesses, while established mid-sized companies may become more competitive—provided dominant AI suppliers do not make model dependence prohibitively expensive. [00:25:07]-[00:26:20]
- Sanfilippo doubts that LLM capability will remain permanently concentrated. Because neural architectures reuse flexible components such as feed-forward layers, attention, convolutions, and Transformers, he expects scale and accumulated implementation knowledge eventually to make models more commodity-like. [00:26:20]-[00:27:34]
- His larger forecast is that cheaper, semi-automated development will let software companies enter more non-software markets and may let challengers reopen product categories neglected by dominant platforms. For open-source AI policies, his stated preference is to judge pull requests by quality and usefulness rather than inferred human or machine origin. [00:28:50]-[00:32:12]

## Practical Implications

- Measure agent productivity with completed, reviewed outcomes and defect rates rather than generated-code volume or anecdotal speed alone.
- Keep senior technical judgment close to agent work that involves architecture, numerical correctness, optimization, or subtle output differences.
- Expect lower implementation cost to increase competition; product insight, distribution, support, trust, and maintenance remain differentiators after code becomes cheaper.
- Write contribution policies around testable quality, reviewability, provenance, and risk instead of relying on stylistic detection of AI-generated code.

## Questions and Tensions

- The economic argument is a forecast based largely on personal engineering experience; the video provides no labor-market, firm-formation, pricing, or software-quality dataset.
- The order-of-magnitude productivity estimate and prototype timelines are not controlled comparisons, and they do not account systematically for review, maintenance, support, security, or failed attempts.
- Lower entry costs could weaken incumbent utility vendors, but they can also create crowded markets in which discovery, reliability, and long-term maintenance become more—not less—important.
- The commodity-model forecast rests on an architectural analogy and a scaling argument. It does not establish future training costs, access to data and compute, regulation, or the competitive behavior of model providers.
- If junior developers are not primarily repairing agent output, the account leaves open how they gain the expertise needed to supervise increasingly complex agent-generated systems.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=JR0agWj8HMY)
- [transcript.md](./transcript.md)
