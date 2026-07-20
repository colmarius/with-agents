---
title: "Claude Code vs. Codex"
videoId: sMl3V0vjvjE
sourceUrl: "https://www.youtube.com/watch?v=sMl3V0vjvjE"
publishedAt: "2026-03-18T10:08:29Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo compares Claude Code and Codex through his own work on difficult programming tasks. He reports that Claude Code can feel faster and more agile, but says Codex has repeatedly been more reliable on the hardest problems; a Redis radix-tree optimization provides his concrete example rather than a controlled benchmark.

## Key Ideas

- Sanfilippo says the same difference appeared roughly twenty times in his work over two months. He still considers both tools state of the art and limits the comparison to hard tasks run with high test-time reasoning settings, where he accepts slower responses in exchange for accuracy. [00:00:01]-[00:02:27]
- The example concerns a mature radix-tree implementation used in Redis. He wanted to reduce memory indirection because fewer allocations and cache misses could improve both space use and execution speed, even at the cost of more implementation complexity. [00:02:27]-[00:04:42]
- His proposed optimization uses spare bits in a node header and a bitmap to distinguish child-node pointers from pointers directly to leaf values. This can remove separate leaf-node allocations while preserving the compressed lexicographic tree. [00:05:56]-[00:07:09]
- Sanfilippo initially assigned the implementation to Claude Code because he finds its interaction and system-tool use more agile. He uses the unfinished optimization to argue that implementation, debugging, and testing effort—not ideas alone—limits how much software a developer can build. [00:08:06]
- After Claude Code worked for about an hour without resolving a crash, Sanfilippo inspected the change and attributed the bug to shifting a bitmap without clearing displaced bits during insertion. He reports that Codex immediately confirmed and fixed that defect, then found further fixes and optimizations. [00:09:13]
- His conclusion is not that Claude Code lacks value: he says it accelerates work in many domains. His narrower claim is that, across his difficult programming work, Codex was the stronger coding agent despite Claude Code's broader industry popularity. [00:09:13]-[00:10:20]

## Practical Implications

- Compare coding agents on difficult, representative repository tasks rather than popularity, response speed, or easy demonstrations.
- Include debugging, regression tests, and final code inspection in an agent evaluation; a plausible implementation is not the endpoint.
- Treat interaction speed and tool fluency as useful product qualities, but measure them separately from correctness on hard changes.
- Keep a second strong agent available to diagnose stalled work or review a risky low-level patch.

## Questions and Tensions

- The transcript provides no patch, test output, timing record, or matched evaluation protocol with which to reproduce the comparison.
- Tool behavior, underlying models, reasoning settings, prompts, and versions are intertwined, so the account cannot isolate which component caused the difference.
- A single low-level C optimization may favor different capabilities than application code, UI work, or routine maintenance.
- Faster interaction can increase productivity on many tasks even if a slower system is more accurate on the hardest cases.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=sMl3V0vjvjE)
- [transcript.md](./transcript.md)
