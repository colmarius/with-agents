---
title: "AI powered entomology: Lessons from millions of AI code reviews — Tomas Reimers, Graphite"
videoId: TswQeKftnaw
sourceUrl: "https://www.youtube.com/watch?v=TswQeKftnaw"
publishedAt: "2025-07-22T19:50:08Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Tomas Reimers, a co-founder of Graphite, describes lessons from building Diamond, Graphite's AI code reviewer. ([source title](https://www.youtube.com/watch?v=TswQeKftnaw)) He argues that useful automated review depends on restricting models to findings they can make reliably and comments developers actually want, then measuring both correctness and whether comments lead to code changes. [00:00:00]-[00:02:06] [00:06:11]-[00:09:17]

## Key Ideas

- Reimers says Graphite began exploring AI review after observing both AI-written code and bugs increase, and found that models could detect real defects alongside hallucinated or unhelpful comments. [00:00:00]-[00:02:06]
- Reimers divides review comments along two axes: whether an LLM can identify the issue and whether a developer wants that feedback from an LLM. [00:02:06]-[00:03:11]
- Reimers says Graphite repeatedly classified 10,000 human review comments and identified bugs, accidental code, performance, security, documentation, and style as distinct categories. [00:03:11]-[00:04:15]
- Reimers places undocumented tribal knowledge beyond current model access and treats generic cleanliness advice as technically valid but frequently unwelcome. [00:04:15]-[00:05:09]
- Reimers says Graphite adjusted prompts toward the intersection of model capability and developer demand, then used comment reactions to track hallucinations and reported a downvote rate below 4%. [00:06:11]-[00:08:15]
- Reimers proposes the share of comments that cause a corresponding change in the pull request as an actionability measure; he reports about 50% for human comments and 52% for Diamond as of March. [00:08:15]-[00:09:17]

## Practical Implications

- Editorial: Evaluate automated review by defect validity, developer acceptance, and resulting code changes rather than comment volume.
- Editorial: Separate repository-specific defects from generic style advice, and suppress categories that a model cannot support or a team does not value.
- Editorial: Combine explicit feedback controls with longitudinal monitoring when changing prompts, models, or available context.

## Questions and Tensions

- Reimers reports findings derived from Graphite's codebase, open-source repositories, and repositories available to its code-review product. [00:03:11] [00:08:15]
- Editorial: The talk does not describe sampling, category agreement, repository mix, or false-negative measurement, so the reported rates should not be generalized without further evidence.
- Reimers compares Diamond's actionability with a roughly 50% human baseline while noting that some human comments are informational, deferred, or intentionally disputed. [00:08:15]-[00:09:17]
- Editorial: Comment-driven code changes are useful evidence, but they do not by themselves establish correctness, severity, or downstream production value.

## Source

- [YouTube video](https://www.youtube.com/watch?v=TswQeKftnaw)
- [transcript.md](./transcript.md)
