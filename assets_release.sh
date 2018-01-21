#!/bin/sh
set -e

out=./android/app/src/main/assets
resout=./android/app/src/main/res
rm -rf $out
mkdir $out
react-native bundle --platform android --entry-file ./index.js --bundle-output $out/index.android.bundle --assets-dest $resout --dev false
