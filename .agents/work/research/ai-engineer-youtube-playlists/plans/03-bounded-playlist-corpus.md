# Plan 03: Build the bounded AI Engineer playlist corpus

Capture, summarize, and synthesize the two bounded 2025 event tracks in strict
sequence. Use them to prove the multi-speaker attribution format and editorial
review gate before starting the larger active Coding Agents corpus.

## Goals

- Complete source-faithful English transcript and draft-summary coverage for the
  available SWE Agents and Agent Reliability videos.
- Maintain current playlist overviews with explicit speaker, affiliation, and
  curator provenance.
- Prove the multi-speaker editorial contract in a bounded corpus before Plan 04.

## Tasks

- [x] **Task 1: Establish the bounded capture baseline and stop protocol**
  - Scope: selected sync/status for `ai-engineer-swe-agents-2025` and
    `ai-engineer-agent-reliability-2025`, work-item `progress.md`
  - Depends on: Plan 02 complete
  - Acceptance:
    - A fresh selected check/sync is reviewed before capture, and any membership
      change receives the mandatory public-impact review.
    - Progress records current available, captured, pending, unavailable, and
      overlap counts for both playlists.
    - The session protocol is explicit: thin slice `--limit 1`; later batches
      `--limit 2`; no refill in the same session; immediate stop on throttling.
    - Exit `1` stops for investigation. Exit `2` with transient/throttle and
      remaining candidates pauses until a later session. Exit `2` caused only
      by durably recorded unavailable captions is accepted and documented.
  - Notes: Distinguish exit-2 causes from the capture report's per-video outcome
    lines (`transient` versus `unavailable`), not from the exit code alone.
    Never combine retry with force. Caption retry is a separate explicit Mode D
    decision, not routine backfill behavior.

- [ ] **Task 2: Prove the SWE Agents editorial thin slice**
  - Scope: one candidate under `src/content/youtube/videos/<video-id>/`,
    `src/content/youtube/playlists/ai-engineer-swe-agents-2025/overview.md`,
    work-item `progress.md`
  - Depends on: Task 1
  - Acceptance:
    - Run exactly one scoped
      `capture --playlist ai-engineer-swe-agents-2025 --limit 1`.
    - Review the final transcript source-faithfully, correcting only obvious
      caption errors such as names, products, models, and meaning-changing
      punctuation.
    - Write one draft summary with exact contracted frontmatter and a framing
      paragraph naming speaker(s) and supported affiliation(s).
    - Create a draft overview with exact contracted headings, one incorporated
      ID, honest coverage counts, and a Coverage statement identifying AI
      Engineer as curator/source channel rather than author.
    - Every speaker claim is anchored; every editorial interpretation begins
      `Editorial:`.
  - Notes: Same-language English summaries need no translation disclosure.

- [ ] **Task 3: Backfill and synthesize SWE Agents in two-video batches**
  - Scope: remaining available SWE Agents video directories and
    `playlists/ai-engineer-swe-agents-2025/overview.md`
  - Depends on: Task 2
  - Acceptance:
    - Each capture session runs one `--limit 2` command and follows Task 1's
      exit protocol.
    - Every successful final capture receives an editorial transcript pass and
      a deliberate draft summary before the session closes.
    - The overview is refreshed in the same session as new summaries;
      `coveredVideoIds` exactly represents incorporated summaries and Coverage
      distinguishes manifest, available, captured, summarized, incorporated,
      pending, and unavailable counts.
    - The playlist ends with no pending available IDs at its final authoritative
      sync; unavailable IDs remain faithfully recorded rather than bypassed.
  - Notes: Keep batches and commits reviewable; do not generate summaries or the
    overview mechanically from raw transcripts.

- [ ] **Task 4: Prove and backfill Agent Reliability**
  - Scope:
    `src/content/youtube/playlists/ai-engineer-agent-reliability-2025/`,
    relevant global video directories, work-item `progress.md`
  - Depends on: Task 3
  - Acceptance:
    - Start with one
      `capture --playlist ai-engineer-agent-reliability-2025 --limit 1`
      transcript/summary/overview thin slice under the same attribution rules.
    - Continue with one `--limit 2` command per later session under Task 1's
      stop protocol.
    - Videos already captured through SWE Agents are not recaptured or
      overwritten; their single global summaries may be incorporated into both
      overviews, and shared IDs appear in each relevant `coveredVideoIds` list.
    - The final overview honestly reconciles manifest, availability, capture,
      summary, incorporation, pending, and unavailable states.
    - The playlist ends with no pending available IDs at its final authoritative
      sync.
  - Notes: Recompute overlap from manifests; do not assume the precheck's two
    shared IDs remain authoritative.

- [ ] **Task 5: Run the bounded multi-speaker review gate**
  - Scope: all bounded playlist summaries and both overviews, work-item
    `progress.md`
  - Depends on: Tasks 3 and 4
  - Acceptance:
    - A dedicated review checks every summary framing paragraph for supported
      speaker/affiliation attribution and every overview claim for attribution,
      anchors, and editorial labeling.
    - Retitles and discrepancies between title, transcript, and affiliation are
      resolved or explicitly qualified; no uploader claim becomes a speaker
      claim.
    - Both overviews have exact, duplicate-free `coveredVideoIds` matching all
      incorporated summaries and current Coverage math.
    - Set an artifact to `reviewed` only if the dedicated pass satisfies the
      full contract; otherwise keep it `draft` and record required corrections.
    - Progress records an explicit pass/fail gate for starting Plan 04.
  - Notes: This gate reviews attribution quality, not whether all speakers agree
    or whether vendor claims are independently true.

## Implementation Notes

- Global video-ID storage deduplicates shared talks; playlist overviews do not
  deduplicate their own coverage obligations.
- Refresh an overview only from reviewed summaries, not from live YouTube data
  or unsummarized transcripts.
- Run the complete mutating-workflow checks and make reviewable commits after
  every bounded batch/session.
- Public post drafting is out of scope; preserve provisional angles in research
  until the corpus supports them.

## Constraints / Decisions

- Order is SWE Agents first, then Agent Reliability.
- Thin slice is one video; subsequent capture batch is two videos.
- No automatic editorial generation, overwrite, force capture, or silent retry.
- Plan 04 is blocked until Task 5 records a passing multi-speaker review gate.

## Acceptance Criteria

- Every available video in both bounded manifests has one captured English
  transcript and one draft or reviewed summary, or a faithful unavailable state.
- Both overviews are current for all incorporated summaries and satisfy the
  multi-speaker contract.
- Shared IDs are stored once and represented correctly in both overviews.
- The attribution review gate passes before active-corpus work starts.

## Verification

- `npm run youtube:library -- status`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` returns no matches.
- `rg -n '"publication":"source-only"|"publication": "source-only"' dist` returns no matches.
- Verify every bounded manifest's available IDs against transcript, summary, and
  overview coverage with a read-only script or in-memory checker.
- `git diff --check`
