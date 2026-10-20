---
addedDate: '2026-10-20'
title: "An ex-OpenAI researcher just deleted language from the LLM..."
resourceId: 185
date: '2026-09-21'
collection: fireship
order: 12
videoId: TbkUKCm3CHQ
---

Fireship introduces TypeSafe AI's Jev as a model for constrained decisions rather than conversational output, then questions its novelty and performance claims. This summary uses English auto-generated captions only; unusual type names and project spellings may reflect caption errors, and no benchmark or implementation was independently inspected.

## Key ideas

- Jev is described as accepting context and a typed question, then returning a choice, score, or yes/no-like result instead of free-form prose. This limits output shape and can avoid generating and parsing a long answer for a small classification task. The claimed schema guarantee is distinct from correctness. [01:01–03:06](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=61s)
- Fireship presents moderation and game-character behavior as possible low-latency applications. His hundreds-fold speed and cost comparisons are explicitly vendor-style "trust-me-bro" benchmarks, not independently reproduced measurements; the fictional horse-only dating app illustrates classification rather than a validated deployment. [00:00–01:01](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=0s), [02:04–03:06](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=124s)
- The video explicitly says identical inputs can produce different answers and that type-safe output can still be wrong. Fireship attributes calibrated confidence to reinforcement learning for calibrated decisions: a confidence score is meant to reflect aggregate accuracy, not certify an individual answer. [03:06–04:09](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=186s)
- Fireship says Jev's architecture remains undisclosed and describes an open reimplementation of its interface that reads option probabilities from a frozen small Qwen model in one forward pass. Reproducing an interface does not establish equal calibration, accuracy, or internal architecture. The historical television-character reference is a joke, not scholarly attribution. [03:06–05:06](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=186s)

## Practical implications

Editorial: For bounded decisions, compare classification quality, latency, cost, and confidence calibration separately from JSON validity. A model that always returns an allowed value can still need error handling for a wrong decision.

## Questions and limits

Editorial: The opening "zero hallucinations" language is narrowed by the later admission of incorrect and nondeterministic decisions. Novelty and comparative performance remain unresolved without architecture details and reproducible tests. The closing Mux workflow, pricing, and credit claims are sponsored promotion. [00:00–01:01](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=0s), [03:06–05:27](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=186s)

Full video: <https://www.youtube.com/watch?v=TbkUKCm3CHQ>
