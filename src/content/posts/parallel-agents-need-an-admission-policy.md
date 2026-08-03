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
Chris Parsons makes the corresponding systems point: if review or release is the
constraint, producing more code can make the team slower rather than faster
([01:35:07–01:40:20](https://www.youtube.com/watch?v=2TLXsxkz0zI&t=5707s)).

The decision before launch is therefore not merely “Can these agents work in
parallel?” It is:

1. What class of work is this?
2. Where can attempts overlap?
3. What downstream constraint caps work in progress?
4. When does an attempt become stale?
5. Who selects and integrates the result?
6. What evidence must survive the merge?

This article calls the answer a **parallel-work admission policy**. That policy
is editorial synthesis across the sources below, not a framework any presenter
named. It fills the decision before the per-lane workflow in
[Small Threads, Durable State](/posts/small-threads-durable-state): whether one
task should become several lanes at all.

## Classify the work before choosing concurrency

> Different kinds of fan-out need different stop and integration rules.

Rustin Banks of Google Jules distinguishes two forms of parallelism. One is
multitasking across separate backlog items. The other is variation: several
agents try different approaches to the same task, after which tests or a person
select a result
([00:03:51–00:04:44](https://www.youtube.com/watch?v=X4BwOu0GWb8&t=231s)).
That distinction is the start of an admission policy, because independent work
and competing work should not enter the same queue under the same rules.

Use four task classes:

| Task class | Admit when | Required control |
| --- | --- | --- |
| **Parallel discovery** | Searches, reviews, experiments, or design critiques can be performed without changing shared state. | Name one synthesis owner and one decision the findings must inform. |
| **Independent mutation** | Lanes have genuinely separate files, services, or contracts, and their dependencies are already available. | Claim the work, isolate each environment, and declare merge order and ownership. |
| **Competing variation** | Several approaches can be judged against the same success condition. | Predeclare selection criteria, admit only one result, and cancel the losers. |
| **Shared mutation** | Attempts would touch the same interfaces, schemas, dependencies, or behavior. | Serialize by default, or partition the shared state before launching. |

The conservative starting rule is **parallel discovery, serial mutation**. Luke
Alvoeiro reports that Factory adopted that shape after concurrent workers
conflicted, duplicated work, and made inconsistent architectural decisions. Its
Missions workflow serializes feature mutation while parallelizing read-only
search, API research, and review
([00:09:23–00:10:15](https://www.youtube.com/watch?v=ow1we5PzK-o&t=563s)).
Parsons similarly describes an attempt to run six or seven agents over a planned
dependency graph that failed through contention and duplicate implementation
([00:21:38–00:27:29](https://www.youtube.com/watch?v=2TLXsxkz0zI&t=1298s)).

Those are presenter reports, not controlled comparisons, and serialization is
not a universal law. It is a safe default when the team has not yet shown that
mutation boundaries are real. Separate worktrees or VMs prevent filesystem and
runtime interference; they do not prevent two clean branches from implementing
contradictory decisions.

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
wip_cap: 2 active attempts; 1 result may be integrated
stale_when:
  - the retry contract or test baseline changes
  - another attempt is selected
  - the integration slot is no longer available
cancel: stop the stale lane and preserve only its useful findings
selection:
  - reject any attempt that fails the declared behavior
  - owner chooses the smallest understandable passing change
integration_owner: API client maintainer
post_merge_evidence:
  - run the contract suite on the combined mainline state
  - inspect timeout and cancellation logs
```

The record makes three often-hidden facts explicit.

First, isolation and independence are not synonyms. Both attempts above are
isolated, but they intentionally collide and only one may survive. Second, the
cap counts active attempts, including candidates that will be discarded. They
still consume compute, tests, attention, and selection time. Third, the
integration owner is named before output exists. “Open a pull request and see who
reviews it” is not ownership.

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

- the number of integration owners actually available in the decision window
- the number of changes CI and test environments can evaluate without delaying
  feedback past its useful lifetime
- the amount of overlapping code or shared infrastructure among active lanes
- the current review and release queue, including ordinary human-authored work
- the number of variants a decision owner can compare with real attention

Count the whole queue, not only running agents. An idle branch waiting for
review is work in progress. So is a finished variant waiting for selection. If
the queue is full, the admission decision is “not yet,” even when compute is
available.

Parsons advises teams to claim tickets before work begins and check that nobody
else has just claimed them
([01:31:59–01:34:05](https://www.youtube.com/watch?v=2TLXsxkz0zI&t=5519s)).
That is a minimal collision control. The broader job is to observe where the
queue forms and adjust the cap there. [Measure Outcomes, Not Agent
Activity](/posts/measure-outcomes-not-agent-activity) explains how to test
whether faster implementation is merely displacing cost into review, rework, or
release.

## Cancel stale attempts and integrate once

> Parallel work stays bounded only when obsolete work stops promptly.

An admitted attempt is not entitled to finish. It becomes stale when its
decision context no longer matches the task: the base branch changed under its
assumptions, another lane changed the shared contract, the requirement moved, a
competing result was selected, or the downstream integration slot disappeared.

Write those conditions before launch. Then make cancellation the normal outcome,
not an agent failure. The lane should stop mutating, return any still-useful
finding, and release its environment. Do not keep it alive merely because work
has already been spent.

Loose coordination can help but does not replace the policy. Boris Cherny reports
that Claude Code power users run multiple sessions in terminal tabs, worktrees,
or GitHub Actions and can use Markdown files to communicate between them
([00:16:51–00:17:54](https://www.youtube.com/watch?v=Lue8K2jqfKk&t=1011s)).
Beyang Liu likewise describes subagents as context-isolated building blocks and
parallel use as an intentional skill among advanced users
([00:29:30–00:33:38](https://www.youtube.com/watch?v=F_RyElT_gJk&t=1770s)).
Those practices provide execution surfaces. They do not decide which attempt is
still authoritative.

One named integration owner must make that decision. The owner:

1. confirms that the task and selection criteria are still current
2. chooses or rejects candidate results
3. reconciles accepted work against the latest shared state
4. runs the declared evidence on the combined result
5. closes or cancels every remaining attempt

Hugo Santos of Namespace proposes a more automated future version: completed
agent changes enter a pre-merge queue that reconciles overlapping candidates
into serial repository history before a person approves intent and outcome
evidence
([00:13:02–00:14:51](https://www.youtube.com/watch?v=VktrqzQgytY&t=782s)).
That is a proposed architecture, not an established operating result. The
durable part is simpler: parallel production still needs one serialized point
where accepted state, ownership, and evidence become authoritative.

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

[Agentic Coding in 2026](/posts/agentic-coding-2026) provides the broader
workflow map. [Amp as a Factory-Era Coding-Agent Case
Study](/posts/amp-factory-era-case-study) shows one product-specific set of
delegation and lifecycle controls. This article owns the gate before either
becomes parallel: classify the work, name the constraint, cap the queue, cancel
stale attempts, and integrate once.

## Sources used

- [Rustin Banks, “Your Coding Agent Just Got Cloned And Your Brain Isn't Ready”](https://www.youtube.com/watch?v=X4BwOu0GWb8), a Google Jules product talk with presenter-reported usage; especially [00:01:59–00:04:44] on workflow bookends, independent tasks, and competing variations.
- [Kyle Mistele, “Loop Engineering from First Principles”](https://www.youtube.com/watch?v=xIt_mTQp6mY), a HumanLayer workflow account; especially [00:13:17–00:16:13] on incremental pull requests, feedback, and one-open-PR backpressure.
- [Luke Alvoeiro, “The Multi-Agent Architecture That Actually Ships”](https://www.youtube.com/watch?v=ow1we5PzK-o), a Factory product and architecture account rather than a controlled comparison; especially [00:09:23–00:10:15] on serial mutation and parallel read-only work.
- [Chris Parsons, “Ralph Loops: Build Dumb AI Loops That Ship”](https://www.youtube.com/watch?v=2TLXsxkz0zI), a workshop and personal operating account; especially [00:21:38–00:27:29] and [01:31:59–01:40:20] on failed dependency-heavy fan-out, ticket claiming, constraints, review, and release.
- [Maggie Appleton, “Collaborative AI Engineering”](https://www.youtube.com/watch?v=ClWD8OEYgp8), a GitHub Next research talk whose demonstrated ACE system is experimental; especially [00:02:42–00:05:12] on late alignment and coordination debt.
- [Beyang Liu, “The Emerging Skillset of Wielding Coding Agents”](https://www.youtube.com/watch?v=F_RyElT_gJk), a Sourcegraph and Amp product talk with power-user observations; especially [00:29:30–00:33:38] on subagent context isolation, parallel use, and human responsibility.
- [Boris Cherny, “Claude Code & the Evolution of Agentic Coding”](https://www.youtube.com/watch?v=Lue8K2jqfKk), an Anthropic product talk; especially [00:16:51–00:17:54] on terminal tabs, worktrees, GitHub Actions, and loose file-based coordination.
- [Hugo Santos and Madison Faulkner, “CI/CD Is Dead, Agents Need Continuous Compute and Computers”](https://www.youtube.com/watch?v=VktrqzQgytY), a Namespace and NEA talk whose pre-merge design is a proposal; especially Santos at [00:13:02–00:14:51] on reconciliation and serialized repository history.
