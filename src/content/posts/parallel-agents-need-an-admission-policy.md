---
title: 'Parallel Agents Need an Admission Policy'
description: 'A practical pre-launch policy for classifying parallel agent work, capping it at integration capacity, cancelling stale attempts, and assigning one owner for the combined result.'
pubDate: 2026-08-03
tags: ['AI Agents', 'Workflows', 'Engineering Leadership', 'Orchestration']
draft: false
unlisted: false
order: 9
---

## Parallelism is an admission decision

> Do not ask how many agents can run. Ask how many results the system can absorb.

Starting another coding agent is cheap. Integrating another result is not. Every
parallel attempt can add a branch to reconcile, a decision to revisit, a test run
to interpret, and a change someone must own after merge.

Maggie Appleton of GitHub argues that faster implementation has removed many of
the early alignment points where teams used to catch wrong or overlapping work.
The unresolved decisions now arrive later as merge conflicts, duplicate changes,
and pull-request queues that reviewers lack context for
([00:02:42–00:05:12](https://www.youtube.com/watch?v=ClWD8OEYgp8&t=162s)).

This article calls the pre-launch decision a **parallel-work admission policy**:
classify the fan-out, identify overlap, name the downstream constraint, cap admitted
work, declare staleness, and assign one selection and integration owner. The policy
is editorial synthesis, not a framework named by any presenter. It decides whether
one task should become several lanes; [Right-Sized Threads, Durable State](/posts/small-threads-durable-state)
owns what each admitted lane must preserve.

## Classify the work before choosing concurrency

> Different kinds of fan-out need different stop and integration rules.

Rustin Banks distinguishes parallel backlog work from competing attempts to the
same task, after which tests or a person select a result
([00:03:51–00:04:44](https://www.youtube.com/watch?v=X4BwOu0GWb8&t=231s)). Turn
that distinction into a two-step classification: first ask whether lanes only
return findings or mutate state; then classify mutating work as independent,
competing, or shared.

That produces four operational outcomes:

| Task class | Admit when | Required control |
| --- | --- | --- |
| **Parallel discovery** | Searches, reviews, experiments, or design critiques can be performed without changing shared state. | Name one synthesis owner and one decision the findings must inform. |
| **Independent mutation** | Lanes own disjoint behavior and contracts, their dependencies are available, and no selection between results is required. Separate files alone do not qualify. | Claim the work, isolate each environment, and declare merge order and ownership. |
| **Competing variation** | Several approaches can be judged against the same success condition. | Predeclare selection criteria, admit only one result, and cancel the losers. |
| **Shared mutation** | Attempts would touch the same interfaces, schemas, dependencies, or behavior. | Serialize by default, or partition the shared state before launching. |

The conservative starting rule is **parallel discovery, serial mutation**. Luke
Alvoeiro reports that Factory adopted that shape after concurrent workers
conflicted, duplicated work, and made inconsistent architectural decisions. Its
Missions workflow serializes feature mutation while parallelizing read-only
search, API research, and review
([00:09:23–00:10:15](https://www.youtube.com/watch?v=ow1we5PzK-o&t=563s)).

This is a presenter report, not a controlled comparison, and serialization is not
universal. It is a safe default until the team has shown that mutation boundaries
are real. Worktrees or VMs prevent filesystem and runtime interference; they do not
prevent contradictory clean branches.

## Put an admission record in front of execution

> If the team cannot fill in the record, it is not ready to multiply the work.

The smallest useful policy is a short record attached to the task before any
agent starts. This example admits two competing approaches to one change:

```yaml
work: replace the legacy retry loop
class: competing-variation
success:
  - existing contract suite passes
  - timeout and cancellation behavior is unchanged
  - maintainer can explain the selected control flow
overlap:
  - both attempts modify src/client/retry.ts
  - lockfile changes are expected
isolation: separate worktree and test environment per attempt
constraint: one API client maintainer is available to compare and integrate
wip_cap: 2 admitted attempts; 1 result may be integrated
stale_when:
  - the retry contract or test baseline changes
  - another attempt is selected
  - the integration slot is no longer available
cancel: stop the stale lane and preserve only its useful findings
selection:
  - reject any attempt that fails the declared behavior
  - owner chooses the smallest understandable passing change
selector_and_integration_owner: API client maintainer on call
post_merge_evidence:
  - run the contract suite on the combined mainline state
  - inspect timeout and cancellation logs
```

The record exposes three facts. Isolation does not make overlapping attempts
independent. The cap counts every admitted attempt until it is integrated or
cancelled, including finished candidates waiting for selection. The selector and
integration owner is assigned before output exists; “open a pull request and see
who reviews it” is not ownership.

The `success` and `post_merge_evidence` fields define only the proof contract;
[Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the full
risk-scaled proof stack. The admission record's job is to make that proof common
across attempts and to require it again after integration, when independently
passing branches may interact.

## Let downstream capacity set the cap

> A work-in-progress limit belongs at the constraint, not at the launcher.

There is no useful universal number of parallel agents. Set the cap from the
scarce stage that must accept their outputs: product alignment, specialist
review, CI, merge reconciliation, deployment, or post-release observation.

Kyle Mistele gives a concrete backpressure rule from HumanLayer's loop workflow.
Before a scheduled run starts, it checks whether a pull request with that loop's
label remains open. If so, it stops. The result is at most one open pull request
per loop, avoiding a stack of duplicate, conflicting, unreviewed work
([00:15:10–00:16:13](https://www.youtube.com/watch?v=xIt_mTQp6mY&t=910s)).
That exact limit is not mandatory. The principle is: **do not create the next
unit when the previous unit has not cleared the human or machine gate that makes
it useful.**

A practical cap can use several signals:

- integration-owner capacity in the decision window;
- CI and test capacity before feedback arrives too late to guide the work;
- the current review and release queue, including human-authored changes.

Count running, finished-but-unselected, and review-waiting work. If that queue is
full, the admission decision is “not yet,” even when compute is available.

[Measure Outcomes, Not Agent Activity](/posts/measure-outcomes-not-agent-activity)
owns whether this cap improves delivery rather than displacing cost into review,
rework, or release.

## Cancel stale attempts and serialize integration

> Parallel work stays bounded only when obsolete work stops promptly.

An admitted attempt is not entitled to finish. It becomes stale when its
decision context no longer matches the task: the base branch changed under its
assumptions, another lane changed the shared contract, the requirement moved, a
competing result was selected, or the downstream integration slot disappeared.

Write those conditions before launch. If staleness can arise mid-run, the owner
also needs a way to inspect and stop the lane before completion. Steve Yegge's
explicitly experimental Gas Town account illustrates the observability half by
contrasting first-class, contactable workers with opaque subagents that report only
when finished
([00:35:04–00:35:55](https://www.youtube.com/watch?v=aFsAOu2bgFk&t=2104s)).

Then make cancellation the normal outcome, not an agent failure. The lane should
stop mutating, return any still-useful finding, and release its environment. Do not
keep it alive merely because work has already been spent.

One named selector and integration owner must make the accepted state authoritative.
The owner:

1. confirms that the task and selection criteria are still current;
2. chooses or rejects candidate results;
3. reconciles accepted work against the latest shared state;
4. runs the declared evidence on the combined result;
5. closes or cancels every remaining attempt.

Independent lanes may all be accepted in the declared merge order; competing
variants admit only the selected result. In both cases, one owner reconciles
accepted work against the latest shared state and makes the resulting evidence
authoritative.

## Default to one lane until the record says otherwise

> Parallelism is earned by clear boundaries and available integration capacity.

Before fan-out, ask:

- Is this discovery, independent mutation, competing variation, or shared
  mutation?
- Can every lane be judged against an observable success condition?
- Are overlap and environment boundaries explicit?
- Does the cap reflect the current review, merge, and release queue?
- Will stale attempts stop when assumptions or selection change?
- Is there one named selector and integration owner?
- Will evidence run again after the accepted work reaches shared state?

If any answer is missing, start with one lane. Learn where it blocks, improve
that boundary, and admit more work only when the downstream system can absorb
it. The goal is not maximum agent occupancy. It is a stable flow of changes the
team can understand, integrate, and own.

[The Amp case study](/posts/amp-factory-era-case-study) covers product-specific
execution surfaces behind this product-agnostic gate. This article owns the decision
to classify, constrain, cap, cancel, and serialize integration through one owner.

## Sources used

- [Rustin Banks, “Your Coding Agent Just Got Cloned And Your Brain Isn't Ready”](https://www.youtube.com/watch?v=X4BwOu0GWb8) — Google Jules product talk on independent work and competing variation.
- [Kyle Mistele, “Loop Engineering from First Principles”](https://www.youtube.com/watch?v=xIt_mTQp6mY) — HumanLayer workflow account with one-open-PR backpressure.
- [Luke Alvoeiro, “The Multi-Agent Architecture That Actually Ships”](https://www.youtube.com/watch?v=ow1we5PzK-o) — Factory product and architecture account, not a controlled comparison.
- [Maggie Appleton, “Collaborative AI Engineering”](https://www.youtube.com/watch?v=ClWD8OEYgp8) — GitHub Next research talk on late alignment and coordination debt.
- [Steve Yegge, “From IDEs to AI Agents”](https://www.youtube.com/watch?v=aFsAOu2bgFk) — experimental Gas Town account on inspectable, contactable workers versus opaque subagents.
