# Post and slide format refresh research

Updated: 2026-06-28

## Context availability

- Requested prior context under `.agents/work/docs/agentic-coding-article-refresh/` is not present in this checkout. `list-work.sh --all` returned no existing work items before this one was created.
- The planning source of truth for this thread is the current repo files plus the referenced Amp thread summary.

## Current implementation audit

### Content and article rendering

- Posts are plain Markdown files in `src/content/posts/*.md`.
- `src/content.config.ts` defines the `posts` collection with only simple frontmatter: `title`, `description`, `pubDate`, optional `tags`, `draft`, `unlisted`, and required `order`.
- `src/layouts/PostLayout.astro` renders article metadata, tags, and a universal `→ View as slides` link to `/posts/<slug>/slides`, then renders the Markdown slot inside `.prose-post`.
- `src/components/MermaidRenderer.astro` is included in article pages, so Mermaid code fences render in articles.
- `src/pages/posts/index.astro` orders posts by `order`, then newest `pubDate`.

### Current slide route

`src/pages/posts/[slug]/slides.astro` is a standalone HTML page that:

1. Loads the post with `getCollection('posts')`, filters drafts only in production, and calls `render(post)`.
2. Renders `<Content />` inside a hidden `#source` div.
3. Uses inline browser JS to find every rendered `h2` in `#source`.
4. Uses `Range` cloning to turn each H2-to-next-H2 section into one `.slide`.
5. Treats the whole post as one slide if there are no H2s.
6. Shows one slide at a time, with arrow buttons, arrow-key/space navigation, and `#<slide-number>` hash updates.
7. Renders Mermaid lazily on the active slide by importing Mermaid from a CDN and duplicating the shared Mermaid config inline.

### Markdown assumptions

- Every rendered `h2` is a slide boundary.
- Everything inside that H2 section belongs on the slide.
- No H2 is an appendix by default, so `## Sources used` becomes a presentation slide when present.
- There is no distinction between slide copy and notes copy.
- Visuals are just ordinary article content that happens to be cloned onto the slide.
- Slide mode requires JavaScript. Without JS, the slide container is empty and the source content is hidden.
- The page is `noindex,follow`, so SEO is intentionally delegated to the article route.

### Current limits

- Sections are often 150-400 words, which makes generated slides verbose and presentation-hostile.
- Citations, context, examples, and source lists appear directly in slides instead of speaker/reader notes.
- No speaker/notes toggle, notes mode, print handout mode, or source appendix behavior exists.
- No explicit content contract helps an agent author concise slide text reliably.
- Mermaid support is duplicated between article and slides. A future refactor should avoid expanding that duplication.
- Hash updates currently use `window.location.hash`, which can create browser-history noise during slide navigation.
- Keyboard handling captures space globally; it should not hijack typing or activation when focus is inside interactive controls.

### What would break with structured slide sections and notes

- Adding `### Notes` headings today would still render notes on the slide because the whole H2 section is cloned.
- Adding MDX components would require changing the content loader pattern to include `.mdx`, adding the Astro MDX integration if absent, and deciding how components render in both article and slide extraction paths.
- Splitting article and slides into separate files would require new routing/data joins and would invite source/citation drift.
- Treating `Sources used` as an appendix requires explicit exclusion from slide navigation, otherwise current decks keep a non-presentational final slide.
- Existing posts lack explicit slide-message blocks, so the first code slice needs a backward-compatible fallback.

## Current article structures

Rendered-ish H2 counts exclude headings inside code fences.

| Post | Current H2 count | Main current issue for slides |
| --- | ---: | --- |
| `agentic-coding-2026.md` | 8 | Field-guide sections are strong but dense; source slide should become appendix/handout. |
| `durable-context-coding-agents.md` | 9 | Good diagrams already, but most slides need one-line takeaways separated from explanation. |
| `make-the-agent-prove-it.md` | 11 | Proof-stack ladder is slide-friendly, but several layer sections are still prose-heavy. |
| `small-threads-durable-state.md` | 9 | Procedure article has useful code examples; slides should emphasize the workflow loop, not file-format detail. |
| `amp-factory-era-case-study.md` | 8 | Amp-specific citations/details should move to notes while slides carry reusable contracts. |

