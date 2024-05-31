#!/bin/bash
script_dir=$(dirname $0)
cd $script_dir
cd ../

docker stop note-buddy
docker rm note-buddy
docker rmi note-buddy

exit 0
