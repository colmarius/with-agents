---
title: 'Behavior Over Explanation: Salvatore Sanfilippo on AI and Coding Agents'
description: 'An editorial synthesis of Salvatore Sanfilippo’s Italian videos: treat explanations as hypotheses, use interventions and representative behavior to test them, and protect the attention needed to judge the result.'
pubDate: 2026-07-27
updatedDate: 2026-08-15
tags: ['AI Agents', 'Model Evaluation', 'Review']
draft: false
unlisted: true
order: 6
---

## Behavior is the stronger test

> Explanations form hypotheses; behavior under a discriminating test decides whether they survive.

```text
claim → predicted difference → representative test → observed behavior → judgment
```

Across Salvatore Sanfilippo's Italian-language **AI concepts** and **Coding with AI** playlists, one methodological pattern recurs: do not let a compelling description outrank the behavior it is meant to explain. This article synthesizes that pattern; it does not attribute one settled doctrine to every video.

All English wording is editorial translation or paraphrase of Italian captions, including auto-generated captions; nothing is a verbatim quotation. The section-opening callouts are this site's slide messages, not quotations from Sanfilippo.

A test is discriminating only if the explanation being false could make it fail. A green suite that cannot expose the disputed behavior is weak evidence too.

## A mechanism is not a complete explanation

> A label suggests a representation; an intervention tests whether it participates in the computation.

Sanfilippo treats the argument over whether next-token prediction is or is not reasoning as too coarse to guide practice. In a March 31, 2025 video, he cautions against reducing a nonlinear network to a probability emitter and argues for evaluating a profile of concrete abilities instead of making one binary judgment about intelligence ([00:01:13–00:08:17](https://www.youtube.com/watch?v=497EK7ZQ2FY&t=73s)).

His reading of Anthropic's interpretability work makes the evidence ladder more explicit. Feature labels and a more interpretable surrogate can suggest a representation, but the stronger check is an intervention: perturb the original model through the extracted representation and observe whether its output changes as predicted ([00:06:12–00:09:27](https://www.youtube.com/watch?v=TlGrAretPQw&t=372s)). In his account, that moves the result from an appealing label toward evidence that the representation participates in the computation.

This does not settle a philosophical definition of reasoning, and the videos do not independently reproduce the underlying studies. The useful lesson is narrower: **ask what observation would distinguish the explanation from a story that merely fits the output**.

## Ablations and real behavior beat good stories

> A passing suite or confident diagnosis matters only if it can distinguish working from broken behavior.

Sanfilippo's clearest paper-level example concerns a hierarchical reasoning model. After an ARC-AGI reimplementation removed components to see what still worked, he reports that iterative refinement and data augmentation explained more of the performance than the headline hierarchy suggested ([00:03:53–00:07:58](https://www.youtube.com/watch?v=PHsxD4X2V2A&t=233s)). He cited the score changes from memory and flagged them as uncertain, so the durable point is methodological: attribute a result to components whose removal materially changes it, not to the component with the best name.

He applies the same standard to coding agents. In an April 25, 2026 personal test, an alternative model optimized a small Tcl interpreter while preserving the supplied benchmark and regression suite. The suite stayed green, but Sanfilippo reported only a modest speed gain, ineffective complexity, and semantics-changing bugs that a later Opus review identified outside the supplied tests ([00:07:47–00:14:11](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=467s)).

In a June 10 project account, Sanfilippo reports that a strong model produced a persuasive explanation for a generation loop and defended it until he pointed out the asymmetry: the optimized build fell into the repeated-token state, while the working build never entered it. The model then reconsidered ([00:05:44–00:09:03](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s)).

Ablation and behavioral QA are not equivalent forms of evidence, but they share a discipline: state what the proposed cause predicts, change or exercise the relevant condition, and see whether the predicted difference appears.

[Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the reusable audit and full risk-scaled acceptance contract.

## Review moves, but judgment remains

> Generated explanations are steering surfaces, not acceptance evidence.

Three videos expose the review trade-off. In January 2026, Sanfilippo asked whether reduced implementation practice could eventually weaken a developer's ability to direct and check automated work ([00:05:54–00:07:00](https://www.youtube.com/watch?v=yFa1BHzkzn8&t=354s)). In July, he argued against exhaustive line reading and redirected expert time toward product intent, architecture, targeted questions, and behavioral QA ([00:00:53–00:03:55](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=53s)).

An August follow-up sharpens the reason for that shift without calling implementation trivial. Sanfilippo argues that models can automate coding because they inherit a programming culture people built; as manual implementation recedes, product intent, design, architecture, and new capabilities carry more relative weight ([00:10:06–00:13:16](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=606s)).

None of these sources defines a universal boundary. Use behavior as the acceptance surface for routine, observable work; inspect implementation deeply when consequences are high, observability is weak, or understanding is itself part of the deliverable.

## Attention limits the quality of the test

> Every additional lane competes for the attention needed to challenge its result.

Sanfilippo's February 17 account is experiential, not a measured productivity result: asynchronous agent work tempted him to open another project during each wait, fragmenting his attention ([00:04:03–00:06:16](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s)). His response was to keep one main project when understanding mattered and reserve unattended work for overnight optimizations or bug hunts whose fixes he then checked ([00:06:16–00:09:48](https://www.youtube.com/watch?v=id9QG-mQSOo&t=376s)).

The implication here is epistemic: concurrency becomes unsafe when nobody retains enough context to design or judge the behavioral check. [Parallel Agents Need an Admission Policy](/posts/parallel-agents-need-an-admission-policy) owns the operating policy.

Labels suggest and explanations guide, but only a representative observation can reject the wrong story. Coding agents make that discipline more important because they can produce plausible code—and plausible accounts of that code—faster than a reviewer can inspect either one.

## Sources used

- [Prediction, reasoning, and alternative frames for LLMs](https://www.youtube.com/watch?v=497EK7ZQ2FY&t=73s), published March 31, 2025; especially [00:01:13–00:08:17].
- [Sanfilippo's reading of Anthropic interpretability studies](https://www.youtube.com/watch?v=TlGrAretPQw&t=372s), published March 30, 2025; especially [00:06:12–00:09:27].
- [Ablating a hierarchical reasoning model](https://www.youtube.com/watch?v=PHsxD4X2V2A&t=233s), published August 18, 2025; especially [00:03:53–00:07:58].
- [AI assistance, skill acquisition, and flux2.c](https://www.youtube.com/watch?v=yFa1BHzkzn8&t=354s), published January 31, 2026; especially [00:05:54–00:07:00].
- [Automatic programming fatigue](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s), published February 17, 2026; especially [00:04:03–00:09:48].
- [Testing recent alternative models](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=467s), published April 25, 2026; especially [00:07:47–00:14:11].
- [Further observations on Claude Fable](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s), published June 10, 2026; especially [00:05:44–00:09:03].
- [Check the ideas rather than every generated line](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=53s), published July 13, 2026; especially [00:00:53–00:03:55].
- [Is code only a detail in software history?](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=606s), published August 10, 2026; especially [00:10:06–00:13:16].
