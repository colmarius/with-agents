---
title: "Beyond Code Coverage: Functionality Testing with Playwright MCP"
resourceId: 72
date: "2026-05-16"
---

Marlene Mhangami presents a behavior-first testing loop for agent-generated web changes. She proposes feature-level Playwright checks before implementation, browser observation, and deliberate human review during refactoring.

### Key Points Covered

- **More generated code does not establish more productive delivery**: Mhangami uses GitHub activity figures and a cited developer study to motivate the talk. She argues that AI can amplify either useful work or codebase entropy, depending on surrounding tests, types, documentation, and modularity. The talk does not present the study methodology or independently validate the extrapolated commit figures ([00:15–04:12](https://www.youtube.com/watch?v=FWEInOtngmM&t=15s)).
- **Behavior should survive internal refactoring**: Tests coupled to method names and other implementation details can fail even when user-visible behavior remains correct. Mhangami recommends targeting stable contracts and final outcomes instead ([06:07–08:09](https://www.youtube.com/watch?v=FWEInOtngmM&t=367s)).
- **AI-generated tests can affirm the implementation without validating the system**: A green unit-test suite and high coverage do not guarantee that the application behaves as intended. This limitation applies when AI-generated tests merely affirm the implementation ([07:12–08:09](https://www.youtube.com/watch?v=FWEInOtngmM&t=432s)).
- **Feature requests can trigger the red phase**: In the proposed red-green-refactor loop, expected feature behavior becomes a failing Playwright test before implementation. This replaces a new method automatically prompting a unit test ([09:12–10:04](https://www.youtube.com/watch?v=FWEInOtngmM&t=552s), [11:44–13:51](https://www.youtube.com/watch?v=FWEInOtngmM&t=704s)).
- **Playwright gives agents an executable browser feedback loop**: The framework can drive user interactions in headed or headless browsers. Mhangami identifies several integration surfaces: the Playwright MCP server, CLI, and Playwright agents with planner, generator, and healer instructions ([08:09–10:54](https://www.youtube.com/watch?v=FWEInOtngmM&t=489s)).
- **The demo checks a prepared search-and-filter change end to end**: GitHub Copilot CLI examines a Tailspin Toys codebase and generates failing tests. It implements the feature and runs browser interactions for text search, category filters, and price filters ([11:44–15:52](https://www.youtube.com/watch?v=FWEInOtngmM&t=704s)). This demonstrates one workflow, not comparative evidence about defect detection, test quality, or maintenance cost.
- **Fast red and green phases make refactoring more important, not optional**: Mhangami expects agents to accelerate test and implementation generation while developers spend the largest share of attention inspecting and improving the resulting code ([09:12–10:04](https://www.youtube.com/watch?v=FWEInOtngmM&t=552s), [15:52–16:56](https://www.youtube.com/watch?v=FWEInOtngmM&t=952s)).
- **Make the execution evidence reviewable**: She recommends attaching Playwright screenshots to pull requests and using headless execution when appropriate. She also recommends committing before asking an agent to repair failures and keeping each test focused on one feature ([15:52–16:56](https://www.youtube.com/watch?v=FWEInOtngmM&t=952s)).
- **The demonstrated scope is browser functionality**: In the Q&A, Mhangami suggests direct API tests when Playwright is unnecessary. She recommends Playwright agents for state-heavy cases and confirms that the presented approach is browser-based ([17:57–18:46](https://www.youtube.com/watch?v=FWEInOtngmM&t=1077s)).

Full video: <https://www.youtube.com/watch?v=FWEInOtngmM>
