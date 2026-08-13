---
title: "Realtime multiplayer, automation, and you! — Idan Gazit, GitHub"
videoId: iQ5xldZ9StU
sourceUrl: "https://www.youtube.com/watch?v=iQ5xldZ9StU"
publishedAt: "2026-08-08T21:30:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Idan Gazit, who leads GitHub Next, presents two GitHub Next prototypes: Agentic Workflows for constrained background automation and Ace for real-time, multiplayer software development. His broader thesis is that AI's larger opportunity lies in improving group coordination and automating work beyond code entry, not merely multiplying individual output.

Editorial: The talk combines working-product demonstrations with GitHub's forward-looking product direction. Claims about prototype behavior, internal adoption, security design, and availability are GitHub vendor claims presented by Gazit rather than independent evaluations.

## Key Ideas

- Gazit argues that falling code-generation costs make opportunity selection more important, and that durable value should be sought in group productivity rather than personal parallelization alone. [00:01:43]-[00:02:45]
- Agentic Workflows turns natural-language instructions into Markdown playbooks, while deterministic frontmatter constrains permissions, network access, tools, and allowed outputs rather than relying on prompted guardrails. [00:05:34]-[00:08:34]
- Gazit says background agents need defense in depth, must not directly possess secrets, and should stage, vet, and log writes for auditability. [00:11:13]-[00:12:16]
- Ace places teammates, cloud-hosted repository sessions, agents, previews, and shared plans in one collaborative surface; agents can use conversation history and jointly edited documents as working context. [00:14:07]-[00:17:43]
- Gazit frames shared documents as a possible future control surface: people revise the intended state together, then ask an agent to make that state true. [00:16:50]-[00:18:35]

## Practical Implications

- Editorial: Teams adopting unattended automation should enforce capabilities outside the model, narrowly scope write operations and network destinations, permit a no-op result, and retain auditable logs.
- Editorial: Collaborative agent interfaces should preserve team discussion, plans, and decisions as context so users do not have to restate conclusions in a separate coding tool.
- Editorial: The prototypes suggest evaluating agent systems on coordination and safe delegation, not only code-generation speed; the talk does not provide comparative measurements of team outcomes.

## Questions and Tensions

- Editorial: GitHub's demonstrations show successful dependency upgrades and collaborative flows, but do not quantify failure rates, security outcomes, or performance across representative repositories.
- Editorial: Gazit cites a longitudinal study to say keyboard typing occupies about 5% of developer time, but the captions do not identify the study, its methodology, or its applicability to different roles. [00:19:24]-[00:20:28]
- Editorial: Letting agents listen to broad team context may reduce coordination overhead while increasing privacy, authorization, and context-governance requirements.
- Editorial: Ace is described as a prototype expected to enter technical preview, so its demonstrated design and availability should not be treated as stable product commitments. [00:20:28]-[00:21:18]

## Source

- https://www.youtube.com/watch?v=iQ5xldZ9StU
- [transcript.md](./transcript.md)
