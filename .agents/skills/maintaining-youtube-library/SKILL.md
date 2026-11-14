---
name: maintaining-youtube-library
description: "Maintains YouTube sources, collection placement, and resource intake. Triggers on: refresh resources, check or sync tracked playlists, retry captions, add a playlist, collection placement, refresh or process coding-agent intake."
---

# Maintaining the YouTube Library

Maintain configured playlists through the deterministic library command while
keeping editorial and publication decisions explicit. Read and follow the
[authoritative library contract](../../../src/content/youtube/AGENTS.md) before
changing `src/content/youtube/`; do not restate or bypass it.

This skill covers tracked playlists, collection placement, and resource-intake
queues. Before treating a direct video request as standalone, apply the root
`AGENTS.md` collection-first placement rule. Videos without a suitable existing
collection follow the [content guide's transcript workflow](../../../src/content/AGENTS.md#youtube-transcript-workflow).

## Collection Placement

Before creating a standalone resource, search the exact video ID in configured
playlist manifests and public collection summaries. Check likely stale playlists
read-only when needed; shared channel or publisher identity is not membership.
Confirm that the destination is a consolidated collection with catalog curation
and collection-child metadata, not an editorial guide linking independent cards.
Preserve intentionally independent cards and applicable standalone exceptions in
`.agents/scripts/public-content-guard.mjs`. Converting a guide or migrating other
resources requires separate authorization; playlist membership alone is not enough.
For an authorized addition with confirmed membership and editorial fit, prefer
the existing public collection. In particular, relevant Pragmatic Engineer
podcast episodes use resource 35 and collection
`pragmatic-engineer-selected-conversations`; Summit talks outside that playlist
remain standalone.

Follow the authoritative curated-playlist contract: sync the selected playlist
when needed, obtain selection approval, reuse valid transcript/summary evidence,
and complete the evidence and overview review gates. Preserve existing summary
slugs and transcripts. Match public `resourceId`, `collection`, `videoId`, and
`order` to reviewed curation, update collection metadata and overview coverage,
and remove superseded standalone records and catalog curation references only
after checking their consumers. Do not create duplicate cards or evidence to
satisfy intake. If selection approval or evidence is pending, report that blocker
rather than silently publishing a standalone fallback.

## Choose One Mode

Match the user's intent to one mode. If mutation is not explicit, use Mode A and
do not write. Never turn a check request into sync, capture, retry, or editorial
changes.

## Mode A — Read-Only Check

1. Run the complete library check, optionally selecting repeated playlist slugs
   or JSON output:

   ```sh
   npm run youtube:library -- check [--playlist <slug>]... [--json]
   ```

2. Report remote changes as advisory maintenance data, not command failure. Exit
   `0` means a complete report even when changes exist; exit `2` means a useful
   partial report with isolated remote failures.
3. Do not write files or directories in this mode. If `YOUTUBE_API_KEY` is
   unavailable, state the credential limitation without requesting or exposing
   it. Use `npm run youtube:library -- status` only for local inspection.

## Mode B — Explicit Sync or Update

Enter this mode only when the user explicitly requests repository mutation.

1. Run `git status --short -- src/content/youtube` and inspect any existing diff.
   Continue only when that tree is clean or every existing change is understood
   and can be kept separate from this update.
2. Run Mode A first when it will clarify scope, then synchronize only the
   requested playlists when possible:

   ```sh
   npm run youtube:library -- sync [--playlist <slug>]...
   ```

3. Treat the sync report—not an earlier check—as authoritative. Inspect its
   manifest diff before deciding what to capture or review; remote state may have
   changed between commands.
4. Run the mandatory public-impact review below against the authoritative diff.
5. Keep capture bounded by selected playlists and/or a positive limit:

   ```sh
   npm run youtube:library -- capture [--playlist <slug>]... [--limit <positive-n>]
   ```

6. Review committed transcripts before deliberately writing editorial work.
   Keep every new or revised editorial artifact at `draft`. Refresh each affected
   playlist overview in the same session as its new summaries. Review the author
   synthesis after an overview changes only when that playlist has an author
   relationship.
7. Never silently generate, promote, publish, replace, or overwrite editorial
   work. Never use routine `--force`; require explicit destructive-operation
   approval before force regeneration, then keep it narrowly bounded.
8. Finish with the mutating-workflow checks below and reviewable commits.

## AI Engineer Watch Playlists

The AI Engineer playlists (`ai-engineer-coding-agents`,
`ai-engineer-agentic-engineering`, `ai-engineer-agent-reliability-2025`) use
the `watch` refresh tier. Their reviewed curation lists the talks already
captured in the source library, so a sync records new talks as unselected
without creating capture work. Do not backfill them with library `capture`.

A talk the user picks during a refresh becomes a public resource through the
intake path below, not a source-library capture. Preserve source-supported
speaker and affiliation attribution, treat AI Engineer as the curator and
source channel rather than the author, and keep `Editorial:` labels in any
overview you revise. `ai-engineer-swe-agents-2025` is frozen.

## Mode C — Add a Tracked Playlist

Do not create or use an `add` subcommand or catalog wizard.

1. Apply the same clean-or-understood tree gate as Mode B. If the onboarding is
   more than a small single-session update, create or continue a work item and
   plan bounded batches. One onboarding work item may add and sync several
   selected playlists together.
2. For every selected playlist, obtain an explicit playlist ID, explicit
   transcript and summary languages, and exactly one attribution decision: an
   author relationship or `multiSpeaker: true`. Do not infer author identity,
   multi-speaker status, or language settings.
3. Manually edit `src/content/youtube/catalog.json`, review the exact diff, and
   validate it with the existing commands:

   ```sh
   npm run youtube:library -- status
   npm run youtube:library -- check [--playlist <slug>]...
   ```

4. After explicit mutation intent is confirmed, sync only the selected
   playlists and treat each sync report as authoritative:

   ```sh
   npm run youtube:library -- sync [--playlist <slug>]...
   ```

5. Review each addition's public impact as described below. Before any broad
   backfill, prove one complete thin slice for every playlist with a separate
   command per slug:

   ```sh
   npm run youtube:library -- capture --playlist <slug> --limit 1
   ```

   Review each transcript, write its draft summary deliberately, and update its
   draft playlist overview under the authoritative contract before broad
   backfill for that playlist.
6. Continue only in bounded batches. Review the author synthesis after a related
   playlist overview changes only when that playlist has an author relationship,
   then run the mutating-workflow checks.

## Mode D — Retry Unavailable Captions

Enter this mode only when the user explicitly asks to retry recorded caption
failures. Do not retry them during every routine check or sync.

1. Keep the operation bounded by at least a selected playlist and/or a positive
   limit:

   ```sh
   npm run youtube:library -- capture --retry [--playlist <slug>]... [--limit <positive-n>]
   ```

2. Never combine retry with `--force`. Inspect the resulting transcript and
   metadata changes, then handle any newly possible editorial work deliberately
   at `draft` under the authoritative contract.
3. Finish with the mutating-workflow checks below.

## Mode R — Refresh Resources

Use this mode when the user asks to **refresh resources**. The request
authorizes the steps below: syncing the playlists the report lists and
processing intake videos. It does not authorize processing watch candidates
the user has not picked, changing the external YouTube playlists, or pushing.

Every playlist has a `refresh` tier in `catalog.json`:

| Tier | During a refresh |
| --- | --- |
| `intake` | Process every pending video. |
| `watch` | Propose at most five new videos in total; process only the ones the user picks. |
| `quiet` | Never propose videos. Report only changes that affect public pages. |
| `frozen` | Finished series. Report unexpected changes; never sync routinely. |

Rank watch candidates in this playlist priority, highest first:
`ai-engineer-coding-agents`, `ai-engineer-agentic-engineering`,
`pragmatic-engineer-podcast`, `antirez-coding-with-ai`,
`matt-pocock-agent-skills`, `ai-engineer-agent-reliability-2025`,
`mayank-gupta-west-coast-builders`. Ask the user before changing a tier or
this order.

1. Apply the Mode B clean-or-understood Git gate to `src/content/youtube`,
   `src/content`, and `src/data/resources`.
2. Run the read-only report:

   ```sh
   npm run youtube:library -- refresh
   ```

   Exit `2` means some playlists failed to fetch; leave those out of the sync.
3. For each entry under "Public impact", apply the Mandatory Public-Impact
   Review below and record `keep` or `fix` in the sync commit message. Fix
   only clear factual drift, such as a corrected speaker name. Intake removals
   are already excluded: removing a processed video from the intake playlist
   is how it is finished.
4. Sync exactly the playlists on the report's "Sync after review" line, in one
   command. Treat the sync report as authoritative and commit the manifests
   on their own. Syncing records every watch candidate as seen, so later
   refreshes propose only newer videos.
5. Run `npm run youtube:library -- status` and process every pending intake
   video with steps 3 to 7 of Coding-Agent Resource Intake below. Run batches
   of up to three videos in parallel subagents or orbs. Workers write only
   their own transcript and summary files and return the resource record,
   catalog membership, and curation assessment. The owning thread edits the
   shared files under `src/data/resources/`, updates catalog test
   expectations, runs the combined checks, and commits the batch as one
   resource commit that lists every added resource. Check each transcript's
   `summarySlug` against its path; caption fixes can break it. If the session cannot finish every
   video, leave the rest pending and list them in the digest.
6. Choose at most five watch picks across all watch playlists. Prefer the
   priority order above, durable workflows or evidence the catalog lacks, and
   named practitioners over product announcements. Search the catalog for the
   topic before proposing a talk that may duplicate an existing resource. For
   each pick, give the playlist, title, date, and a one-sentence reason. Do not
   process a pick until the user names it; then process it like an intake
   video, applying Collection Placement. `antirez-coding-with-ai` is a
   full-capture author playlist that the report marks check-only: its new
   videos repeat until the user picks them, and a pick runs Mode B for that
   playlist.
7. Publish one document artifact named "Resource refresh YYYY-MM-DD" with
   these sections: published resources (two-line summary, keep or remove
   with one reason, resource and portal links), proposed watch picks,
   public-impact decisions, intake videos still pending, and one line each
   for quiet and frozen playlists. Keep the rest of the report out of it.
8. Finish with the mutating-workflow checks, the README Development checks,
   and browser verification of the new resources.

## Coding-Agent Resource Intake

Use this bounded mode when asked to **refresh coding-agent intake** or **process
coding-agent intake**. The configured slug is
`coding-agents-resource-intake`. It is a temporary multi-speaker queue for
public resources, not itself a public playlist collection.

1. A refresh-only request is read-only:

   ```sh
   npm run youtube:library -- check --playlist coding-agents-resource-intake
   ```

   Report remote additions and local pending IDs. Do not sync or process unless
   the user explicitly asks for mutation.
2. For an authorized update, inspect Git state, run the selected check once,
   then run exactly one authoritative selected sync:

   ```sh
   npm run youtube:library -- sync --playlist coding-agents-resource-intake
   npm run youtube:library -- status
   ```

   Process the status report's pending IDs, not only the sync additions; this
   preserves unfinished work across sessions. Never run library `capture` for
   this playlist.
3. Work in a bounded batch. For each pending ID, first search exact video IDs
   and canonical URLs in `src/data/resources/`, `src/content/summaries/`, and
   `src/content/transcripts/`. Reuse and repair complete existing artifacts;
   never duplicate a canonical resource. Apply Collection Placement above before
   creating a standalone record, including when a video arrives through intake.
4. For every video, reuse or capture a full transcript sidecar under
   `src/content/transcripts/` using the content guide's YouTube transcript workflow, read it
   fully, and write or update its matching public summary. Intake completion
   requires this public evidence chain regardless of resource ownership;
   source-library-only transcripts or excerpts do not complete intake.
   For an approved collection addition, reuse its canonical resource and apply
   the reviewed child metadata and publication gates in Collection Placement.
   When no suitable collection owns the video or a documented exception applies,
   add a standalone canonical resource only when needed and assign its strongest
   catalog section and topics. Pending collection approval remains a blocker,
   not a standalone fallback. Preserve source-supported
   attribution and qualify anecdotes, vendor claims, forecasts, and demonstrations.
5. Self-review reader understanding using the [Summary readability review](../../../src/content/AGENTS.md#summary-readability-review),
   claim-to-transcript fidelity, and catalog novelty, then use an
   independent high-mode reviewer when useful and address actionable feedback.
   Consult Oracle when explicitly requested or when direct investigation leaves
   a specific, high-impact source-fidelity or publication judgment unresolved;
   Oracle is not an automatic approval gate.
6. Recommend `keep` only when the item adds a durable workflow, mechanism,
   evidence boundary, or perspective not already represented strongly in the
   catalog. Recommend `remove` when it is substantially duplicative,
   superficial, or too product-specific to improve resource navigation. Keep
   the recommendation and rationale in the active chat only; never write them
   to a repository decision file. Either recommendation still keeps the
   canonical public resource, transcript, and summary.
7. Run `npm run youtube:library -- status` to verify that completed items resolve
   through the normal public-resource workflow and disappear from the pending
   list. Run `npm run content:guard` and the remaining checks required for public
   resource and tracked-source changes. Run
   `amp orb services ensure` and verify the affected resource in a real browser.
   Report, for each video: a short summary, `keep`/`remove` with one concrete
   reason, the public resource link, and the exact portal URL. End with the
   remaining pending count.
8. Do not apply `remove` recommendations to the external YouTube playlist unless
   the user explicitly requests that shared-state change. Use only decisions the
   user accepted in chat. After approved pruning, sync normally; do not delete
   public resources or source evidence.

Independent work may use separate high-mode orbs when items do not edit the same
files. Keep final integration, combined checks, recommendation reporting, and
portal verification in one owning thread.

## Structural Audit and Editorial Review

Run `npm run youtube:library -- audit` after source-library editorial changes.
The read-only audit checks machine-verifiable structure: frontmatter and ID
relationships, ordered transcript chunks, timestamp-anchor endpoints, relative
links, synthesis coverage, and duplicate manifest occurrences. It reports
duplicates without deduping or mutating them.

A passing audit is not an editorial review. Before setting an artifact to
`reviewed`, a human or dedicated reviewer must compare each claim with the full
adjacent transcript context and verify that both the start and end of every
anchor range cover the complete claim. Apply the content guide's Summary
readability review: the intended reader must be able to follow each main point
and its necessary explanation without reopening the transcript. Also judge
translation fidelity, attribution, qualification, and unsupported certainty;
the structural audit does not score prose or infer whether a claim is accurate.

## Mandatory Public-Impact Review

Apply this review to every authoritative sync diff or manual playlist identity
change before completing a mutating workflow.

1. For every retitled, removed, availability-changed, or publication-date-changed
   video ID, run a literal search (`-e` also handles leading-dash IDs):

   ```sh
   rg -l -F -e '<video-id>' src/content/posts src/content/summaries src/data/resources
   ```

2. Inspect every matching artifact. Record an explicit `keep` or `fix` decision
   for every hit in the active work item's `progress.md` or the commit message.
   Do not assume a retitle is harmless or automatically rewrite public prose.
3. For a retitled video in a tracked `multiSpeaker: true` playlist, also inspect
   `src/content/youtube/videos/<video-id>/summary.md` and review whether its
   framing still attributes the correct speakers and affiliations. Record a
   `keep` or `fix` decision, but never rewrite editorial prose automatically.
4. Search playlist IDs with the same `rg -l -F -e '<playlist-id>'` form in the
   public paths when playlist-level identity or availability changes, inspect
   every hit, and record the same decisions.
5. For additions, review public playlist orientation, resource dates, corpus
   counts, and material thesis changes. Record the conclusion, but do not
   automatically edit public content.

## Finish Every Mutating Workflow

1. Inspect the final diff and run:

   ```sh
   npm run youtube:library -- status
   npm run youtube:library -- audit
   node --test \
     .agents/scripts/youtube-library.test.mjs \
     .agents/scripts/youtube-transcript-core.test.mjs \
     .agents/scripts/youtube-library-structural-audit.test.mjs
   ```

2. When code or public content changed, also run the
   [README Development checks](../../../README.md#development) in order,
   building before tests so artifact-dependent checks use current output.

3. Verify the source-only boundary; both searches must return no matches. If
   `dist/` is absent or predates this work, build first; missing or stale output
   does not verify the boundary. Ripgrep exit `1` means no matches, while exit
   `2` is a check error:

   ```sh
   rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts
   rg -n '"publication":"source-only"|"publication": "source-only"' dist
   ```

4. Run `git diff --check`, inspect `git status --short --branch`, and commit only
   coherent, reviewable changes. Never include build output, credentials, or
   unrelated worktree changes.
