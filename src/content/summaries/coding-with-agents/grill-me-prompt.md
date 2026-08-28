---
title: "Senior Dev: This \"Grill Me\" Prompt Is Going Viral Among Top Engineers"
resourceId: 84
date: "2026-05-07"
---

Latent Space interviews Matt Pocock about software design, domain language, teaching, and coding-agent control. The durable argument is broader than the headline: delegating implementation still benefits from explicit interfaces, shared terminology, and active clarification. Grill Me itself appears only in the final transcript segment.

This is a practitioner interview, not an evaluation of the prompt or the named tools. The recording provides no adoption data, outcome comparison, or evidence for the title's “going viral” claim.

### Key Points Covered

- **Keep architecture legible while delegating implementation**: Pocock says treating code as a disposable compile target produced poor results for him. He instead keeps the system's architecture and modules in mind, arguing that code which is easy for people to change is also easier for agents to change ([00:02:59–00:04:01](https://www.youtube.com/watch?v=rlM_fAKxB3Q&t=179s)).
- **Design narrow, intentional interfaces**: The exchange connects a “narrow waist” with deep modules: people define inputs, outputs, and module boundaries, then delegate work behind those interfaces. This is a design heuristic from the speakers, not measured evidence of better agent output ([00:04:01–00:07:04](https://www.youtube.com/watch?v=rlM_fAKxB3Q&t=241s)).
- **Keep domain vocabulary available without bloating always-loaded instructions**: Pocock describes a skill that scans a repository, refines a ubiquitous-language document with the developer, and leaves a reference to that file in `AGENTS.md`. He reports keeping the document open while prompting so both sides use the same terms ([00:07:04–00:10:11](https://www.youtube.com/watch?v=rlM_fAKxB3Q&t=424s)).
- **Choose between harness convenience and developer control deliberately**: Pocock contrasts an opaque, easier-to-use harness with a small-primitives approach that offers more observability and control but creates more maintenance work. He presents this as a trade-off he plans to explore, not a settled recommendation ([00:17:14–00:19:09](https://www.youtube.com/watch?v=rlM_fAKxB3Q&t=1034s)).
- **Use Grill Me to reach a shared design, not to outsource judgment**: Pocock describes the short skill as an interview that questions the agent's and developer's assumptions until they reach a shared concept. He says he reuses the pattern for documents and non-software work, but gives no comparative result or detailed demonstration here ([00:20:45–00:21:43](https://www.youtube.com/watch?v=rlM_fAKxB3Q&t=1245s)).

[Watch the full interview on YouTube](https://www.youtube.com/watch?v=rlM_fAKxB3Q).
