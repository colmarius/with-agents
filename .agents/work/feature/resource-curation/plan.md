# Resource curation implementation

## Scope

Add catalog-specific editorial relevance and explicit starting-summary links without hiding resources, changing chronology, or altering canonical source content. Use the reviewed audit grades; extended-only candidates become Context in this additive release.

## Tasks

- [x] Data worker: sparse assessment type, catalog-owned grades and ordered picks, membership/field validation and tests. Own `src/types/resources.ts` and `src/data/resources/**`.
- [x] UI worker: root-only Astro panel, root/section card annotations and legend, strict summary join, component/resolver and production-corpus tests. Own `src/components/resources/**` and `src/search/corpus.test.ts`.
- [x] Parent: integrate transferred files against base `f766e5428ab108355e617f23450bc3a477feeb29`, review public annotations and document maintenance contract.
- [x] Verify formatting, Astro check, content guard, production build, tests after build, browser desktop/narrow states and search preservation.
- [x] Oracle final diff review and finding resolution; completed snapshot prepared for the authorized commit and separate work-item removal.

## API and acceptance criteria

`ResourceAssessment` has essential/useful/context `tier` and a concise `reason`. `ResourceCatalog.assessmentsByResourceId` is optional `Readonly<Partial<Record<number, ResourceAssessment>>>`. Optional `startHere` has title, description, and ordered entries with resourceId, required slash-separated summarySlug, and audience. Starting picks are assessed; nonpicked members can remain ungraded. Four/five entries is guidance, not an invariant. AI uses “Selected perspectives.”

Pick order: Coding 14/38/17/72/77; Cloud 97/59/63/100/61; Security 104/102/103/100/101; AI 127/33/49/129. Select one explicit existing child for each playlist. Summary ownership and configuration must validate without default/latest fallback.

No visibility controls, numeric scoring, evidence-taxonomy migration, relevance sort, source-content edits, or changes to catalog membership. New editorial copy is excluded from site/local search. All card anchors, counts, default summary buttons, descriptions, topic filters, and historical routes remain intact. Root-only panel precedes author discovery; card annotations are readable without truncation on root and section pages.

## Verification

Run scoped tests during implementation; run `npm run lint:fix`, `npm run check`, `npm run content:guard`, `npm run build`, then `npm test` after integration so production-corpus assertions inspect fresh output. Compare built search documents to baseline. Browser-check ordered picks and navigation, sparse/cross-catalog grades, section panel absence, narrow text wrapping, local search, topic filtering/empty/reset states, site search, direct card anchors, and summary back-links. Inspect representative screenshots and document limitations. Oracle reviews final diff before commits.
