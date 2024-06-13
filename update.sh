#!/usr/bin/env bash

docker run \
  --rm \
  --user=node \
  --volume=$PWD/wordpress/wp-content/plugins/payfit-blocks-acf:/workspace \
  --workdir=/workspace \
  docker.io/node:20 \
  bash -c "npm ci && npm run build"

docker compose up -d --build wordpress
docker compose up -d --build next
