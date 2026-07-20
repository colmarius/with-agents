---
title: "I fine tune di DeepSeek funzionano bene? Mettiamo alla prova il 32B."
videoId: oNhkt0kKWA8
sourceUrl: "https://www.youtube.com/watch?v=oNhkt0kKWA8"
publishedAt: "2025-01-29T09:01:05Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo compares a full DeepSeek reasoning model, a distilled DeepSeek R1 32B model, and Claude on an obfuscated C program that renders the former Twitter logo through a tiny neural network. The full models recover the program's intent and structure much more accurately in this demonstration, while the 32B distill produces a partial and ultimately incorrect analysis.

## Key Ideas

- Sanfilippo distinguishes the downloadable model weights from the separate moderation behavior he observes in DeepSeek's hosted chat, where displayed output can be removed after generation. [00:00:01]-[00:01:14]
- He stresses that the full DeepSeek reasoning model and its smaller distillations are materially different systems. The test uses an intentionally obfuscated C program he wrote to render a Twitter bird as ASCII art. [00:03:34]-[00:04:37]
- The program contains a small neural network whose inputs are two-dimensional coordinates. Its output is thresholded to decide whether each character-cell pixel is on or off. [00:06:48]-[00:07:53]
- The full DeepSeek model identifies the program as a neural image representation, recognizes its coordinates, hidden layers, sigmoid activation, and single output, and infers that it draws a specific image. [00:06:48]-[00:09:08]
- Sanfilippo briefly treats the learned weights as a compact image representation and suggests they could be quantized further. This is an informal size argument rather than a measured compression experiment. [00:09:08]-[00:10:09]
- When asked for exact structure, the full model derives the 2-6-6-1 layout and maps ranges in the float array to individual layers and biases. [00:11:01]
- It also rewrites the obfuscated source into a more readable, explicitly layered form, which Sanfilippo treats as evidence that the analysis captured implementation details rather than only the output format. [00:11:59]
- The DeepSeek R1 32B distill initially describes a generic grid, later notices that the float array may encode a neural network, but incorrectly says the image is the digit 5 and does not recover the architecture. [00:13:15]-[00:14:24]
- Claude also recognizes the classifier and quickly derives the 2-6-6-1 topology and 67-weight count. The 32B distill still fails when asked directly for the layout, reinforcing the video's claim that the small fine-tune does not reproduce the larger models' analysis on this example. [00:15:49]-[00:17:59]

## Practical Implications

- Treat distillations as separate deployment candidates that require direct task evaluation, not interchangeable smaller editions of their teacher models.
- Use adversarially compact or obfuscated code to test whether a model can reconstruct data flow, dimensions, and invariants rather than merely summarize identifiers.
- Verify a generated deobfuscation by compiling it, comparing outputs, and checking exact weight indexing before relying on its readability.
- Separate hosted-service policy behavior from the behavior of downloadable weights when documenting model constraints.

## Questions and Tensions

- The demonstration provides no model version identifiers, quantization details for every system, decoding settings, complete prompts, or repeated trials.
- One hand-built program is useful as a diagnostic but cannot establish broad reasoning or coding performance.
- The transcript reports the models' answers on screen but does not show an automated equivalence test for the rewritten program.
- Differences in parameter count, serving speed, quantization, and provider tooling make the comparison informative but not controlled.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=oNhkt0kKWA8)
- [transcript.md](./transcript.md)
