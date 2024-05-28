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
    -e LOW_MEMORY=1 \
    note-buddy
