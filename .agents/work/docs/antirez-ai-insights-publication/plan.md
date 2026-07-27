# Salvatore Sanfilippo AI insights publication plan

Create a small public learning path from the completed source-only playlist
corpus while preserving its editorial, translation, and publication
boundaries.

## Goals

- Teach one coherent, source-backed lesson from the author's cross-playlist
  work rather than publishing a transcript or summary dump.
- Make both playlists discoverable through the existing Coding with Agents hub
  with concise, curated starting paths.
- Keep public claims traceable to timestamped primary videos without importing
  or exposing `src/content/youtube/`.

## Tasks

- [x] **Task 1: Select and review the public evidence chain**
  - Scope: `src/content/youtube/authors/antirez.md`, both playlist overviews,
    selected `src/content/youtube/videos/<video-id>/{summary,transcript}.md`, and
    both playlist manifests
  - Depends on: none
  - Acceptance:
    - Select roughly 6-9 videos that directly support the post's
      evidence-and-supervision thesis.
    - Select 4-6 `Where to start` videos per playlist; allow only useful overlap
      with the post sources.
    - Check every intended public claim against its summary anchor, sibling
      transcript chunk, video title, and publication date.
    - Spot-check at least one cited timestamp per selected video against YouTube
      playback; record any corrected names, captions, or timestamp boundaries
      before public drafting.
    - Reject claims that require independent scientific validation, inferred
      biography, or stronger evidence than the source provides.
  - Notes: Candidate evidence includes `497EK7ZQ2FY`, `TlGrAretPQw`,
    `PHsxD4X2V2A`, `WoaulxVqUUA`, `XZZ_ddBvELc`, `N-iwRfCFbHE`,
    `0buzDrn0aIY`, and `id9QG-mQSOo`, but the final set must follow the
    argument rather than satisfy a preset list. This is a claim-level review;
    leave an internal summary as `draft` unless the whole artifact receives a
    dedicated review.

- [x] **Task 2: Add the two playlist orientations to the resource hub**
  - Scope: `src/data/resources/coding-with-agents.json` and two new files under
    `src/content/summaries/coding-with-agents/`
  - Depends on: Task 1
  - Acceptance:
    - Add one `playlist` resource entry for `Coding with AI` and one for `AI
      concepts`, using currently free resource IDs after checking for
      concurrent changes (expected IDs: 22 and 23).
    - State that the source videos are in Italian. Frame `AI concepts` through
      model evaluation and coding-agent judgment so it remains relevant to the
      hub.
    - Back each resource with one playlist-level summary that has no `series`
      or `episode` field, opens in the existing modal, and contains a disclosure,
      concise orientation, key themes, 4-6 `Where to start` videos, and the
      playlist link.
    - Use English paraphrase only. Link claims and suggested videos directly to
      timestamped YouTube URLs; include no source-tree or GitHub transcript
      links.
    - Keep the summaries navigational; do not reproduce the post's full
      argument.
  - Notes: Use the latest relevant playlist publication dates unless current
    resource conventions indicate otherwise (currently `2026-07-13` for
    `Coding with AI` and `2026-07-10` for `AI concepts`). No component, route,
    or schema change is expected.

- [x] **Task 3: Draft the thesis-driven synthesis post**
  - Scope: one new `src/content/posts/*.md` file
  - Depends on: Task 1
  - Acceptance:
    - Load and follow the `article-writing` skill before drafting.
    - Create a `draft: true` post with the next available order (currently 6),
      the `AI Agents` tag, and the normal post/slide blockquote convention.
    - State near the opening that the post is an as-of-mid-2026 editorial
      synthesis of a 78-video captured corpus and that all English wording is
      translation/paraphrase rather than verbatim quotation.
    - Keep one thesis: observed behavior and evidence should outrank persuasive
      explanations, architecture stories, and benchmark impressions; connect
      that thesis to coding-agent supervision and human attention.
    - Preserve the tension between early-2026 concerns about losing
      implementation practice or focus and the July 2026 move away from
      exhaustive line review.
    - Cite roughly 6-9 direct YouTube sources with timestamps and publication
      dates where chronology matters. End with the existing exact `## Sources
      used` appendix convention.
    - Include a short exclusion section pointing readers to the resource hub
      for local inference, DwarfStar, and broader architecture commentary.
    - Add no custom author route, per-video public pages, new collection, or
      component.
  - Notes: Working title: `Behavior Over Explanation: Salvatore Sanfilippo on
    AI and Coding Agents`. Prefer the shortest post that preserves the argument;
    do not exceed the current field guide merely to represent more of the
    corpus.

