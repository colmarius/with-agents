# Research: Published post practice audit

**Date:** 2026-08-13
**Status:** complete
**Question:** Which published coding-agent articles remain durable and distinct, and what is the smallest
evidence-backed action for stale, misleading, redundant, or no-longer-relevant guidance?

## Evidence boundaries

- Repository posts, reviewed summaries, transcript sidecars, and public resource metadata can support public
  claims within their stated source boundaries.
- Current first-party documentation governs present product behavior. Dated announcements remain dated examples.
- Recent authenticated Amp threads are private N=1 workflow evidence. They may challenge or corroborate an
  editorial thesis, but public prose may use only bounded author synthesis without private details.
- Newer material is not automatically better. Incorporation requires thesis fit, evidence strength, durability,
  novelty, manageable caveats, and load-bearing value.

## Inventory and structural audit

The baseline has 11 `draft: false` Markdown files: eight listed posts and three unlisted routes. The unlisted
set is `behavior-over-explanation` plus the extended and image durable-context decks. The audit checked all
titles, descriptions, theses, section-level advice, internal links, source roles, article/slide projection,
overlap, and continued-publication value. All 59 baseline internal links resolve. Every normal rendered `##`
section opens coherently for the slide extractor, and all referenced image-deck assets exist.

Nine posts cite material newer than their original publication date. Preserving `pubDate` while adding visible
`updatedDate` provenance is more accurate than republishing old articles under new dates. The two alternate
durable-context article pages duplicate the canonical thesis by design, so they should remain usable routes but
canonicalize to the reader-first article and stay out of search indexes.

## Final per-post decision matrix

| Post and public role | Thesis, evidence, links, slides, and overlap | Decision | Smallest justified action |
| --- | --- | --- | --- |
| `agent-ready-interfaces.md` — design contract for agent-operable surfaces | Title and description match a distinct path from composability through feedback, recovery, mutation gates, and human return. Practitioner examples are bounded; links and slide messages are coherent. The capability boundary omitted indirect shared-service reachability. | **Refresh** | Label the protected-expectations rule as synthesis; add the preliminary OpenAI incident as a transitive-capability caveat; display the update date. |
| `agentic-coding-2026.md` — series map | The map-level thesis, navigation table, and six specialist links remain current. Appleton and other reports are attributed rather than presented as benchmarks. Some overlap is intentional routing, not a second owner of the mechanics. | **Refresh** | Keep prose unchanged; display the prior update date so the postdated Fable source is not presented under only the original publication date. |
| `amp-factory-era-case-study.md` — product-specific case study | The reusable contracts remain distinct from the field guide. Current Manual, Orbs, Models, Plugin API, Chronicle, and Pricing checks confirm modes, delegation roles, portals, schedules, webhooks, OIDC, and Multiplayer. The orb announcement and pricing sentence were imprecise. | **Refresh** | Correct what the Aug. 7 announcement added and distinguish included, linked-provider, and unconstrained pricing; preserve dated volatile claims; display the update date. |
| `behavior-over-explanation.md` — source-specific evaluation method, unlisted | The thesis—test explanations through discriminating behavior—is narrower than the proof article. Paper-level claims consistently remain Sanfilippo's account; coding examples belong here. Public-but-unlisted remains useful for source-linked readers. | **Refresh** | Keep prose and route unchanged; display the prior update date for the Aug. 10 source. |
| `durable-context-coding-agents.md` — canonical reader-first repo-memory article | The thesis remains strong but the fixed work-item tree and mandatory handoff sequence contradicted current dot-agents. Existing prose already warns that committed context can be stale, names current authority, distinguishes rerun evidence, and says small checkpoints can stay light. | **Refresh** | Make `index.md` the required owner; make support artifacts and handoff optional; restore current-thread execution and evidence/promote/commit/remove closeout; display the update date. |
| `durable-context-coding-agents-extended-deck.md` — richer slide-first alternate, unlisted | The route earns its place through 19-slide pacing and custom figures, not a separate thesis. Its repeated work-item contract had to stay synchronized with the canonical post. | **Refresh** | Apply the same lifecycle correction; preserve deck pacing; canonicalize/noindex the article page; display the update date. |
| `durable-context-coding-agents-image-deck.md` — visual alternate, unlisted | The route provides a distinct image-led presentation. Slide 13a froze the old mandatory-looking file set; notes alone could not repair slide-only reading. | **Refresh** | Regenerate only the stale work-item image; keep other images; canonicalize/noindex the article page; display the update date. |
| `make-the-agent-prove-it.md` — risk-scaled proof contract | The evidence ladder, discriminating-check audit, real-system boundary, external oracles, review packet, and human-judgment limit remain the strongest current thesis. Practitioner examples are bounded and synthesis labels are already sufficient. | **Refresh** | Keep prose unchanged; display the prior update date for the July 31 source. |
| `measure-outcomes-not-agent-activity.md` — adoption measurement framework | Randomized, observational, vendor, and presenter evidence remains unusually well bounded by design, population, period, and outcome layer. The METR update sentence was directionally right but less source-faithful than it could be. | **Refresh** | Match METR's “more sped up now than early 2025” wording while retaining the selection/concurrency limit; display the update date. |
| `parallel-agents-need-an-admission-policy.md` — fan-out admission owner | The admission record, task classes, downstream WIP cap, cancellation conditions, and one integration owner remain distinct. Reports are explicitly non-comparative, no universal worker count is claimed, and overlap is limited to necessary setup and links. | **Keep unchanged** | No repository action. |
| `right-sized-threads-durable-state.md` — thread/responsibility procedure | The completed refresh correctly makes coherence and responsibility—not token count—the boundary and treats compaction as capability rather than proof. A local commit was incorrectly described as sufficient transport to a fresh orb; exact compaction and closeout wording also drifted. | **Refresh** | Say “over 68,” separate baseline identity from authorized Git/file transport, add work-item closeout, and display the update date. |

