# The Pragmatic Engineer Selected Conversations Requirements Brief

## Problem

The Pragmatic Engineer podcast playlist currently has 71 broad software-
engineering conversations and will continue to change. Complete tracking is
useful for deterministic remote drift, but treating every member as Coding with
Agents editorial work would create an unrelated transcript and review backlog.
Two relevant members already have validated standalone transcript-backed public
summaries, while a third Pragmatic Engineer resource is not a playlist member.

## Desired Outcome

Coding with Agents shows one ordered `The Pragmatic Engineer — selected
conversations` resource. The source library retains complete remote membership,
but capture, summary, overview, and publication obligations apply only to a
small explicitly approved subset and reuse exact existing evidence.

## Goals

- Retain complete playlist membership and remote order for sync and drift.
- Keep the visible list manually selected, ordered, reviewed, and approved.
- Record candidates only as draft until exact selection approval.
- Reuse existing transcript-backed evidence without copying it into the source
  library.
- Consolidate only approved exact playlist members under one public card.
- Keep language and attribution decisions explicit rather than inferred.

## Non-Goals

- Capturing or summarizing all 71 playlist members.
- Treating The Pragmatic Engineer, its host, uploader, or source channel as the
  author of guest claims without an explicit attribution decision.
- Translating captions or selecting a fallback caption language implicitly.
- Publishing candidates, source summaries, or an overview before their
  independent review gates pass.
- Folding the standalone Simon Willison resource into a playlist it does not
  belong to.
- Filtering or manually editing the generated complete manifest.

## Requirements

### Must Have

- [ ] Human explicitly confirms transcript language, summary language, and one
      attribution mode before catalog mutation.
- [ ] Catalog curation begins as `draft` with the proposed exact ordered IDs.
- [ ] The generated manifest retains every remote playlist member.
- [ ] Check and sync continue to compare complete remote membership.
- [ ] Draft curation creates no capture, source-summary, overview, or public
      collection obligation.
- [ ] Selection approval, source-evidence review, and overview review remain
      separate gates.
- [ ] Approved capture is limited to selected IDs without validated reuse.
- [ ] Standalone reuse must pass the strict transcript → summary → canonical
      resource/video association.
- [ ] Public collection order exactly matches reviewed curation.
- [ ] Existing standalone cards are removed only after their summaries are
      safely folded into a publishable collection.
- [ ] Source-only content never enters Astro's content graph or `dist`.

## Constraints / Decisions

- Playlist ID: `PLzwJJv8h-iciW53inSOkQA4mkG8TuQAUh`.
- Requested public title: `The Pragmatic Engineer — selected conversations`.
- The remote inventory has 71 available members at the 2026-08-07 read-only
  snapshot.
- The proposal is six items in editorial order; it is not approved curation.
- Resource 11 and resource 30 are exact reusable members proposed for folding.
- Resource 14 is not a playlist member and remains standalone.
- No language or attribution value is approved yet.

## Acceptance Criteria

- The catalog and generated manifest preserve complete playlist drift while
  editorial status reports only the approved selection.
- Unselected additions create no transcript or summary debt.
- The approved public modal shows only exact selected videos in exact editorial
  order under `Selected videos`.
- Only selected items lacking validated reuse are captured.
- Existing reusable summaries retain stable transcript and public-summary slugs.
- Public card removal and reassignment cannot leave a summary without a valid
  resource or create duplicate resource IDs.
- Library status/audit/tests, public content guard, Astro check/build,
  source-only checks, browser verification, and Oracle review pass before
  completion.

## Open Questions

- [ ] Confirm the exact transcript language.
- [ ] Confirm the exact summary language.
- [ ] Confirm either explicit author relationship(s) or `multiSpeaker: true`.
- [ ] Approve or revise the exact six selected IDs and their order after draft
      catalog onboarding and full manifest sync.
- [ ] Approve folding standalone resources 11 and 30 into the collection.
