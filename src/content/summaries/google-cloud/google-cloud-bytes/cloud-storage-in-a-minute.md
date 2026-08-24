---
title: "Cloud Storage in a minute"
resourceId: 66
date: "2020-08-09"
collection: "google-cloud-bytes"
order: 4
videoId: "wNOs3LlsH6k"
---

The source names neither its presenter nor an affiliation. This 2020 primer distinguishes Cloud Storage as object storage organized around objects and buckets rather than a conventional filesystem.

### Key Points Covered

- **Applications exchange objects through buckets**: The primer shows uploads and downloads through project-associated buckets, with console and `gsutil` access [00:00:00].
- **Storage classes represent access patterns**: Standard, Nearline, Coldline, and Archive are mapped to progressively less frequent access in the 2020 product and pricing model [00:00:00].
- **Lifecycle rules can move data between classes**: Object Lifecycle Management is presented as a way to transition aging or superseded data while retaining one storage API [00:01:04].

Use this as historical object-storage orientation, not class-selection guidance. Validate current class names, durations, retrieval and operation charges, locations, consistency, lifecycle behavior, IAM, limits, and egress pricing in current documentation.

Full video: <https://www.youtube.com/watch?v=wNOs3LlsH6k>
