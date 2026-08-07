# Curated David Ondrej Playlist Research

## Remote Inventory

- Playlist: `PL2xnrU4RbY0AamUB7lEm8-ZJsq0yzELRz`
- Current title: `David Ondrej Podcast`
- Source channel: David Ondrej
- Snapshot date: 2026-08-07
- Current membership: 55 available videos
- Existing Coding with Agents overlap:
  - `xgkjtF89-44`, resource 31, “Forget Loops, build a Software Factory
    instead” – Dexter Horthy
  - `FU5_kpTAVDo`, resource 25, “Agentic Engineering, explained by a 10x
    developer”
- No other exact video-ID overlap was found in the public resource manifest,
  public summary source URLs, or the five tracked YouTube library manifests.

The complete remote membership was fetched through the YouTube Data API for
review. The generated library manifest should retain all 55 items and their
remote order even though only approved items enter editorial scope.

## Filtering Criteria

Include videos that are directly useful to experienced coding-agent
practitioners, offer a distinct workflow or engineering perspective, and are
substantial enough to support a transcript-backed summary. Prefer a short route
that covers product and program design, delegation, concrete setup,
implementation workflow, and harness design.

Exclude or defer videos that are primarily about general AI, AGI forecasts,
startup or automation businesses, career advice, voice or image agents, model
release drama, earnings claims, or product-specific demonstrations that add
little beyond a selected source. View counts and click-oriented titles are not
selection evidence.

## Proposed Human-Approval List

The order below is editorial, not remote playlist position or chronology.

| Order | Video ID | Video | Existing work | Selection reason |
| --- | --- | --- | --- | --- |
| 1 | `xgkjtF89-44` | “Forget Loops, build a Software Factory instead” – Dexter Horthy | Resource 31 and transcript-backed public summary | Opens with product outcomes, program design, vertical slices, maintainability, and delivery bottlenecks. |
| 2 | `FU5_kpTAVDo` | Agentic Engineering, explained by a 10x developer | Resource 25 and transcript-backed public summary | Frames the role shift toward first-principles judgment, durable context, asynchronous delegation, and evidence-based review. |
| 3 | `nQwJVHCtDDY` | Matt Pocock’s Agentic Engineering Workflow (just copy him) | None | Provides an end-to-end practitioner workflow and a concrete bridge from planning to implementation and verification. |
| 4 | `8ZgpAXe5V5w` | L8 Principal's Agentic Engineering Setup (just copy him) | None | Adds a concrete senior-engineer setup rather than another high-level prediction. |
| 5 | `k8o_UgtrGyA` | Harness Engineering is the future… trust me. | None | Adds the harness and tool-boundary perspective needed to round out the route. |

This proposal selects 5 of 55 videos and requires only 3 new transcript-backed
video summaries. The first two summaries should be reused in place.

## Deliberately Deferred Coding-Adjacent Videos

These remain in the tracked manifest but are not in the initial route:

| Video ID | Video | Why defer |
| --- | --- | --- |
| `EWk9PBbKqzc` | What Top 1% of Agentic Engineers Do Differently | Broad framing overlaps the selected setup and workflow sources. |
| `mMuuLocDkog` | Watch this 100x developer use Codex… it’s insane | Tool-specific demonstration with substantial overlap and a less durable premise. |
| `PzVV4X37ihg` | Why This Dev Ships 100x Faster Than 99% of Engineers | Throughput framing overlaps selected sources and needs stronger evidence before inclusion. |
| `sqtX2OmgOF0` | Tokens can make you rich, just do this – Mario Zechner | Mario Zechner is relevant, but the resource hub already covers his harness perspective from another source. |
| `hZL7tw8jp2M` | Master Vibe Coding in 22 Minutes – Lee Robinson | Relevant but older and more introductory than the proposed route. |
| `Svp7fbF0g2I` | “I built 500+ AI agents, here’s everything I know” - Nate Herk | Focus appears broader than coding-agent software engineering. |
| `0ItQIrYiUCc` | Tech With Tim - AGI, Vibe Coding, Building a Startup, Future of Software | Broad mixed-topic interview rather than a focused coding-agent workflow. |
| `p0ohq8RX_T4` | How To Build Web Apps using v0 + Bolt.new + Cursor | Product-specific tutorial likely to age faster than the selected engineering practices. |
| `-qPeR9GnEzo` | “With o1 you can code any app, just watch” - Pietro Schirano | Older model-specific demonstration with substantial overlap. |
| `ny9HE1Pi0Kw` | Top Programmer: AGI in 2025, Devin is just the beginning | Forecast-heavy and no longer current enough for the curated route. |

