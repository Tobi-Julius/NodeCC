const path = require("node:path");

console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename).root);
console.log(path.posix);
