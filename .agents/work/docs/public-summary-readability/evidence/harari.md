# Harari source-backed readability review

## Scope and baseline

- Repository: colmarius/with-agents. Fetched origin and verified both HEAD and origin/main were db68975d2e1237b8a1115313f39faad8b7f27099 before edits.
- Reviewed and changed exactly these public files; frontmatter, resource IDs, canonical URLs, and existing source-link hrefs are preserved. Added one new timestamp href for the split religious-authority point.
  - `src/content/summaries/ai/yuval-noah-harari/ai-has-hacked-the-code-of-human-civilization.md`
  - `src/content/summaries/ai/yuval-noah-harari/building-trust-age-of-disinformation.md`
  - `src/content/summaries/ai/yuval-noah-harari/ezra-klein-trump-core-delusion.md`
  - `src/content/summaries/ai/yuval-noah-harari/the-next-50-years-humanity-ai-power.md`
- No transcript, manifest, resource, or coordinator-owned file changed. This ledger remains uncommitted.

## Sources read and changes

Read all four matching saved transcript sidecars, including their frontmatter and complete bodies. Initial terminal output truncation for the Oxford lecture was filled by explicit smaller reads. These are coarse saved-caption anchors, not newly checked audio times.

1. `src/content/transcripts/ai/yuval-noah-harari/ai-has-hacked-the-code-of-human-civilization.md`: https://www.youtube.com/watch?v=hBtVGwuJzpk, whole saved body 00:00:00 through final chunk 00:45:50 (duration 46:52). Rechecked the 30:19–34:00 section explicitly after truncation. Changed the institutional-trust explanation using 10:19–16:12: saver entrusts money to bank, bank lends to unknown entrepreneur, records govern physical outcomes. Other bullets already explained their mechanisms and retained appropriate limits.
2. `src/content/transcripts/ai/yuval-noah-harari/building-trust-age-of-disinformation.md`: https://www.youtube.com/watch?v=t_KKNNeH8jU, whole saved body 00:00:01 through 00:49:56 (duration 50:04). Split the combined finance/religion bullet. Finance uses 33:16–36:07, including hiring/firing at the start of the 35:18 chunk. Religion uses 35:18–39:56: silent text requires human interpretation; an AI interpreter gives believers another source of answers. Preserved the condition that this prediction rests on text-centered religious authority and did not certify the speaker's broad recall/capability claims. Existing 33:16 href retained; new 35:18 href added.
3. `src/content/transcripts/ai/yuval-noah-harari/ezra-klein-trump-core-delusion.md`: https://www.youtube.com/watch?v=9NCxS__rtAo, whole saved body 00:00:00 through final chunk 01:54:50 (duration 1:55:36). Split national belonging (24:05–28:46) from military protection/reconciliation (40:36–44:56; 49:39–1:01:04). Added Harari's Egypt/Jordan-versus-Hamas comparison as his argument, while keeping uncertainty about producing reconciliation. Made assistance/accountability concrete with Klein's calculator-app revision example (1:23:57–1:27:24), then explained proposed legal personhood and the unresolved customer-fraud liability question (1:31:15–1:36:54). Retained the original publication-date source href as an ordinary publication sentence.
4. `src/content/transcripts/ai/yuval-noah-harari/the-next-50-years-humanity-ai-power.md`: https://www.youtube.com/watch?v=_V_ed5fuexA, whole saved body 00:00:02 through 00:48:03 (duration 48:06). Expanded 30:32–37:50: distinguishes knowledge of biology from understanding institutions and explains Harari's scenario of continuously operating bankers/investors making finance too fast and complex for humans. Labels this as risk/forecast, not an established end of oversight. Left the already useful conditional infrastructure and consciousness distinctions intact.

## Removed public provenance: exact text for coordinator preservation

### ai-has-hacked-the-code-of-human-civilization.md

