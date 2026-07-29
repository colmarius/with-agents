---
title: "DeepSWE: A Contamination-Resistant Coding Benchmark — James Shi, Datacurve"
videoId: Yk87oUPVaxU
sourceUrl: "https://www.youtube.com/watch?v=Yk87oUPVaxU"
publishedAt: "2026-07-26T18:10:56Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

James Shi, a founding engineer at Datacurve, presents DeepSWE as a long-horizon software-engineering benchmark built from 113 original tasks across 91 repositories and five programming languages. He frames original task authorship, reduced repository concentration, and verifier isolation as defenses against contamination, solution leakage, and implementation-specific grading ([00:00:01]-[00:03:08], [00:12:26]-[00:15:37]).

Shi also reports qualitative differences among model rollouts and argues that benchmark prompts and harnesses can materially shape observed agent behavior, including whether models test their own work ([00:04:11]-[00:08:17], [00:13:29]-[00:14:32]).

## Key Ideas

- DeepSWE uses 113 newly authored tasks, with a median of one task per repository, instead of mining closed public pull requests as SWE-bench Pro does ([00:00:01]-[00:02:05]).
- Shi says public pull-request histories can expose solution patches and implementation-specific tests, making contamination and false negatives central benchmark-design risks ([00:02:05]-[00:03:08], [00:11:28]-[00:12:26]).
- In Datacurve's rollout analysis, Shi reports that Claude sometimes dropped one requirement from multipart prompts, while GPT was least likely to miss requirements and tended to follow repository contracts literally ([00:04:11]-[00:06:18]).
- Shi reports that stronger models more often tested their own work, but an instruction saying tests were already handled could suppress that behavior even in stronger models ([00:07:13]-[00:08:17]).
- DeepSWE's authors aim for terse, high-level prompts while retaining long-horizon work; Shi reports larger solutions, more touched files, and more output tokens than SWE-bench Pro ([00:08:17]-[00:11:28]).
- The benchmark's verifiers emphasize observable behavior over private helper names or one prescribed implementation, and DeepSWE 1.1 further separates verifier and agent runtimes and removes extra Git references ([00:11:28]-[00:15:37]).

## Practical Implications

- Benchmark users should inspect contamination controls, repository histories, and whether verifiers reward behavior rather than a single golden implementation ([00:02:05]-[00:03:08], [00:11:28]-[00:12:26]).
- Evaluations should treat prompt wording and harness choice as experimental variables because Shi's examples show that both can change testing and environment-exploration behavior ([00:05:15]-[00:08:17], [00:13:29]-[00:14:32]).
- Long-horizon benchmark difficulty should be assessed through task scope and resulting work, not prompt length alone ([00:09:22]-[00:11:28]).

## Questions and Tensions

- Newly authored tasks reduce dependence on public solutions, but their realism depends on recruiting contributors and maintainers who understand each repository's conventions ([00:08:17]-[00:09:22]).
- DeepSWE's current task mix underrepresents bug localization and refactoring, even though Shi identifies both as representative engineering work ([00:13:29]-[00:14:32]).
- Hybrid verification or LLM-as-a-judge could support more open-ended prompts, but Shi presents that as future work rather than a solved replacement for deterministic verifiers ([00:14:32]-[00:16:42]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=Yk87oUPVaxU)
- [transcript.md](./transcript.md)