## Target article-by-article slide/story sketches

These are audit sketches, not rewrites. Each slide should map to one `##` section unless a future migration deliberately adds an escape hatch.

### `agentic-coding-2026.md`

Story arc: a map of the series: alignment first, proof before merge, useful friction, durable context, then factory workflows.

| Likely slide | Main slide message | Slide body | Notes purpose | Visual idea |
| --- | --- | --- | --- | --- |
| Alignment is the new bottleneck | Code got cheap; alignment did not. | One sentence or 3-word stack: `Intent / Constraints / Proof`. | Set up the series and explain why code generation is no longer the hard question. | Funnel from cheap code to expensive coordination. |
| Cheap code moves alignment earlier | If plans stay implicit, review becomes the first alignment meeting. | 2 bullets: cheap implementation; late coordination debt. | Cite Appleton/Ball and explain alignment debt. | Timeline: plan → code → PR, with risk marker at PR. |
| Proof is non-optional | Trust is a passing proof stack, not a feeling. | Mini ladder: tests → real system → evidence → judgment. | Point to Willison/Zechner and the proof article. | Vertical proof ladder. |
| Keep useful friction | Remove bad friction; preserve judgment friction. | Green/yellow/red decision bands. | Explain review pressure and codebase-as-infrastructure. | Traffic-light risk matrix. |
| Keep context wide, implementation narrow | Research wide. Implement narrow. Preserve durable state. | One loop or funnel. | Connect work items, skills, and handoffs. | Wide-to-narrow funnel into `.agents/work/`. |
| Factory workflows raise the bar | Parallel agents amplify the system you already have. | 3 bullets: task quality, proof, review capacity. | Explain emerging factory workflows without overselling. | Parallel worker lanes converging at review gate. |
| Where to go next | Pick the article that matches the bottleneck. | Links as a simple map, not prose. | Reader navigation across series. | Hub-and-spoke series map. |
| Sources appendix | Not a presentation slide. | Hidden from slide nav; visible in notes/print or article link. | Preserve citations for readers. | Plain appendix/handout. |

### `durable-context-coding-agents.md`

Story arc: repo-local context is a control loop: map, procedure, state, evidence, promotion.

| Likely slide | Main slide message | Slide body | Notes purpose | Visual idea |
| --- | --- | --- | --- | --- |
| Repo as operating memory | Chat is working memory; the repo is durable memory. | One core statement. | Define local truth and promotion. | Chat ↔ repo loop already present. |
| Alignment got expensive | Fast code makes hidden local truth dangerous. | 2 bullets: lossy public prior; local anchors. | Cite Appleton, Ball, Willison, Osmani. | Iceberg: generated code above, local truth below. |
| Context is a control loop | Do not build a document pile; build a loop. | Map → Procedure → State → Evidence → Promote. | Explain each part briefly. | Existing loop diagram refined. |
| Map | `AGENTS.md` should be a map, not a manual. | 3 examples: commands, boundaries, gotchas. | Discuss root vs directory guidance. | Map icon with pointers to deeper files. |
| Procedure | Package workflows only when they repeat. | Trigger → steps → evidence → human decision. | Distinguish skills/scripts/checklists from preferences. | Four-card pipeline. |
| State | Long work needs durable state, not longer chats. | Work item file tree. | Explain `.agents/work/` and handoff boundaries. | Folder stack. |
| Evidence | Proof belongs where the next reviewer can see it. | Proof ladder. | Tie to Make the Agent Prove It. | Existing proof ladder. |
| Judgment | Route irreversible decisions to humans. | Green/yellow/red. | Explain good friction. | Risk bands. |
| Promote one useful fix | Promote only what improves the next run. | Missed command → AGENTS; repeated workflow → skill; repeated bug → check. | Close with operating habit. | Promotion escalator. |

