---
title: "Fighting AI with AI — Lawrence Jones, Incident"
videoId: L2r6vLlLgs8
sourceUrl: "https://www.youtube.com/watch?v=L2r6vLlLgs8"
publishedAt: "2026-05-17T16:30:07Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Lawrence Jones, a founding engineer at incident.io, describes internal tools for understanding and changing the company's AI SRE product. The product can run hundreds of telemetry queries and cross-reference logs, metrics, traces, historical incidents, and code, creating investigation traces too large for a person to evaluate routinely without assistance ([00:00:07]-[00:03:01]).

Jones's workflow makes those systems legible to coding agents in three layers: an eval CLI and runbook for controlled prompt changes, downloadable filesystem representations of debugging UIs and traces, and repeatable multi-agent analysis pipelines for batches of production investigations ([00:03:01]-[00:04:02], [00:06:45]-[00:08:39], [00:10:37]-[00:16:09]).

## Key Ideas

- Jones treats evals as AI unit tests stored in YAML beside incident.io's Go prompts, with input data, prompt output, and grading criteria used before a prompt change merges ([00:04:02]-[00:04:50]).
- He says realistic production evals can contain nearly an entire incident, making the YAML difficult for people to maintain and too large for coding-agent context windows ([00:05:46]-[00:06:45]).
- The team's eval CLI lets an agent list, edit, replace, and add cases; its runbook asks the agent to reproduce a failure, modify the prompt, rerun the wider suite, and consolidate the prompt after repeated changes ([00:06:45]-[00:08:39]).
- Jones says a customer-facing failure can pass through many agents, prompts, and tool calls, so identifying where an incorrect root-cause analysis originated is a separate problem from fixing a known prompt ([00:08:39]-[00:10:37]).
- To expose that hierarchy, incident.io lets developers download UI data and traces as a self-documenting filesystem, place it with the code in a sandboxed Claude Code session, and ask the agent to locate the relevant implementation point ([00:10:37]-[00:12:28]).
- A daily backtest can roll many investigations into an accuracy number, but Jones says the aggregate does not explain why performance changed or what should improve for a customer ([00:12:28]).
- The team's Scrapbook repository directs about 25 parallel agents to analyze individual investigations, clusters recurring failure cohorts, and persists intermediate analysis in files so the pipeline can resume and connect findings to the codebase ([00:13:17]-[00:15:06]).
- Jones closes the loop by asking a coding agent to implement a suggested change, proving it through the eval red-green process, and then deploying it for production observation ([00:15:06]-[00:16:09]).

## Practical Implications

- Put a narrow machine-oriented CLI in front of large eval fixtures so agents can inspect and modify one case without loading the entire dataset into context ([00:05:46]-[00:07:47]).
- Preserve a red-green prompt workflow that first reproduces the failure, then checks the full suite and simplifies accumulated prompt changes before merge ([00:06:45]-[00:08:39]).
- Export visual debugging state and nested traces into bulk, searchable text while retaining their hierarchy and pairing them with the relevant source code ([00:10:37]-[00:12:28]).
- For repeated analysis, separate per-entity work from cohort synthesis and persist intermediate files so interrupted or expensive runs can resume ([00:13:17]-[00:15:06]).
- Treat the agent's diagnosis and patch as inputs to eval and production observation, not as proof that the underlying incident analysis is correct ([00:15:06]-[00:16:09]).

## Questions and Tensions

- The eval examples define grading criteria but do not establish how those graders are validated, how often they disagree with operators, or which failure classes the suite misses ([00:04:02]-[00:05:46]).
- Jones reports hundreds or thousands of prompts behind an investigation and an example aggregate of 86% accurate root-cause analysis, but does not define that metric, its sample, or its uncertainty ([00:01:59]-[00:03:01], [00:12:28]).
- Downloading complete customer investigations and combining them with a codebase gives an agent rich context, while the talk does not detail redaction, access control, retention, prompt-injection defenses, or sandbox isolation ([00:10:37]-[00:12:28]).
- The roughly 25-agent analysis pipeline is presented as useful and resumable without comparisons of cost, latency, clustering quality, or the consistency of agent diagnoses ([00:13:17]-[00:15:06]).
- The workflow can carry a diagnosis into a code change and production test, but the talk leaves the human review and rollback requirements for incorrect diagnoses unspecified ([00:15:06]-[00:16:09]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=L2r6vLlLgs8)
- [transcript.md](./transcript.md)
