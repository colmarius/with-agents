---
title: How Google Photos scales to store 4 trillion photos and videos
resourceId: 68
date: 2023-07-31
collection: google-cloud-architecting
order: 1
videoId: kGUOGr37Yg4
---

Google Photos must back up and display users' photos quickly while also processing them for search and automatic organization. In this 2023 account, engineering manager Dave and site reliability manager Tracy explain how the system keeps background machine-learning work from slowing interactive use.

### Key Points Covered

- **Backup separates the image from information about it.** Media bytes go into an encrypted blob store; filenames, camera information, and other metadata go into Spanner. Only then does background processing begin for search, memories, and organization. [01:04–03:11](https://www.youtube.com/watch?v=kGUOGr37Yg4&t=64s)
- **One database does not mean one undifferentiated workload.** Tracy describes separate read-only and write shards—database partitions—for interactive and background work. This keeps large processing jobs from delaying uploads and viewing. Gradual rollouts across shards also let the team observe changes before expanding them. [03:11–05:20](https://www.youtube.com/watch?v=kGUOGr37Yg4&t=191s)
- **Search relies on work done after upload.** Models label photos in the context of the user's library. Those labels are stored in Spanner, indexed, and combined with clustering results so users can find related images, such as photos of their dog. [05:20–07:26](https://www.youtube.com/watch?v=kGUOGr37Yg4&t=320s)
- **Managed operations reduce manual database work.** Dave and Tracy credit Spanner with handling replication, placement, scaling, and consistency checks. Dave reports more than a billion users and four trillion images at the time; the system still has hundreds of services with different query and latency needs. [08:28–09:30](https://www.youtube.com/watch?v=kGUOGr37Yg4&t=508s), [10:33–12:41](https://www.youtube.com/watch?v=kGUOGr37Yg4&t=633s)

Full video: <https://www.youtube.com/watch?v=kGUOGr37Yg4>
