---
title: "Analizziamo la stessa patch con Kimi 2.6, Opus 4.7, GPT 5.4"
videoId: pJ11diFOjqo
sourceUrl: "https://www.youtube.com/watch?v=pJ11diFOjqo"
publishedAt: "2026-04-20T17:23:36Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo compares three coding systems on a small, real pull-request review for linenoise. The exercise is not presented as a benchmark: it shows how a lower-cost alternative can contribute useful review work and how even the system he usually considers strongest can initially miss a concrete defect.

## Key Ideas

- Sanfilippo's interest in Chinese models is partly pragmatic: he wants an affordable fallback if European developers lose access to leading US models or their prices rise sharply. He uses the newly available Kimi model on open-source maintenance work. [00:00:02]-[00:02:14]
- The review concerns a small linenoise pull request from SQLite's author. It adds support for colored prompts by accounting for terminal escape sequences that occupy bytes but do not have the same displayed width. [00:02:14]-[00:05:49]
- The patch introduces a helper that recognizes an escape sequence and reports its byte length. Sanfilippo understands the purpose but uses coding agents to check implementation details before deciding whether to merge. [00:05:49]-[00:07:01]
- Kimi first reasoned without access to the actual patch file. After Sanfilippo supplied the local file, it revised its assessment, judged the relevant escape-sequence coverage sufficient for this use case, and identified a possible out-of-bounds read requiring a length check before accessing the second byte. [00:07:01]-[00:10:18]
- Opus independently identified the same bounds problem quickly and also raised limitations around additional escape sequences and an unusual zero-width-joiner interaction, which Sanfilippo did not consider blocking for prompt coloring. [00:11:17]-[00:14:48]
- GPT initially reported no blocking finding. After Sanfilippo explicitly asked whether the patch contained bugs, it found the missing length check and added observations about the assumptions made when treating recognized prompt sequences as zero-width. [00:13:27]-[00:15:59]
- In this particular local review, Sanfilippo judged Kimi's performance stronger than GPT's initial response. He treats the result as evidence that the alternative can handle some real coding tasks, not as a general ranking of the models. [00:16:52]-[00:17:49]

## Practical Implications

- Give a review agent the exact patch and repository state; an assessment based on an inaccessible artifact can be confidently wrong or incomplete.
- Compare multiple reviewers on consequential patches, then return disputed findings to the original reviewer for another pass.
- Reduce a review claim to a testable condition. Here, the central question is whether every indexed byte access is preceded by a sufficient length check.
- Build familiarity with fallback models through real maintenance tasks before access or pricing changes make the fallback urgent.

## Questions and Tensions

- A single small C patch cannot establish a stable capability ranking; prompt wording, tool access, effort settings, and model updates all affect the outcome.
- The transcript demonstrates reviewers finding a plausible bounds defect, but it does not show a compiled test, sanitizer result, or final merged diff.
- Extra edge-case findings can improve coverage or distract from the actual use case. The appropriate boundary depends on the helper's documented contract.
- The availability, licensing, local deployment, and pricing descriptions are reported in the transcript and are not independently verified here.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=pJ11diFOjqo)
- [transcript.md](./transcript.md)
