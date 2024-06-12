#!/usr/bin/env bash

if [ "$1" == "renew" ]
then
  docker compose exec nginx certbot -n --nginx --agree-tos \
    -d hackday.reiwilde.me \
    -d hackday-db.reiwilde.me \
    -d hackday-wp.reiwilde.me \
    $@
elif [ "$1" == "create" ]
then
  docker compose exec nginx certbot -n --nginx --agree-tos \
    -m certbot@reiwilde.com \
    -d hackday.reiwilde.me \
    -d hackday-db.reiwilde.me \
    -d hackday-wp.reiwilde.me
fi
