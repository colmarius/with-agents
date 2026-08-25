---
title: "Don't waste time on specs: /prototype instead"
videoId: n0VhIVtviC0
sourceUrl: "https://www.youtube.com/watch?v=n0VhIVtviC0"
publishedAt: "2026-07-23T14:00:35Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Matt Pocock argues that developers should use throwaway prototypes when discussion and specifications cannot resolve how a feature should look, behave, or model complex logic. He demonstrates his Prototype skill on a diagram-search feature and describes how it participates in his broader Wayfinder planning workflow.

His central claim is that cheaper code generation makes high-fidelity exploration more accessible, but he also acknowledges that fidelity consumes time and tokens. The prototype is an artifact for feedback and later implementation, not production-ready code by itself.

## Key Ideas

- Pocock defines a prototype as throwaway code that answers a question and argues that lower code-production costs make prototypes and spikes more useful during planning. [00:00:00]-[00:02:06]
- He proposes choosing fidelity according to the unresolved question: discussion can settle basic details, while behavior or appearance that needs to be experienced may warrant working code. [00:02:06]-[00:02:53]
- In Wayfinder, grilling handles basic scope while prototype tickets create concrete artifacts when how something should look or behave is the key uncertainty. [00:02:53]-[00:03:57]
- His diagram-search example generates three alternatives that encode different design decisions, letting him inspect and react to grouping, filtering, placement, and layout. [00:03:57]-[00:06:03]
- Pocock iterates toward a fourth alternative, retains the design context by compacting the session, and favors integrating the prototype into the live route for a more representative test. [00:06:03]-[00:07:55]
- After accepting the prototype, he proposes handing it to another agent to remove prototype code and make the implementation conform to the original specification. [00:07:55]-[00:08:58]
- He says prototyping also applies to back-end and state-model questions, suggesting a small terminal application for exercising logic that is difficult to reason about on paper. [00:08:58]-[00:10:01]

## Practical Implications

- Identify the decision a prototype must answer before generating code, and keep low-risk questions in cheaper discussion. [00:01:04]-[00:02:53]
- Present materially different alternatives so feedback concerns explicit design choices rather than a single generated implementation. [00:03:57]-[00:06:03]
- Preserve a useful prototype as a reference artifact while separating its cleanup and production-compliance work from exploration. [00:06:03]-[00:08:58]
- Use non-UI harnesses to exercise state transitions or edge cases when the uncertainty lies in logic rather than presentation. [00:08:58]-[00:10:01]

## Questions and Tensions

- Editorial: The demonstration reports a roughly 100,000-token prototyping session, but provides no comparison of time, cost, or implementation quality against a discussion-only or specification-only workflow. [00:05:01]-[00:06:03]
- Editorial: Testing inside a live route may improve realism, but the source does not discuss isolation, test data, regressions, or safeguards when exploratory code touches a working application. [00:07:07]-[00:07:55]
- Editorial: Pocock calls the code throwaway while also expecting implementers to copy or reference it; the source does not define how teams should prevent exploratory shortcuts from becoming production defects. [00:06:03]-[00:08:58]

## Source

- https://www.youtube.com/watch?v=n0VhIVtviC0
- [transcript.md](./transcript.md)