> This summary is based on the saved English auto-generated captions, with limited correction of obvious transcription errors; no original-audio validation was performed. Harari's capability claims, historical interpretations, analogies, and predictions are presented as his argument, not as independently established findings.

### building-trust-age-of-disinformation.md

> This summary uses the saved English auto-generated YouTube captions, without checking the audio. Political and historical interpretations, claims about AI capabilities, and predictions below are Harari’s arguments, not independently verified findings.

### ezra-klein-trump-core-delusion.md

Original paragraph (first two sentences removed; publication information and source href retained in a rewritten sentence):

> This summary uses the saved English auto-generated YouTube captions, without checking the audio. Political and historical interpretations, AI capability claims, and forecasts below are the speakers’ arguments, not independently verified findings. The date is the publication date displayed on the [YouTube video](https://www.youtube.com/watch?v=9NCxS__rtAo).

### the-next-50-years-humanity-ai-power.md

> This summary is based on the saved English auto-generated captions, not an original-audio check. It presents Harari's analysis, analogies, and forecasts rather than independently verified claims about AI capabilities, law, or geopolitics.

## Verification

- `npm run lint:fix`: Checked 460 files; no fixes applied.
- Final `npm run check`: 67 files, 0 errors, 0 warnings, 0 hints.
- Final `npm test`: 116 tests; 116 pass, 0 fail, 0 skipped. Initial pre-build run had 115 pass and 1 skipped; final run after build exercises all 116.
- Final `npm run build`: 343 pages built; complete.
- Final `npm run content:guard`: passed, 1158 tracked videos, 24 tracked playlists, 248 tracked public references, 112 resources, 292 summaries. Existing nonfatal duplicate-manifest notice for antirez-ai-concepts/8gg-oJr4dTY remains untouched.
- Final `npm run summaries:check`: 292 files passed. Re-ran the entire check chain after correcting the new finance citation endpoint to cover the hiring/firing passage.
- `git diff --check`: passed.
- `amp orb services ensure`: existing web service listening; portal https://t-03guuj0c0jrsqzdpk4p4ff28e-p29657.onamp.dev/ .
- Real Chromium browser visited all four `/summaries/ai/yuval-noah-harari/<slug>` routes on that portal. Correct h1 titles; Oxford 8 bullets/8 timestamp links, Ezra 8 bullets/12 timestamp links including intro, Next 50 years 7 bullets/7 timestamp links. No horizontal overflow for these routes, no browser errors. Full accessibility snapshot confirmed Building Trust's split bullets, forecasts, correct 33:16–36:07 and 35:18–39:56 links, and closing war qualifications.
- Screenshot `.amp/in/artifacts/harari-trust-review.png` captured at 1280×900 CSS / 2x and inspected with view_media: revised finance/religion bullets readable, qualifications adjacent, no overlap/clipping. Initial capture attempt failed because artifact directory did not exist; created it and captured/inspected successfully.

## Limitations and coordinator follow-through

- This is source fidelity to saved English auto-generated captions, not an original-audio check or independent verification of political/historical/capability assertions. Did not regenerate or clean transcripts. Existing event/publication metadata retained, not freshly verified against YouTube descriptions.
- This isolated browser preview still displays caption/provenance statements drawn from baseline resource manifests (observed explicitly on Building Trust). Coordinator subsequently reported preserving all original source-history assertions in sidecars and simplifying the manifest descriptions in its own checkout. Those files are intentionally not transferred here. No additional provenance beyond the original paragraphs listed above was removed.
- Coordinator should download the four changed summaries and this ledger explicitly and perform the planned combined Oracle review. No push/deploy performed; no implementation blockers.
- Local commit: 3c9c80a7cbf0d9f4322e8f5cdf0d643f0f808549, containing only the four public summaries. Automated comparison confirmed all four frontmatters and all pre-existing source hrefs are preserved. Ledger remains the only untracked file in git status; screenshot is ignored.
