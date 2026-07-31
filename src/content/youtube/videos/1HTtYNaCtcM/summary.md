---
title: "La programmazione è ancora interessante"
videoId: 1HTtYNaCtcM
sourceUrl: "https://www.youtube.com/watch?v=1HTtYNaCtcM"
publishedAt: "2026-05-22T17:00:38Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo argues that automated code generation does not make programming less interesting. Using several iterations of an agent editing protocol, he locates the programmer's contribution in questioning inherited designs, inventing better abstractions, testing alternatives, and deciding what should be built.

## Key Ideas

- Traditional old/new editing asks a model to reproduce the text it intends to replace, which helps detect stale assumptions but costs output tokens and can fail when the old text is ambiguous. Line-number editing avoids repetition but becomes stale after earlier edits shift the file. [00:01:05]-[00:03:15]
- Sanfilippo first replaced repeated old text with per-line tags, then considered single-token words as tags to reduce local-inference generation cost. He presents the iterations as evidence that agent tool design should not stop at conventions inherited from early systems. [00:03:15]-[00:05:18]
- A whole-file checksum could reduce the model's edit request to a file identity, line range, and replacement. Because local inference dominates the computation, he considers repeated checksum calculation an acceptable harness-side cost. [00:05:18]
- His next design moves freshness tracking into the harness: remember which lines the model last observed, reject edits to changed content, and invalidate or remap ranges shifted by intervening edits. He says the alternatives still need A/B testing. [00:06:20]-[00:07:25]
- These disposable implementations support his broader claim that human work remains conceptual: imagine alternatives, test them quickly with generated code, and challenge assumptions embedded in provider APIs and existing agent tools. [00:07:25]-[00:09:33]

## Practical Implications

- Make the harness track whether an edit target is still fresh instead of spending model tokens on state the host application already knows.
- Optimize costs according to the deployment environment; inexpensive checksums may be worthwhile when every generated token is slow.
- Test editing protocols per model because tool-use training can produce different capabilities and preferences.
- Preserve room for short-lived experiments. Cheap implementation makes it practical to discard a weak design after observing its behavior.

## Questions and Tensions

- The transcript presents design iterations, not comparative results; it does not establish whether rejecting or remapping stale ranges works better.
- Range tracking must define behavior for overlapping edits, reordered content, and model recovery after invalidation, which are not resolved here.
- Moving craft from code to ideas can accelerate experimentation, but generated implementations still need enough behavioral verification to distinguish a better concept from a plausible one.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=1HTtYNaCtcM)
- [transcript.md](./transcript.md)
