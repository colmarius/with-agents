# Research: remaining public article review — 2026-08-07

## Baseline

The 2026-08-07 field-guide and Amp case-study pass established the editorial model:

- Preserve one clear ownership role per article.
- Prefer deletion over expansion; target a roughly 20–30% cut when repetition,
  chronology, inventories, or anecdote catalogs obscure the argument.
- Keep source evidence adjacent to the claim it supports and tighten source ranges
  when prose is removed.
- Remove volatile product detail, repeated series recaps, and material already owned
  by another article.
- Keep practical artifacts, decision rules, and proof boundaries.

The seven in-scope public articles and initial body word counts are:

| Article | Series role | Words before |
| --- | --- | ---: |
| `make-the-agent-prove-it.md` | Risk-scaled evidence ladder | 1,906 |
| `small-threads-durable-state.md` | Day-to-day work-item procedure | 1,682 |
| `behavior-over-explanation.md` | Behavior-first synthesis from Sanfilippo's corpus | 1,303 |
| `measure-outcomes-not-agent-activity.md` | Adoption and outcome measurement framework | 1,572 |
| `agent-ready-interfaces.md` | Agent-facing interface design review | 1,947 |
| `parallel-agents-need-an-admission-policy.md` | Fan-out admission and integration-capacity policy | 1,901 |
| `agentic-coding-2026.md` | Product-agnostic series map | 1,683 |

`agentic-coding-2026.md` was already tightened on 2026-08-07 alongside the Amp case
study, so it is a ranking input and review baseline rather than an implementation
target in this pass. The canonical durable-context article and its alternate decks
were reviewed recently and are also ranking inputs only.

## Per-article findings

### Make the Agent Prove It

- **Verdict:** keep public and listed; it is the only tactical acceptance contract
  for one agent-produced change.
- **Oracle's main finding:** the six-layer stack mixed evidence strength, execution
  controls, evidence packaging, and a human decision. Reframe it chronologically as
  risk and boundaries, behavioral evidence, an evidence packet, then human judgment.
- **Retained:** risk table, executable failing behavior, real-system check, external
  oracle, boundary questions, non-production fixtures, reviewer questions, and the
  reusable prompt.
- **Cut or merged:** opening source/series catalog, broad formal-methods taxonomy,
  repeated speaker recaps, duplicate evidence/human sections, recap ending, and
  editorial source metadata.
- **Terminology correction:** distinguish published conformance suites, approved
  golden fixtures, and differential compatibility tests.
- **Words:** 1,906 before; 1,208 after using the work item's body-count method.

### Small Threads, Durable State

- **Verdict:** keep public and listed; it uniquely owns restartable work-item and
  handoff practice.
- **Oracle's main finding:** present the file schema as this repository's concrete
  dot-agents profile, not a universal or all-required structure. Add the current
  one-active-implementation-owner rule.
- **Retained:** research-to-implementation funnel, restart questions, progress entry,
  handoff skeleton, thread-boundary rule, and final operating procedure.
- **Cut or merged:** repeated schema explanations, site-specific handoff fields,
  universal commit policy, duplicated proof ladder, and non-load-bearing source
  recaps.
- **Accuracy corrections:** only `index.md` is required; `index.md` owns current
  status while `progress.md` remains chronological history; file count does not
  determine whether durable state is warranted.
- **Words:** 1,682 before; 1,144 after.

### Behavior Over Explanation

- **Verdict:** keep public and listed; it uniquely owns the epistemic method behind
  the proof and review practices.
- **Oracle's main finding:** observed behavior is decisive only when the test is
  discriminating. A green suite that could not expose the disputed failure is weak
  evidence too.
- **Retained:** intervention example, architecture ablation, green-suite failure,
  corrected diagnosis, review trade-off, translation disclosure, and attention as a
  precondition for judgment.
- **Cut or merged:** corpus inventory, reading-path metadata, chronological review
  narrative, five-point proof/concurrency policy, and duplicate series framing.
- **Claim corrections:** distinguish ablation from behavioral QA; qualify the Tcl
  test and later model review as Sanfilippo's personal account; call the June item a
  project account rather than an experiment.
- **New artifact:** a falsifiable explanation audit naming the predicted difference,
  counter-evidence, intervention, and evidence produced by the same model.
- **Words:** 1,303 before; 970 after.

### Measure Outcomes, Not Agent Activity

- **Verdict:** keep public and listed; it is the only organization-level adoption
  measurement and rollout-decision framework.
- **Oracle's main finding:** preserve the empirical boundaries and reusable scorecard,
  but correct METR's current-status framing and remove duplicate metric inventories.
- **Retained:** activity/outcome taxonomy, gross-versus-net evidence, controlled and
  observational comparison boundaries, segmentation and selection logging, evidence
  hierarchy, scorecard, and all five rollout decisions.
- **Cut or merged:** source-led opening, duplicate guardrail list, DORA/Intercom
  corroboration, broad segmentation catalog, and non-load-bearing source entries.
- **Evidence corrections:** mark the early-2025 METR slowdown as historical and pair
  it with METR's likely-positive direction but unreliable current effect size; name
  Anthropic's 52 mostly junior Python developers and Trio task; replace vague Cui and
  He affiliation/context language with concrete boundaries.
