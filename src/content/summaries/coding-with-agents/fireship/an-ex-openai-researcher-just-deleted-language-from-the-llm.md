---
addedDate: '2026-10-20'
title: "An ex-OpenAI researcher just deleted language from the LLM..."
resourceId: 185
date: '2026-09-21'
collection: fireship
order: 12
videoId: TbkUKCm3CHQ
---

Fireship introduces Jev, a model from TypeSafe AI, a company founded by ex-OpenAI researcher Diogo Almeida. Jev returns quick typed decisions instead of text. Fireship then questions its novelty and performance claims. This summary uses English auto-generated captions only; unusual type names and project spellings may reflect caption errors, and no benchmark or implementation was independently inspected.

## Key ideas

- Jev is described as accepting context and a typed question, then returning a choice, score, or yes/no-like result instead of free-form prose. Fixing the output shape avoids generating and parsing a long answer for a small classification task. The claimed guarantee that output always matches the schema says nothing about whether the answer is correct. [01:01–03:06](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=61s)
- Fireship presents moderation and game-character behavior as possible low-latency applications. His hundreds-fold speed and cost comparisons are explicitly vendor-style "trust-me-bro" benchmarks, not independently reproduced measurements; the fictional horse-only dating app illustrates classification rather than a validated deployment. [00:00–01:01](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=0s), [02:04–03:06](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=124s)
- The video explicitly says identical inputs can produce different answers and that type-safe output can still be wrong. Each response includes a confidence value, which Fireship attributes to training with reinforcement learning for calibrated decisions (RLCD). A 60% confidence is meant to mean the model is right about 60% of the time; it does not certify an individual answer. [03:06–04:09](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=186s)
- Fireship says Jev's architecture remains undisclosed, and critics compare it with earlier zero-shot classifiers. He describes OpenJeb, an open reimplementation of Jev's interface that reads option probabilities from a frozen small Qwen model in one forward pass. Reproducing an interface does not establish equal calibration, accuracy, or internal architecture. Crediting Jin Yang, a TV-sitcom character, as a pioneer of the technique is a joke, not scholarly attribution. [03:06–05:06](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=186s)

## Practical implications

Editorial: For bounded decisions, compare classification quality, latency, cost, and confidence calibration separately from JSON validity. A model that always returns an allowed value can still need error handling for a wrong decision.

## Questions and limits

Editorial: The opening "zero hallucinations" language is narrowed by the later admission of incorrect and nondeterministic decisions. Novelty and comparative performance remain unresolved without architecture details and reproducible tests. The closing Mux workflow, pricing, and credit claims are sponsored promotion. [00:00–01:01](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=0s), [03:06–05:27](https://www.youtube.com/watch?v=TbkUKCm3CHQ&t=186s)

Full video: <https://www.youtube.com/watch?v=TbkUKCm3CHQ>
