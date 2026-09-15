---
title: "LGTM, Ship It: The AI Code Review Problem"
resourceId: 94
collection: syntax-agent-workflows
order: 2
videoId: "6tZ_R4m_Oc4"
date: "2026-07-08"
---

This Syntax Q&A argues that faster code generation does not remove the need to understand changes, maintain architecture, and verify behavior. The review problem comes from a listener's account, not an independently audited team study.

Based on the saved English auto-generated captions; no original-audio verification was performed. Product references and capability judgments reflect the July 2026 discussion.

### Key points

- **Make generated UI code understandable before increasing its volume.** Scott recommends concise comments and explicit component-style rules, including restrictions on effects in his Svelte workflow. The hosts favor smaller UI changes because functional output can still have poor interaction and presentation. Examples and explicit decisions about duplication versus extraction help keep the code recognizable to its maintainer [00:57–05:01](https://www.youtube.com/watch?v=6tZ_R4m_Oc4&t=57s).
- **Give the agent a known place to find shared behavior.** Scott describes instructions that identify the shared-utilities directory and require checking for an existing utility before creating one. This makes accidental inline reimplementations easier to spot. The hosts also recommend deterministic checks such as linting, while saying developers should understand mission-critical code; their willingness to inspect less on other projects is a personal risk judgment [05:01–07:07](https://www.youtube.com/watch?v=6tZ_R4m_Oc4&t=301s).
- **Passing CI is not the same as meaningful review.** A listener reports engineers merging around 60 PRs each per week, including large changes, with little human inspection and increasing bugs and maintenance difficulty. The hosts' diagnosis is that generation has outrun the capacity to check intended behavior and architectural consistency. They argue that established software-engineering practices still apply: AI can accelerate accumulated debt or help pay it down, depending on what teams choose to change and verify [06:04–10:57](https://www.youtube.com/watch?v=6tZ_R4m_Oc4&t=364s).
- **Local software does not necessarily mean local inference.** A client running on a laptop may still call a remote model API. The hosts distinguish running model computation on the machine from that arrangement, and point to small, task-specific models for speech, classification, and similar browser workloads. Their skepticism about matching frontier general-purpose models on ordinary hardware is commentary, not a benchmark [10:57–14:06](https://www.youtube.com/watch?v=6tZ_R4m_Oc4&t=657s).
- **Agent work may need finer-grained history than finished commits.** In discussing Jujutsu and emerging version-control products, the hosts consider preserving intermediate edits and conversations so developers can undo experiments and recover why a decision was made. They explicitly lack hands-on Jujutsu experience; the product descriptions and predictions should not be read as comparative testing [16:52–22:16](https://www.youtube.com/watch?v=6tZ_R4m_Oc4&t=1012s).
- **Cheap implementation does not make dependencies free.** Responding to an Angular developer, the hosts favor evaluating maintenance costs before adding libraries. They suggest browser standards and narrowly scoped utilities can sometimes cover the actual requirement, but acknowledge that custom implementations require checking all needed use cases. This is their tradeoff preference, not evidence that generated replacements are generally safer [27:48–31:43](https://www.youtube.com/watch?v=6tZ_R4m_Oc4&t=1668s).

The episode also discusses value-based freelance pricing, CSS reflections, and personal hardware picks.

Full video: <https://www.youtube.com/watch?v=6tZ_R4m_Oc4>
