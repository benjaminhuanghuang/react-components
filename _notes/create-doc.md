
npm install -D react-docgen chokidar npm-run-all

npm install -S highlight.js

touch scripts/generateComponentData.js

"gen:docs": "node scripts/generateComponentData.js",

create config/componentData.js