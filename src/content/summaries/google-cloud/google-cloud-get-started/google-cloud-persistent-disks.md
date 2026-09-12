---
title: "Google Cloud Persistent Disks"
resourceId: 64
date: "2018-08-20"
collection: "google-cloud-get-started"
order: 3
videoId: "sT7-_qn71cw"
---

Attaching a blank Persistent Disk to a virtual machine does not yet make it a place to store files. This quickstart creates and attaches the disk, then formats it and mounts it at a directory inside the VM. [00:00–02:57](https://www.youtube.com/watch?v=sT7-_qn71cw&t=0s)

### Key Points Covered

- The console example creates a 500 GB disk and attaches it to an existing VM as an additional disk. [00:00–01:03](https://www.youtube.com/watch?v=sT7-_qn71cw&t=0s)
- Inside the VM, the presenter lists block devices and formats the new disk with an ext4 filesystem. This is preparation of a **blank disk**, not a procedure for preserving an existing disk's contents. [01:03–02:11](https://www.youtube.com/watch?v=sT7-_qn71cw&t=63s)
- Mounting makes the filesystem available at the chosen directory. The demo then grants all users write permission there; it does not configure the mount to be restored after a VM restart. [01:03–02:57](https://www.youtube.com/watch?v=sT7-_qn71cw&t=63s)

Full video: <https://www.youtube.com/watch?v=sT7-_qn71cw>
