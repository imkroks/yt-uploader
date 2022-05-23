const { upload } = require("youtube-videos-uploader");
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();
const credentials = {
  email: process.env.EMAIL,
  pass: process.env.PASSWORD,
  recoveryemail: process.env.RECOVERY_EMAIL,
};
const title = process.env.TITLE;
const description = process.env.DESCRIPTION;
const video1 = {
  path: "./videos/1.mp4",
  title: title,
  description: description,
};
const video2 = {
  path: "./videos/2.mp4",
  title: title,
  description: description,
};
const video3 = {
  path: "./videos/3.mp4",
  title: title,
  description: description,
};
const video4 = {
  path: "./videos/4.mp4",
  title: title,
  description: description,
};
const video5 = {
  path: "./videos/5.mp4",
  title: title,
  description: description,
};

upload(
  credentials,
  [video1, video2, video3, video4, video5],
  console.log("uploading")
).then(() => {
  console.log("uploaded");
  // delete everything right after uploading
  const directory = "./videos";
  fs.readdir(directory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });
});
