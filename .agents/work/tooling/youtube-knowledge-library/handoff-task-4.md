# Task 4 Handoff Prompt

```text
You are continuing the work item at:

.agents/work/tooling/youtube-knowledge-library/

Read first, in order:
1. .agents/work/tooling/youtube-knowledge-library/index.md
2. .agents/work/tooling/youtube-knowledge-library/plan.md (implement Task 4 only)
3. .agents/work/tooling/youtube-knowledge-library/research.md (especially Summary and Synthesis Contract)
4. .agents/work/tooling/youtube-knowledge-library/progress.md
5. src/content/youtube/AGENTS.md
6. .agents/scripts/lib/youtube-library-capture-status.mjs (`readStatusFrontmatter`, synthesis staleness, and status derivation)
7. src/content/summaries/coding-with-agents/raising-an-agent-episode-9.md as a representative public summary style
8. src/content/youtube/catalog.json

Goal:
Encode the durable editorial contracts for per-video summaries, playlist overviews, and author-level synthesis in the scoped src/content/youtube/AGENTS.md. This is Task 4 only and is documentation-only. Do not create editorial/corpus files, modify CLI behavior, or start Tasks 5–6.

Current state:
- Tasks 1–3 are complete. Sync, capture, and human-readable status exist with fixture coverage.
- src/content/youtube/ still contains only AGENTS.md and catalog.json. There are no manifests, transcripts, summaries, overviews, or author files because no API key/manifests exist.
- Task 3 status tolerantly reads only `status` and `coveredVideoIds`. It supports an inline list or an indented block list; this contract must standardize the indented block form.
- Task 3 needs no fix before this work. Do not change production code.

Implement only this slice:

1. Per-video summary contract: videos/<video-id>/summary.md
   - Document this exact frontmatter key set and order. Omit publishedAt only when the manifest lacks a video publication date. Do not include inline comments in frontmatter examples.

     ---
     title: "<original video title>"
     videoId: <video-id>
     sourceUrl: "https://www.youtube.com/watch?v=<video-id>"
     publishedAt: "<ISO 8601 video publication date from the manifest>"
     sourceLanguage: <actual captured language from metadata.json, e.g. it-IT>
     summaryLanguage: en
     captionKind: auto-generated
     status: draft
     ---

   - `captionKind` is `auto-generated` or `caption`, copied from metadata.json `kind`.
   - `status` is exactly `draft` or `reviewed`; new summaries begin as draft, and reviewed is set only after an explicit review pass. Task 3 status treats anything else as draft/not-reviewed.
   - sourceLanguage and captionKind come from metadata.json. publishedAt comes from the playlist manifest. Do not re-fetch or infer them.
   - Only status is currently machine-read. The remaining keys are durable editorial provenance.
   - The first body line must be this italic disclosure whenever sourceLanguage differs from summaryLanguage, adapted only for the actual languages/caption kind:

     *All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

   - Never wrap translated caption text in quotation marks or present it as verbatim. Timestamped, source-faithful paraphrase is allowed.
   - After the disclosure, write a concise one- or two-paragraph framing, then these exact headings in order:

     ## Key Ideas

     ## Practical Implications

     ## Questions and Tensions

     ## Source

   - Key Ideas uses concise bullets with transcript anchors in `[HH:MM:SS]` or `[HH:MM:SS]-[HH:MM:SS]` form matching the sibling transcript chunks.
   - Source contains the canonical video URL and `[transcript.md](./transcript.md)`.

2. Playlist overview contract: playlists/<playlist-slug>/overview.md
   - Document this exact frontmatter key set and order, with two-space-indented block-list items and no inline comments:

     ---
     title: "<playlist title from catalog.json>"
     status: draft
     coveredVideoIds:
       - <video-id>
       - <video-id>
     ---

   - `status` uses draft|reviewed. `coveredVideoIds` lists every video summary incorporated into the current overview and is updated on each revision. Task 3 status marks the overview stale when an existing summary's video ID is missing.
   - Use these exact headings in order:

     ## Coverage

     ## Current Thesis

     ## Stable Ideas

     ## Emerging Ideas

     ## Revisions and Tensions

     ## Practical Implications

   - Coverage states manifest count, summary count, incorporated count, and pending IDs.
   - Synthesize per-video summaries; do not silently regenerate from raw/live YouTube data.
   - Any bullet stating the author's claim must include a source anchor: a relative summary link or video ID plus a transcript timestamp. Any editorial interpretation bullet must begin `Editorial:`. Keep author claims and editorial synthesis visibly separate in every section.
   - Any claim about sequence/change over time must cite video publication dates plus timestamped evidence. Never infer chronology from mutable playlist position.

3. Author synthesis contract: authors/<author-slug>.md
   - Keep author files flat and document this exact frontmatter key set/order:

     ---
     authorId: <catalog author id>
     status: draft
     coveredVideoIds:
       - <video-id>
     ---

   - File name is the catalog author slug; authorId must match the catalog author ID. status uses draft|reviewed. coveredVideoIds has the same indented-list and staleness semantics across all related playlists.
   - Use these exact headings in order:

     ## Source Identities

     ## Cross-Playlist Synthesis

     ## Changes Over Time

   - Source Identities contains explicitly confirmed editorial links such as channel URL, personal site, or GitHub. Identity is configured through catalog author/relationship data and explicitly stated here; never infer author identity from uploader/channel metadata because uploader, speaker, and subject can differ.
   - Do not duplicate machine-owned playlist relationships or manifest membership. Link to playlist overviews using relative links instead.
   - Cross-Playlist Synthesis follows the same anchored-author-claim versus `Editorial:` interpretation rule.
   - Changes Over Time uses publication dates and timestamped evidence, never playlist order.

4. Cross-cutting editorial rules
   - Summaries, overviews, and author files are explicit agent/human editorial work from committed transcripts and summaries.
   - No LLM API integration and no silent generation/replacement by sync, capture, or status.
   - Only status and coveredVideoIds are currently machine-read, tolerantly. Other frontmatter is durable editorial provenance.
   - New editorial artifacts begin as draft; reviewed requires an explicit human or dedicated review pass.

Non-goals (do not start Task 5):
- Do not create videos/**, playlists/**, authors/**, manifests, transcripts, metadata, summaries, overviews, author files, examples, or placeholders.
- Do not modify catalog.json, package.json, src/content.config.ts, scripts/CLI behavior, public transcript behavior, or Astro code.
- Do not add templates, scaffolding commands, dependencies, YAML parsing, tests unless the existing documented parse verification fails, or any LLM integration.
- Do not perform sync, capture, summary writing, or source identity research.

Allowed files:
- src/content/youtube/AGENTS.md
- .agents/scripts/youtube-library.test.mjs only if one focused compatibility test is strictly required after the documented parse check (expected: no test/code change)
- .agents/work/tooling/youtube-knowledge-library/plan.md
- .agents/work/tooling/youtube-knowledge-library/progress.md
- .agents/work/tooling/youtube-knowledge-library/index.md

Acceptance:
- AGENTS.md defines all three exact frontmatter contracts, enums, body headings, and source/provenance rules.
- coveredVideoIds examples use two-space-indented block lists compatible with Task 3 status.
- Summary translation/paraphrase disclosure, no-verbatim rule, and timestamp anchors are explicit.
- Overview and author guidance separates anchored author claims from `Editorial:` synthesis and uses publication dates for change-over-time claims.
- Author identities are explicit editorial facts, never uploader inference, without duplicating catalog relationships.
- No corpus/editorial artifact or production code is created or changed.

Progress contract:
- Check off Task 4 only when the documentation contract and verification are complete. Leave Tasks 5–6 unchecked.
- Append a dated Task 4 entry to progress.md with contract decisions, verification, blockers/deviations, and next action.
- Keep index.md Status `in-progress`, update Updated, retain handoff links, and set Next Action to preparing/implementing Task 5.

Verification (run and record all):
- Confirm the documented synthesis frontmatter parses with the existing tolerant reader:
  `node --input-type=module -e "import { readStatusFrontmatter } from './.agents/scripts/lib/youtube-library-capture-status.mjs'; console.log(readStatusFrontmatter('---\nstatus: draft\ncoveredVideoIds:\n  - abc\n---\n'));"`
  Expect `{ status: 'draft', coveredVideoIds: [ 'abc' ] }`.
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run lint:fix`; review changes and do not include unrelated formatting. The known pre-existing .agents/references/dot-agents/site diagnostics may remain and should only be recorded.
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` finds no registration/import.
- `rg -n "source-only" dist/` finds nothing.
- `find src/content/youtube -type f -print | sort` shows only AGENTS.md and catalog.json.
- `git status --short --branch` shows only allowed changes.

Stop conditions:
- The documented examples do not parse and correcting compatibility would require production code changes.
- Acceptance appears to require a corpus file, template, command, dependency, live data, or Task 5 work.
- A change would affect sync/capture/status or the public transcript CLI.
- npm run check/build fails for unrelated reasons; report rather than changing unrelated code.

Commit guidance:
- Commit AGENTS.md separately from work-item progress, following the previous task pattern.
- Run git status before staging. Do not include generated directories or unrelated changes.

Expected final response:
- Frontmatter keys/enums/headings and disclosure/claim/source-identity decisions encoded.
- Every verification result.
- Confirmation that no corpus files, templates, commands, dependencies, or CLI behavior were added.
- Commits and work-item updates.
- Deviations/blockers.
- Remaining next action: Task 5—prove the source-only thin slice and then backfill in batches.
```
