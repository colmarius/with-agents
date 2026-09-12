---
title: "How to use Cloud Speech-to-Text with cURL"
resourceId: 64
date: "2022-03-22"
collection: "google-cloud-get-started"
order: 12
videoId: "SPcFViKU_xU"
---

Speech-to-Text converts an audio recording into written text. This quickstart uses cURL, a command-line tool for sending HTTP requests, to submit an audio file's Cloud Storage location and read the transcription in the response. [00:04–02:07](https://www.youtube.com/watch?v=SPcFViKU_xU&t=4s)

### Key Points Covered

- Setup enables the Speech-to-Text API and configures credentials before the request. [00:04–01:06](https://www.youtube.com/watch?v=SPcFViKU_xU&t=4s)
- The JSON request describes the recording: FLAC audio format, a 16,000 hertz sample rate, and the URI identifying its location in Cloud Storage. [01:06–02:07](https://www.youtube.com/watch?v=SPcFViKU_xU&t=66s)
- cURL sends that request to `speech.googleapis.com`. The synchronous call returns the transcription directly, alongside a confidence value estimating its accuracy rather than guaranteeing correctness. [01:06–02:07](https://www.youtube.com/watch?v=SPcFViKU_xU&t=66s)

Full video: <https://www.youtube.com/watch?v=SPcFViKU_xU>
