#!/bin/bash
rm scaled_*
for FILE in $(ls); do ffmpeg -i $FILE -vf scale=380:-1,crop=380:380 scaled_$FILE; done