No post met the bar for merge/retire or further investigation. Titles and descriptions still expose distinct
reader jobs; alternate decks retain presentation value while canonical metadata resolves article duplication.

## Cross-project private evidence synthesis

A read-only sample of 25 authenticated-user threads from late February through August 2026 covered unrelated
implementation, research, UI, security, tooling, and environment work. A prior bounded snapshot counted 86
recent threads and 220 direct user messages. These are query-selected N=1 observations, not productivity or
quality comparisons.

Repeated durable patterns:

- Prompting scales with risk: terse outcome requests work for atomic tasks; risky work benefits from scope,
  authority, acceptance evidence, stop conditions, and a return contract, followed by short steering.
- One current owner integrates actual state, reconciles reports, reruns combined checks, and retains delivery
  authority. Delegation works best for independent work with a proof target and one return path.
- Durable files earn their cost when continuity, coordination, decisions, or auditability matter. Mandatory
  plans, progress logs, and handoff artifacts became duplicated ceremony for small work.
- Thread boundaries follow responsibility and independence changes. Long coherent threads are practical with
  compaction, but compaction is neither correctness nor perfect recall.
- Verification must match the failure mode and distinguish observed evidence from inherited claims. Green
  checks can coexist with an unverified UI; manual or expert review can also miss final-state regressions.
- Research reduces uncertainty but does not authorize implementation, publication, push, merge, deployment, or
  other shared-state changes.
- Progressive disclosure through short routing guidance and task-triggered skills remains more durable than
  large always-loaded instruction catalogs.

Contradictory evidence ruled out universal one-thread/one-task/one-commit worker-reviewer loops, mandatory
research→plan→handoff pipelines, automatic scoring as acceptance, and prompt-only remediation for deterministic
ownership failures. The public edits use these observations only to test existing theses; no private prompts,
thread identifiers, repositories, paths, secrets, or confidential examples enter public content.

## Current-source decisions

### Incorporated

- Current [dot-agents](https://dot-agents.dev/) lifecycle: authoritative operative contract and a direct
  correction to all three durable-context variants and the closeout procedure.
- Current Amp [Pricing](https://ampcode.com/pricing), [Orbs manual](https://ampcode.com/manual/orbs),
  [orb-sizing announcement](https://ampcode.com/news/size-the-orbs-of-production),
  [Read Bigger Threads](https://ampcode.com/news/read-bigger-threads), and
  [From Agent to Agent](https://ampcode.com/news/from-agent-to-agent): direct corrections to product claims.
- OpenAI's preliminary [OpenAI–Hugging Face incident](https://www.youtube.com/watch?v=87DyyMV0kCY): a bounded,
  load-bearing counterexample to treating direct sandbox restrictions as the full capability boundary.
- METR's [2026 experiment-design update](https://metr.org/blog/2026-02-24-uplift-update/): source-faithful
  wording for a claim already central to the measurement article.

### Research-only

- Dex Horthy's factory and context-engineering reports, Velocity Sickness, recent State of Agentic Coding
  episodes, and Amp's Pave the Road note corroborate early alignment, local evals, and bounded execution. Existing
  stronger sources already carry those roles, so another recap would not be load-bearing.
- Current AGENTS.md and Agent Skills standards confirm the file/folder mechanisms. The “map” and “procedure”
  metaphors remain visibly editorial operating models, not purported standard fields.

### Ignored for this refresh

- Global plugins/skills and current model-routing announcements do not contradict the narrower repo-local and
  mode-level claims. Adding them would make product-agnostic posts less durable.
- New vendor efficiency figures and aspirational “100x” reports lack the comparison design or novelty needed to
  change a public thesis.

## Open questions

- None. The next decision is whether the review should accept this narrow refresh; no evidence supports retiring
  a current route or broadening any article with another practitioner recap.
