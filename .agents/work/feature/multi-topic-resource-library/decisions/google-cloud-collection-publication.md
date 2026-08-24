# Google Cloud collection publication

Status: accepted
Date: 2026-08-24

## Decision

Publish one canonical playlist resource for each of the 12 tracked Google Cloud Tech playlists. Do not merge the two Security or two Pub/Sub playlists into synthetic records.

Cross-list Cloud Security Basics and Security Command Center in both the Cloud and Security catalogs through catalog membership. Keep one resource ID and one child-summary collection for each; do not duplicate records or summaries.

Retain complete source manifests and reviewed source artifacts, but omit these from public learning sequences:

- Engineering for Reliability trailer `DL_8bHeTlgg`, because it has no substantive educational content.
- Pub/Sub Made Easy episode `fgVE1OoJ2XI`, because its Pub/Sub Lite guidance is retired.

## Rationale

One playlist per resource preserves the repository's existing provenance invariant:

```text
public resource URL → tracked playlist → reviewed curation → reviewed overview → ordered child summaries
```

The Security and Pub/Sub pairs have distinct source provenance and reader outcomes. Merging them would require a new multi-playlist provenance model and would weaken the public guard's exact URL-to-curation check without producing a clearer learning sequence.

## Reconsider when

Reconsider merging only if reader testing shows that a playlist has no distinct outcome, a merged progression is demonstrably clearer, users repeatedly confuse the separate cards, and the source/public data model deliberately supports multi-playlist provenance.
