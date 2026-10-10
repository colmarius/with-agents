# Content Authoring and Review

Follow the root publication gates and date-ownership rules. The rules below apply
to public summaries and their transcript sidecars. Tracked YouTube source work
also follows [the source-library contract](youtube/AGENTS.md), including its
dedicated review and `reviewed` publication gates.

## YouTube transcript workflow

Use this workflow when the user provides a YouTube video link/title or asks for a video summary.

X-only livestreams or broadcasts do not need transcript sidecars. If an entry intentionally points only to X and no public YouTube recording/transcript is being summarized, say that explicitly in the summary body instead of leaving a "coming soon" placeholder.

1. For a new YouTube video, save a transcript sidecar first:

   ```sh
   npm run youtube:transcript -- <youtube-url> --summary-slug <relative-summary-slug> --title "<video title>"
   ```

2. If regenerating an existing transcript, do the mechanical regeneration first. `--force` replaces the transcript sidecar with current YouTube caption output and will overwrite any prior manual transcript fixes.
3. After the final regeneration for a video, do an editorial transcript pass only when needed. Fix obvious source-faithful auto-caption issues: names, product/model casing, obvious substitutions, punctuation that changes meaning, and stray caption markers. Do not rewrite or editorialize the transcript.
4. For a summary request, read the saved transcript and write/update the public summary by hand as normal content work. Update the applicable registered manifest under `src/data/resources/` and its catalog membership only when a new canonical resource record is needed.
5. After drafting, complete the Summary readability review below and resolve material findings before final validation and rendered-page verification.

When reviewing or updating transcript-backed summaries, compare the summary against the transcript before editing. Fix copied-forward episode content, placeholder summaries, unsupported claims, wrong speaker/name/model attributions, and misleading timestamp citations. Prefer concise timestamped bullets for the main transcript-backed themes. Keep external bio/context claims only when they are present in the transcript or already trusted in the resource manifest.

Store committed transcripts under `src/content/transcripts/**` using the same relative slug as the matching summary. Example:

```text
src/content/summaries/coding-with-agents/raising-an-agent-episode-9.md
src/content/transcripts/coding-with-agents/raising-an-agent-episode-9.md
```

Transcript files must use this frontmatter contract: `title`, `summarySlug`, `sourceUrl`, `videoId`, `capturedAt`, and optional `series`, `episode`, `channel`, `language`, `kind`, `durationSeconds`, and paired `sourceStartSeconds`/`sourceEndSeconds` for an excerpt. Excerpt ranges are half-open intervals on the original video timeline, and `durationSeconds` remains the full source-video duration. Body text should live under `## Transcript` and use coarse timestamped chunks such as `[00:01:00] text...`; the timestamps are absolute source anchors for checking and summary citations, not per-caption timing. Do not store transcripts under `src/content/summaries/**`, because those files are rendered as summaries. Treat transcript regeneration as destructive source capture; do editorial transcript cleanup after regeneration, not before.

Do not create long-lived draft, review, or apply artifacts for summaries. Keep transcript capture scripted; keep summary writing as explicit agent/human editorial work from the saved transcript.

## Summary readability review

For new or substantively revised summaries, review in two passes: first read the summary on its own for reader understanding, then compare its claims, explanations, examples, and qualifications with the source. Use the saved transcript for transcript-backed summaries and the original source otherwise. Metadata-only changes do not require a new prose review. Revise as needed, and recheck affected source passages and citations after every substantive edit, including edits prompted by another reviewer. Finish only when the intended reader can explain each main point and its important limits without reopening the source.

- Explain source-supported mechanisms, not just their labels; define necessary terms in place. State what causes what and why it matters. If the source offers an analogy, proposal, or unexplained effect, preserve that status rather than supplying a missing mechanism.
- Make comparisons explicit: explain the existing approach, what the proposal changes, and which behavioral differences the source establishes. Prefer a source-backed example. Do not imply that an existing approach lacks a capability merely because the proposal implements it differently.
- Keep each claim with the explanation, exception, or qualification needed to interpret it correctly. Preserve cases where a simpler or existing approach remains adequate. Split distinct questions or lessons when a bullet becomes overloaded. Prefer narrowly accurate claims and clearly scoped attribution over repeated generic caveats; keep local qualifications wherever omitting them would change the takeaway. Cut repetition, not needed explanation, and do not expand every point into a tutorial.
- Disclose known transcript language, caption kind, and editorial translation once when that basis applies throughout; follow any stricter source-library disclosure rules. Do not guess provenance or imply an original-audio check that was not performed. Preserve speaker attribution and distinguish observations, proposals, and forecasts. Label editorial implications and added illustrations; neither may supply unsupported training methods, implementation details, or model-specific claims.
- Keep citations beside the claims they support. Read each affected citation range and surrounding context before retaining or changing it; check both endpoints so the range covers the complete supporting passage.

Independent review is optional when useful; apply the root Oracle policy. Give the reviewer the summary and source, and request concrete comprehension or source-fidelity findings with passage evidence, separated from wording preferences. The owning thread decides which edits to accept. Keep findings in the active conversation. Source-library dedicated review and `reviewed` publication gates still apply.

## Summary timestamp citations

- Use one linked point or en-dash range: `[17:49–25:32](https://www.youtube.com/watch?v=9UAxrdcDjjU&t=1069s)`. Labels use `MM:SS` or `H:MM:SS` (`56:14–1:03:18`); identical endpoints become one timestamp. Keep “onward” outside the link.
- Place timestamp links directly after the claims they support; do not wrap the links in parentheses. Separate multiple supporting links with commas.
- Link to the original source's absolute start time (`t=0s` included), and to the correct talk in multi-video guides. Other publishers need verified seek links and validator support; never invent fragments.
- Preserve claims, citation placement, and evidence ranges. Leave source-only transcript timestamps unchanged. Source identity and claim support still require editorial review.
- Run `npm run summaries:check`; `npm test` checks the whole corpus in CI. Install the changed-summary pre-commit check once per checkout with `npm run hooks:install`. Inspect representative rendered summaries after citation changes.