### `make-the-agent-prove-it.md`

Story arc: choose proof by risk, climb only as high as the change deserves, and end with human comprehension.

| Likely slide | Main slide message | Slide body | Notes purpose | Visual idea |
| --- | --- | --- | --- | --- |
| Make it prove it | Ask what proof would make the change safe to accept. | One core question. | Set reviewer ownership. | Big question card. |
| Start with risk | The task type determines the proof stack. | Condensed risk/proof matrix. | Explain synthesis and sources. | 2x3 matrix. |
| Layer 1: executable proof | Start with a failing check when practical. | Red → green → project check. | Detail TDD/default checks. | Red/green loop. |
| Layer 2: real system | Tests do not prove the route is wired. | Server → curl/browser → output. | Explain manual evidence transcripts. | Wire diagram. |
| Layer 3: conformance | Use an external oracle when vibes are weak. | Fixture suite → known-good behavior. | Explain parsers/protocols/formats. | Stamp/checklist. |
| Layer 4: review evidence | Put evidence where reviewers can inspect it. | Commands, screenshots, logs, gaps. | Explain durable evidence and diff review. | Evidence bundle. |
| Layer 5: blast radius | Prove boundaries before code proof. | Read / change / exfiltrate / data used. | Explain lethal trifecta and mock data. | Boundary box. |
| Layer 6: comprehension | The reviewer must still explain the change. | Four review questions. | Tie proof back to judgment. | Human at top of ladder. |
| Reusable prompt | Give the agent its proof contract before edits. | Short prompt excerpt only. | Full prompt remains in notes/article. | Prompt card. |
| Done | Evidence plus judgment. | One closing sentence. | Recap. | Checkmark + human review. |
| Sources appendix | Not a presentation slide. | Hide from normal nav. | Preserve citations. | Appendix. |

### `small-threads-durable-state.md`

Story arc: use wide research, narrow implementation, durable state, and handoffs to make agent work restartable and reviewable.

| Likely slide | Main slide message | Slide body | Notes purpose | Visual idea |
| --- | --- | --- | --- | --- |
| Small threads need durable state | Do not make one chat do every job. | Wide research / narrow implementation / durable state. | Explain failure modes. | Split-brain thread diagram. |
| Separate thread roles | Research goes wide; implementation goes narrow. | Funnel: research → critique → decision → implementation. | Source-backed Build Crew context. | Existing funnel refined. |
| Work item container | A work item is task state, not a prompt pile. | File tree. | Explain index/research/plan/progress roles. | Folder tree. |
| File roles | Each artifact answers one restart question. | 4 cards: where are we, what did we learn, what is the plan, what happened. | Keep detailed examples in notes. | Card grid. |
| Handoff prompt | Handoffs compress context with responsibility. | Include path, task, scope, proof, stop conditions. | Full template in notes. | Clipboard/checklist. |
| Committable threads | One implementation thread should aim at one reviewable diff. | Diff → check → commit → progress. | Explain Git gate. | Commit pipeline. |
| Verification state | Record the narrowest evidence that changes confidence. | Docs / code / running system / risky change. | Tie to proof stack. | Risk-scaled checklist. |
| Operating procedure | Classify, research, plan, critique, handoff, implement, verify, promote. | 8-step loop, maybe icons only. | Full procedure in notes. | Circular loop. |
| Sources appendix | Not a presentation slide. | Hide from normal nav. | Preserve citations. | Appendix. |

### `amp-factory-era-case-study.md`

Story arc: Amp is a concrete example of general factory-era contracts: mode choice, delegation, context, proof, orchestration, enduring rules.

