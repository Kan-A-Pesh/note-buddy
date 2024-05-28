#!/bin/bash
set -e
script_dir=$(dirname $0)
cd $script_dir
cd ../

echo "Watching for file changes in $(pwd)" 

# Check if inotifywait is installed
if ! [ -x "$(command -v inotifywait)" ]; then
    echo "Error: inotifywait is not installed. Please install inotify-tools."
    exit 1
fi

while true; do
    ./scripts/clean.sh
    ./scripts/build-and-run.sh
    inotifywait -r -e modify,create,delete ./
    echo "File change detected, rebuilding and running..."
done
