---
title: "Google Cloud Persistent Disks"
sourceUrl: "https://www.youtube.com/watch?v=sT7-_qn71cw"
videoId: "sT7-_qn71cw"
capturedAt: "2026-08-24T21:54:25.152Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 177
---

## Transcript

[00:00:00] [Music] welcome to the quickstart for Google Cloud Persistent Disk from the VM instance page select your instance by clicking on its name in the VM instance details page select edit scroll down to the additional disk section and then click add item click on the name and create disk in the new dialog that shows up enter new-disk for the name and change the disk type to standard persistent disk under source type select none blank disk and then set the size to 500 GB click create now back to the VM instance details page you would have to scroll down and then select save we will now confirm the persistent disk has been created to do that click SSH to connect to the new SSH terminal it may take some time to connect sometimes but once it

[00:01:03] connects let's type in sudo lsblk and then the command sudo mkfs.ext4 -m 0 -F -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdb this will format the attached disk and you will see the inode tables that are writing now note this may take a little bit long so we will wait for it to format almost there once it's done formatting you can create a mount directory with this command sudo mkdir -p /mnt/disks/my-mount-dir and then mount it with this command sudo mount -

[00:02:11] o discard,defaults /dev/sdb /mnt/disks/my-mount-dir finally change the permissions on the disk by using sudo chmod a+w on the mount directory well congratulations you've completed this quickstart [Music]
