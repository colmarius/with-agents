# Research

## Recommendation

Proceed with an article centered on **admission and integration capacity**.
Oracle rejected two broader alternatives:

- An attention-aware control-plane article would depend too heavily on
  experimental vendor demonstrations and would age quickly.
- A serial-mutation/parallel-discovery article is one useful rule, not a complete
  reader job. Keep it as the default admission posture inside this article.

## Article brief

**Working title:** Parallel Agents Need an Admission Policy

**Thesis:** Agent capacity is cheap while proof, review, and merge capacity are
not, so teams should treat fan-out as an admission decision: classify the task,
isolate attempts, cap concurrency by the downstream constraint, cancel stale
work, and name one integration owner before launching.

**Audience:** Tech leads and agent-heavy practitioners already running more than
one agent session or loop.

**Reader job:** Given one real backlog, decide which tasks may fan out, set a
work-in-progress cap tied to a named review or merge constraint, and record the
cancellation rule and integration owner before launch.

## Scope

- Distinguish independent backlog tasks, competing variants of one task, and
  serial-only work.
- Default to parallel discovery and review but serial mutation when overlap or
  integration risk is not controlled.
- Require per-attempt isolation while making clear that branches and worktrees do
  not solve selection or integration.
- Use proof, review, release, and merge capacity as admission constraints.
- Require explicit cancellation rules for stale or losing attempts.
- Name one person or role responsible for the integrated result.

## Non-goals

- Do not restate the factory-era overview from `agentic-coding-2026.md`.
- Do not repeat `.agents/work/`, handoff, or small-thread mechanics from
  `small-threads-durable-state.md`; assume each admitted lane uses that procedure.
- Do not repeat the proof ladder from `make-the-agent-prove-it.md`; treat proof as
  one rate-limiting resource.
- Do not re-present adoption studies or review-coverage numbers from
  `measure-outcomes-not-agent-activity.md`; link to its method for finding the
  active constraint.
- Do not turn the article into an Amp walkthrough or a comparison of Cmd+Ctrl,
  AgentCraft, Ona, or other control-plane products.
- Do not use individual attention or fatigue as the main thesis; one link to
  `behavior-over-explanation.md` is enough.

## Practical artifact

The article should contain a fillable **parallel-work admission record**:

| Field | Decision to record before launch |
| --- | --- |
| Task class | Independent, competing variant, or serial-only |
| Goal and acceptance target | Shared definition of success for all admitted lanes |
| Isolation plan | Branch, worktree, sandbox, or other bounded environment |
| Declared overlap | Files, dependencies, services, schemas, or external state that may collide |
| WIP cap | Maximum concurrent lanes and the named constraint that sets it |
| Cancellation rule | When a stale, losing, conflicting, or superseded attempt stops |
| Selection rule | How competing variants will be compared |
| Integration owner | One accountable person or role for the combined result |
| Merge evidence | Checks required after integration, not only per lane |

This artifact is editorial synthesis. No source presents it as a complete
standard. Its distinct job is deciding whether and how work fans out before the
per-lane workflow begins.

## Candidate source anchors

Every cited summary is currently `status: reviewed`. The implementation thread
must still compare each adjacent claim against the full transcript span before
drafting public prose.

| Video | Speaker boundary | Candidate anchor | Claim to verify |
| --- | --- | --- | --- |
| `X4BwOu0GWb8` | Rustin Banks, Google Labs product manager for Jules | [00:03:51–00:04:44] | Independent backlog multitasking and competing variants are different fan-out classes. |
| `X4BwOu0GWb8` | Rustin Banks, Google Labs product manager for Jules | [00:01:59–00:03:51] | Task creation and downstream review, merge, and testing are fan-out bookends. |
| `X4BwOu0GWb8` | Rustin Banks, Google Labs product manager for Jules | [00:08:47–00:10:34] | The demonstration's combined merge remained unfinished; use only to illustrate that integration remains work. |
| `xIt_mTQp6mY` | Kyle Mistele, HumanLayer | [00:13:17–00:16:13] | One incremental pull request per iteration and refusal to continue while the prior labeled pull request is open provide review backpressure. |
| `ow1we5PzK-o` | Luke Alvoeiro, identified with Factory in the source title | [00:09:23–00:10:15] | Factory serializes mutating work after conflicts while parallelizing read-only search, research, and review. |
| `2TLXsxkz0zI` | Chris Parsons, identified with Cherrypick in the source title | [00:21:38–00:27:29] | Parsons replaced failed pre-planned dependency concurrency with serial next-ticket selection. |
| `2TLXsxkz0zI` | Chris Parsons, identified with Cherrypick in the source title | [01:31:59–01:40:20] | Teams should claim tickets, reduce contention, and improve the review or release constraint before generating more work. |
| `ClWD8OEYgp8` | Maggie Appleton, GitHub staff research engineer working with GitHub Next | [00:03:35–00:05:12] | Private plans plus fast implementation create duplicated work, merge conflicts, and opaque review queues. |
| `F_RyElT_gJk` | Beyang Liu, Sourcegraph co-founder and CTO; the talk discusses Amp | [00:29:30–00:33:38] | Parallel sessions and subagents do not remove human responsibility for the shipped result. |
| `Lue8K2jqfKk` | Boris Cherny, Anthropic | [00:15:49–00:17:54] | Worktrees, tabs, GitHub Actions, and Markdown provide loose isolation and coordination for parallel sessions. |
| `VktrqzQgytY` | Hugo Santos, Namespace CEO, and Madison Faulkner, NEA investor | [00:13:02–00:14:51] | Pre-merge reconciliation is a proposal or forecast, not an evaluated operating result. |

Optional strengthening source: inspect `rnDm57Py54A` [00:20:33–00:30:43] for
Eric Zakariasson's account of isolated environments and mutation boundaries.
Include it only if it adds a distinct claim rather than another vendor example.

## Claims and caveats

- Label the task taxonomy and admission record as editorial synthesis.
- Do not claim a universal concurrency number. The cap comes from the named
  downstream constraint.
- Do not use presenter-reported throughput multipliers as established outcomes.
- Treat Banks's unfinished merge as an illustration, not evidence that variant
  fan-out fails.
- Treat Alvoeiro's and Parsons's serialization choices as self-reported
  experience, not controlled comparisons.
- Do not claim pre-merge reconciliation works; the source presents a forecast.
- Keep Faulkner's investor affiliation distinct from operational deployment
  experience.
- Do not claim experimental collision visualizations prevent conflicts or reduce
  supervisory load.

## Internal-link roles

- `/posts/agentic-coding-2026`: parent map; this article expands one factory-era
  admission and review-capacity claim.
- `/posts/small-threads-durable-state`: procedure each admitted lane follows.
- `/posts/make-the-agent-prove-it`: proof demanded from each lane and after merge.
- `/posts/amp-factory-era-case-study`: one product-specific implementation of
  bounded delegation, budgets, and integration ownership.
- `/posts/measure-outcomes-not-agent-activity`: method for identifying review,
  queue, and release constraints.
- `/posts/behavior-over-explanation`: optional one-line pointer for personal
  attention limits.
- `/resources/coding-with-agents`: source navigation.
