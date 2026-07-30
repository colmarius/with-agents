---
title: "Software Engineering Is Becoming Plan and Review — Louis Knight-Webb, Vibe Kanban"
videoId: W76woOYHlvY
sourceUrl: "https://www.youtube.com/watch?v=W76woOYHlvY"
publishedAt: "2026-05-02T21:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Louis Knight-Webb, identified with Vibe Kanban in the source title, says he founded Vibe Kanban and started the London chapter of AI Tinkers. He frames the talk around what software engineers do as coding agents absorb more implementation work ([00:00:07]-[00:01:10]).

Knight-Webb argues that AI-assisted software engineering shifts human effort from writing code toward planning and review rather than simply returning coding time. He contrasts specification-heavy delegation with looser prompting followed by iterative review, then connects longer agent runs to interfaces for supervising several workstreams without constant context switching ([00:02:01]-[00:07:01], [00:07:50]-[00:13:11]).

## Key Ideas

- Knight-Webb divides software work into planning, code writing, and review, and says successive coding tools have reduced the writing share while displacing much of that effort into planning and review ([00:01:10]-[00:02:50]).
- He contrasts a plan-heavy approach that tries to resolve requirements and edge cases before delegation with a review-heavy approach that starts quickly and corrects incomplete work through repeated feedback ([00:02:50]-[00:05:00]).
- He says the appropriate balance depends on the task: interactive front-end features may require tighter human iteration, while back-end features, migrations, and maintenance can be more specification- and test-driven ([00:05:59]-[00:07:01]).
- As agents run type checks, tests, and browser workflows, Knight-Webb expects each turn to take longer; he treats extra runtime as worthwhile when it reduces human correction and forecasts stronger automated front-end QA ([00:07:50]-[00:09:35]).
- Once runs exceed the time a developer will wait synchronously, he proposes supervising several isolated streams so one result becomes ready while another runs ([00:09:35]-[00:11:18]).
- His interface requirements include task planning, code and visual review, focused handoffs between workstreams, and shepherding completed changes through pull-request feedback and deployment ([00:11:18]-[00:13:11]).
- Knight-Webb uses Vibe Kanban to generate and preview a shutdown announcement, then open a pull request. The live flow also surfaces an unexplained uncommitted-changes issue before the deployment completes ([00:14:01]-[00:17:48]).

## Practical Implications

- Decide how much to specify before delegation according to the task's observable behavior and review cost, rather than applying one planning template to every change ([00:03:56]-[00:07:01]).
- Let agents spend additional time on deterministic checks and browser feedback when that can reduce expensive human back-and-forth ([00:07:50]-[00:09:35]).
- Isolate concurrent workstreams and design the supervision interface around deliberate review points instead of frequent attention interrupts ([00:09:35]-[00:13:11]).
- Keep code review and deployment state visible even when an agent creates the implementation and pull request ([00:13:11]-[00:17:48]).

## Questions and Tensions

- The planning-versus-review matrix is Knight-Webb's experience-based heuristic; the talk does not compare task classes, planning time, review time, or defect outcomes under controlled conditions ([00:02:50]-[00:07:01]).
- He forecasts browser-driven front-end QA while saying he had not met anyone using it in mainstream development, so the projected reduction in human review was not demonstrated ([00:08:49]-[00:09:35]).
- Parallel work can fill agent wait time, but the talk does not measure the integration cost, cognitive load, or conflict rate of supervising several streams ([00:09:35]-[00:13:11]).
- Knight-Webb reports 30,000 monthly active users and 25,000 GitHub stars while explaining that Vibe Kanban's subscription economics were unsustainable without enterprise sales or token resale; usage did not establish a viable business model ([00:14:01]-[00:16:56]).
- The live shutdown demo generated and deployed a post quickly, but its unexplained uncommitted-changes state illustrates that a successful visible outcome does not account for every repository-state question ([00:14:50]-[00:17:48]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=W76woOYHlvY)
- [transcript.md](./transcript.md)
