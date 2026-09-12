---
title: "Feedback Loops"
resourceId: 1
series: "raising-an-agent"
episode: 1
date: "2025-03-06"
---

An agent can improve a failed edit when it can see what went wrong and try again. In the first "Raising an Agent" episode, Sourcegraph CEO Quinn and engineer Thorsten describe building a code-editing prototype around that feedback loop: models choose tools, inspect errors, and revise their work instead of having to produce correct code in one response.

### Key Takeaways from the Prototype

- **Demonstrate a refactor when it is hard to describe**: The prototype's recording feature captures a developer's edits and sends them to the model as an example to apply elsewhere. Thorsten reports that it understood even a list of single-character changes. Quinn later describes completing part of a backend refactor himself, then asking the agent to continue from the Git diff; it helped without finishing everything [02:52–06:03](https://www.youtube.com/watch?v=auVu08nXKOw&t=172s), [26:23–28:29](https://www.youtube.com/watch?v=auVu08nXKOw&t=1583s).

- **Let the model choose another route after a tool fails**: Thorsten recounts an edit tool rejecting malformed arguments twice. The model then wrote the intended contents to a new file and used the terminal to move it over the original. The fallback came from the model's choice of tools rather than a special recovery sequence the developers had programmed [07:04–09:12](https://www.youtube.com/watch?v=auVu08nXKOw&t=424s).

- **Return execution results to the agent**: Compiler errors, test results, and runtime failures let the model revise its code. In one authentication-server example, Thorsten supplied a crash backtrace; the agent added debug statements, received their output, and fixed the nil-pointer error. The human still ran the program and returned the feedback [09:12–11:13](https://www.youtube.com/watch?v=auVu08nXKOw&t=552s), [16:06–18:07](https://www.youtube.com/watch?v=auVu08nXKOw&t=966s).

- **Make checks part of the workflow, without dictating every action**: Quinn says a system prompt alone may not make an agent check its work before proceeding. He wants the tool to enforce feedback checkpoints, while warning that excessive constraints can prevent the model from finding a better approach [11:13–12:15](https://www.youtube.com/watch?v=auVu08nXKOw&t=673s).

- **Improve the environment as well as the model**: The hosts argue that faster checks, better debugging tools, and clearer tool descriptions could deliver much more from existing models. This is their engineering direction for an early prototype, not a claim that the remaining reliability problems are solved [18:07–21:15](https://www.youtube.com/watch?v=auVu08nXKOw&t=1087s).

Full video: <https://www.youtube.com/watch?v=auVu08nXKOw>

Episode page: <https://ampcode.com/podcast/episode-1>
