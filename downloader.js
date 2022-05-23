const YTDlpWrap = require("yt-dlp-wrap").default;
const ytDlpWrap = new YTDlpWrap("bin/yt-dlp");
const fs = require("node:fs");
require("dotenv").config();
let ChannelList = require("./channels.json");

ChannelList = Object.values(c); // convert json values into array
const channel = ChannelList[Math.floor(Math.random() * ChannelList.length)]; // run a 50 50 to see what channel to download

ytDlpWrap
  .exec([
    `${channel}/videos?sort=dd`, // convert the channel into a playlist
    "--playlist-end", // grab the last videos
    "5", // only download 5 videos
    "-ovideos/%(playlist_index)s.mp4", // rename & save the videos properly
    "-f mp4", // change file extension to mp4
  ]) //
  .on("progress", (progress) =>
    console.log(progress.percent, progress.totalSize, progress.currentSpeed)
  )
  .on("ytDlpEvent", (eventType, eventData) => console.log(eventType, eventData))
  .on("error", (error) => console.error(error))
  .on("close", () => {
    console.log("finished downloading");
    eval(fs.readFileSync("upload.js").toString());
  });
