---
name: article-writing
description: "Writes and reviews concise source-backed posts. Use for drafting, refreshing, simplifying, source checks, or draft retirement. Triggers on: write article, review article, refresh, simplify article, source-fidelity review, retire draft, remove draft."
---

# Article Writing Skill

Write, review, and maintain the public coding-agent series with a consistent,
source-backed house style. Use this skill for new posts, editorial and
source-fidelity reviews, refresh passes, draft retirement, and explicitly approved
draft removal.

The always-visible contract lives in root `AGENTS.md` under "Article writing." This
skill adds the repeatable workflow and the checklists.

## House Style

- **Audience:** experienced developers, tech leads, and agent-heavy practitioners
  who want practical coding-agent workflows.
- **Tone:** direct, calm, source-backed, concise; skeptical but constructive. Not
  salesy, not manifesto-like, not slangy.
- **Structure:** important point first. Active sentences. Short paragraphs. Concrete
  examples and prompts over abstraction. No throat-clearing or meta-history.
- **Skim test:** the title, description, headings, slide messages, and one practical
  artifact should expose the reader job, argument, and next action in 30 seconds.
- **Shape:** 4–6 substantive sections plus a `Sources` section when practical. Lead
  each section with its takeaway, not setup.
- **Length:** prefer the shortest version that keeps the argument. When refreshing,
  cut roughly 20–30% without flattening the point. If a post stays above target and
  the review uses a work item, record why in `progress.md`.

## Plain-Language Precision

- State the central claim or definition in one or two plain sentences. Label it as
  synthesis when it combines sources rather than quoting one.
- Give every sentence a clear job and prefer concrete behavior over specialist
  shorthand.
- Explain why a heuristic matters and where it stops working. Do not leave a rule
  of thumb floating without its purpose or qualification.
- For definition or category articles, separate the actual rule from warning signs
  that may correlate with it.
- Use short, parallel, reader-facing labels. Treat sentence-length counts as a
  diagnostic, not a writing target.

## Source-Anchor Hygiene

