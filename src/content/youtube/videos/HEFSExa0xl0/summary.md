---
title: "Teaching Coding Agents to do Spreadsheets - Nuno Campos, Witan Labs"
videoId: HEFSExa0xl0
sourceUrl: "https://www.youtube.com/watch?v=HEFSExa0xl0"
publishedAt: "2026-07-08T09:03:25Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Nuno Campos of Witan Labs describes four months of work to make coding agents effective at spreadsheet tasks. He reports moving an internal financial-analysis benchmark from about 50% to 92% accuracy, while emphasizing that spreadsheets hide formulas, inputs, layout, and semantic ambiguity behind a visual interface that language models do not directly perceive ([00:00:15]-[00:02:24]).

Campos presents a persistent Node.js REPL as the largest improvement: it replaced roughly 15 separate tools with composable JavaScript functions while leaving the spreadsheet implementation in C#. He pairs that interface with high-fidelity formula and rendering engines, domain guidance, trace inspection, and deterministic evaluation where possible ([00:04:21]-[00:15:49]).

## Key Ideas

- An early three-agent architecture moved some execution errors into planning, but Campos says its one-time discovery phase, rigid workflow, and weak context flow made it a dead end ([00:01:20]-[00:02:24]).
- SQL, XML, CSV or TSV, and HTML each exposed useful properties but did not provide a sufficient stand-alone spreadsheet representation; partial tabular views and rendered images survived as components of the later system ([00:02:24]-[00:04:21]).
- The team replaced around 15 sequential tools with one Node.js REPL whose JavaScript functions could be composed in a single call, while C# handled the underlying spreadsheet files ([00:04:21]-[00:06:08]).
- Persistent REPL state let agents reuse variables across calls and interleave shorter scripts with reasoning, while TypeScript definitions exposed new spreadsheet methods without expanding the tool schema ([00:06:08]-[00:08:02]).
- Campos reports benchmark accuracy moving from 50% before the REPL to 74% after it and eventually 92% after further search, formula-tracing, prompt, and bug fixes; he also reports that the revised approach eliminated five-minute task timeouts in that evaluation ([00:08:02]-[00:09:56]).
- Formula calculation and rendered spreadsheet images close the verification loop, but Campos warns that incomplete engines can make results worse by rejecting formulas that Excel would evaluate correctly ([00:09:56]-[00:11:50]).
- Domain reminders remained useful across interface changes, while deterministic black-box comparisons reduced ambiguity from relying only on an LLM judge ([00:12:45]-[00:14:51]).

## Practical Implications

- If an agent needs many sequential or parallel tool calls, test whether a real scripting interface can let it compose those operations and retain intermediate state ([00:04:21]-[00:08:02], [00:15:49]).
- Build domain-specific execution and rendering feedback when existing compilers, tests, or linters do not cover the task, and validate that those engines match the production system closely enough to be trusted ([00:08:54]-[00:11:50], [00:16:39]).
- Treat traces, prompts, skills, tool implementations, and evaluation infrastructure as possible failure sources before attributing every poor result to model reasoning ([00:13:49]-[00:15:49], [00:18:28]).

## Questions and Tensions

- The reported 50%-to-92% improvement comes from an internal financial-analysis benchmark; the talk does not describe its task count, held-out policy, or external reproducibility ([00:00:15], [00:08:02]-[00:08:54]).
- High-fidelity calculation and rendering improve verification, but building and maintaining those engines can be substantial domain infrastructure rather than a lightweight interface change ([00:09:56]-[00:11:50], [00:16:39]).
- Campos calls the REPL the best current interface because models are strong at coding, while expecting that better computer use could change that choice; the verification loop is his more durable design claim ([00:10:46]-[00:11:50], [00:16:39]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=HEFSExa0xl0)
- [transcript.md](./transcript.md)
