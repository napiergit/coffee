#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
echo $SCRIPTPATH

cd $SCRIPTPATH
# npm i puppeteer
# npm i http-server
node gen_pdf.js
mv ./output.pdf ../assets/Andrew-Napier-Resume.pdf
cd -
