const fs = require("node:fs");
console.log("running!");
require("dotenv").config();
const time = process.env.TIME;
// execute the downloader and right after upload the video
eval(fs.readFileSync("downloader.js").toString());

// wait to re-execute
setInterval(() => {
  eval(fs.readFileSync("downloader.js").toString());
}, time);
