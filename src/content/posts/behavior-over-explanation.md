---
title: 'Behavior Over Explanation: Salvatore Sanfilippo on AI and Coding Agents'
description: 'A cross-playlist synthesis of Salvatore Sanfilippo’s Italian videos: turn explanations into predictions, test them against behavior, and protect the attention needed to judge the result.'
pubDate: 2026-07-27
updatedDate: 2026-08-19
tags: ['AI Agents', 'Model Evaluation', 'Review']
draft: false
unlisted: true
order: 6
---

## Behavior is the stronger test

> Explanations form hypotheses; behavior under a discriminating test decides whether they survive.

```text
claim
  ↓
prediction
  ↓
representative test
  ↓
observed behavior
  ↓
judgment
```

Salvatore Sanfilippo's Italian-language **AI concepts** playlist examines model explanations; his **Coding with AI** playlist examines agent work. Read together, they suggest one discipline: do not let a compelling description outrank the behavior it is meant to explain.

That connection and the sequence above are author synthesis, not a doctrine Sanfilippo states. All English prose and link titles are editorial translation or paraphrase of Italian captions—some auto-generated. Nothing is a verbatim quotation, including the slide messages.

A test is discriminating only if a wrong explanation could make it fail. A green suite that cannot expose the disputed behavior is weak evidence.

## Test mechanism claims with intervention

> A label suggests a representation; an intervention tests whether it participates in the computation.

In a March 2025 video, Sanfilippo treats the argument over whether next-token prediction is reasoning as too coarse for practice. He cautions against reducing a nonlinear network to a probability emitter and prefers a profile of concrete abilities to one binary judgment about intelligence ([00:01:13–00:08:17](https://www.youtube.com/watch?v=497EK7ZQ2FY&t=73s)).

His account of two Anthropic interpretability studies makes the evidence ladder more explicit. Feature labels and an interpretable surrogate suggest a representation; perturbing the original model through that extracted representation and observing the predicted output change supplies stronger evidence that the representation participates in the computation ([00:06:12–00:09:27](https://www.youtube.com/watch?v=TlGrAretPQw&t=372s)).

Sanfilippo explains the studies; he does not independently reproduce them. The narrower practical lesson is to ask what observation would distinguish the proposed mechanism from a story that fits the output.

## Use ablation or representative behavior

> A passing suite or confident diagnosis matters only if it can distinguish working from broken behavior.

For a hierarchical reasoning model, Sanfilippo describes an ARC-AGI reimplementation whose ablations suggested that iterative refinement and data augmentation mattered more than the headline hierarchy ([00:03:53–00:07:58](https://www.youtube.com/watch?v=PHsxD4X2V2A&t=233s)). He marked his recalled scores as uncertain. The durable point is the method: attribute a result to components whose removal changes it.

In an April 2026 personal test, Sanfilippo reports that Kimi K2.6 optimized a small Tcl interpreter while keeping the supplied benchmark and regression suite green. He found only a modest speed gain; a later Opus review identified ineffective complexity and semantics-changing bugs outside those tests ([00:07:47–00:14:11](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=467s)).

In a June project account, a strong model defended a persuasive diagnosis until Sanfilippo supplied the missing asymmetry: the optimized path entered a repeated-token state, while the working path did not. The model then reconsidered ([00:05:44–00:09:03](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s)).

**Author synthesis:** ablation and behavioral QA are different forms of evidence, but both force a proposed cause to predict an observable difference. [Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the reusable audit and full risk-scaled acceptance contract.

## Move review, not accountability

> Generated explanations are steering surfaces, not acceptance evidence.

Across these videos, Sanfilippo does not define one universal review boundary. In January 2026, he asked whether reduced implementation practice could eventually weaken a developer's ability to direct and check automated work ([00:05:54–00:07:00](https://www.youtube.com/watch?v=yFa1BHzkzn8&t=354s)). In July, he argued against exhaustive line reading and redirected time toward product intent, architecture, targeted questions, and behavioral QA ([00:00:53–00:03:55](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=53s)).

In August, he argued that models can automate coding because they inherit a programming culture people built; as manual implementation recedes, product intent, design, architecture, and new capabilities carry more relative weight ([00:10:06–00:13:16](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=606s)). He did not call implementation trivial.

**Author synthesis:** use behavior as the primary acceptance surface for routine, observable work. Inspect implementation deeply when consequences are high, observability is weak, or understanding is part of the deliverable. Generated explanations can direct that inspection, but cannot validate themselves.

## Attention limits the quality of the test

> Every additional lane competes for the attention needed to challenge its result.

Sanfilippo's February account is personal experience, not a measured productivity result. Asynchronous agent work tempted him to open another project during each wait, fragmenting his attention ([00:04:03–00:06:16](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s)). His response was to keep one main project when understanding mattered and reserve unattended work for bounded optimizations or bug hunts whose results he later checked ([00:06:16–00:09:48](https://www.youtube.com/watch?v=id9QG-mQSOo&t=376s)).

**Author synthesis:** attention is part of the evidence system. Concurrency becomes unsafe when nobody retains enough context to judge the discriminating check. Agents can produce plausible code and accounts faster than reviewers can inspect either; acceptance still depends on an observation capable of rejecting the wrong story.

## Sources used

- Model explanations: [prediction and reasoning](https://www.youtube.com/watch?v=497EK7ZQ2FY&t=73s), [Anthropic interpretability studies](https://www.youtube.com/watch?v=TlGrAretPQw&t=372s), and [hierarchical-model ablations](https://www.youtube.com/watch?v=PHsxD4X2V2A&t=233s).
- Agent evidence: [alternative-model tests](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=467s) and [a persuasive but wrong diagnosis](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s).
- Review boundaries: [skill loss](https://www.youtube.com/watch?v=yFa1BHzkzn8&t=354s), [idea and behavior review](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=53s), and [implementation versus conceptual work](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=606s).
- Attention: [automatic programming fatigue](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s).
