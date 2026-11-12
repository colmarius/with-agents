---
addedDate: '2026-08-26'
title: "Don't waste time on specs: /prototype instead"
resourceId: 74
date: "2026-07-23"
collection: "matt-pocock-agent-skills"
order: 5
videoId: "n0VhIVtviC0"
---

Matt Pocock argues for throwaway prototypes when prose cannot resolve how a feature should look, behave, or model complex logic. His Prototype skill creates a higher-fidelity artifact for feedback and later implementation; it does not make exploratory code production-ready by itself.

### Key Points Covered

- **Prototype when a question needs working behavior to answer**: Pocock defines a prototype as throwaway code that answers a question. Cheaper code generation makes such spikes easier, but discussion is still cheaper when the open decision does not need working behavior [00:00–02:53](https://www.youtube.com/watch?v=n0VhIVtviC0&t=0s).
- **Use alternatives to expose design choices**: The diagram-search demonstration generates several materially different approaches so feedback can address grouping, filtering, placement, and layout rather than one assumed implementation [03:57–06:03](https://www.youtube.com/watch?v=n0VhIVtviC0&t=237s).
- **Increase fidelity only when it improves feedback**: Pocock iterates toward a preferred alternative and favors testing inside the live route for a more representative experience. The demonstration leaves isolation and regression safeguards for those experiments unresolved [06:03–07:55](https://www.youtube.com/watch?v=n0VhIVtviC0&t=363s).
- **Separate exploration from production cleanup**: After accepting the prototype, he would hand it to an unattended agent that wires in the feature, deletes the prototype code, and checks the result against the original spec [07:55–08:58](https://www.youtube.com/watch?v=n0VhIVtviC0&t=475s).
- **Prototype logic as well as interfaces**: Small terminal harnesses can exercise state transitions and edge cases when the uncertainty lies in back-end behavior rather than presentation [08:58–10:01](https://www.youtube.com/watch?v=n0VhIVtviC0&t=538s).

Full video: <https://www.youtube.com/watch?v=n0VhIVtviC0>
