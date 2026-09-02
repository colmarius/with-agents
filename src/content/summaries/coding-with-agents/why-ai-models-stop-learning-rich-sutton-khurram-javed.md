---
title: "Why AI Models Stop Learning — Rich Sutton and Khurram Javed"
resourceId: 49
date: "2026-08-18"
---

Rich Sutton and Khurram Javed argue for agents whose weights keep adapting after deployment. They discuss fixed weights, finite training data, catastrophic forgetting, and learning abstractions from experience.

This is Oak Lab’s research thesis, not a demonstrated frontier-scale system. The episode names concrete algorithmic ideas and efficiency targets, but does not present comparative results showing that they can train a modern frontier model or outperform the current LLM stack.

### Key Points Covered

- **The Bitter Lesson favors scalable learning methods, not ignorance of prior knowledge**: Sutton’s short version says to avoid dependence on hand-coded human knowledge. He says to pursue search and learning methods that improve with computation instead. He also stresses that prior knowledge and later learning are compatible. The problem is treating prior knowledge as a substitute for continued learning [00:07:17]-[00:10:39], [00:18:27]-[00:20:15].
- **The Big World Hypothesis motivates continual learning**: Sutton and Javed argue that the real world is far more complex than any agent or simulator. They argue that an agent therefore must keep updating approximations from its own experience. Their rejection of synthetic data specifically rejects human-designed simulation as a complete replacement for real-world learning. They do not claim that simulation has no value [00:11:27]-[00:17:34].
- **Context changes behavior without changing the model**: They distinguish in-context adaptation and external memory from parametric learning. In their framing, an assistant may remember a user through context, but a deployed model with frozen weights cannot keep building new internal representations in the way its original training did [00:22:52]-[00:24:41].
- **Biology is inspiration, not an implementation constraint**: Sutton points to animals and human sensorimotor learning as evidence that intelligence learns from ongoing interaction, while explicitly rejecting a requirement that artificial systems reproduce biological mechanisms [00:25:35]-[00:30:39].
- **Learning abstractions is as important as retaining facts**: The guests argue that current systems still lack a general way to discover abstractions from experience. They also lack a way to learn a world model around those abstractions and then plan with it. The guests say known-rule domains such as games and theorem proving do not solve this broader problem [00:32:25]-[00:38:45].
- **Naive online weight updates cause catastrophic forgetting**: Updating a large model from one stream of new examples can damage earlier knowledge. Javed contrasts that with batch updates aggregated across many users, which reduce interference but do not provide efficient learning for one agent’s particular experience [00:38:45]-[00:39:36].
- **Their proposed algorithm has two parts**: Per-weight, meta-learned step sizes would let most weights move slowly while a smaller subset adapts quickly. Generate-and-test methods would also inject new random features over time, with backpropagation testing their usefulness. Sutton identifies Continual Backprop as an early version of this approach [00:39:36]-[00:41:37].
- **The proposal cannot simply be bolted onto a frozen model**: Javed says a model would need to train from scratch with continual-learning algorithms so that it learns both its initial knowledge and how to absorb later experience [00:41:37]-[00:42:40].
- **Oak Lab’s ambition is a self-maintaining mind**: The target is one general design instantiated as many minds, each shaped by different experience. It would span low-level interaction and high-level reasoning while keeping its changing knowledge coherent. The trillion-parameter, 20-watt target is a five-to-ten-year projection based on assumed hardware and algorithmic gains, not a current result [00:43:42]-[00:47:28], [00:50:52]-[00:51:54].
- **The guests see frontier labs as caught in a local minimum**: Their argument is organizational as well as technical. They say a new paradigm is likely to perform worse before it performs better. Meanwhile, established labs must keep improving products based on the current stack. Sutton nevertheless calls LLMs an unanticipated scientific breakthrough in language. He presents continual learning as an extension beyond them, not a denial of their achievement [00:47:28]-[00:50:02].

Full conversation: <https://www.youtube.com/watch?v=xH7U7w9Qzlo>