| Likely slide | Main slide message | Slide body | Notes purpose | Visual idea |
| --- | --- | --- | --- | --- |
| Amp as example | Learn the contracts, not the product trivia. | Reusable lessons list. | Explain source sweep and scope exclusions. | Amp case-study label + reusable pattern arrows. |
| Mode follows uncertainty | Choose worker depth by uncertainty, not urgency. | Small/normal/hard/critic rows. | Keep current mode details and caveats in notes. | Decision matrix. |
| Delegate with contracts | Workers, critics, researchers, checks, and humans own different jobs. | Role contract stack. | Explain subagents/Oracle/Librarian/review. | Responsibility swimlanes. |
| Context is product + repo state | Product context helps; repo-local task state still matters. | AGENTS / skills / threads / work items. | Clarify Amp vs repo-local conventions. | Two-column context diagram. |
| Factory proof | Longer-running workers need faster reality checks. | Diffs / review / checks / feedback loops. | Cite Amp notes and proof article. | Feedback loop with sensors. |
| Orchestration frontier | More agents means stronger triage and review, not less. | More threads → contracts → proof → review. | Discuss high-churn APIs cautiously. | Parallel agents into review gate. |
| Contracts survive churn | Product details change; work contracts endure. | Six contracts. | Closing synthesis. | Durable contract cards. |
| Sources appendix | Not a presentation slide. | Hide from normal nav. | Preserve citations. | Appendix. |

## External research notes

