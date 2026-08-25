---
title: "9 Things People Get Wrong With My /grill-* skills"
videoId: UzMNBN6xLLA
sourceUrl: "https://www.youtube.com/watch?v=UzMNBN6xLLA"
publishedAt: "2026-05-25T13:22:40Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Matt Pocock explains why his Grill Me and Grill with Docs skills are aids for engineering judgment rather than replacements for planning. He organizes their failure modes around question fidelity, work scope, active steering, context preservation, model capability, and the developer's capacity for parallel planning.

His recommendations are practitioner heuristics from his own workflow, not comparative measurements. In particular, his context-window threshold, model-size guidance, and parallel-session throughput claims are estimates and personal limits rather than generally established boundaries.

## Key Ideas

- Grilling is useful for low-fidelity questions that can be settled through conversation. Questions about how an interface feels or behaves often require a prototype, after which the findings can be handed back to the original planning session ([00:01:01]-[00:03:08]).
- Large scopes hide high-fidelity questions, consume the context window, and encourage speculative planning too far ahead. Pocock recommends decomposing the work into smaller scopes that can be grilled independently ([00:03:08]-[00:05:08]).
- The developer must actively steer the conversation: passive users can allow question count and scope to expand, while overly persistent users can keep discussing a question that would be cheaper to answer in code ([00:05:08]-[00:07:07]).
- A grilling session creates a valuable decision record. Pocock recommends implementing directly while the context has room or creating a PRD or handoff from the same session rather than clearing first and losing the reasoning history ([00:07:07]-[00:09:02]).
- He prefers a frontier model for planning because the interview depends on broad parametric knowledge to surface unanticipated questions, while he says implementation can often rely more heavily on repository context and a detailed plan ([00:09:02]-[00:10:05]).
- Pocock usually alternates between two active grilling sessions to reduce idle time, but frames higher concurrency as conditional on the developer's energy and ability to preserve each thread's context ([00:10:05]-[00:11:53]).

## Practical Implications

- Classify a blocking question before answering it: keep conversational decisions in the grilling session, but prototype questions that require visual, behavioral, or integration evidence ([00:01:01]-[00:03:08]).
- Choose a scope that can reach a useful decision before attention and context degrade; split larger initiatives before starting the interview ([00:03:08]-[00:05:08]).
- Preserve the session's decisions in implementation or a handoff artifact, and treat clearing, compacting, and delegation as explicit context-management choices ([00:07:07]-[00:09:02]).
- Increase parallel planning only when the human can still make consequential decisions without losing the working model of either task ([00:10:05]-[00:11:53]).

## Questions and Tensions

- Pocock estimates that current frontier models enter a "dumb zone" around 120,000 tokens, but the video does not test models, tasks, attention patterns, or quality at that threshold ([00:04:05]-[00:05:08]).
- His recommendation to use larger models for planning and potentially smaller models for implementation is plausible within his workflow, but no fixed-task comparison isolates model size from prompting, context, tools, or task difficulty ([00:09:02]-[00:10:05]).
- Alternating between sessions may use model wait time, but the video does not measure whether doubled nominal planning throughput offsets human context-switching cost or decision quality ([00:10:05]-[00:11:53]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=UzMNBN6xLLA)
- [transcript.md](./transcript.md)
