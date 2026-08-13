---
title: "Guide, Verify, Solve — Anirban Chatterjee, Sonar"
videoId: 03l29gJXpCE
sourceUrl: "https://www.youtube.com/watch?v=03l29gJXpCE"
publishedAt: "2026-08-09T17:45:13Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Anirban Chatterjee of Sonar argues that greater AI coding autonomy requires independent, repeatable verification. He presents Sonar's agent-centric development cycle—guide, verify, solve—as a way to supply constraints before generation, detect issues during and after generation, and feed remediation back into the loop.

## Key Ideas

- Chatterjee frames verification debt as the gap between default AI-generated code quality and the quality required by larger, more critical software systems. [00:02:02]-[00:04:07]
- He argues that model errors, missing organizational context, and varying model strengths make independent verification necessary rather than optional. [00:04:07]-[00:06:07]
- Chatterjee extrapolates from a non-coding study of human reliance on incorrect AI advice to argue that review under growing code volume also needs an automated backstop. [00:06:07]-[00:09:06]
- Sonar's proposed verification regime is zero-trust and multi-layered: it should be generation-independent, auditable, repeatable, and combine computational and LLM-based review. [00:09:06]-[00:10:49]
- The ACDC loop supplies guidance and constraints, verifies quality, security, and compliance, then ideally lets agents remediate findings and repeat. [00:10:49]-[00:11:53]
- Chatterjee places verification both inside agent generation loops and in the outer pull-request and CI/CD path, with explicit quality gates before deployment. [00:15:44]-[00:18:52]

## Practical Implications

- Encode architectural constraints, approved dependencies, coding standards, and quality criteria before assigning work to an agent. [00:15:44]-[00:16:46]
- Give agents narrowly relevant context and immediate verification feedback so they can repair issues before those issues propagate through later loops. [00:16:46]-[00:17:49]
- Apply a consistent independent verification policy across teams, projects, and coding tools while retaining auditable evidence for security and compliance. [00:11:53]-[00:13:58]

## Questions and Tensions

- Editorial: Several research findings are summarized verbally, but the transcript does not provide paper titles, links, or enough methodological detail to assess causality or applicability. [00:01:04]-[00:03:04]
- Editorial: Product demonstrations and adoption figures are Sonar's own claims in a vendor presentation; the talk does not offer independent comparisons of Sonar's tools against alternative verification systems. [00:13:58]-[00:15:44] [00:19:55]-[00:20:57]
- Editorial: A single standardized platform may reduce inconsistent checks, but could also concentrate policy, tooling, and failure modes in one system; that trade-off is not examined.

## Source

- https://www.youtube.com/watch?v=03l29gJXpCE
- [transcript.md](./transcript.md)
