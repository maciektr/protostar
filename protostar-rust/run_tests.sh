#!/bin/bash

set -e

pushd cairo-tests

if [ $# -gt 0 ]; then
  pushd "$1"
  cargo run
  popd # $1
  exit 0;
fi

for DIR in */ ; do
  pushd "$DIR"
  cargo run
  popd # $DIR
done

popd # cairo-tests
