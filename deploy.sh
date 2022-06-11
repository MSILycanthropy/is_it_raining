#!/usr/bin/env sh

# abort on errors
set -e

if [ -d "dist" ]; then
  rm -rf dist
fi

# build
npm run build


# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:MSILycanthropy/is_it_raining.git main:gh-pages

cd -
