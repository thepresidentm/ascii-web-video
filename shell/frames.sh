#!/bin/bash
ffmpeg -i  darken.mp4 -r:1  -f:image -frames 7530 %0d.jpg