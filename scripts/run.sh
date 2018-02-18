#!/bin/bash

AW_PATH="/Applications/GitHub Tada.app"
AW_PATH="/Users/wk/Source/GitTada/builds/GitHub Tada-darwin-x64/GitHub Tada.app"
app=$(osascript "$AW_PATH/Contents/Resources/app/scripts/current-app.scpt")
open -W "$AW_PATH"
osascript -e "activate application \"$app\""