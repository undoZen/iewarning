#!/bin/bash
#uglifyjs -m --comments -b beautify=false,ascii-only=true script.js > script.min.js
#很短的代码，压缩效果不明显，所以只做 ascii-only 处理
uglifyjs --comments -b ascii-only=true script.js > script.min.js
