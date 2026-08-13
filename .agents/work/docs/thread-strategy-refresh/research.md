# Thread Strategy Refresh Research

Updated: 2026-08-13

## Recommendation

Rename the post to **Right-Sized Threads, Durable State** while retaining its route.
Replace thread size as the main decision with responsibility and independence:

- keep a coherent research, planning, or coordinator workstream alive while its
  accumulated context remains relevant;
- start a fresh implementation thread after broad exploration so mutation begins
  from a deliberate brief rather than every discarded path;
- use a separate verification or review thread when independence matters, while
  still requiring the implementation owner to run its own checks;
- preserve task state, proof, and authority in the repo and use commits as
  synchronization points across environments.

This keeps the article's durable-state argument and reverses its stale implication
that short threads are the default goal.

## Source Findings

### Incorporate

- Amp's archived [“200k Tokens Is
  Plenty”](https://ampcode.com/notes/200k-tokens-is-plenty) now opens with an
  explicit correction: it was written for an older model/context era;
  auto-compaction makes longer threads productive. The older one-change-per-thread
  workflow remains useful historical context, not current default guidance.
- Amp's June 30, 2026 [“Read Bigger
  Threads”](https://ampcode.com/news/read-bigger-threads) says a thread can now run
  for weeks, describes one thread compacted 68 times, and documents retrieval that
  checks original messages and later reversals instead of trusting compactions
  alone. This supports continuity and retrieval, not a claim that every long thread
  is high quality.
- The current [Amp Manual](https://ampcode.com/manual) still recommends one thread
  per task and rejects mixing unrelated tasks. The durable boundary is coherent
  responsibility, not a token threshold.
- Jason Liu reports that improved compaction makes named, pinned project threads
  practical as ongoing workstreams and lets them delegate narrower work
  ([00:03:02–00:07:11](https://www.youtube.com/watch?v=il1c1a2FufU&t=182s)).
  This is a practitioner account, not comparative evidence.
- Dexter Horthy says larger windows and better compaction make exact thresholds
  less important; notice degraded work, consolidate useful state, and restart when
  needed
  ([00:35:25–00:43:12](https://www.youtube.com/watch?v=xgkjtF89-44&t=2125s)).
- Thorsten Ball's prompting examples support information design: point to relevant
  files, constraints, references, screenshots, and proof, then let repository
  guidance carry repeated procedure
  ([04:24:22–04:42:11](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15862s)).
- Matt Pocock recommends fresh-context automated review before manual QA, and his
  demo shows passing automated checks followed by a missing-table failure in QA
  ([01:04:23–01:12:21](https://www.youtube.com/watch?v=-QFHIoCo-Ko&t=3863s)).
- Kun's reported setup puts a coordinator in front of workers and separates
  adversarial review, tests, docs, and CI from production of the change
  ([00:37:41–00:45:28](https://www.youtube.com/watch?v=8ZgpAXe5V5w&t=2261s)).

### Author's recent Amp usage: incorporate as N=1 synthesis

A private review of threads created from 2026-07-07 through 2026-08-04 examined
86 threads and 220 direct user messages. Of those messages, 177 were follow-ups.
Bounded work commonly started with compact, outcome-first prompts; broad or risky
work used richer openers naming anchors, scope, authority, acceptance gates, and
one integration owner. Short follow-ups then steered or corrected the run.

Later case studies reinforce the shift without proving it:

- a 395-message implementation/coordinator thread compacted once and retained its
  branch, commits, review findings, and verification state;
- a 188-message research/editorial thread compacted twice without an observable
  continuity failure;
- an independent 88-message review thread received one read-only brief, inspected
  an uploaded patch, reran checks, found one material validation weakness, and did
  not mutate the implementation.

These are one user's workflow observations. Message count is not token count, the
sample does not measure outcome quality, and no raw private prompt or thread ID
belongs in the public article.

### Research-only or historical contrast

- Build Crew episodes 2 and 7 document the earlier small-thread/handoff model.
  Retain only enough contrast to explain why fresh implementation contexts still
  help; do not present those practitioner reports as proof of universal quality.
- Raising an Agent episode 10 and season 2 episode 1 describe manual context
  management fading and compaction replacing handoff-heavy operation. They support
  the direction but are Amp-vendor accounts, so the dedicated current product
  sources and bounded practitioner claims are stronger anchors.
- Current Orbs, Models, Plugin API, and Pricing pages were checked on 2026-08-13.
  They confirm per-thread isolated orbs, a dedicated compaction model, addressable
  background threads, and pricing intended for parallel agent use. Those details
  are not load-bearing for the product-agnostic operating rule and should stay out
  unless needed.

## Prompting Pattern To Publish

Prefer a small assignment contract over a transcript summary:

```text
Outcome:
Read first / canonical state:
Scope and non-goals:
Decisions already made:
Acceptance and verification:
Authority and stop conditions:
Return:
```

For a coordinator, add ownership of integration and durable state. For an
independent verifier, prohibit source mutation and require findings, evidence, and
gaps. A prompt can be short when repository guidance, a work item, and a commit
already make these fields discoverable.

## Evidence Boundaries

- Do not claim compaction eliminates context degradation or durable state.
- Do not claim separate review is statistically more reliable based on these
  sources.
- Treat recent private-thread findings as author synthesis from an N=1 corpus.
- Keep implementation's own checks distinct from independent verification.
- Preserve the Manual's one-task-per-thread boundary; reject unrelated mega-threads.
