# Progress

## 2026-07-27 — Evidence review and publication

### Evidence selection

The public post uses eight videos that support one evidence-and-supervision
argument:

- `497EK7ZQ2FY` — prediction, reasoning, and capability framing
- `TlGrAretPQw` — interpretability and perturbation evidence
- `PHsxD4X2V2A` — architecture claims and ablation
- `yFa1BHzkzn8` — skill loss and the supervision question
- `id9QG-mQSOo` — attention fragmentation and chronic fatigue
- `N-iwRfCFbHE` — representative model testing and hidden semantic failures
- `WoaulxVqUUA` — persuasive diagnosis corrected by behavioral evidence
- `XZZ_ddBvELc` — shifting review toward ideas, architecture, and QA

The `AI concepts` orientation selects six starting videos: `T5b69_8f5MI`,
`497EK7ZQ2FY`, `TlGrAretPQw`, `PHsxD4X2V2A`, `n3rdoQnN7Co`, and
`ibcqRGQ7BKY`. The `Coding with AI` orientation selects `XZZ_ddBvELc`,
`0buzDrn0aIY`, `id9QG-mQSOo`, `WoaulxVqUUA`, `N-iwRfCFbHE`, and
`IoE3Hi2zpwk`; `SiOadQFUx2k` also supports its behavioral-QA themes.

Every public claim was checked against the selected summary, sibling transcript
chunk, source title, and publication date. Browser playback opened each of the
eight post sources at the intended timestamp and confirmed the video identity
and seek time. The anonymous YouTube player did not consistently expose caption
text because several videos defaulted to auto-dubbed playback, so the Italian
transcript chunks remained the content check and no verbatim quotation was used.

### Published artifacts

- `src/content/posts/behavior-over-explanation.md` — 1,358-word public post,
  six content slides plus the source appendix
- `src/data/resources/coding-with-agents.json` — playlist resources 22 and 23
- `src/content/summaries/coding-with-agents/salvatore-sanfilippo-coding-with-ai.md`
  — 399-word navigation summary
- `src/content/summaries/coding-with-agents/salvatore-sanfilippo-ai-concepts.md`
  — 400-word navigation summary

The post is argument-shaped; both resource summaries are navigation-shaped and
contain six `Where to start` links. Public content links only to YouTube and
existing site routes. No route, component, schema, or import exposes
`src/content/youtube/`.

### Verification

- The scoped Biome invocation completed; the resource manifest passed. Markdown
  is not covered by the configured formatter.
- `npm run check`: passed with 0 errors, 0 warnings, and 0 hints.
- `npm run build`: passed with 20 pages, including the public post, six-slide
  view, two playlist summary JSON endpoints, posts index, and resource hub.
- Source-boundary greps over public sources and `dist/`: clean; no
  `content/youtube` or copied `../videos/` references.
- Content validation: 23 unique resource IDs, all public YouTube timestamps map
  to captured videos and fall within source duration, and all six normal post
  sections begin with slide messages.
- Browser article check: correct title, seven rendered `h2` headings including
  sources, timestamp links, existing internal links, and no page errors.
- Browser slide check: six slides, no source-appendix slide, readable navigation,
  and no horizontal overflow after shortening the opening diagram.
- Browser resource check: search returns both new cards (`2 of 23`); each modal
  loads as one non-series summary with disclosure, `Key themes`, `Where to
  start`, 13 YouTube links, and the post link.
- Browser accessibility/responsiveness: keyboard activation focuses the close
  button, Escape closes the modal and restores trigger focus; a 390 px viewport
  has no horizontal overflow; desktop and mobile screenshots show readable
  scrollable content.

`npm run lint:fix` was attempted as required but remains non-green because of an
existing unrelated Biome error in
`.agents/references/dot-agents/site/index.html` (a button without an explicit
`type`) plus existing specificity/unused-function warnings in that reference
site. The command's unrelated formatting changes to protected YouTube metadata
were removed; only this work item's files remain changed. The touched resource
manifest passes its targeted Biome check.

### Next action

None. A DwarfStar/local-inference article remains an optional separate work item,
not unfinished scope for this release.
