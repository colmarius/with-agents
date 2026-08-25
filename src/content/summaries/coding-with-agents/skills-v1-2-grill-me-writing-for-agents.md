---
title: "New Skills! v1.2 brings /wait-what, /writing-for-agents, and fixes /grill-me"
resourceId: 74
date: "2026-08-05"
collection: "matt-pocock-agent-skills"
order: 6
videoId: "gaDdrDdczO4"
---

Matt Pocock walks through version 1.2 of his engineering-skills repository: revised installation and documentation, dependency-aware Grill Me rounds, concise agent-facing writing, deterministic setup scripts, and questionnaire-based collaboration outside the agent interface.

### Key Points Covered

- **Improve routing and installation metadata**: The release adds a documentation site, a suggested workflow, marketplace packaging, and sidecar metadata intended to preserve invocation settings across supported harnesses [00:00:00]-[00:02:55].
- **Repair unclear agent output locally**: Wait What is designed to restate one difficult response in simpler technical English while grounding vocabulary in the project's context file [00:02:55]-[00:03:58].
- **Batch only independent questions**: Grill Me now models questions as a dependency graph and asks the currently answerable frontier in rounds, retaining recommended answers and follow-up rounds [00:03:58]-[00:06:44].
- **Write instructions for their consumers**: Writing for Agents broadens skill-writing guidance to files such as `AGENTS.md` and `CLAUDE.md`, with an emphasis on concise always-loaded context and extracting specialized procedures into skills [00:06:44]-[00:07:33].
- **Keep sensitive setup deterministic and human-controlled**: Wizard generates an interactive shell script for setup steps, while To Questionnaire moves unresolved decisions into a document that collaborators can answer before importing them back into the agent session [00:07:33]-[00:10:41].

This is a release walkthrough, not an independent evaluation. Marketplace portability, clarity improvements, generated-script security, and document synchronization remain reported behavior or open operational concerns.

Full video: <https://www.youtube.com/watch?v=gaDdrDdczO4>