The remaining 40 videos are out of scope because their titles and descriptions
center on general AI, model competition, AI automation businesses, startup and
career advice, non-coding agents, or broad futurism. They remain tracked for
remote membership changes but should create no transcript or summary backlog.

## Current Technical Constraints

1. `manifest.json` is generated from full remote membership and must stay that
   way for additions, removals, retitles, moves, and availability changes.
2. The current capture queue treats every available manifest entry as pending.
   A non-contiguous curated subset cannot be captured safely with only
   `--playlist` and `--limit`.
3. Status likewise counts every uncaptured member as pending, which would turn
   50 intentionally unselected videos into false editorial debt.
4. Playlist overview coverage currently follows all library summaries found in
   the manifest; it has no approved-subset concept.
5. Public summary grouping supports numbered episode series, not a generic
   “selected videos” collection. Reusing it unchanged would misleadingly label
   curated items as episodes.
6. Once a playlist is tracked, the public content guard expects every cited
   member to have a reviewed source-library summary. The two existing
   standalone transcript-backed summaries would incorrectly become missing
   source work.

## Proposed Boundary

Add an optional playlist catalog object:

```json
"curation": {
  "status": "draft",
  "videoIds": [
    "xgkjtF89-44",
    "FU5_kpTAVDo"
  ]
}
```

- No `curation`: preserve current full-playlist editorial behavior.
- `draft`: candidate list only; no capture or publication.
- `reviewed`: active human-approved subset; only these IDs drive transcript,
  summary, overview, and public-list validation.
- Full manifest changes remain visible regardless of curation.
- Curation approval applies only to list membership. Each source summary and
  the playlist synthesis retain their own review gates.

Use one shared resolver for playlist editorial scope and one shared resolver
for source evidence. A source may be satisfied by a reviewed library summary or
by a strictly validated standalone chain:

```text
standalone transcript videoId/sourceUrl/summarySlug
  → matching public summary
  → matching public resource with the canonical video URL
```

This lets the existing resource 25 and 31 transcript/summary files remain the
source of truth rather than copying them into `src/content/youtube/videos/`.

## Oracle Review

Oracle agreed with the full-manifest plus optional-curation boundary and
recommended keeping approval, source review, and overview review as distinct
states. It also recommended a strict shared standalone-evidence resolver rather
than resource IDs inside curation, copied library artifacts, or path-specific
guard exceptions.

Oracle's key implementation cautions were:

- Existing playlists must preserve byte-compatible behavior when `curation` is
  absent.
- A reviewed selected ID missing from or unavailable in the synchronized
  manifest must block audit/publication after sync records the remote truth.
- Draft curation must never trigger automatic capture.
- Standalone reuse must be validated consistently by capture, status, audit,
  and the public guard; a guard-only exception would leave false pending work.
- Public UI may reuse existing summary files, but list labels and ordering must
  not misrepresent a curated route as numbered podcast episodes.

## Public Consolidation Options

### Recommended: one card with a selected-video summary list

- Add one playlist resource.
- Reassign the existing resource 25 and 31 summary files to that playlist
  resource without changing their slugs or bodies.
- Remove the two standalone resource cards.
- Add generic collection/order frontmatter for selected summaries and render
  the modal list as “Selected videos,” without `Ep` labels.
- Add only three new transcript/summary pairs after selection approval.

This most directly satisfies “one consolidated playlist resource with
summaries,” but it requires a small generalization of the current episode-only
summary list UI and content schema.

### Smaller alternative: keep standalone cards and add one guided summary

- Keep resources 25 and 31 as separate cards.
- Add one playlist card with a single guided overview that links to selected
  videos and existing summaries.
- No summary-list UI change is required.

This follows the existing AI Engineer guided-playlist pattern, but it does not
fully consolidate the existing standalone entries.
