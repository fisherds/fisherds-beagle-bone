#!/bin/bash
umount -f "/Volumes/Beagle" 
mkdir "/Volumes/Beagle"
sshfs root@192.168.7.2:/ /Volumes/Beagle
ssh root@192.168.7.2