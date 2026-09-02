---
title: "Beyond Code Coverage: Functionality Testing with Playwright MCP"
resourceId: 72
date: "2026-05-16"
---

Marlene Mhangami presents a behavior-first testing loop for agent-generated web changes. She proposes feature-level Playwright checks before implementation, browser observation, and deliberate human review during refactoring.

### Key Points Covered

- **More generated code does not establish more productive delivery**: Mhangami uses GitHub activity figures and a cited developer study to motivate the talk. She argues that AI can amplify either useful work or codebase entropy, depending on surrounding tests, types, documentation, and modularity. The talk does not present the study methodology or independently validate the extrapolated commit figures ([00:00:15]-[00:04:12]).
- **Behavior should survive internal refactoring**: Tests coupled to method names and other implementation details can fail even when user-visible behavior remains correct. Mhangami recommends targeting stable contracts and final outcomes instead ([00:06:07]-[00:08:09]).
- **AI-generated tests can affirm the implementation without validating the system**: A green unit-test suite and high coverage do not guarantee that the application behaves as intended. This limitation applies when AI-generated tests merely affirm the implementation ([00:07:12]-[00:08:09]).
- **Feature requests can trigger the red phase**: In the proposed red-green-refactor loop, expected feature behavior becomes a failing Playwright test before implementation. This replaces a new method automatically prompting a unit test ([00:09:12]-[00:10:04], [00:11:44]-[00:13:51]).
- **Playwright gives agents an executable browser feedback loop**: The framework can drive user interactions in headed or headless browsers. Mhangami identifies several integration surfaces: the Playwright MCP server, CLI, and Playwright agents with planner, generator, and healer instructions ([00:08:09]-[00:10:54]).
- **The demo checks a prepared search-and-filter change end to end**: GitHub Copilot CLI examines a Tailspin Toys codebase and generates failing tests. It implements the feature and runs browser interactions for text search, category filters, and price filters ([00:11:44]-[00:15:52]). This demonstrates one workflow, not comparative evidence about defect detection, test quality, or maintenance cost.
- **Fast red and green phases make refactoring more important, not optional**: Mhangami expects agents to accelerate test and implementation generation while developers spend the largest share of attention inspecting and improving the resulting code ([00:09:12]-[00:10:04], [00:15:52]-[00:16:56]).
- **Make the execution evidence reviewable**: She recommends attaching Playwright screenshots to pull requests and using headless execution when appropriate. She also recommends committing before asking an agent to repair failures and keeping each test focused on one feature ([00:15:52]-[00:16:56]).
- **The demonstrated scope is browser functionality**: In the Q&A, Mhangami suggests direct API tests when Playwright is unnecessary. She recommends Playwright agents for state-heavy cases and confirms that the presented approach is browser-based ([00:17:57]-[00:18:46]).

Full video: <https://www.youtube.com/watch?v=FWEInOtngmM>
