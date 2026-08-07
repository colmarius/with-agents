---
title: "How AI will change software engineering – with Martin Fowler"
videoId: CQmI4XKTa0U
sourceUrl: "https://www.youtube.com/watch?v=CQmI4XKTa0U"
publishedAt: "2025-11-19T16:21:07Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Martin Fowler, Thoughtworks chief scientist, author, and Agile Manifesto co-author. Fowler's central argument is that LLMs introduce a shift from deterministic to non-deterministic software construction, so teams should use their speed to tighten learning loops rather than abandon review, testing, and incremental delivery ([00:00:00]-[00:01:52], [00:16:45]-[00:24:55], [01:25:36]-[01:28:34]).

## Key Ideas

- Fowler compares AI's potential impact with the move from assembly to high-level languages, but says the more important change is non-deterministic behavior rather than merely a higher abstraction level ([00:16:45]-[00:24:55]).
- He identifies rapid prototypes and disposable explorations as strong uses, and reports that Thoughtworks practitioners found LLM-assisted analysis of legacy systems effective enough to recommend investigating it for legacy work ([00:25:58]-[00:29:10]).
- Fowler says production work should proceed in thin slices, with each slice reviewed as if it came from a highly productive but untrustworthy collaborator. He presents the observed speedup as worthwhile but smaller than advocates claim ([00:29:10]-[00:31:03]).
- He defines vibe coding as disregarding generated code. In his view, it suits throwaway work but removes the feedback needed to understand, modify, and evolve durable software ([00:33:09]-[00:36:20]).
- Fowler favors small specifications, tests, production feedback where possible, and a human verification loop over writing a large specification before inspecting code. He sees potential in domain-specific language and ubiquitous-language techniques for making human intent more precise ([00:46:20]-[00:50:29]).
- He expects refactoring to become more important if AI produces more working but questionable-quality code, while saying current LLMs cannot reliably refactor by themselves. He is interested in using an LLM to initiate deterministic transformations that remain inspectable ([01:03:53]-[01:06:58]).
- Fowler argues that AI should accelerate smaller, more frequent delivery slices rather than enlarge each batch; Orosz supports the feedback-loop point with an account of an Anthropic engineer producing and testing 20 interactive prototypes in two days ([01:24:33]-[01:28:34]).
- For junior engineers, Fowler recommends experimenting with AI while prioritizing experienced mentors, probing generated advice for sources and context, and retaining the communication and collaboration skills needed to determine what software should do ([01:34:51]-[01:42:37]).

## Practical Implications

- Separate disposable exploration from durable software: inspect and understand generated implementation before accepting code that must be maintained ([00:33:09]-[00:41:09]).
- Keep AI-assisted changes small, test each accepted behavior, review the output directly, and independently verify claims that tools or tests succeeded ([00:29:10]-[00:31:03], [00:41:09]-[00:45:15]).
- Prefer established deterministic refactoring tools for known transformations; use LLMs as a possible interface or starting point rather than assuming they can safely perform broad refactors unaided ([00:31:03]-[00:32:06], [01:03:53]-[01:06:58]).
- Evaluate adoption against organizational risk. Fowler notes that experimentation varies widely inside large enterprises and describes highly regulated institutions as applying substantially tighter constraints ([00:51:17]-[00:56:32]).

## Questions and Tensions

- Fowler's comparison with the assembly-to-high-level-language transition is a forecast and analogy, not an empirical estimate of AI's eventual impact ([00:16:45]-[00:24:55]).
- The claims of rapid prototyping gains and effective legacy-system analysis are practitioner reports in the interview, not controlled comparisons with fixed tasks, costs, quality measures, or baselines ([00:25:58]-[00:30:13], [01:26:40]-[01:28:34]).
- Fowler predicts security failures if teams operate too close to the limits of non-deterministic tools, but gives no incident data or tested tolerance model ([00:24:55]-[00:25:58]).
- Team-scale AI development, safe modification of brownfield systems, and dependable autonomous refactoring remain explicitly unresolved in Fowler's account ([00:31:03]-[00:33:09], [01:03:53]-[01:06:58]).
- The auto-captions repeatedly distort names and products, including Thoughtworks, Birgitta Böckeler, Simon Willison, Claude Code, Anthropic, and Kent Beck. The chess-notation example is attributed only to an unidentified book and is too ambiguous to treat here as a verified study ([00:22:57]-[00:24:55], [00:29:10]-[00:30:13], [01:26:40]-[01:30:39]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=CQmI4XKTa0U)
- [transcript.md](./transcript.md)
