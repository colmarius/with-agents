---
title: "Sugli LLM, l'intervista a Sutton, la bitter lesson e le forme a priori nel cervello dei mammiferi"
videoId: 2F1xWHKaras
sourceUrl: "https://www.youtube.com/watch?v=2F1xWHKaras"
publishedAt: "2025-10-10T10:00:10Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo responds to an interview with Sutton by asking whether LLM development has really departed from the bitter lesson. He argues that generic Transformer pre-training already embodies much of that lesson, that biological learners begin with powerful innate structure, and that the harder open problem is how reinforcement learning can build beyond a broad base of learned human knowledge.

## Key Ideas

- The bitter lesson, as Sanfilippo presents it, favors general learning methods scaled with more computation and data over systems that encode human intuitions about how a task should be solved. He sees Transformer pre-training and next-token prediction as a strong example of that approach. [00:01:00]-[00:03:21]
- Reinforcement learning complicates the comparison. Human-feedback training injects human-produced guidance, while training on verifiable programming or mathematics problems can generate many mechanically checked attempts and optimization targets from each problem. [00:03:21]-[00:05:48]
- He says LLM reinforcement learning has not achieved results comparable to AlphaZero in closed domains, but rejects the stronger conclusion that finite human pre-training data places LLMs wholly outside the bitter lesson. [00:05:48]
- Sanfilippo adopts Karpathy's observation that Sutton and the interviewer appear to approach the discussion from different conceptual eras: one emphasizes reinforcement learning and AlphaZero, while the surrounding debate concerns modern LLM training. [00:07:00]-[00:09:22]
- He disputes the idea that biological intelligence starts as a blank slate. Mammals can display complex spatial and motor behavior almost immediately, which he treats as evidence for strong pre-formed neural structure rather than learning from a small token count alone. [00:09:22]-[00:11:36]
- By contrast, he describes the Transformer as a general architecture used beyond language. This makes direct comparisons between a child and an initially general-purpose model misleading because their starting priors are profoundly different. [00:11:36]
- Sanfilippo treats the available human corpus as a sample spanning much of humanity's known semantic space. More tokens from that same space may improve fit, but he expects future advances to require models that can move from the known toward new, discoverable knowledge. [00:12:44]-[00:13:56]
- His proposed framing is that pre-training supplies an enabling warm start, perhaps one day compressible into architectural priors. The next challenge is reinforcement learning that can use this base as a broad environment for synthesizing further knowledge. [00:13:56]-[00:16:08]

## Practical Implications

- Separate claims about generic pre-training, human-feedback alignment, and reinforcement learning with verifiable rewards rather than treating them as one training method.
- When comparing sample efficiency in people and models, account for architecture and innate priors as well as observed training data.
- Evaluate whether synthetic tasks provide mechanically trustworthy feedback, not merely additional model-generated text.
- Treat pre-training as a starting state for later learning experiments rather than assuming either that more tokens alone or training from scratch must be sufficient.

## Questions and Tensions

- The discussion interprets an interview and Karpathy's reaction without analyzing a formal statement of Sutton's position or controlled evidence for the competing views.
- Animal behavior supports the existence of biological priors, but the transcript does not establish which priors an artificial system would need or how to encode them.
- A corpus may cover broad human semantic space while still omitting rare, tacit, embodied, or newly created knowledge.
- Mechanically verifiable reinforcement learning works naturally in bounded domains; the route from those domains to open-ended knowledge discovery remains unspecified.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=2F1xWHKaras)
- [transcript.md](./transcript.md)
