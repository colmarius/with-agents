---
title: "How AI will change software engineering – with Martin Fowler"
resourceId: 35
date: "2025-11-19"
collection: "pragmatic-engineer-selected-conversations"
order: 1
videoId: "CQmI4XKTa0U"
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Martin Fowler, Thoughtworks chief scientist, author, and Agile Manifesto co-author. Fowler's central argument is that LLMs introduce a shift from deterministic to non-deterministic software construction, so teams should use their speed to tighten learning loops rather than abandon review, testing, and incremental delivery ([00:00:00]-[00:01:52], [00:16:45]-[00:24:55], [01:25:36]-[01:28:34]).

### Key Points Covered

- **Non-determinism is the deeper shift**: Fowler compares AI's potential impact with the move from assembly to high-level languages, but says non-deterministic behavior matters more than merely moving to a higher abstraction level ([00:16:45]-[00:24:55]).
- **Prototypes and legacy analysis are promising uses**: He identifies disposable explorations as a strong fit and reports that Thoughtworks practitioners found LLM-assisted analysis useful enough to recommend investigating for legacy work ([00:25:58]-[00:29:10]).
- **Treat generated production code as untrusted**: Fowler says durable work should proceed in thin slices, with each slice reviewed as if it came from a highly productive but untrustworthy collaborator. He presents the speedup as worthwhile but smaller than advocates claim ([00:29:10]-[00:31:03]).
- **Vibe coding removes a learning loop**: He defines vibe coding as disregarding generated code. In his view, it suits throwaway work but removes feedback needed to understand, modify, and evolve durable software ([00:33:09]-[00:36:20]).
- **Keep specifications small and feedback concrete**: Fowler favors small specifications, tests, production feedback where possible, and a human verification loop over writing a large specification before inspecting code ([00:46:20]-[00:50:29]).
- **Refactoring becomes more important, not automatic**: He expects more working but questionable-quality code, while saying current LLMs cannot reliably refactor unaided. He is interested in using an LLM to initiate deterministic, inspectable transformations ([01:03:53]-[01:06:58]).
- **Spend generation speed on smaller batches**: Fowler argues that AI should accelerate frequent delivery slices rather than enlarge each batch; Orosz supports the point with an account of an Anthropic engineer testing 20 interactive prototypes in two days ([01:24:33]-[01:28:34]).
- **Junior engineers still need mentors and skepticism**: Fowler recommends experimenting with AI while prioritizing experienced mentors, probing generated advice for sources and context, and retaining the communication skills needed to determine what software should do ([01:34:51]-[01:42:37]).

Full video: <https://www.youtube.com/watch?v=CQmI4XKTa0U>
