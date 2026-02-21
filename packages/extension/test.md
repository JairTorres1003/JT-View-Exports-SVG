"compile:root": "tsc -b $TS_FILE && tsc-alias -p $TS_FILE",
<!-- "compile": "TS_FILE=./tsconfig.cjs.json npm run compile:root", -->
"compile:esm": "TS_FILE=./tsconfig.esm.json npm run compile:root",
<!-- "compile:esbuild": "node esbuild.config.js --production", -->
<!-- "compile:esbuild:dev": "node esbuild.config.js", -->
<!-- "compile:esbuild:web": "node esbuild.config.js --production --web-mode", -->
<!-- "compile:esbuild:web:dev": "node esbuild.config.js --web-mode", -->
"watch:root": "concurrently \"tsc -w --sourceMap -p $TS_FILE\" \"tsc-alias -w -p $TS_FILE\"",
"watch": "TS_FILE=./tsconfig.cjs.json npm run watch:root",
"watch:esm": "TS_FILE=./tsconfig.esm.json npm run watch:root",
<!-- "watch:esbuild": "node esbuild.config.js --watch", -->
<!-- "watch:esbuild:web": "node esbuild.config.js --watch --web-mode", -->
"test": "node ./out/cjs/test/runTest.js --verbose",
"pretest": "npm-run-all clean client:build compile",
"vscode:prepublish": "npm-run-all biome:check test clean compile:esbuild compile:esbuild:web",
"client:build": "cd client && npm run build",
"client:dev": "cd client && npm run dev",
"open-in-browser": "vscode-test-web --extensionDevelopmentPath=. $FOLDER_EXAMPLE",
"prepare-readme": "node prepare-readme.js",
"prepare-readme:restore": "node prepare-readme.js --restore",
"run:package": "vsce package",
"package": "npm-run-all prepare-readme run:package prepare-readme:restore"
