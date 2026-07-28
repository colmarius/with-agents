---
title: "Does AI Actually Boost Developer Productivity? (100k Devs Study) - Yegor Denisov-Blanch, Stanford"
videoId: tbDDYKRFjhk
sourceUrl: "https://www.youtube.com/watch?v=tbDDYKRFjhk"
publishedAt: "2025-07-23T17:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Yegor Denisov-Blanch of Stanford presents results from a large-scale, longitudinal and cross-sectional study of software-engineering productivity, and argues that AI's effect depends on the work rather than following a universal uplift. [00:01:03]-[00:03:57] He reports that AI can increase delivered code while also creating rework, leaving a smaller net productivity gain that varies with task complexity, project maturity, language popularity, codebase size, and context length. [00:09:49]-[00:17:09]

## Key Ideas

- Denisov-Blanch argues that commit and pull-request counts ignore task size, greenfield experiments underrepresent existing-codebase work, and self-reported productivity surveys do not reliably measure output. [00:04:51]-[00:06:49]
- Denisov-Blanch describes a model that analyzes source-code changes in Git and estimates delivered functionality from each commit, replacing a slower expert-panel evaluation process. [00:06:49]-[00:08:58]
- Denisov-Blanch reports an observed gross productivity increase of roughly 30–40% from AI-assisted coding, reduced to an average net gain of roughly 15–20% after accounting for rework. [00:09:49]-[00:10:36]
- Denisov-Blanch reports larger gains for simpler greenfield tasks and smaller, sometimes negative, gains for high-complexity work; he says the task-complexity and project-maturity comparison covers 136 teams at 27 companies. [00:11:38]-[00:14:14]
- Denisov-Blanch says less-popular programming languages, larger codebases, and longer contexts can reduce AI's usefulness, while noting that the codebase-size relationship is more illustrative than empirically established. [00:14:14]-[00:17:09]

## Practical Implications

- Editorial: Evaluate coding-agent pilots by delivered functionality and rework, not only commit, pull-request, or code-volume activity.
- Editorial: Segment results by task complexity, project maturity, language, and codebase size instead of treating one average uplift as a universal forecast.
- Editorial: Preserve stronger review and validation for complex brownfield changes, where this study reports the narrowest gains and some productivity decreases.

## Questions and Tensions

- Editorial: How does the productivity model control for differences in developer role, task assignment, team process, and self-selection into AI-tool usage?
- Denisov-Blanch says the causes of the observed productivity decreases are not yet clear. [00:12:32]
- Editorial: What independent replication would be needed before applying the reported averages to a specific organization or coding-agent workflow?

## Source

- [YouTube video](https://www.youtube.com/watch?v=tbDDYKRFjhk)
- [transcript.md](./transcript.md)
