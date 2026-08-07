---
title: "DHH’s new way of writing code"
videoId: JiWgKRgdgpI
sourceUrl: "https://www.youtube.com/watch?v=JiWgKRgdgpI"
publishedAt: "2026-04-08T17:14:35Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews David Heinemeier Hansson (DHH), co-owner and CTO of 37signals and creator of Ruby on Rails, about moving from skepticism of autocomplete to an agent-first workflow. DHH says the change came from stronger models and terminal harnesses rather than a change in his standards: agents draft, while he reviews the diff and decides what belongs ([00:31:38]-[00:39:31], [00:44:19]-[00:48:32]).

The account is useful as a detailed personal and internal-company workflow, not as a controlled productivity study. DHH's forecasts about implementation work and software labor remain bets, and his strongest speed claims are anecdotes from projects he knows well ([01:03:21]-[01:07:21], [01:15:07]-[01:23:17]).

## Key Ideas

- DHH separates model capability from interaction design: autocomplete interrupted his thinking, whereas a terminal harness lets a model use tools and return a complete draft for review ([00:32:31]-[00:38:38]).
- His default loop is agent first: ask for a change, inspect the Git diff, commit when it meets the bar, or redirect and edit it when it does not. The model does not remove his responsibility for the result ([00:44:19]-[00:48:32]).
- He treats models and harnesses as separable choices, using OpenCode as his main harness while comparing outputs from multiple models rather than assuming one vendor owns the whole workflow ([00:45:22]-[00:47:28]).
- CLI tools matter because their composability lets an agent cross application boundaries—inspect errors, create a pull request, and report the result—without every integration becoming a bespoke interface ([00:48:32]-[00:52:18]).
- DHH argues that senior engineers currently receive more leverage because architecture knowledge and judgment let them assess generated changes and redirect agents; he does not claim agents are already safe to ship unreviewed in critical systems ([00:54:25]-[00:57:18]).
- Project craft remains an acceptance criterion. He expects generated Ruby and shell code to fit the repository's aesthetics and conventions, and rejects or replaces work that does not ([00:38:38]-[00:39:31], [01:04:25]-[01:07:21]).
- Cheap drafts reduce attachment to implementation and make maintenance, speculative improvements, and experiments economical enough to try and discard ([01:08:14]-[01:11:12]).
- For a risky dual-boot plan, he has Opus and Codex critique each other before he judges the resulting plan, using model disagreement as additional scrutiny rather than as approval ([01:11:12]-[01:13:18]).
- He predicts pressure on implementation-only roles as code becomes cheaper, but explicitly frames timing as uncertain and distinguishes 37signals' open-ended product scope from bounded cost-center software work ([01:15:07]-[01:23:17]).

## Practical Implications

- Start changes with an agent-produced draft, but make the diff—and the behavior it implies—the human review boundary ([00:44:19]-[00:48:32]).
- Encode project conventions and keep senior reviewers close to architecture so faster generation does not lower the merge standard ([00:54:25]-[00:56:15], [01:04:25]-[01:07:21]).
- Prefer small composable CLI surfaces when agents need to coordinate several systems; validate the end-to-end workflow on real tasks ([00:48:32]-[00:52:18]).
- Use independent model critique for high-consequence plans, then retain a human decision gate before implementation ([01:11:12]-[01:13:18]).

## Questions and Tensions

- The reported PR-review throughput and project acceleration come from DHH's recollection in familiar repositories; the episode supplies no baseline protocol, quality follow-up, or independent measurement ([01:03:21]-[01:07:21]).
- Strong craft judgment may make this workflow work unusually well for DHH and senior 37signals engineers; the conversation does not show how less experienced reviewers detect subtle failures ([00:54:25]-[00:57:18]).
- Cheap experiments expand the work teams can attempt, but the episode does not measure the review, operational, or opportunity cost of maintaining the larger output surface ([01:08:14]-[01:15:07]).
- Having two models critique a risky plan can expose disagreements, but agreement between models does not establish that partitioning and boot-record changes are safe ([01:11:12]-[01:13:18]).
- DHH's labor and compensation forecasts extrapolate from a fast-moving personal and internal experience; he repeatedly acknowledges uncertainty about model progress and organizational adaptation ([01:13:18]-[01:23:17]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=JiWgKRgdgpI)
- [transcript.md](./transcript.md)