- **Decision correction:** predeclare worthwhile improvement, maximum guardrail
  regressions, observation window, and segment rules before selecting an action.
- **Words:** 1,572 before; 1,408 after. The smaller 10% cut is intentional because the
  empirical boundaries, scorecard, and decision policy are load-bearing; body prose
  now falls within Oracle's target once the source appendix is excluded.

### Agent-Ready Interfaces

- **Verdict:** keep public and listed; it uniquely owns the agent-facing interface as
  an architectural boundary.
- **Oracle's main finding:** turn eight practitioner examples into one six-contract
  design review rather than allowing source accumulation to imply evidence strength.
- **Retained:** Campos and Jones for composition/queryability, Russo and Campos for
  fidelity, Pell for checkpoints, Luebken and Parsons for mutation boundaries, and a
  practical checklist.
- **Cut or merged:** duplicated opening examples, Emulated infrastructure catalog,
  Rust/language-server proof inventory, unsupported repair-prompt threshold,
  duplicate recovery example, and ten-row checklist.
- **Claim corrections:** mark low-fidelity-simulator danger as article synthesis;
  describe the access hook as checking access rather than enforcing complete access
  control; avoid calling one pattern universally safest.
- **New structure:** compose; inspect and scope; faithful, actionable feedback; cheap
  recovery; explicit, narrow mutation; human return path.
- **Words:** 1,947 before; 1,284 after (1,331 including frontmatter by `wc -w`).

### Parallel Agents Need an Admission Policy

- **Verdict:** keep public and listed; it uniquely owns the decision before fan-out.
- **Oracle's main finding:** make classification hierarchical and replace the
  universal "integrate once" rule with serialized integration through one owner.
- **Retained:** four operational outcomes, conservative discovery/mutation default,
  admission record, one-open-PR backpressure, whole-queue WIP, stale-attempt
  cancellation, owner checklist, and default-to-one-lane gate.
- **Cut or merged:** duplicate opening checklist, second serialization anecdote,
  ticket-claiming detail, orchestration-surface catalog, speculative pre-merge
  architecture, repeated workflow recap, and four source entries.
- **Policy corrections:** independent mutation requires disjoint behavior and
  contracts, not separate files; the record now names the downstream constraint;
  WIP counts admitted work until integration or cancellation; independent lanes may
  all merge in order while competing variants admit one result.
- **Words:** 1,901 before; 1,425 after (1,475 including frontmatter by `wc -w`).

### Agentic Coding in 2026

- **Verdict:** keep public and listed as the product-agnostic map and router for the
  series; the final portfolio ranking places it 5 of 9 after weighing specialist
  distinctiveness and evidence depth.
- **Oracle's finding:** the 2026-08-07 tightening remains coherent and should not be
  reopened. One required navigation defect remained: the table omitted the
  organization-level measurement article.
- **Edit:** added `Measure Outcomes, Not Agent Activity` to `Where to go next`.
- **Words:** 1,683 before; 1,700 after using the work-item method. This is a focused
  navigation correction, not a structural refresh.

## Series ranking

The final Oracle portfolio review ranked the nine listed articles by current
relevance, distinctiveness, durability, actionability, and evidence quality:

| Rank | Article | Tier | Recommendation | Owner role |
| ---: | --- | --- | --- | --- |
| 1 | Your Repo Is the Memory | Core | Keep | Durable intent, procedure, task state, evidence, and learning. |
| 2 | Make the Agent Prove It | Core | Keep | Risk-scaled acceptance contract for one change. |
| 3 | Measure Outcomes, Not Agent Activity | Core | Keep | Organization-level adoption measurement and rollout decisions. |
| 4 | Agent-Ready Interfaces | Strong specialist | Keep | Agent-facing system design and operational feedback contracts. |
| 5 | Agentic Coding in 2026 | Core | Keep | Product-agnostic map and entry point. |
| 6 | Parallel Agents Need an Admission Policy | Strong specialist | Keep | Pre-launch fan-out, WIP, cancellation, and integration gate. |
| 7 | Small Threads, Durable State | Strong specialist | Keep | Restartable work-item, handoff, and implementation procedure. |
| 8 | Behavior Over Explanation | Secondary | Consolidate only if shrinking | Epistemic case for discriminating tests. |
| 9 | Amp as a Factory-Era Case Study | Secondary | Unlist only if shrinking | Dated product case study for durable work contracts. |

### Portfolio recommendation

- Keep all nine while Amp remains an explicit site subject and specialist breadth is
  useful.
- The four-article starter path is `Agentic Coding in 2026` → `Your Repo Is the
  Memory` → `Make the Agent Prove It` → `Measure Outcomes, Not Agent Activity`.
- If the portfolio must shrink to seven, preserve the Amp URL but unlist it, then
  merge the explanation-audit method and steering-versus-acceptance distinction from
  `Behavior Over Explanation` into `Make the Agent Prove It` and unlist the standalone
  behavior article.
- Do not remove `Small Threads, Durable State`; its restart and handoff procedure is
  narrower than durable context but still distinct and actionable.
