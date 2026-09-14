---
title: "How We Solved Agent Building — Andrew Qu, Vercel"
resourceId: 138
date: "2026-09-14"
---

Andrew Qu describes the evolution of Vercel's internal data science agent and the Eve agent framework. The case centers on helping colleagues answer business questions without requiring a data scientist to write every query.

**Source basis:** this overview uses [AI Engineer's video description](https://www.youtube.com/watch?v=9dYcwOkpCE8), not a reviewed transcript or an audio check. Caption retrieval was unavailable, and YouTube blocked playback from the review environment. The points below reflect the publisher's account; reported evaluation gains are not independently verified.

### What the publisher describes

- **Several orchestration designs preceded the file-system approach.** The first version placed a Snowflake schema in one large prompt and required SQL to be run manually. Later versions used a chain of agents for planning, execution, and reporting, then one agent managing its own state. The description presents these as successive iterations, not a controlled comparison of single-agent and multi-agent architectures.
- **Give the agent familiar tools and company context.** After observing Claude Code answer the same questions, Qu rebuilt the agent in a sandbox with a file system and the company's semantic layer—the definitions used to interpret its data. The publisher attributes the improvement to familiar list, read, and bash operations rather than a clever custom tool set. This is a reported explanation of one team's result, not evidence that file systems are always the best agent interface.
- **Reuse knowledge from recurring work.** A recurring job distills common queries into skills so later runs begin with accumulated context. The description connects this work to Eve, which brings Next.js-style file-system conventions to agents, and to Qu's argument for narrowly scoped agents supplied with company-specific knowledge. It does not provide enough implementation detail to reproduce the skill-generation process.

Full video: [AI Engineer — How We Solved Agent Building](https://www.youtube.com/watch?v=9dYcwOkpCE8).
