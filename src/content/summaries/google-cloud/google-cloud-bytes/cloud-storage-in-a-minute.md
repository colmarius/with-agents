---
title: "Cloud Storage in a minute"
resourceId: 66
date: "2020-08-09"
collection: "google-cloud-bytes"
order: 4
videoId: "wNOs3LlsH6k"
---

Cloud Storage stores objects such as images, videos, and documents in containers called buckets. This 2020 primer explains how applications upload and retrieve those objects, then choose storage classes according to how often the data is needed [00:00–01:04](https://www.youtube.com/watch?v=wNOs3LlsH6k&t=0s).

### Key Points Covered

- **Applications exchange objects through buckets**: The primer shows uploads and downloads through project-associated buckets, with console and `gsutil` access [00:00](https://www.youtube.com/watch?v=wNOs3LlsH6k&t=0s).
- **Storage classes represent access patterns**: Standard, Nearline, Coldline, and Archive are mapped to progressively less frequent access in the 2020 product and pricing model [00:00](https://www.youtube.com/watch?v=wNOs3LlsH6k&t=0s).
- **Automate moves as data ages**: Object Lifecycle Management can transition data to lower-cost classes when it reaches a specified age or when a newer version is stored. Applications use the same API to access objects across storage classes [01:04–01:45](https://www.youtube.com/watch?v=wNOs3LlsH6k&t=64s).

Full video: <https://www.youtube.com/watch?v=wNOs3LlsH6k>
