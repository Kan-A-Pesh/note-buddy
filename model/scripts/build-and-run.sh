#!/bin/bash
set -e
script_dir=$(dirname $0)
cd $script_dir
cd ../

echo "Building..."
$script_dir/build.sh

echo "Running..."
$script_dir/run.sh
