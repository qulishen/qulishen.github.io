#!/usr/bin/env bash
set -uo pipefail

if ! command -v bundle >/dev/null 2>&1; then
  echo "Error: bundle command not found in current Ruby environment."
  echo "If local Ruby dependencies are hard to satisfy, run:"
  echo "  bash run_server_docker.sh"
  exit 1
fi

set +e
bundle exec jekyll serve --livereload
status=$?
set -e

if [ "$status" -ne 0 ]; then
  echo ""
  echo "Local Jekyll start failed (exit code: $status)."
  echo "Try Docker mode instead:"
  echo "  bash run_server_docker.sh"
  exit "$status"
fi