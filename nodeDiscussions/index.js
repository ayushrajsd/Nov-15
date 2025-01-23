// console.log(global);
// console.log("dir name", __dirname);
// console.log(process.cwd());
//

const fs = require("fs");
const content = Math.random().toString(36).repeat(10000000);

fs.writeFileSync("big.file", content);
