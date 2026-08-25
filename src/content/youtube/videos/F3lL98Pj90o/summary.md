---
title: "/wayfinder: Nothing is too big to plan anymore"
videoId: F3lL98Pj90o
sourceUrl: "https://www.youtube.com/watch?v=F3lL98Pj90o"
publishedAt: "2026-07-30T10:17:45Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Matt Pocock presents Wayfinder, a skill for planning work whose decisions cannot fit reliably into one agent session. It stores a map in an issue tracker, splits uncertainty into decision tickets, and updates the available frontier as research, prototypes, discussions, and tasks resolve dependencies.

Pocock positions the map as a multi-session planning aid rather than a permanent specification. His examples come from his own repositories and personal projects; the video explains the workflow but does not independently evaluate its outcomes.

## Key Ideas

- Pocock says single-session planning constrained the size of work he attempted and presents Wayfinder as orchestration across multiple session types and dependent decisions. [00:00:00]-[00:01:00]
- He models ambitious work as a route through fog: an initial grilling session establishes the premise, then unresolved questions may require further grilling, research, or prototyping. [00:02:02]-[00:03:04]
- Wayfinder represents those sessions as tickets, tracks decisions currently on the frontier and uncertainties still in fog, and can also schedule configuration or real-world tasks. [00:03:04]-[00:04:09]
- Maps and decision tickets live in an issue tracker; resolutions are recorded in the child ticket and summarized back into the parent map. Pocock says the skill can be configured for trackers other than GitHub. [00:04:09]-[00:06:14]
- A user first invokes Wayfinder to chart the map, then starts a fresh session for each available ticket by invoking Wayfinder with that ticket. [00:06:14]-[00:07:16]
- Ticket types cover research, prototypes, grilling sessions, and tasks. Blocking relationships defer decisions until their prerequisites are resolved and expose new frontier work as tickets close. [00:07:16]-[00:09:23]
- When the destination is a buildable specification, Pocock converts the completed map into a spec, then implementation tickets; links back to decision tickets preserve access to the fuller discussion. [00:09:23]-[00:11:08]
- He recommends ordinary single-session planning when the route is already understood and reserves Wayfinder for work with substantial uncertainty. [00:11:08]-[00:12:08]
- Pocock distinguishes temporary decision tickets from later implementation tickets and says he closes the resulting specification once its decisions are represented in code. [00:12:08]-[00:14:15]

## Practical Implications

- Define the destination and desired artifact before charting a map, then expose only decision work whose dependencies are satisfied. [00:05:12]-[00:07:16]
- Give research, prototyping, discussion, and external action distinct ticket types so each session has a bounded purpose and durable result. [00:07:16]-[00:09:23]
- Preserve links from condensed planning artifacts to their decision records so an implementer can inspect source context when a summary is insufficient. [00:09:23]-[00:11:08]
- Avoid the process for work that can be understood and planned in one session; Pocock frames uncertainty, not task size alone, as the reason to use it. [00:11:08]-[00:12:08]

## Questions and Tensions

- Editorial: The source shows Pocock's workflow and reports enthusiastic user reactions, but provides no controlled comparison of planning quality, delivery time, token cost, or defect rates. [00:01:00]-[00:02:02]
- Editorial: Issue-tracker durability can preserve decision provenance, but the video does not address stale maps, conflicting parallel decisions, permissions, or maintenance overhead. [00:03:04]-[00:05:12]
- Editorial: Pocock argues prototypes prevent extensive planning from becoming low-fidelity waterfall, but the source does not establish when prototype feedback is sufficient or when planning should stop. [00:07:16]-[00:09:23]
- Editorial: Closing a specification after implementation reduces persistent documentation, but the video does not examine projects where operational, compliance, or architectural records must remain current. [00:12:08]-[00:14:15]

## Source

- https://www.youtube.com/watch?v=F3lL98Pj90o
- [transcript.md](./transcript.md)
