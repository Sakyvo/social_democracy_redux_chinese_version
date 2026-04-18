#!/usr/bin/env bash
# Build the Chinese version of Social Democracy: An Alternate History
# Swaps source_zh into source, runs dendrynexus, renames output, restores.
set -e
cd "$(dirname "$0")"

if [ ! -d source_zh ]; then
  echo "[ERROR] source_zh directory not found."
  exit 1
fi
if [ -d source_en_backup ]; then
  echo "[ERROR] source_en_backup already exists. Clean up previous failed build first."
  exit 1
fi

restore() {
  rm -rf source
  mv source_en_backup source
}
trap 'echo "[FAIL] Build aborted. Restoring English source..."; restore' ERR

echo "[1/4] Backing up English source..."
mv source source_en_backup

echo "[2/4] Staging Chinese source..."
cp -r source_zh source

echo "[3/4] Running dendrynexus make-html..."
npx dendrynexus make-html

echo "[4/4] Renaming output to game.zh.js..."
if [ -f out/html/game.js ]; then
  mv out/html/game.js out/html/game.zh.js
fi

echo "[cleanup] Restoring English source..."
restore
trap - ERR

echo "Done. Chinese build at out/html/game.zh.js"
