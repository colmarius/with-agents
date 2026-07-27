---
title: 'Behavior Over Explanation: Salvatore Sanfilippo on AI and Coding Agents'
description: 'A source-backed synthesis of Salvatore Sanfilippo’s AI and coding-agent videos: test stories against behavior, move review toward architecture and QA, and treat human attention as a system constraint.'
pubDate: 2026-07-27
tags: ['AI Agents', 'Model Evaluation', 'Review']
draft: false
unlisted: false
order: 6
---

## Behavior is the stronger test

> Explanations help form hypotheses; observed behavior decides whether they survive.

```text
claim → test → observed behavior → judgment
```

Salvatore Sanfilippo's two Italian-language playlists, **AI concepts** and **Coding with AI**, form a research notebook about models and the work built around them. Across 78 captured videos through mid-2026, he moves between representations, reasoning, model architecture, coding agents, local inference, and his own systems experiments.

This article is an editorial synthesis of that corpus, not a claim that every video expresses one settled doctrine. All English wording is translation or paraphrase of Italian captions; nothing is a verbatim quotation. The section-opening callouts are this site's slide messages, not quotations from Sanfilippo.

One idea connects the conceptual and coding material: **do not let a compelling description outrank the behavior it is supposed to explain**. A model architecture needs ablation. A benchmark needs representative work. An agent diagnosis needs the failing program. A generated implementation needs behavior and constraints, not confidence.

## A mechanism is not a complete explanation

> The name of the mechanism does not settle the behavior of the system.

