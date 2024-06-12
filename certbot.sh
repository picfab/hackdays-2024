#!/usr/bin/env bash

if [ "$1" == "renew" ]
then
  docker compose exec nginx certbot -n --nginx --agree-tos \
    -d hackdays.reiwilde.me \
    -d hackdays-db.reiwilde.me \
    -d hackdays-wp.reiwilde.me \
    $@
elif [ "$1" == "create" ]
then
  docker compose exec nginx certbot -n --nginx --agree-tos \
    -m certbot@reiwilde.com \
    -d hackdays.reiwilde.me \
    -d hackdays-db.reiwilde.me \
    -d hackdays-wp.reiwilde.me
fi
