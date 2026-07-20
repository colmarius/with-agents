---
title: "Usare BERT come un diffusion model"
videoId: witc6AVdm84
sourceUrl: "https://www.youtube.com/watch?v=witc6AVdm84"
publishedAt: "2025-10-24T16:45:05Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo uses an independent experiment with RoBERTa to explain text diffusion. His central connection is that masked-language training already teaches a Transformer to restore missing words in parallel; training that behavior across multiple mask levels turns the single restoration step into an iterative generation process.

## Key Ideas

- Autoregressive language models repeatedly append one token to the existing context. A text-diffusion model instead starts with missing positions and fills several of them over successive denoising steps, analogous to refining all parts of a noisy image. [00:01:09]-[00:02:18]
- The experiment was conducted with modest resources outside a major AI lab. Sanfilippo presents it as evidence that independent researchers and small groups can still perform meaningful architecture experiments. [00:03:27]
- The historical encoder-decoder Transformer fit machine translation: an encoder represented the source sequence and a decoder produced the target sequence. Encoder representations also became useful as semantic embeddings after the downstream prediction component was discarded. [00:04:39]-[00:06:46]
- BERT-family masked-language training predicts words removed from several positions at once rather than only the next token. Sanfilippo interprets RoBERTa as already implementing one late denoising step because it reconstructs a partly visible sentence. [00:06:46]-[00:07:56]
- For iterative generation, the network emits token distributions for every fixed output position. Training examples vary how many mask tokens remain, teaching the model to complete successive stages from a fully masked sequence toward a finished sentence. [00:09:09]
- The reported experiment generates text with this process, but Sanfilippo describes its output as less reliable than GPT-2. He attributes part of the tradeoff to predicting several positions per pass rather than concentrating each pass on one token. [00:10:19]
- He argues that image diffusion benefits from spatial locality, while text and human speech unfold more linearly. Autoregressive models may still encode a broad plan in their internal activations, leaving a diffusion-like global representation implicit rather than directly generating all positions together. [00:11:22]

## Practical Implications

- A small masked-language model can serve as a tractable test bed for experimenting with iterative text generation.
- Construct training data across a schedule of masking levels rather than assuming ordinary masked-language training supplies the entire diffusion process.
- Compare wall-clock latency and output quality together: fewer parallel passes do not automatically beat a stronger autoregressive baseline.
- Inspect whether a domain has image-like local structure before assuming parallel denoising will transfer cleanly to its sequences.

## Questions and Tensions

- The discussion does not provide the experiment's dataset, evaluation protocol, or quantitative quality and speed results.
- A fixed output length simplifies parallel prediction but raises practical questions about variable-length generation and termination.
- Calling masked-language prediction a diffusion step is conceptually useful, but the transcript does not establish equivalence to the noise processes used in image diffusion.
- The proposed locality difference between images and text is explanatory intuition rather than a controlled comparison of architectures.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=witc6AVdm84)
- [transcript.md](./transcript.md)