- [x] **Task 4: Run the editorial stop/go and release checks**
  - Scope: the new post, the two resource summaries, the resource manifest, and
    generated output
  - Depends on: Tasks 2 and 3
  - Acceptance:
    - Re-read all four public artifacts cold and confirm each has one clear job:
      argument for the post, orientation for the summaries.
    - Confirm no English sentence is presented as a quotation and no claim
      exceeds its evidence level; verify dates on chronology claims.
    - Confirm the new post and both resource entries render correctly, the two
      modal summaries open as single summaries, timestamp links resolve, and
      mobile/keyboard behavior has no regression.
    - Run `npm run lint:fix`, `npm run check`, and `npm run build`.
    - Run boundary checks proving no public source file or `dist/` artifact
      references or contains `src/content/youtube`, `content/youtube`, or copied
      `../videos/` links.
    - If the post passes, set `draft: false` and rerun the production checks. If
      it is broad, repetitive, or under-supported, keep it draft and ship only
      the two independently useful playlist entries while re-scoping the post.
    - Update `progress.md`, task checkboxes, and `index.md` with the shipped
      artifact set and verification results.
  - Notes: Do not publish all per-video summaries as a shortcut if the post does
    not pass.

- [x] **Task 5: Integrate the synthesis into public reading paths**
  - Scope: `src/pages/index.astro`, `src/content/posts/agentic-coding-2026.md`,
    and `src/content/posts/make-the-agent-prove-it.md`
  - Depends on: Task 4
  - Acceptance:
    - Keep the homepage curated and add one evidence-discipline card without
      introducing automatic latest-post logic or a separate feature block.
    - Add the synthesis to the field guide's series map and problem-to-post
      table as the methodological companion to the proof stack.
    - Add one reciprocal link from the proof-stack article, while avoiding
      repetitive backlinks in already link-dense companion posts.
    - Confirm the homepage layout and new route at desktop and mobile widths;
      run `npm run check` and `npm run build`.
  - Notes: Oracle reviewed the integration and recommended this three-file
    boundary. Future author-specific syntheses should not automatically expand
    the series map.

## Implementation Notes

- Preserve `src/content/youtube/` as a source-only evidence workspace. Public
  Markdown should be written explicitly under public collections; never import,
  copy at build time, or route the internal tree.
- Keep attribution readable. Use named attribution and calibrated verbs for
  author claims; use phrases such as `reading across the playlists` for site
  synthesis instead of the internal `Editorial:` prefix.
- Public links should resolve to YouTube. The internal transcript and summary
  links exist for editorial review, not for rendering or reader navigation.
- Avoid a custom author page until multiple public author collections create a
  repeated navigation need.
- Treat a DwarfStar/local-inference article as a separate future decision with
  its own thesis and evidence review, not as Task 5 of this release.

## Constraints / Decisions

- First release: one synthesis post plus two playlist resource entries and two
  playlist-level public summaries.
- No verbatim quotations in v1.
- No public per-video pages or mass promotion of 78 summaries.
- Review only the evidence used publicly; the 81-artifact internal draft
  backlog is not a release dependency.
- No new Astro route, component, content schema, or source-library import.

## Acceptance Criteria

- A reader can learn the post's main evidence-and-supervision thesis without
  watching every source video.
- A reader can understand each playlist's scope and choose a useful starting
  video from the resource hub.
- Attributed claims are source-faithful English paraphrases with timestamped
  YouTube evidence and calibrated certainty.
- The source-only YouTube tree remains absent from routes and production
  bundles.
- The release stays small enough to review: four public files changed or added
  plus the existing resource manifest.

## Verification

- `npm run lint:fix`
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube|content/youtube|\.\./videos/" src/pages src/components src/layouts src/content/posts src/content/summaries`
- `rg -n "src/content/youtube|content/youtube|\.\./videos/" dist`
- Browser-check `/posts/<new-slug>`, its slide view, and both new summary modals
  from `/resources/coding-with-agents`.
