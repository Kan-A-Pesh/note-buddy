#!/bin/bash
set -e
script_dir=$(dirname $0)
cd $script_dir
cd ../

echo "DEV-DOCTOR: Running dev doctor..."

# Check if docker is installed
if ! [ -x "$(command -v docker)" ]; then
  echo "DEV-DOCTOR: Error: docker is not installed." >&2
  exit 1
fi

# Check if supabase/docker/.env exists
if [ ! -f supabase/docker/.env ]; then
  echo "DEV-DOCTOR: supabase/docker/.env file not found. Please create one from supabase/docker/.env.example"
  exit 1
fi

echo ""
echo "DEV-DOCTOR: Success!"
echo "DEV-DOCTOR: Your development environment is ready."
echo "DEV-DOCTOR: You can now run 'docker-compose up' to start the development server."
echo ""
