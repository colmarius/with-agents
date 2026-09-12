---
title: "Google's Open Knowledge Format: Just Markdown for AI Agents"
resourceId: 86
date: "2026-06-14"
---

Agents need knowledge such as table schemas, metric definitions, and outage runbooks, but that information is often scattered across incompatible tools. Prism Labs explains Google Cloud's Open Knowledge Format (OKF) v0.1 proposal: exchange that knowledge as a directory of Markdown files that people and agents can read with existing tools.

### The Format Mechanism

- **One file describes one concept**: A concept might be a table or a metric. YAML metadata above the Markdown body makes it possible to identify and filter documents. The walkthrough shows `type`, `title`, `description`, `resource`, `tags`, and `timestamp`; only `type` is required, despite the video's closing claim that all six are needed ([01:52–02:48](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=112s), [03:41–04:40](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=221s), [06:20](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=380s)).
- **Paths identify concepts; links connect them**: Under the [v0.1 specification](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/d44368c15e38e7c92481c5992e4f9b5b421a801d/okf/SPEC.md#L45-L48), `tables/orders.md` has the ID `tables/orders`. Ordinary Markdown links connect related concepts. An optional index lets an agent see what is available before opening individual files; optional logs record changes over time ([02:48–03:41](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=168s)).
- **Writers and readers share a format, not a service**: A person or agent can produce a bundle independently of the tool that consumes it. This makes interoperability a design goal, though the video does not demonstrate exchange between independent vendors ([03:41–04:40](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=221s)).
- **Google supplies a starting implementation**: The video describes a BigQuery enrichment agent that drafts documents and adds supporting context, a static graph visualizer, three public-data sample bundles, and Knowledge Catalog ingestion. These first-party tools illustrate how to create and consume bundles, without establishing their accuracy or operational scale ([03:41–05:30](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=221s)).
- **Plain files make inspection easy, not maintenance automatic**: The repository walkthrough lists the samples and reads a concept directly in a terminal. The narrator also proposes letting agents keep the knowledge current, but does not demonstrate that they can maintain a large knowledge base accurately ([04:40–06:20](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=280s)).

[Watch the full video on YouTube](https://www.youtube.com/watch?v=14C0E6pwBIQ).
