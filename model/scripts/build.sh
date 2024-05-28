#!/bin/bash
set -e
script_dir=$(dirname $0)
cd $script_dir
cd ../

docker build -t note-buddy .
