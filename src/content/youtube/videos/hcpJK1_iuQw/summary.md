---
title: "Undici mesi fa il rilascio di GPT-5 deludeva quasi tutti. Eppure ora siamo in una fase nuova."
videoId: hcpJK1_iuQw
sourceUrl: "https://www.youtube.com/watch?v=hcpJK1_iuQw"
publishedAt: "2026-07-05T05:00:05Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

In this recording published July 5, 2026, Salvatore Sanfilippo reflects on how he believes attitudes toward large language models changed, recalls GPT-5's earlier reception, and offers a theory for more recent capability gains. He connects deep residual networks, attention, chain-of-thought context, and reinforcement learning, then considers context memory, hardware scaling, native multimodality, and possible scientific use.

The chronology comes from the committed manifest publication date and the speaker's retrospective account, not playlist order. Statements about sector opinion, model intelligence, releases, evaluations, mechanisms, economics, hardware, and future progress remain attributed judgments or forecasts: the recording provides no cited survey, paper, model card, benchmark table, training record, provider announcement, cost analysis, or independent reproduction.

## Key Ideas

- Responding to a Yann LeCun post, Sanfilippo recalls that his earlier criticism of LeCun's view of LLMs was once treated as improper and argues that the field's center of opinion has since moved toward treating LLMs as a form of intelligence. His account of LeCun, colleagues, and what most informed people now believe is personal interpretation without a dated sample, survey, quotation, or representative measure of consensus. [00:00:00]-[00:05:12]
- He starts his capability timeline with GPT-3 rather than GPT-2 because of scale and expressed properties, not an architectural break. His conceptual account says autoregressive models combine attention and depth to assemble syntax and concepts, while generated reasoning tokens act as both working memory and a surface on which ideas can be sampled and evaluated. No experiment here isolates those functions or establishes the proposed mechanism. [00:05:12]-[00:07:08]
- Sanfilippo contrasts human selective long-term memory with attention over a context whose older and newer parts retain similar representational density. He sees context compaction as a significant limit and says stronger models preserve important material better during compaction, but supplies no model versions, tasks, context lengths, scoring rule, or comparison. [00:07:08]-[00:09:15]
- He speculates that efforts to compress or sparsify attention could yield attention that is not only more efficient but semantically more selective, retaining coarse older information and finer recent detail. DeepSeek and GLM are mentioned as directions, but the source does not name implementations, checkpoints, papers, memory policies, complexity bounds, or measured semantic improvement. [00:09:15]-[00:10:18]
- He interprets deep block-based networks with residual connections as capable of reasoning that may resemble Bayesian inference through successive refinement. He emphasizes that attention recurs after blocks and argues that depth, feed-forward capacity, residual structure, and repeated attention together suggest a broader theory of machine intelligence. This is a conceptual interpretation, not a mathematical derivation or established account of internal computation. [00:10:18]-[00:13:05]
- Pretraining is presented as a necessary but insufficient startup phase. Sanfilippo distinguishes early human-feedback reinforcement learning from later training driven by verifiable answers or a co-evolving quality scorer, with prior reasoning traces used to overcome a cold start. He invokes AlphaGo as an intuition for learning through repeated confrontation with a problem's truth; datasets, rewards, objectives, training runs, and causal ablations are not given. [00:13:05]-[00:15:18]
- Recalling GPT-5's release, he says a somewhat larger pretrained model knew more facts and scored better on question-style benchmarks but did not appear more intelligent because stronger reinforcement techniques were still immature. He then attributes more recent frontier-model gains, including an example rendered as Fable by the captions, to reinforcement learning that can make better use of larger models. The exact GPT-5 version, release date, availability, comparison models, evaluations, and training methods are not identified. [00:15:18]-[00:16:21]
- He considers reinforcement learning computationally expensive and uncertain to sustain, while arguing that training can continue scaling through larger connected GPU clusters even if individual chips approach physical and energy constraints. This is a forecast: the recording supplies no compute budget, utilization, power, interconnect, cost, scaling curve, provider plan, or upper-bound analysis. [00:16:21]-[00:18:33]
- Text is described as the only fully first-class training modality in current models, with images, audio, and video adapted less natively. Sanfilippo expects the absence of a sensory world model to constrain robotics more than mathematical, physical, or biological discovery, while acknowledging that balanced multimodal training would require unavailable compute. These are architecture judgments and predictions, not measured cross-domain limits. [00:18:33]-[00:20:40]
- He regards context loss as a more immediate obstacle to extended scientific reasoning than the lack of direct sensory training, and believes current architectures could contribute substantially to new science without complete replacement. He closes by treating recent programming and problem-solving progress as extraordinary and currently not slowing, while criticizing people he believes failed to revise prior views. The source offers no defined capability series, release-adjusted trend, scientific-success criterion, or forecast horizon. [00:20:40]-[00:23:51]

## Practical Implications

- Reconstruct the retrospective with dated primary sources: exact GPT-5 release and model identifiers, availability by provider, model cards, contemporaneous reactions, benchmark versions, later checkpoints, and matched evaluations. Keep remembered reception separate from measured adoption or consensus.
- Test the training explanation through controlled scaling and ablation across pretraining compute, model size, reasoning traces, reward source, verifiers, scorers, reinforcement compute, and data. Report repeated runs, uncertainty, contamination controls, inference budgets, and capability as well as benchmark scores.
- Evaluate context-memory proposals on explicit long-horizon tasks. Compare compaction, retrieval, sparse attention, multiscale memory, and full-context baselines with chronology retention, negative-result retention, latency, memory, quality, and failure recovery measured separately.
- Treat multimodality and scientific discovery as empirical programs, not consequences of one architecture story. Specify sensory inputs, training objectives, robotics or science tasks, tool access, validation standards, safety constraints, energy and economic cost, and independent replication.

## Questions and Tensions

- The title's claim that GPT-5 disappointed almost everyone is not supported by a defined population or reception dataset, and the recording's new-phase framing is not an independently established era change.
- Which GPT-5 release, provider configuration, benchmark versions, and comparison systems does the remembered account concern? Without them, factual knowledge, benchmark movement, reasoning capability, and user reception cannot be separated reliably.
- The claim that reinforcement learning unlocks larger-model capacity is plausible within the speaker's narrative but untested here. Data changes, inference-time compute, tools, architecture, distillation, evaluation shifts, and selection effects could also contribute.
- Attention, residual depth, chain-of-thought tokens, Bayesian-like refinement, working memory, and intelligence are linked conceptually but not operationalized. What observation would distinguish this account from alternatives or falsify it?
- More selective context could improve long-horizon work while discarding evidence, negative results, or safety-relevant details. No retention rule, audit trail, correction mechanism, or quality-versus-efficiency curve is proposed.
- Larger clusters may extend training scale while worsening energy, capital cost, concentration, latency, and access. The source does not quantify economics, regulation, safety, deployment constraints, or who could use the resulting systems.
- Native multimodality may matter differently for robotics and formal science, but text-only scientific success can still depend on experimental observations, instruments, and embodied constraints. No boundary or evaluation separates language-mediated assistance from autonomous discovery.
- Statements that progress has not slowed and that future models can do new science depend on the time window, selected systems, tasks, providers, and success criteria. No release forecast, achieved future outcome, or reproducible trend analysis is supplied.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=hcpJK1_iuQw)
- [transcript.md](./transcript.md)
