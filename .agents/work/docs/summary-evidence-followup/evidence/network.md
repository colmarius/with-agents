# Networking learning-path inventory review

Reviewed 2026-09-12 in an unauthenticated Chromium session. Scope: Google Skills path 14 and its relationship to the Professional Cloud Network Engineer certification. No sign-in, credentials, enrollment, lab execution, push, or deployment.

## Outcome and recommendation

Verified all 16 current activities from the official path's browser accessibility tree, including their path-scoped links and card descriptions. All 16 links returned HTTP 200 with matching HTML page titles. The previous inability to retrieve cards does not establish course removal. A concise curriculum/practice paragraph improves the summary because certification role skills alone do not describe what a learner will encounter. Implemented two short paragraphs under “What you'll practice”; kept full inventory, durations, Gemini tooling, and exact ordering out of public prose. Preserved frontmatter and both existing source links byte-for-byte. No manifest change recommended for resource 99: its baseline description remains accurate.

## Official evidence

- https://www.skills.google/paths/14 — live page says “16 activities,” “Managed by Google Cloud,” and “Last updated about 2 months”; overview confirms courses, labs, skill badges, and role preparation. The relative update label is not an exact publication date.
- https://cloud.google.com/learn/certification/cloud-network-engineer/ — live certification page describes role skills, recommends 3+ years industry experience including 1+ year designing/managing Google Cloud solutions, and links “Train for the exam” and “Start preparing” to https://www.cloudskillsboost.google/paths/14. The path itself links back to this certification page. This establishes the path/certification relationship without inferring that completion awards certification.

### Activities in observed path-card order

| # | Official activity title | Official path-scoped link |
|---|---|---|
| 1 | Build a Certification Study Guide: PCNE Exam Prep | https://www.skills.google/paths/14/course_templates/383 |
| 2 | Google Cloud Fundamentals: Core Infrastructure | https://www.skills.google/paths/14/course_templates/60 |
| 3 | Gemini for Network Engineers | https://www.skills.google/paths/14/course_templates/884 |
| 4 | Networking in Google Cloud: Fundamentals | https://www.skills.google/paths/14/course_templates/35 |
| 5 | Networking in Google Cloud: Routing and Addressing | https://www.skills.google/paths/14/course_templates/36 |
| 6 | Networking in Google Cloud: Load Balancing | https://www.skills.google/paths/14/course_templates/1143 |
| 7 | Networking in Google Cloud: Network Security | https://www.skills.google/paths/14/course_templates/1142 |
| 8 | Networking in Google Cloud: Network Architecture | https://www.skills.google/paths/14/course_templates/1144 |
| 9 | Networking in Google Cloud: Hybrid and Multicloud | https://www.skills.google/paths/14/course_templates/1145 |
| 10 | Introduction to Cloud Next Generation Firewall | https://www.skills.google/paths/14/course_templates/1202 |
| 11 | Plan Your Cloud Next Generation Firewall Needs | https://www.skills.google/paths/14/course_templates/1203 |
| 12 | Logging and Monitoring in Google Cloud | https://www.skills.google/paths/14/course_templates/99 |
| 13 | Implementing Cloud Load Balancing for Compute Engine | https://www.skills.google/paths/14/course_templates/648 |
| 14 | Configure Google Kubernetes Engine Networking | https://www.skills.google/paths/14/course_templates/660 |
| 15 | Build a Secure Google Cloud Network | https://www.skills.google/paths/14/course_templates/654 |
| 16 | Connecting Cloud Networks with NCC | https://www.skills.google/paths/14/course_templates/1364 |

Cards 13, 15, and 16 carry “Skill badge.” Card 14 explicitly describes services, communication, and secure access to GKE applications. Card 16 describes Network Connectivity Center linking on-premises, cloud enterprise, and hybrid networks as spokes. Card 4 explicitly calls Networking in Google Cloud a six-part series. Card descriptions contain inconsistent ordinal wording (Network Architecture calls itself the third course despite its later card position); public prose enumerates topics without asserting module numbers or an instructional sequence.

## Access and extraction limitations

Force-refreshed read_web_page returned the overview and count but omitted individual cards. Chromium `snapshot` exposed the cards and `get attr @ref href` recovered their links. A naive `document.querySelectorAll('main a')` did not find these cards; recursively inspecting open shadow roots did. This is a rendering/extraction limitation, not evidence that membership is inaccessible or absent.

Initial generic scrolling captured only the overview. `scrollintoview @e30` on the observed Fundamentals card moved the correct scroll surface; the resulting screenshot was inspected with view_media and visibly showed Fundamentals and Gemini for Network Engineers. No access barrier was bypassed. Course landing pages were read publicly; full enrolled course contents and hands-on lab behavior were not assessed. Membership evidence comes from path cards, not merely successful course URLs.

## Changes and validation

- Coordinator patch applied and committed as a separate baseline; only subsequent tracked edit is `src/content/summaries/google-cloud/professional-network-engineer-certification.md` (six inserted lines, two paragraphs plus heading).
- `npm run check`: 67 files, 0 errors/warnings/hints.
- `npm test`: 116 tests; 115 passed, 1 skipped, 0 failed.
- `npm run build`: 343 pages built successfully.
- `npm run content:guard`: passed (existing duplicate antirez manifest occurrence reported as notice).
- `npm run summaries:check`: 292 files passed.
- `npm run lint:fix`: 460 files checked; no fixes applied.
- `git diff --check`: passed. Diff confirms no frontmatter/link changes.
- `amp orb services ensure`: existing web service ready; portal below. Browser opened the exact summary route and verified three separate content headings, expected course/badge prose, unchanged official links, no horizontal overflow, and no reported browser errors.
- Representative screenshots were inspected with view_media; public summary section readable without clipping/overlap. Source screenshot establishes actual rendered cards, not just path overview.

Preview: https://t-03guunlvxc3yanvpc6pv2o08m-p22177.onamp.dev/summaries/google-cloud/professional-network-engineer-certification

Review artifacts (uncommitted):
- `.amp/network-inventory-review.md` (this note)
- `.amp/in/artifacts/network-path-inventory.png`
- `.amp/in/artifacts/network-summary-reviewed.png`

Coordinator must evaluate and explicitly transfer the owned summary edit; no integration into coordinator checkout was attempted here.
