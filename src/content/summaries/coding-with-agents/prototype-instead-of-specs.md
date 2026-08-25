---
title: "Don't waste time on specs: /prototype instead"
resourceId: 74
date: "2026-07-23"
collection: "matt-pocock-agent-skills"
order: 4
videoId: "n0VhIVtviC0"
---

Matt Pocock argues for throwaway prototypes when prose cannot resolve how a feature should look, behave, or model complex logic. His Prototype skill creates a higher-fidelity artifact for feedback and later implementation; it does not make exploratory code production-ready by itself.

### Key Points Covered

- **Prototype to answer a named question**: Cheaper code generation makes spikes more accessible, but discussion remains the lower-cost tool when the unresolved decision does not need working behavior [00:00:00]-[00:02:53].
- **Use alternatives to expose design choices**: The diagram-search demonstration generates several materially different approaches so feedback can address grouping, filtering, placement, and layout rather than one assumed implementation [00:03:57]-[00:06:03].
- **Increase fidelity only when it improves feedback**: Pocock iterates toward a preferred alternative and favors testing inside the live route for a more representative experience [00:06:03]-[00:07:55].
- **Separate exploration from production cleanup**: After accepting the prototype, he proposes a fresh implementation pass that removes prototype code and restores conformance with the original requirements [00:07:55]-[00:08:58].
- **Prototype logic as well as interfaces**: Small terminal harnesses can exercise state transitions and edge cases when the uncertainty lies in back-end behavior rather than presentation [00:08:58]-[00:10:01].

The video does not compare prototype cost or implementation quality with a specification-only workflow, and it leaves isolation and regression safeguards for live-route experiments unresolved.

Full video: <https://www.youtube.com/watch?v=n0VhIVtviC0>
