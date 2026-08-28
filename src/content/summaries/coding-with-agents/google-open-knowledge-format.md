---
title: "Google's Open Knowledge Format: Just Markdown for AI Agents"
resourceId: 86
date: "2026-06-14"
---

Prism Labs explains Google Cloud's Open Knowledge Format (OKF) v0.1 proposal for exchanging agent-facing knowledge as files rather than through a catalog-specific service. Its distinctive mechanism is a small bundle contract: each concept is a Markdown file, its ID is the bundle-relative path with the `.md` suffix removed, YAML frontmatter exposes structured metadata, ordinary Markdown links form graph edges, and optional index and log files support navigation and history.

This is a short explainer of Google's announcement and reference artifacts, not an independent interoperability evaluation. Google's enrichment agent, visualizer, and sample bundles show one producer and consumer path, but the recording does not demonstrate exchange between independent vendors, sustained maintenance accuracy, retrieval quality, or broad adoption. The narration calls six frontmatter fields queryable and later calls them required, while only `type` is required. It also shortens a concept's identity to its file path; the [v0.1 specification](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/d44368c15e38e7c92481c5992e4f9b5b421a801d/okf/SPEC.md#L45-L48) removes the `.md` suffix.

### The Format Mechanism

- **A concept combines a queryable envelope with free-form knowledge**: The walkthrough shows one file with `type`, `title`, `description`, `resource`, `tags`, and `timestamp` above a Markdown body. It presents those six as the v0.1 structured vocabulary, not as evidence that the resulting knowledge is accurate ([00:01:52–00:02:48](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=112s)).
- **Paths and links give the directory machine-navigable structure**: A concept's bundle-relative path without `.md` acts as its ID, normal Markdown links target concept files and become graph edges, and optional index and log files provide progressive disclosure and chronological history ([00:02:48–00:03:41](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=168s)).
- **The intended contract separates producers from consumers**: Google describes OKF as minimally opinionated, with only `type` required, and proposes that people or agents can write bundles independently of the tools that read them. Vendor neutrality and interoperability are design goals here, not demonstrated ecosystem outcomes ([00:03:41–00:04:40](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=221s)).
- **Reference tools make the proposal testable**: The video reports a BigQuery enrichment agent, a static graph visualizer, three public-data sample bundles, and Google Cloud Knowledge Catalog ingestion. These are first-party proofs of concept rather than comparative evidence for accuracy, portability, or operational scale ([00:04:40–00:05:30](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=280s)).
- **The repository walkthrough demonstrates the low-tooling boundary**: The samples can be listed as directories and a concept can be read directly in a terminal. That is concrete evidence for file-level inspectability, but not for the stronger claim that agents will keep a large knowledge base correct and current ([00:05:30–00:06:20](https://www.youtube.com/watch?v=14C0E6pwBIQ&t=330s)).

[Watch the full video on YouTube](https://www.youtube.com/watch?v=14C0E6pwBIQ).
