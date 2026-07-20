---
title: "Come funziona davvero un modello di trascrizione del parlato?"
videoId: zk85BCt3chg
sourceUrl: "https://www.youtube.com/watch?v=zk85BCt3chg"
publishedAt: "2026-02-12T17:01:39Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo gives a compact conceptual walkthrough of automatic speech recognition, using Qwen3-ASR as the example. He follows offline audio from sampled waveform through spectral preprocessing and an encoder, then into an autoregressive language-model decoder conditioned on both the encoded audio and previously generated text.

## Key Ideas

- Sanfilippo says he is studying and implementing Qwen3-ASR, which he describes as available in 0.6-billion- and 1.7-billion-parameter sizes. He expects to release optimized inference shortly, but the statement is an intention rather than a demonstrated release outcome. [00:00:01]
- Raw uncompressed audio can be represented as a sequence of amplitude samples. In his example, 16 kHz means 16,000 measurements per second, while 16-bit samples encode values across an approximately −32,000 to +32,000 range. [00:00:57]-[00:01:54]
- He relates sampling rate to the maximum representable frequency: a 16 kHz input is appropriate for the Qwen model he discusses, while higher rates such as 44 kHz are common for music with a wider frequency range. [00:00:57]-[00:01:54]
- Rather than asking the neural network to rediscover frequency analysis directly from the waveform, the pipeline applies a Fourier transform over short, overlapping windows. The resulting frequency bins are mapped to a Mel representation whose spacing reflects human auditory sensitivity. [00:02:50]-[00:04:09]
- Once the time-frequency representation exists, a convolution can process neighboring regions much like local regions in an image. Sanfilippo describes Qwen's convolutional stage as downsampling by a factor of eight; he tentatively contrasts that with a fourfold factor for Whisper. [00:05:23]
- The encoder then uses self-attention with query, key, and value projections to relate audio segments and produce contextualized embeddings. [00:06:31]
- He presents the decoder as a modern decoder-only Transformer augmented with cross-attention. Text generation is conditioned both on the encoder's audio representation and on text tokens already emitted. [00:07:28]
- For offline transcription, the complete file is available in advance: the system computes the Mel features, runs convolution and encoder self-attention, and then autoregressively decodes the transcript. [00:08:33]

## Practical Implications

- Debug an ASR pipeline by separating waveform decoding, spectral feature extraction, encoder processing, and text decoding; each stage has a different correctness contract.
- Preserve and test sampling-rate, sample-format, windowing, overlap, Mel-filter, and downsampling assumptions when implementing or optimizing inference.
- Treat the encoder output as an audio-conditioned representation and verify that decoder cross-attention and token history are both wired correctly.
- Use the model's actual architecture and configuration as the implementation source of truth; this short explanation is a conceptual map, not a layer-by-layer specification.

## Questions and Tensions

- The video does not specify exact window size, hop length, Mel-filter construction, tensor shapes, layer counts, or model configuration, so it is insufficient by itself to reproduce Qwen3-ASR.
- Sanfilippo signals uncertainty about the Whisper downsampling comparison, and the video does not verify that figure against implementation or documentation.
- The planned optimized-inference release is not shown, and no correctness comparison, latency measurement, hardware setup, or benchmark result is provided.
- The walkthrough covers offline transcription; streaming state, chunk boundaries, latency, and partial-output revision remain outside its scope.
- The simplified decoder description should be checked against the specific Qwen3-ASR architecture before being translated into code.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=zk85BCt3chg)
- [transcript.md](./transcript.md)
