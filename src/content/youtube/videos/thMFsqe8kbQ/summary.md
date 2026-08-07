---
title: "LLMs are killing Agent Harness"
videoId: thMFsqe8kbQ
sourceUrl: "https://www.youtube.com/watch?v=thMFsqe8kbQ"
publishedAt: "2026-05-20T12:06:58Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Mayank Gupta, host and owner of the source channel, interviews Thorsten Ball, an Amp co-creator, about coding-agent harnesses, changing software-engineering workflows, and Amp's preference for adapting to frontier models. Ball grounds the argument in his work on Cody at Sourcegraph, Zed's tab completion, and Amp.

The recording presents Ball's product judgments and forecasts, not controlled evidence that specialized tools, existing software-delivery systems, or established engineering roles are generally obsolete. His model-performance examples and Amp decisions are first-party reports.

## Key Ideas

- Ball says Amp emerged after Claude's tool calling outperformed the multi-model proposal-and-apply scaffolding used by earlier assistants. He frames Amp's initial choice as giving one model tokens and tools while removing intermediary complexity ([00:08:16]-[00:10:25]).
- Ball argues software engineers still need systems judgment, debugging, maintenance, product knowledge, and customer understanding even as manually typing code becomes a smaller part of the job ([00:22:27]-[00:28:41]).
- Ball compares a harness to scaffolding that should recede as models improve. He says newer models can often use shell commands and short scripts instead of specialized editing or language-server tools, while acknowledging that agents still need some interface to the world ([00:36:43]-[00:43:42]).
- Ball argues the larger design problem is shifting from individual tool calls to where agents run, how organizations assign and preserve their work, and how workflows built for scarce human labor change when many agents are available ([00:43:42]-[00:49:24]).
- Ball says AI products provide weak feedback when users omit essential intent. For novel systems, developers still need to supply domain logic, runtime constraints, and an incremental engineering path that the codebase or model training does not contain ([00:53:21]-[01:03:53]).
- Ball says broad coding-agent evaluations remain difficult because correctness and quality vary across repositories. He treats regular expert use as complementary to numerical evaluations rather than claiming that evaluations are unnecessary ([01:03:53]-[01:06:00]).
- Ball says Amp expects to keep making breaking changes because model advances repeatedly invalidate product assumptions; this is a stated product strategy for frontier-seeking users, not evidence that constant breakage suits every customer ([01:12:15]-[01:18:28]).

## Practical Implications

- Re-test harness features when model capabilities change, and retain complexity only when measured failures justify it.
- Treat agent deployment, work preservation, observability, and validation as system-design concerns rather than assuming a better edit tool solves coordination.
- Put novel domain constraints and incremental delivery choices into durable project context; models cannot recover requirements that are absent from both the repository and the prompt.
- Combine repeatable evaluations with close inspection of real repository work, especially where several solutions can pass tests but differ in maintainability.

## Questions and Tensions

- The interview does not benchmark simple shell access against specialized tools across models, repositories, or security boundaries.
- Ball's thin-harness argument coexists with a need for execution controls, context, persistence, and evaluation; the recording does not define where those capabilities stop being “harness.”
- Forecasts about GitHub, CI, enterprise adoption, and the future supply of software are directional claims without longitudinal evidence here.
- Amp's willingness to break workflows may support frontier experimentation while imposing migration costs on teams that need stability and governance.

## Source

- [YouTube video](https://www.youtube.com/watch?v=thMFsqe8kbQ)
- [transcript.md](./transcript.md)
