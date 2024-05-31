#!/bin/bash
set -e
script_dir=$(dirname $0)
cd $script_dir
cd ../

docker run -it --rm \
    --name note-buddy \
    -v $(pwd)/out:/app/out \
    -v $(pwd)/cache:/app/.cache \
    --gpus all \
    -p 5353:5333 \
    -e LOW_MEMORY=1 \
    -e PORT=5333 \
    note-buddy
