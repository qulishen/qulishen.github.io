#!/usr/bin/env bash
set -euo pipefail

if ! command -v docker >/dev/null 2>&1; then
  echo "Error: docker command not found. Please install Docker first."
  exit 1
fi

if [ -t 0 ] && [ -t 1 ]; then
  docker run --rm -it \
    -p 4000:4000 \
    -p 35729:35729 \
    -v "$PWD:/srv/jekyll" \
    -w /srv/jekyll \
    ruby:3.1 \
    bash -lc "gem install bundler -v 2.2.19 && bundle _2.2.19_ install && bundle _2.2.19_ exec jekyll liveserve --host 0.0.0.0 --livereload-host 0.0.0.0"
else
  docker run --rm \
    -p 4000:4000 \
    -p 35729:35729 \
    -v "$PWD:/srv/jekyll" \
    -w /srv/jekyll \
    ruby:3.1 \
    bash -lc "gem install bundler -v 2.2.19 && bundle _2.2.19_ install && bundle _2.2.19_ exec jekyll liveserve --host 0.0.0.0 --livereload-host 0.0.0.0"
fi
