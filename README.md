# ascii-web-video

This is an experiment.

## Tools used

* JP2A
* FFMPEG

[Original video, not mine.]: https://youtu.be/dcOwj-QE_ZE
[Original video, not mine.]

## Change speed

In order to change the video speed go to the JavaScript file, there are two variables:

* time - The delay between a frame load and the next frame.
* steps - The code doesn't display all the frames, jumps from frame 1 to frame 12.

## Make new video

1. In **frames.sh** change _darken.mp4_ to the name of your file and the _7530_, this corresponds at the humber of frames of the video and run it.

2. Go to **frames.sh**, change the _7530_ in the _for loop_ and run it.

3. In **frameChanger.js** change the _totalFrames_ variable.
