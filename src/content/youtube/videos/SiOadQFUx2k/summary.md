---
title: "Un nuovo tipo di test potrebbe presto emergere"
videoId: SiOadQFUx2k
sourceUrl: "https://www.youtube.com/watch?v=SiOadQFUx2k"
publishedAt: "2026-05-16T11:10:46Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo predicts that agent-driven exploratory testing will become a substantial complement to deterministic test suites and human QA. His proposal uses a durable testing brief to make language-model agents exercise a system through varied scenarios, then independently validate suspected failures.

## Key Ideas

- Passing an existing suite cannot prove that a rewrite preserves every functional state. Sanfilippo contrasts that narrow signal with QA work that simulates realistic usage and integration behavior before a release. [00:00:00]-[00:03:15]
- He proposes encoding a QA mission in a Markdown file and asking an agent to operate the product through tool calls, coding-agent clients, and API endpoints. These checks resemble flexible manual sessions rather than fixed assertions. [00:03:15]-[00:05:08]
- In a database example, an agent invents use cases, scales the data volume, interrupts replication, compares replicas, and tests save-and-reload behavior. The prompt preserves the testing intent while allowing each execution to vary. [00:05:08]
- Variation comes from both model sampling and the timing of the system under test. Sanfilippo sees that nondeterminism as a way to explore more states than a rigid integration script, particularly around distributed or model-driven interactions. [00:06:12]-[00:07:16]
- He imagines continuously running agents as virtual users. Potential failures would be logged and passed to another model session for confirmation before generating a notification or issue. [00:07:16]-[00:09:23]
- Returning to software rewrites, he argues that green tests are a weak proxy for architectural quality. Time spent choosing a sound initial design may avoid a generated codebase that is functionally plausible but difficult to modify. [00:10:22]-[00:12:29]

## Practical Implications

- Keep deterministic unit and integration tests, then add bounded agent sessions for stateful, timing-sensitive, or user-like exploration.
- Store the test mission in version control so its goals, environments, escalation rules, and destructive actions remain reviewable.
- Require reproduction or an independent validation pass before turning a model-reported anomaly into an issue.
- Run exploratory agents in isolated environments with explicit resource, data-volume, and time limits.

## Questions and Tensions

- Sampling can broaden state exploration while making failures difficult to reproduce and coverage difficult to measure.
- A second model can filter false positives, but it is not an independent correctness oracle and may repeat the first model's assumptions.
- Continuous exploratory testing requires safeguards against destructive actions, leaked data, excessive cost, and noisy reports; the transcript proposes the direction rather than a complete operating model.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=SiOadQFUx2k)
- [transcript.md](./transcript.md)