Sanfilippo treats the argument over whether next-token prediction is or is not reasoning as too coarse to guide practice. In a March 31, 2025 video, he cautions against reducing a nonlinear network to a probability emitter and argues for evaluating a profile of concrete abilities instead of making one binary judgment about intelligence ([00:01:13–00:08:17](https://www.youtube.com/watch?v=497EK7ZQ2FY&t=73s)).

His reading of Anthropic's interpretability work makes the evidence ladder more explicit. Feature labels and a more interpretable surrogate can suggest a representation, but the stronger check is an intervention: perturb the original model through the extracted representation and observe whether its output changes as predicted ([00:06:12–00:09:27](https://www.youtube.com/watch?v=TlGrAretPQw&t=372s)). In his account, that moves the result from an appealing label toward evidence that the representation participates in the computation.

This does not settle a philosophical definition of reasoning, and the videos do not independently reproduce the underlying studies. The useful lesson is narrower: **ask what observation would distinguish the explanation from a story that merely fits the output**.

## Ablations and real behavior beat good stories

> A marketable mechanism, a green suite, and a confident diagnosis can all point at the wrong cause.

Sanfilippo's clearest paper-level example concerns a hierarchical reasoning model. After an ARC-AGI reimplementation removed components one at a time, he reports that iterative refinement and data augmentation explained more of the performance than the headline hierarchy suggested ([00:03:53–00:07:58](https://www.youtube.com/watch?v=PHsxD4X2V2A&t=233s)). The exact score changes were recalled from memory, so the durable point is methodological: attribute a gain to the component that survives ablation, not the component with the best name.

He applies the same standard to coding agents. In an April 25, 2026 test, an alternative model optimized a small Tcl interpreter while preserving the supplied benchmark and regression suite. The tests stayed green, but the reported speed gain was weak, the implementation accumulated ineffective complexity, and later review found semantic breakage the suite missed ([00:12:09–00:15:13](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=729s)). Aggregate model scores had improved, but his representative task showed a smaller practical gain.

A June 10 experiment makes the failure mode more direct. Sanfilippo reports that a strong model produced a persuasive explanation for a generation loop and defended it until he challenged the diagnosis with behavioral evidence from the working and broken paths. The model then reconsidered ([00:05:44–00:09:03](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s)). Cross-model review helped expose arguments, but the program's behavior—not another fluent answer—settled the dispute.

Reading across the playlists, ablation and behavioral QA are the same discipline at different scales: isolate the claimed cause, create a condition under which it should fail, and prefer the observed result over the explanation's confidence.

## The center of review moves, but the knowledge requirement remains

> Less exhaustive line reading does not mean less engineering judgment.

Sanfilippo's coding position changes emphasis over time, and the tension matters.

On January 31, 2026, while discussing a study of AI assistance and skill acquisition, he accepted that moving from implementation toward supervision would weaken some manual practice. His consequential question was whether that loss would eventually make a developer worse at directing and checking automated work ([00:05:54–00:07:00](https://www.youtube.com/watch?v=yFa1BHzkzn8&t=354s)). The study and his own project anecdote did not resolve that long-term question.

By July 13, 2026, he argued that trying to read every generated line had become the wrong allocation of expert time. He wanted developers to spend that time on product ideas, architectural constraints, targeted design questions, and manual or model-assisted QA ([00:01:57–00:03:55](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=117s)). In this view, the implementation explanation is a steering surface; behavior remains the acceptance surface.

These positions are not a clean reversal, and the sources do not define one universal review boundary. The synthesis here is risk-scaled: routine, observable work can move toward architecture and behavioral checks; unfamiliar, weakly tested, security-sensitive, or high-consequence work still earns deeper implementation review. The goal is not to preserve line reading as ritual. It is to preserve enough understanding to choose the right proof and recognize when the proof is weak.

## Human attention is part of the agent system

> Parallelism is bounded by the number of projects a person can still understand.

More agent capacity can produce less human control. On February 17, 2026, Sanfilippo described how specification-led asynchronous work tempts a developer to start another project during every wait, fragmenting attention even when each individual task is well framed ([00:04:03–00:06:16](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s)). He distinguishes the acute fatigue that stops a focused programming session from the chronic fatigue of monitoring agents for longer hours.

His response is practical rather than anti-agent: stay with one main project when understanding matters, alternate agent work with informed human intervention, and reserve unattended runs for bounded searches or optimizations with inspectable results ([00:06:16–00:09:48](https://www.youtube.com/watch?v=id9QG-mQSOo&t=376s)).

That yields a compact operating policy:

1. Treat an explanation as a hypothesis, not proof.
2. Test model and agent claims on representative tasks, with the actual runtime, tools, and context behavior.
3. Choose review depth from consequence and observability, not from a blanket rule about generated code.
4. Keep architectural constraints and failure conditions visible before implementation expands.
5. Bound concurrent agent work by the human's ability to maintain a working model of each project.

The tactical version is the [proof stack in Make the Agent Prove It](/posts/make-the-agent-prove-it). The durable-work version is [Small Threads, Durable State](/posts/small-threads-durable-state).

## This is a reading path, not the whole corpus

> A focused synthesis should leave substantial topics intact instead of compressing them into footnotes.

This article deliberately leaves out Sanfilippo's DwarfStar implementation reports, local-inference economics, hardware-specific kernels, open-weight strategy, token-efficiency proposal, and most architecture-paper commentary. Those subjects form a separate systems story, with different evidence and a more specialized audience.

The [Coding with Agents resource hub](/resources/coding-with-agents) now includes guided starting points for both playlists. **Coding with AI** covers supervision, specifications, model evaluation, QA, attention, and local stacks. **AI concepts** covers representations, interpretability, architecture evidence, openness, and efficiency. Each orientation links directly to a small set of timestamped videos rather than presenting all 78 videos at once.

The through-line here is enough: labels suggest, explanations guide, and behavior decides. Coding agents increase the value of that discipline because they can produce plausible code—and plausible accounts of that code—faster than a person can inspect either one.

## Sources used

- [Prediction, reasoning, and alternative frames for LLMs](https://www.youtube.com/watch?v=497EK7ZQ2FY&t=73s), published March 31, 2025; especially [00:01:13–00:08:17].
- [Sanfilippo's reading of Anthropic interpretability studies](https://www.youtube.com/watch?v=TlGrAretPQw&t=372s), published March 30, 2025; especially [00:06:12–00:09:27].
- [Ablating a hierarchical reasoning model](https://www.youtube.com/watch?v=PHsxD4X2V2A&t=233s), published August 18, 2025; especially [00:03:53–00:07:58].
- [AI assistance, skill acquisition, and flux2.c](https://www.youtube.com/watch?v=yFa1BHzkzn8&t=354s), published January 31, 2026; especially [00:05:54–00:07:00].
- [Automatic programming fatigue](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s), published February 17, 2026; especially [00:04:03–00:09:48].
- [Testing recent alternative models](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=729s), published April 25, 2026; especially [00:12:09–00:15:13].
- [Further observations on Claude Fable](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s), published June 10, 2026; especially [00:05:44–00:09:03].
- [Check the ideas rather than every generated line](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=117s), published July 13, 2026; especially [00:01:57–00:03:55].
