const fs = require("node:fs");
console.log("running!");
const time = 21600000; // time must be in ms

// execute the downloader and right after upload the video
eval(fs.readFileSync("downloader.js").toString());

// wait to re-execute
setInterval(() => {
  eval(fs.readFileSync("downloader.js").toString());
}, time);