- Each timestamp or citation must support the specific claim beside it.
- Mark author synthesis as synthesis (for example, "that table is synthesis, not a
  quote").
- Distinguish exact quotation, source-faithful paraphrase, translation, and author
  synthesis. Name which one the reader is seeing when it could be ambiguous.
- Attribute multi-speaker material precisely. If one speaker poses a question and
  another supplies the examples, attribute the examples separately or refer to
  "the exchange" rather than collapsing both into one speaker.
- For translated or auto-captioned material, check the captured transcript, avoid
  quotation marks unless the wording is verified, and identify editorial
  translation or paraphrase in the sentence that uses it.
- Keep only the anchors a post needs. Do not repeat the same source recap across
  posts; each post carries its own evidence.
- Do not remove source anchors for factual claims that still need support.
- Do not add new product claims (for example, about Amp) unless verified against
  current first-party sources.

## Product Freshness And Incorporation

Before publishing or materially changing an Amp product claim, recheck the current
[Amp Manual](https://ampcode.com/manual),
[Orbs manual](https://ampcode.com/manual/orbs),
[Models page](https://ampcode.com/models),
[Plugin API](https://ampcode.com/manual/plugin-api),
[Chronicle](https://ampcode.com/chronicle), and
[Pricing page](https://ampcode.com/pricing). Treat canonical documentation as the
current product authority. Use dated announcements and workflow notes as dated
direction or examples, not timeless feature documentation. Date-stamp exact
product details as verified on the publication date or omit them. If first-party
sources conflict, record the conflict and prefer the newer dedicated source or
announcement for the changed feature.

A fresh source belongs in research by default. Before drafting public prose,
classify it as `incorporate`, `research-only`, or `ignore`. Incorporate it only
when all six checks pass:

1. **Thesis fit:** it directly strengthens or changes the article's thesis or an
   existing work contract.
2. **Evidence strength:** it documents product behavior, measured outcomes, or an
   operative contract—not merely a launch, partnership, aspiration, or customer
   name.
3. **Durability:** the useful lesson survives model, pricing, UI, and
   implementation churn.
4. **Novelty:** no stronger existing source already supports the point.
5. **Claim-to-caveat ratio:** the useful claim remains substantial after necessary
   caveats; if the caveat is the main story, keep the item in research.
6. **Load-bearing value:** removing the item would make the article materially
   weaker or less current.

"Latest" is a research-selection criterion, not a publication criterion. For a
transcript-backed post, also compare the proposed article with the matching
resource summary. Publish the post only when it adds a distinct thesis,
cross-source synthesis, practical framework, workflow, or decision guide rather
than repeating the summary.

### Empirical claims and evidence refreshes

For a public empirical claim, name enough of the evidence boundary for a reader to
judge it: study design, measured outcome layer, population or setting, relevant
tool period, and material affiliation or commercial conflict. Distinguish activity,
task completion, reviewed delivery, operational quality, customer value, and
retained capability instead of silently promoting a result from one layer to the
next.

Presenter, vendor, and observational figures may illustrate a mechanism or form a
pilot hypothesis, but they are not transferable benchmarks. Stronger evidence may
support broader claims only within its stated treatment, population, tool
generation, period, and outcome boundaries. Prefer direction, mechanism, and
boundary over a point estimate when the exact number is not load-bearing.

Refresh empirical claims when a materially stronger or more current primary study
changes their role, not merely because another source exists. Use work-local
research to classify candidate evidence, run an adversarial claim-to-source review,
and keep papers as direct article citations unless they independently earn a
durable resource-navigation job. Do not turn the curated resource manifest into a
paper database or create a recurring refresh schedule by default.

## Internal-Link Hygiene

- Link only to routes that exist in this repo. Confirm with:

  ```sh
  rg "/posts/<slug>" src/pages src/content
  ```

- Never link retired drafts or old/unavailable article routes from a public post.
- Keep the public series coherent and cross-linked by role: field guide as the map,
  durable-context as repo memory, prove-it as the evidence ladder, small-threads as
  the operating procedure, Amp as the case study.

## Post/Slide Hybrid Structure

Public posts double as generated slide decks. Keep Markdown posts as the single
source of truth: each rendered `##` section is an article section and usually one
presentation slide.

- Author against the route extractor: the first meaningful child after a normal
  `##` heading should be a blockquote slide message. If a post has not been
  migrated yet, leave legacy sections coherent until that post is migrated as a
  whole.
- Start each rendered `##` section with a concise blockquote slide message when
  practical.
- Keep the blockquote presentation-friendly: usually one sentence, no citation
  clutter, and no more than 1-3 short clauses.
- Only contiguous visual blocks immediately after the blockquote stay on the
  slide. Once normal prose, lists, or non-visual code starts, the rest of the
  section is speaker/reader notes.
- Put citations, examples, caveats, prompts, and read-along context in normal
  prose after the blockquote; that prose becomes speaker/reader notes in slide
  mode.
- Optional visuals may immediately follow the blockquote: Mermaid, text diagrams,
  tables, inline SVG, figures, or Markdown images. Make them accessible with alt
  text, captions, or nearby prose that does not rely on color/image-only meaning.
- Use `## Sources` or `## Sources used` for source appendices. They are not normal
  presentation slides; keep source detail available for article, notes, and print
  modes. Avoid variants like `## Sources consulted` unless you intentionally want
  a normal slide.

### Presentation strategy

- Prefer one idea per slide and sparse visible text; keep nuance in notes.
- Dry-run the real presentation before adding machinery. When a complex idea needs
  staged reveal, prefer adjacent Markdown sections or static diagram stages that
  still read naturally in article and print modes.
- Add route-level fragments only after adjacent buildup causes recurring
  maintenance pain and a narrow Markdown-visible, accessible, print-safe syntax
  is clear. Consider MDX only when multiple posts need the same reusable visual or
  interactive component. Consider a deck framework only when presentation mode
  becomes a first-class product that needs fragments, overlays, speaker tooling,
  export, or richer animation beyond the article projection.
- Prefer Markdown-native visuals. If a committed static asset is justified, store
  it at `public/visuals/posts/<slug>/<descriptive-kebab-name>.<svg|webp|png>` and
  reference `/visuals/posts/<slug>/...` with accessible alt or caption text.

## Workflow

For a systematic review of an existing post, follow
[`references/reviewing-existing-articles.md`](references/reviewing-existing-articles.md).
It separates argument, readability, source fidelity, article/slide rendering, and
independent review so feedback can be judged instead of applied mechanically.

### 1. Frame the job

- New post or refresh? What single argument must it carry?
- Which existing posts does it link to, and what is this post's distinct role?
- Set a word-count target and the sections that earn their place.

### 2. Draft or trim

- Lead with the takeaway, then support it.
- Keep useful tables, prompts, checklists, and source-backed timestamps.
- Cut meta-history ("what changed from the old draft"), duplicated source recaps,
  and sections whose only job is explaining a prior version.
- Replace passive throat-clearing with the concrete claim.

### 3. Verify claims and links

- Re-read each source anchor against the sentence it supports.
- Confirm every internal link resolves to a real route.
- Check frontmatter still matches `src/content.config.ts` (title, description,
  pubDate, tags, draft, order).

### 4. Build and record

```sh
npm run lint:fix
npm run check
npm test
npm run build
npm run content:guard
```

Run the affected article and slide routes in a real browser. Check representative
desktop and mobile article states plus the final and most content-dense slides.
Confirm practical artifacts intended for slides are visible rather than hidden in
speaker notes. When the review uses a work item, record per-post word counts and
verification results in `progress.md`.

## Retiring Or Removing A Draft

When a draft is stale but should not be deleted:

- Keep valid frontmatter and `draft: true` (unpublished).
- Replace the body with a short retired-draft note: retired, unpublished, not
  maintained, do not publish or link as-is, use the current public series instead,
  revive only after fresh source/product verification.
- Remove old setup instructions, stale route links, old product/UI claims, and old
  article-route references from the body.

When deletion is explicitly approved:

- Delete the draft file instead of leaving a retired note.
- Confirm no public source or built route links to the removed slug.
- Update any active work item or release note so future agents know the route was
  intentionally removed rather than accidentally hidden.

## Checklists

### Style

- [ ] Important point first in each section.
- [ ] Active voice, short paragraphs, concrete examples.
- [ ] No throat-clearing, no manifesto tone, no sales pitch.
- [ ] Central claim or definition is understandable in one or two plain sentences.
- [ ] Every sentence has a clear job; concrete behavior replaces avoidable shorthand.
- [ ] Every heuristic states its purpose and its important limit.
- [ ] Definition and category articles separate the rule from warning signs and
      include a limiting case or counterexample when readers could overgeneralize.
- [ ] Practical-framework labels are short, parallel, and reader-facing.
- [ ] 4–6 substantive sections plus `Sources` when practical.
- [ ] Each rendered `##` usually starts with a concise slide-message blockquote.
- [ ] Slide blockquotes are presentation-friendly: one sentence or 1-3 short
      clauses, with citation clutter moved to notes/prose.

### Article/slide coherence

- [ ] Article mode reads naturally with the blockquote as the section takeaway.
- [ ] Slide mode has a clear main message without notes-only context leaking onto
      the slide.
- [ ] Notes/prose after the blockquote carries citations, caveats, prompts, and
      examples needed for read-along or speaker context.
- [ ] Optional immediate visuals are accessible and understandable without relying
      on color/image-only meaning.
- [ ] `## Sources` / `## Sources used` is treated as an appendix, not a normal
      presentation slide.

### Length

- [ ] Cut ~20–30% on a refresh without losing core claims.
- [ ] Per-post target met, or the exception is explained in `progress.md`.

### Sources

- [ ] Every anchor supports the adjacent claim.
- [ ] Synthesis is labeled as synthesis.
- [ ] Attribution and source type—quote, paraphrase, translation, or synthesis—are
      explicit and accurate.
- [ ] No duplicated source recaps across posts.
- [ ] No unsupported new product claims.
- [ ] Load-bearing empirical claims name their design, outcome layer,
      setting/time boundary, and material affiliation or conflict.
- [ ] Presenter or vendor figures illustrate bounded mechanisms rather than
      silently becoming transferable benchmarks.
- [ ] Amp claims were checked against Manual, Orbs, Models, Plugin API, Chronicle,
      and Pricing on the publication date.
- [ ] New source items were classified as `incorporate`, `research-only`, or
      `ignore` using all six incorporation checks.
- [ ] A transcript-backed post adds a distinct thesis beyond its matching resource
      summary.

### Links

- [ ] Internal links resolve to real routes.
- [ ] No links to retired drafts or removed routes.
- [ ] Series cross-links keep their roles coherent.

### Draft retirement/removal

- [ ] If retained, `draft: true` kept; frontmatter valid.
- [ ] If retained, body is a short retired-draft note only.
- [ ] If deleted, no public source or built route links to the removed slug remain.
- [ ] No stale setup, routes, or product claims remain.

### Verification

- [ ] `npm run lint:fix` passes without unintended changes.
- [ ] `npm run check` passes.
- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] `npm run content:guard` passes.
- [ ] Article and slide routes pass representative desktop and mobile browser
      checks; intended slide artifacts are visible and unclipped.
- [ ] `git diff --check` is clean.
- [ ] Word counts and results recorded when the review uses a work item.

## Definition Of Done

The post carries one clear argument in the house style, every source anchor and
internal link checks out, length targets are met or explained, stale drafts are
retired or explicitly deleted, the article and slide routes render correctly, and
the full repository checks pass. When the review uses a work item, it records only
remaining work and decisive evidence.