- [Slidev syntax guide](https://sli.dev/guide/syntax): Slidev uses Markdown files, `---` slide separators, per-slide frontmatter, and comment blocks at the end of a slide as presenter notes. Useful precedent: notes can be Markdown/HTML and can be kept near the slide source, but Slidev is a dedicated deck format, not an article format.
- [Marp](https://marp.app/) and [Marpit Markdown](https://marpit.marp.app/markdown): Marp emphasizes CommonMark compatibility and simple horizontal-rule slide splitting, with directives for deck styling. Useful precedent: stay close to portable Markdown until presentation-specific features prove necessary.
- [Marpit usage](https://marpit.marp.app/usage): Marpit returns collected HTML comments per slide as presenter notes and can render slide HTML as an array. Useful precedent: presenter notes are a first-class extraction result, but adopting Marpit would introduce a separate renderer and deck grammar.
- [reveal.js speaker view](https://revealjs.com/speaker-view/): reveal.js models notes as `<aside class="notes">`, supports `data-notes`, has a speaker window, and can include notes in PDF export via `showNotes`. Useful precedent: semantic notes containers and print/export behavior matter more than deck-only polish.
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/): content entries expose `body`, data, and `render()`, and `render()` returns `Content` plus rendered headings. Useful precedent: the site can stay on content collections and defer a custom parser unless needed.
- [Astro MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/): MDX can be loaded from content collections with a `**/*.{md,mdx}` pattern and can receive components at render time. Useful precedent: MDX is viable later for reusable visual components, but it raises authoring and migration complexity.

## Oracle feedback summary

Oracle recommended Option A as the default: keep single-source Markdown and use a visible convention where the first blockquote after each `##` is the concise slide message, optional immediate visual support follows, and the rest of the section remains reader/speaker notes.

Useful Oracle conclusions:

- Current H2 splitting is the root cause of verbose slides because it clones the whole section, including citations and source appendices.
- Plain Markdown is the best fit for this repo because the schema, layout, and article-writing skill are already plain-Markdown oriented.
- MDX should be deferred until repeated reusable visual components justify the migration.
- `## Sources used` should not be a normal navigable presentation slide.
- The first implementation should be backward-compatible: sections without a slide-message blockquote should continue to render in legacy whole-section mode.
- Presentation UX should include slide-only default, notes toggle/`?notes=1`, print CSS that shows notes, semantic `section` markup, no-JS fallback, better keyboard handling, and no noisy browser history on every navigation.
- A later checker should validate H2 sections with missing blockquotes, long blockquotes, images without alt text, and accidental source-section slides.

## Resolved decisions from planning grill

- **Task 1 sequencing:** ship the backward-compatible slide-route extractor and article-writing skill update only. Do not migrate all posts, and do not make the pilot migration optional inside Task 1. Migrate `agentic-coding-2026.md` in Task 2 after the route behavior is reviewable.
- **Visual asset convention:** early migrations should prefer Markdown-native visuals: Mermaid, text diagrams, small tables, inline SVG, or simple figures. If static image files are needed later, store them under `public/visuals/posts/<slug>/<descriptive-kebab-name>.<svg|webp|png>` and reference them as `/visuals/posts/<slug>/...` with accessible alt/caption text.
- **Compatibility preflight:** because the convention is auto-detected from first blockquotes, the implementation thread must check current posts for H2 sections that already begin with a blockquote before changing extractor behavior. If any are found and are not intended slide messages, preserve legacy behavior or stop and report.

## Option comparison

| Option | Authoring ergonomics | Portability | Astro compatibility | Migration cost | Visual support | Notes/speaker support | Reliability | Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A. Plain Markdown headings + convention | High: visible in normal writing | High | Already supported | Low-medium | Good for images, Mermaid, tables, raw HTML/SVG | Good with extractor | Good if checked | Choose first. |
| B. MDX components | Medium: explicit but more syntax | Medium-low | Supported with integration/config changes | High | Excellent reusable components | Excellent explicit slots | Medium: agents can break JSX/imports | Defer until repeated component need. |
| C. Custom fenced directives/markers | Medium-low: private grammar | Low-medium | Needs custom parser/extractor | Medium | Good if grammar grows | Good but brittle | Medium-low | Avoid initially. |
| D. Split article/slides files | Medium for decks, low for articles | Medium | Requires new content model | High | Excellent deck control | Excellent | Low: drift risk | Avoid except one-off talks. |
| E. Frontmatter slide manifests | Low for prose | Low | Schema can validate | High for authoring | Poor for rich content | Poor-medium | Medium for metadata, poor for content | Use only for metadata later. |

## Task 5 presentation engagement / reveal matrix

Post-migration audit, 2026-06-28:

- The five public posts now produce 41 normal slides plus four source appendices.
- All 41 normal slides start with concise slide-message blockquotes; sampled blockquote averages are roughly 9-11 words per post.
- 35 of 41 normal slides have immediate Markdown-native visuals: 31 text/code diagrams and four tables. Six slides are currently message-only.
- The visuals are mostly content-specific workflow diagrams, ladders, matrices, and command/prompt excerpts. There is no repeated visual/component pattern yet that would justify MDX.
- The current route supports H2 slide splitting, first-blockquote slide messages, bounded immediate visual extraction, notes mode, appendices, print/handout behavior, keyboard/hash navigation, no-JS fallback, and Mermaid rendering. It does not support within-slide reveal/fragments.

| Option | Engagement gain | Implementation cost | Authoring complexity | Accessibility and print/PDF fallback | Agent reliability and Markdown fit | Rollback risk | Trigger/evidence needed | Task 5 recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Keep Markdown static visuals | Medium: already creates concise, high-signal slides with notes carrying nuance. | None. | Low: first blockquote plus immediate visual is visible Markdown. | Strong: current notes and print model already work. | Strong: matches source-of-truth article model and existing guidance. | Very low. | Revisit only if dry-run presentations still feel flat after editorial improvements. | Keep as the default. |
| Progressive duplicate slides / static diagram buildup | Medium-high for complex ideas: introduce concept, then show subpoints or a fuller diagram on adjacent slides. | None to low; content-only edits. | Medium: authors must avoid making article mode repetitive. Prefer adjacent buildup sections over exact duplicated prose. | Strong if each stage is a normal slide and print shows all stages. | Strong: visible Markdown, easy for agents to author and review. | Low: delete or merge sections if the buildup is too much. | Use when a specific concept needs staged explanation and the article still reads naturally. | Add as the next authoring strategy, not route code. |
| Notes-only narrative | Medium: keeps projected slides sparse while preserving talk track. | None. | Low. | Strong: notes are already visible through `?notes=1` and print. | Strong. | Low. | Use when a slide already has the right message/visual and only the spoken context is missing. | Continue using. |
| Route-level fragments/overlays | Medium-high for bullets, highlights, or diagram layers on one slide. | Medium-high: needs syntax, fragment state, keyboard/hash semantics, print expansion, reduced-motion/a11y behavior, and no-JS fallback. | Medium-high: hidden or custom syntax risks authoring errors. | Unclear until designed; print must expand all fragments predictably. | Medium-low unless the convention is Markdown-visible and narrow. | Medium: would complicate the slide route and rollback may affect authored content. | Consider only after duplicated buildup causes concrete maintenance pain in multiple posts or talks, and a tiny print-safe syntax is obvious. | Defer. |
| Generated static visual workflow | Medium-high when a text diagram cannot communicate spatial relationships or a memorable metaphor. | Low-medium per asset; no dependency required. | Medium: prompts/specs need review, and final assets need alt/captions. | Strong if final committed assets are accessible and do not rely on tiny embedded text. | Medium: agents can draft prompts/specs, but spatial layout and labels need human/coding-agent refinement. | Low-medium: assets can be removed, but stale art can drift. | Use only for a named slide with a prompt/spec and a clear reason text/table/diagram is insufficient. | Treat as workflow, not framework. |
| MDX/components | Medium-high only if reusable visuals emerge. | High: Astro MDX integration/config, content pattern changes, component design, migration and review complexity. | Medium-high: JSX/imports inside posts are easier for agents to break. | Depends on component discipline; print/notes/article parity must be built. | Medium-low compared with Markdown. | Medium-high. | Multiple posts need the same reusable component or Markdown authoring becomes real maintenance pain. | Defer. |
| Deck framework | High for true deck features: fragments, overlays, speaker tools, export, animations. | Very high: separate deck grammar/product, dependency, migration, article/deck drift decisions. | High: authors would need deck-specific semantics. | Depends on framework; PDF/export can be good but must be integrated with article source. | Low for this repository's current source-of-truth constraint. | High. | Presentation mode becomes a first-class deck product, not an article projection. | Defer. |

Task 5 recommendation: keep the Markdown-first route and improve engagement through authoring conventions. For the next presentation-quality pass, do a real talk/dry-run on one post or path and add adjacent progressive buildup slides or static diagram stages only where the presenter needs them. Do not add route-level fragments, MDX, generated assets, or deck tooling until the trigger evidence above appears.

## Recommended content model

Use plain Markdown as the single source of truth.

````md
## Cheap code moves the bottleneck to alignment

> If code got cheap, alignment cannot stay implicit.

```text
intent → constraints → decision → evidence
```

Maggie Appleton's talk is the cleanest source for the shift...

More examples, citations, caveats, and prompts continue here as reader/speaker notes.
````

Contract:

1. Each rendered `##` starts one article section and one default slide.
2. The first meaningful block after the H2 should be a blockquote containing the concise slide message.
3. Optional visual support may immediately follow the blockquote: Markdown image, Mermaid/text diagram code fence, small table, raw SVG, or simple HTML `<figure>`.
4. Everything after the slide message and immediate visual is notes/article prose.
5. `## Sources used` is an appendix/handout section, not part of normal slide navigation.
6. Citations and timestamp anchors usually belong in notes, not the slide headline.
7. Visuals need accessible alternatives: image alt text, captions where useful, and notes that do not rely on color/image-only meaning.

Mode model:

- **Slide-only mode:** default `/posts/<slug>/slides`; concise message + optional visual.
- **Notes mode:** toggle and `?notes=1`; show notes below the main slide for speaker/read-along use.
- **Print/handout mode:** print CSS shows all slides with notes and hides controls; append sources or link to article.
- **Speaker mode:** defer a dual-window presenter view until after notes mode proves useful.

## Preparatory refactor plan themes

- **Content schema:** no required schema change for the first slice. Consider optional `slides` metadata later only for `enabled`, `theme`, `excludeHeadings`, or migration flags.
- **Slide extractor:** keep current client-side H2 extraction as the first small step, but split each section into `main` and `notes` based on the first-blockquote convention. Preserve legacy fallback.
- **Layout boundaries:** if the slide route grows much larger, move extraction/navigation code into `src/scripts/` after behavior is proven. Do not start by adding a framework.
- **Visual conventions:** prefer Mermaid, text diagrams, small tables, and inline SVG/HTML figures before adding custom components. If static images become necessary, use `public/visuals/posts/<slug>/` with descriptive filenames and accessible alt/caption text unless an MDX migration changes the asset story.
- **Accessibility:** semantic `section`, readable headings, notes containers, no-JS fallback, focus-safe keyboard shortcuts, image alt text, and print-friendly order.
- **Checks:** later add a small content checker for missing first blockquotes, overlong slide messages, missing image alt text, and source-section handling.
- **Backwards compatibility:** first code slice should keep old posts usable; article migration can happen one post at a time.

## Files likely to change during implementation

- `src/pages/posts/[slug]/slides.astro` — extraction, modes, navigation, print/no-JS behavior.
- `src/styles/global.css` — shared slide/notes/print prose styles if not kept local to the slide route.
- `src/layouts/PostLayout.astro` — optional link label or link to notes/slide modes.
- `src/content.config.ts` — optional later `slides` metadata, not required for Task 1.
- `src/content/posts/*.md` — eventual article migrations; at most one pilot in Task 1.
- `.agents/skills/article-writing/SKILL.md` — add hybrid article/slide authoring guidance.
- `AGENTS.md` — optional later always-visible summary after the model is implemented.
- `package.json` plus a script under `src/scripts/` or similar — optional later content checker.
- `public/visuals/posts/<slug>/` or equivalent — optional later image assets.

## Proposed article-writing skill updates

Add a section like:

```md
## Post/Slide Hybrid Structure

- Public posts double as slide decks. Each rendered `##` section should start with a concise blockquote that acts as the main slide message.
- Keep the blockquote presentation-friendly: usually one sentence, no citation clutter, no more than 1-3 short clauses.
- Put citations, examples, caveats, and spoken/read-along context in the prose after the blockquote; that prose is the reader/speaker notes.
- Optional slide visuals may immediately follow the blockquote: Markdown image with alt text, Mermaid/text diagram, small table, inline SVG, or simple figure.
- `## Sources used` is an appendix for article/print mode and should not be written as a presentation slide.
- When refreshing an existing post, migrate one section at a time and keep article readability intact; do not create a deck that duplicates or drifts from the article.
```

Add checklist items:

- [ ] Each public-post H2 has a concise first blockquote unless intentionally legacy/exempt.
- [ ] Notes prose supports the slide claim with sources, examples, and caveats.
- [ ] Visuals are lightweight, purposeful, and accessible.
- [ ] Sources appendix is preserved but not treated as a normal slide.
- [ ] Slide mode, notes mode, and article mode remain coherent after edits.

## Recommended `AGENTS.md` update

Do not update root `AGENTS.md` before the code supports the convention. After Task 1 lands, add a short always-visible bullet under Article writing:

- Public posts are slide/article hybrids: each rendered `##` should start with a concise blockquote for the main slide message; notes prose follows with citations/examples; visuals are optional and must be accessible.

Rationale: this is a repo-wide content convention that future agents need to see, but adding it before the implementation exists would create misleading guidance.
