@echo off
REM Build the Chinese version of Social Democracy: An Alternate History
REM Swaps source_zh into source, runs dendrynexus, renames output, restores.

set ROOT=%~dp0
pushd "%ROOT%"

if not exist source_zh (
  echo [ERROR] source_zh directory not found.
  popd
  exit /b 1
)

if exist source_en_backup (
  echo [ERROR] source_en_backup already exists. Clean up previous failed build first.
  popd
  exit /b 1
)

echo [1/4] Backing up English source...
ren source source_en_backup || goto :err

echo [2/4] Staging Chinese source...
xcopy /E /I /Q source_zh source >nul || goto :err

echo [3/4] Running dendrynexus make-html...
call npx dendrynexus make-html
if errorlevel 1 goto :err

echo [4/4] Renaming output to game.zh.js...
if exist out\html\game.js (
  move /Y out\html\game.js out\html\game.zh.js >nul
)

echo [cleanup] Restoring English source...
rmdir /S /Q source
ren source_en_backup source

echo Done. Chinese build at out\html\game.zh.js
popd
exit /b 0

:err
echo [FAIL] Build aborted. Restoring English source...
if exist source rmdir /S /Q source
if exist source_en_backup ren source_en_backup source
popd
exit /b 1
