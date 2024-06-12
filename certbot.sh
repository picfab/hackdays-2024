#!/usr/bin/env bash

if [ "$1" == "renew" ]
then
  docker compose exec nginx certbot -n --nginx --agree-tos \
    -d hackdays.reiwilde.com \
    -d hackdays-db.reiwilde.com \
    -d hackdays-wp.reiwilde.com \
    $@
elif [ "$1" == "create" ]
then
  docker compose exec nginx certbot -n --nginx --agree-tos \
    -m certbot@reiwilde.com \
    -d hackdays.reiwilde.com \
    -d hackdays-db.reiwilde.com \
    -d hackdays-wp.reiwilde.com
fi
