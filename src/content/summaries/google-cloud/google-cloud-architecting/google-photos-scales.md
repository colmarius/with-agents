---
title: How Google Photos scales to store 4 trillion photos and videos
resourceId: 68
date: 2023-07-31
collection: google-cloud-architecting
order: 1
videoId: kGUOGr37Yg4
---

Google engineering managers Dave and Tracy describe Google Photos' 2023 storage and serving architecture, separating encrypted media blobs, Spanner metadata, and asynchronous ML processing.

### Key Points Covered

- Backup stores media and metadata separately, then starts asynchronous search and organization processing. [01:04–03:11](https://www.youtube.com/watch?v=kGUOGr37Yg4&t=64s)
- Tracy describes sharding interactive reads and writes away from ML and batch work, plus slow rollouts for reliability. [03:11–05:20](https://www.youtube.com/watch?v=kGUOGr37Yg4&t=191s)
- Dave and Tracy attribute reduced development and SRE work to Spanner's managed operations. [10:33–12:41](https://www.youtube.com/watch?v=kGUOGr37Yg4&t=633s)
- Dave reports the user, image, query, and growth figures as point-in-time Google Photos scale claims. [11:37–13:43](https://www.youtube.com/watch?v=kGUOGr37Yg4&t=697s)
- This 2023 vendor case is not a reusable reference design; confirm current documentation and test the workload, security, privacy, residency, and regulatory requirements independently.

Full video: <https://www.youtube.com/watch?v=kGUOGr37Yg4>
