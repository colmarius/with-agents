---
title: "The Last Human Code Review: Building Trust in AI-Generated Code — Itamar Friedman, Qodo"
resourceId: 96
date: "2026-08-20"
---

How could a team automate code review without losing its engineering judgment? Qodo CEO and co-founder Itamar Friedman proposes recording the team's rules, architecture, and lessons from incidents so a review agent can apply them to new changes. His Qodo demonstration shows how people could inspect that reasoning and agents could act on the findings; it does not establish that human approval can safely be removed.

### Calibrate automation before removing review

- **Preserve both jobs of code review**: Friedman separates validation—quality, safety, maintainability, and architecture—from alignment and learning. Any replacement for pull-request review still has to account for both rather than treating fewer human comments as the only outcome ([01:53–02:51](https://www.youtube.com/watch?v=s-aixZYJG4c&t=113s)).
- **Give the reviewer the team's actual rules**: Friedman argues that a model needs standards and knowledge specific to the project. Otherwise, it may suggest generic error handling without knowing whether an error is consequential in that system. Much of the needed knowledge is in developers' heads and discussions, not just instruction files ([04:57–08:42](https://www.youtube.com/watch?v=s-aixZYJG4c&t=297s)).
- **Make findings useful to both people and agents**: In the Qodo example, people can follow links from a finding to the rules used during review. A separate agent-facing comment lists issues and points to a branch with proposed fixes. These interfaces expose what the tool did; they do not by themselves prove the findings or fixes correct ([08:42–11:39](https://www.youtube.com/watch?v=s-aixZYJG4c&t=522s)).
- **Treat fewer human comments as a signal, not proof of safety**: Friedman proposes watching roughly 100 pull requests and using the disappearance of human review comments as a readiness signal. That is his heuristic. A quiet review could also mean missed defects or inattentive reviewers; the talk does not test which explanation applies ([11:39–12:28](https://www.youtube.com/watch?v=s-aixZYJG4c&t=699s)).

### Review relationships between services, not only individual diffs

- **Attach past failures to the relationships they affected**: Friedman's example is a service changing its contract—the behavior another service relies on—and causing an outage. His proposed software graph represents components as nodes and their relationships as edges, with contracts and incident discussions attached. A reviewer could then consider that history when inspecting a new change to the same relationship ([12:28–15:30](https://www.youtube.com/watch?v=s-aixZYJG4c&t=748s)).
- **Add approval and blocking rules gradually**: He recommends tracking which rules trigger and whether they remain useful. The graph would also expose several pending pull requests changing the same relationship, so reviewers could consider their combined effect. The talk leaves the criteria for safely removing human approval unspecified ([13:33–17:23](https://www.youtube.com/watch?v=s-aixZYJG4c&t=813s)).
- **Separate the proposed system from its promised results**: Friedman calls recorded organizational judgment “artificial wisdom.” Qodo's stated 2027 goal of zero outages and zero critical or high-severity production bugs is an ambition, not an achieved outcome ([17:23–18:53](https://www.youtube.com/watch?v=s-aixZYJG4c&t=1043s)).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=s-aixZYJG4c).
