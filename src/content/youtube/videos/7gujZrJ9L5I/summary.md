---
title: "How Google DeepMind Runs Agents at Scale — KP Sawhney & Ian Ballantyne, Google DeepMind"
videoId: 7gujZrJ9L5I
sourceUrl: "https://www.youtube.com/watch?v=7gujZrJ9L5I"
publishedAt: "2026-05-24T18:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Ian Ballantyne, a developer relations engineer at Google DeepMind, and KP Sawhney, a software engineer in DeepMind's AI platform team, pair an Antigravity demonstration with a discussion of internal agent infrastructure. Ballantyne shows a coding agent planning, editing, controlling a browser, inspecting the DOM, and producing review artifacts; Sawhney describes work on Deep Research and on adapting the same harness beyond coding ([00:00:14]-[00:05:06]).

Their discussion treats scale as an operational problem involving token quotas, model selection, skill curation, observability, evaluation environments, and automated review. Several mechanisms remain internal or exploratory, so the panel provides implementation directions and constraints rather than a measured comparison of agent architectures ([00:05:58]-[00:14:42], [00:17:47]-[00:24:00]).

## Key Ideas

- Ballantyne demonstrates Antigravity's agent manager running a task through an implementation plan, editable human feedback, browser control, DOM inspection, and a final report with visual evidence ([00:00:14]-[00:04:03]).
- Sawhney says his focus moved from the Deep Research agent toward strengthening the Antigravity harness for Google's monorepo and other tasks; he proposes shared files as an alternative to passing large text blobs between pipeline stages ([00:04:03]-[00:05:06]).
- He describes a large internal library of expert-contributed skills while warning that skill sprawl requires curation so useful versions survive ([00:05:58]).
- For agent use at Google scale, Sawhney identifies per-user and per-team token quotas as a central constraint and suggests mixing local or lower-quota-cost models with more advanced models for selected components ([00:07:52]-[00:08:55]).
- The panel describes custom internal observability that can drill from an agent query into model requests, plus a trajectory store for locating loops or other failures in long coding traces ([00:12:37]-[00:13:42]).
- Sawhney says Deep Research may move toward collaborators sharing a workspace, reducing repeated context transfer and enabling supporting artifacts such as documents or infographics ([00:14:42]-[00:15:44]).
- Ballantyne presents efficient agent-to-agent communication and human supervision of parallel work as a future direction, while noting that the demonstrated system does not expose every subagent relationship clearly ([00:15:44]-[00:16:44]).
- Sawhney favors expert-authored skills and guarded CLI interactions for his own work, while treating MCP's authentication support as useful; he says skill-specific evaluation still needs datasets and sandboxed environments ([00:17:47]-[00:19:53]).
- Ballantyne expects harnesses to move work between subscription, lower-tier, and local models when quota runs out rather than leaving a task silently blocked ([00:20:56]-[00:21:59]).
- The panel describes language-specific review models and product-level review criteria as part of handling more agent-generated code ([00:21:59]-[00:24:00]).

## Practical Implications

- Track token and compute use per user or team, and define explicit model fallbacks so a long task does not stop silently when one quota is exhausted ([00:07:52]-[00:12:37], [00:20:56]-[00:21:59]).
- Give long agent runs hierarchical traces and trajectory-level diagnostics that let operators locate loops, model requests, and divergence without reading an undifferentiated log ([00:12:37]-[00:13:42]).
- Curate shared skills and require skill authors to supply task-specific evaluation cases rather than treating a growing skill directory as self-validating ([00:05:58], [00:18:50]-[00:19:53]).
- Separate repeatable workspace collaboration from repeated context transfer when a research or coding pipeline produces large intermediate artifacts ([00:04:03]-[00:05:06], [00:14:42]-[00:15:44]).

## Questions and Tensions

- The live demonstration encountered service errors and discovered an existing implementation before rewriting it, so it illustrates workflow features rather than a controlled measure of task quality or reliability ([00:01:17]-[00:04:03], [00:07:00]).
- Sawhney says quota control for internal power users is currently blunt, and the panel leaves future pricing and fair allocation for token-hungry agent systems unresolved ([00:10:55]-[00:12:37]).
- The observability and review systems described are custom internal tools, while release details and several implementation specifics are withheld or still being explored ([00:05:06], [00:12:37]-[00:15:44]).
- Sawhney says evaluating skills requires new datasets and sandboxed environments, but places much of the initial testing burden on skill authors and notes that agents may help design those tests ([00:18:50]-[00:19:53]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=7gujZrJ9L5I)
- [transcript.md](./transcript.md)
