---
title: "Sulla creatività di Astra (o chi per esso)"
videoId: mKriLwS6Kek
sourceUrl: "https://www.youtube.com/watch?v=mKriLwS6Kek"
publishedAt: "2026-09-29T14:22:30Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo describes collaborating with the model he calls Astra on graphics optimizations for the ZX Spectrum. His examples concern two scarce resources: CPU time for rotating points and RAM for an Another World virtual machine. He credits the model with improving ideas he supplied and with proposing additional tricks, rather than describing a wholly autonomous project. [00:01:04]-[00:05:10], [00:06:15]-[00:09:19]

## Key Ideas

- **Start with a representation that fits the processor.** Sanfilippo describes approximating coordinate multiplication by sine or cosine with sums of right-shifted values, because the target processor lacks multiplication and division instructions. He had searched for suitable shift combinations and represented each quadrant with 64 angle choices. This trades exact trigonometric arithmetic for an approximation built from cheap operations. He corrects an earlier left/right slip in the narration: right shifts implement the divisions by powers of two used here. [00:00:01]-[00:02:09], [00:04:07]-[00:05:10]
- **Reuse intermediate shifts and generate angle-specific code.** He credits Astra with noticing that successive terms need not each restart from the original coordinate: after shifting by two positions, another two reaches a total shift of four. He also credits it with replacing the table of shift instructions with generated Z80 instruction sequences selected by a jump for the desired angle. He reports further speed improvements but gives no measured speedup for these changes. [00:03:01]-[00:05:10]
- **Save framebuffer memory by changing the image representation.** His Another World implementation needs buffers for the displayed image, drawing, and a saved background; several roughly 7 KB buffers consume much of a 48 KB machine before code and polygon data. He credits the model with halving vertical resolution while duplicating each row for display, retaining full horizontal resolution and a full-height image. He considers the visual loss small; that is his assessment, not a quantified quality comparison. [00:06:15]-[00:07:12]
- **Reuse screen memory that is deliberately made invisible.** He describes an additional model suggestion: widen the apparent border with black bands inside the graphics area. Setting both foreground and background color attributes to black hides the underlying pixel data, letting those bands serve as about another kilobyte of RAM. He contrasts this with an optimization he supplied himself: for the interior of a filled rectangle, set both color attributes to the desired color instead of writing individual pixels. [00:07:12]-[00:08:15]
- **He interprets the collaboration as evidence of useful model creativity.** Sanfilippo argues that models can sometimes extend a developer's ideas rather than merely produce low-quality output. He believes his particular angle-approximation method was original and that the model reasoned from it; he also acknowledges that some useful ideas may have been seen before. The account does not establish what was in the model's training data or independently prove novelty. [00:08:15]-[00:09:19]

## Practical Implications

- Editorial: A useful optimization conversation can begin with the existing algorithm and its concrete constraints, then ask how to reuse work or change representation. Here, the proposed gains come from cumulative shifts, pre-generated code, and a different framebuffer layout—not just rewriting the same loop. [00:04:07]-[00:07:12]
- Editorial: Keep human and model contributions explicit. Sanfilippo distinguishes his starting approximation and rectangle shortcut from the improvements he attributes to Astra, making the collaboration more informative than an undifferentiated claim that AI built the result. [00:02:09], [00:04:07]-[00:05:10], [00:07:12]-[00:09:19]

## Questions and Tensions

- Editorial: The examples explain plausible mechanisms, but the video provides no controlled comparison, numerical speedup, or general model ranking. Claims about how much faster a particular implementation runs need measurements beyond this account. [00:03:01]-[00:05:10], [00:07:12]-[00:08:15]
- Editorial: Useful extension of an idea and proof of an idea's historical originality are different claims. Sanfilippo's confidence that his exact approximation was not previously known to the model remains his interpretation; the caption evidence cannot resolve that provenance question. [00:08:15]-[00:09:19]

## Source

- Original video: https://www.youtube.com/watch?v=mKriLwS6Kek
- Captured Italian auto-generated captions: [transcript.md](./transcript.md)
