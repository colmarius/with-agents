---
title: "AI Revisited - part 2 – REWORK"
videoId: EwFT3h55oOc
sourceUrl: "https://www.youtube.com/watch?v=EwFT3h55oOc"
publishedAt: "2026-03-04T10:00:33Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

REWORK host Kimberly Rhodes speaks with 37signals co-founder and CEO Jason Fried about his daily AI use and the company's product strategy. The coding-agent material is primarily a designer's workflow: Fried uses Claude to make interactive prototypes and temporary local data, then decides whether an idea merits production work.

## Key Ideas

- Fried uses models as editors that can compare his writing with a large body of customer language while he retains authorship and decides which suggestions fit. [00:00:47]-[00:03:38]
- He describes using Claude to prototype persistent recent-chat avatars in Basecamp, allowing him to experience the interaction without waiting for a teammate who was already busy. [00:03:38]-[00:06:35]
- For interface testing, Fried asks Claude to populate a local Basecamp database with multi-user conversations, attachments, and varied message lengths, iterates on the data, then removes it when the design exercise ends. [00:08:18]-[00:11:09]
- On product strategy, Fried distinguishes selective native AI features from customers bringing external agents into Basecamp, supported by simpler product surfaces and command-line access. [00:13:56]-[00:20:01]
- He argues that AI should remain useful without obstructing customers who do not want it, continuing 37signals' broader practice of exposing optional power without making every workflow more complex. [00:21:05]-[00:24:56]

## Practical Implications

- Use coding agents to make an interaction testable while production work is waiting or undecided.
- Keep exploratory data local, reversible, and clearly separated from customer or production data.
- Preserve human ownership of product direction and evaluate whether an AI capability improves the core workflow before embedding it.

## Questions and Tensions

- The examples demonstrate faster personal iteration but provide no quality, time, or rework measurements.
- A prototype that feels right can still conceal architecture, security, performance, and maintenance problems outside the designer's evaluation.
- Bring-your-own-agent access reduces product implementation work but transfers important permission and safety questions to integrations.

## Source

- <https://www.youtube.com/watch?v=EwFT3h55oOc>
- [transcript.md](./transcript.md)
