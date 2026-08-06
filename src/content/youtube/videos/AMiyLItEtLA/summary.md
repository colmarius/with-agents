---
title: "fighting slop with slop — Vaibhav Gupta, Boundary"
videoId: AMiyLItEtLA
sourceUrl: "https://www.youtube.com/watch?v=AMiyLItEtLA"
publishedAt: "2026-07-31T01:11:30Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Vaibhav Gupta of Boundary presents his team's work on BAML as an argument that
teams can reduce line-by-line review only by investing in durable architecture,
high-quality design writing, executable invariants, behavioral traces, and
agent-oriented tools.

Editorial: The talk is a first-person product and engineering-practice account;
its broad claims about review and velocity are not supported by comparative
quality, defect, cost, or maintenance data in the presentation.

## Key Ideas

- Gupta says his team builds a programming language without traditional code review, requires parallel work, and does not standardize which AI tool engineers use; he defines slop as code that is not read. [00:00:01]-[00:01:41]
- The team keeps a small, durable `architecture.md`, treats design writing as non-disposable, requires people to read new design documents, and uses dependency visualization plus automated checks to enforce architectural boundaries. [00:01:41]-[00:04:20]
- Agents continuously create BAML programs, inspect execution transcripts, surface correctness and tool-efficiency problems, and propose fixes; humans filter hallucinated or low-quality findings, while A/B tests can compare errors, tool calls, and outcomes. [00:04:20]-[00:06:48]
- Gupta proposes replacing exhaustive code reading with navigable architecture views, linked source locations, execution traces, and agent-readable observability that let people choose where deeper inspection is warranted. [00:09:10]-[00:11:39]
- He argues that agent-first tools should collapse common discovery and execution workflows into typed, deterministic operations, including semantic code lookup and directly runnable functions. [00:11:39]-[00:14:09]
- The BAML demonstration uses inferred error effects and cross-language typed calls to move guarantees into the compiler and make functions available from existing host languages rather than requiring a complete rewrite. [00:15:01]-[00:19:22]
- Gupta says process and foundational tooling must evolve for agent-speed work and reports that his team built a partial C compiler in BAML, but he does not provide an independent correctness or maintenance evaluation of that example. [00:19:22]-[00:20:15]

## Practical Implications

- Keep cross-agent guidance small and durable; enforce important architecture and dependency rules with executable checks rather than mutable prompt prose alone.
- Require design artifacts to earn human attention, and use versioning and visible notifications so generated planning does not simply become a second stream of unreviewed output.
- Instrument agent workflows so teams can inspect execution behavior, tool usage, and failures, then use humans to adjudicate findings before automated fixes are accepted.
- Move repeated discovery, execution, and safety constraints into typed tools and compilers where deterministic guarantees are possible.

## Questions and Tensions

- Editorial: Eliminating traditional code review shifts assurance into design review, architecture checks, tests, traces, compilers, and issue triage; the talk does not measure whether those controls catch equivalent defects.
- Editorial: Agents reviewing agent traces can increase coverage while sharing model blind spots, so human filtering and deterministic evaluation remain material dependencies.
- Editorial: A new language can encode stronger agent-oriented guarantees but also creates adoption, interoperability, tooling, migration, and long-term maintenance obligations.

## Source

- [fighting slop with slop — Vaibhav Gupta, Boundary](https://www.youtube.com/watch?v=AMiyLItEtLA)
- [transcript.md](./transcript.md)
