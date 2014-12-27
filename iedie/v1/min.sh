#!/bin/bash
uglifyjs -m --comments -b beautify=false,ascii-only=true script.js > script.min.js
