---
title: "Measuring the impact of AI on software engineering  – with Laura Tacho"
videoId: xHHlhoRC8W4
sourceUrl: "https://www.youtube.com/watch?v=xHHlhoRC8W4"
publishedAt: "2025-07-23T16:44:54Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Laura Tacho, CTO at developer-productivity company DX, about measuring AI-assisted software engineering without reducing impact to generated code or accepted suggestions ([00:00:00]-[00:00:50], [00:08:54]-[00:16:56]). Tacho's central argument is that organizations should establish a baseline, evaluate AI across utilization, impact, and cost, and run controlled experiments that include developer experience and delivery outcomes—not assume that faster code generation creates proportional business value ([00:11:03]-[00:14:10], [01:07:20]-[01:08:18]).

## Key Ideas

- Tacho says DX's AI measurement framework combines utilization, impact, and cost. She treats acceptance rate as a limited fit-for-purpose signal rather than proof of production use, velocity, innovation, or business impact ([00:12:05]-[00:16:56]).
- In a DX study covering more than 180 companies, developers reporting substantial time savings ranked stack-trace analysis and refactoring above mid-loop code generation. Tacho interprets this as evidence for training around less obvious use cases, not merely distributing licenses ([00:23:32]-[00:25:33]).
- Tacho argues that generated code transfers effort from typing to review, while stack-trace analysis can remove diagnostic toil; Orosz adds that expert judgment remains necessary to assess, revise, and integrate generated work ([00:26:36]-[00:28:43]).
- Tacho cites DORA research in which some developers reported lower satisfaction because AI accelerated coding they enjoyed while leaving meetings, administration, and other toil. She therefore proposes combining self-reported experience data with workflow and system metrics ([00:29:46]-[00:35:52]).
- In the Booking.com case study, Tacho reports that enablement efforts such as training and office hours accompanied 65% weekly-or-daily adoption. She cautions that non-use can reflect license availability or poor fit for novel, specialized work rather than resistance to AI ([00:17:47]-[00:23:32]).
- In the Workhuman customer case study, Tacho reports an organization-wide 11% increase in DX's developer-experience index and 15% higher velocity among daily or weekly AI users than non-users. These are segmented, vendor-reported customer findings from several months before the interview, not evidence that AI causes the same gains elsewhere ([00:42:30]-[00:46:33]).
- Tacho says DX data associates AI use with more and more-complex diffs, while the DORA study she presents forecasts reduced delivery stability as adoption rises. Her hypothesis is that larger batch sizes contribute, so speed measurements must remain paired with quality, stability, reliability, and maintainability ([00:51:42]-[00:54:49]).
- Tacho describes Indeed's rollout as hypothesis-driven: compare tools across cohorts and use cases, then test interventions such as preliminary AI review for distributed teams or AI-assisted migrations. Orosz and Tacho present these as company experiments and reported patterns, not universal outcomes ([00:58:58]-[01:05:12]).

## Practical Implications

- Establish baseline developer-experience and delivery measures, then evaluate a rollout through both system data and developer reports; historical repository or issue-tracker data can fill some gaps but cannot reconstruct earlier survey responses ([00:34:50]-[00:35:52], [00:44:35]-[00:45:30]).
- Segment adoption by license access, role, team, task, and use case before interpreting low usage or deciding how to allocate consumption-based budgets ([00:20:46]-[00:22:43], [00:46:33]-[00:47:36]).
- Preserve small batches and monitor quality and stability alongside throughput; generated volume or suggestion acceptance alone can reward more code without demonstrating better outcomes ([00:14:10]-[00:16:56], [00:52:47]-[00:54:49]).
- For repeatable migrations, Tacho suggests completing one representative conversion manually, supplying the before-and-after files to the model, and asking it to derive a prompt for structurally similar files; the resulting changes still require review and validation ([01:04:09]-[01:06:17]).
- Treat tool selection and use-case rollout as experiments with explicit hypotheses, comparison groups, and success measures rather than assuming every engineer or task benefits equally ([01:00:03]-[01:04:09], [01:07:20]-[01:08:18]).

## Questions and Tensions

- The interview reports DX research and DX customer case studies but does not provide sample construction, confidence intervals, causal controls, or underlying datasets; the Workhuman comparison in particular segments users from non-users and does not establish causation ([00:23:32]-[00:25:33], [00:42:30]-[00:46:33]).
- Tacho distinguishes DORA's reported findings from her own hypothesis that larger AI-generated batches explain weaker delivery outcomes; the transcript does not establish that mechanism ([00:52:47]-[00:54:49]).
- Tacho's observations that regulated organizations achieve strong results and that clean interfaces and AI-oriented documentation help agents come from conversations and field experience, not controlled comparisons presented in the interview ([00:35:52]-[00:38:52], [00:58:58]-[01:00:03]).
- Faster implementation may enable useful experimentation, but Tacho also warns that reduced production cost can create product thrashing and feature bloat unless teams validate customer value ([00:55:52]-[00:57:56]).
- The auto-captions repeatedly render Laura Tacho's surname as “Taco” and Gergely Orosz's first name as “Gary” or “Gay.” This summary follows the manifest title for Tacho and the podcast's known host context for Orosz; no substantive claim depends on the erroneous caption spellings ([00:00:00]-[00:00:50], [01:10:02]-[01:10:59]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=xHHlhoRC8W4)
- [transcript.md](./transcript.md)
