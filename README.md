# yt-uploader

Automatically download videos and upload them on YouTube 🚀

## Requirements

[Yarn](https://yarnpkg.com/)
[NodeJS](https://nodejs.org/)

## Guide:

**Clone the repo**
`git clone https://github.com/Infinit011/yt-uploader`

**Install dependencies**
`yarn`

**Setup a .env containing these fields:**

```
EMAIL=email
PASSWORD=emailpassword
RECOVERY_EMAIL=recovery_email (optional, but its good to have)
TITLE=your videos title
DESCRIPTION=your videos description
TIME=script's interval (in ms)
```

**Add some channels to the** `channels.json`

````{
    "c1": "channel1",
    "c2": "channel12",
    }```
````

_you can add more than 2 channels if you want_

**Run the script**
`node .`

**Have fun!**

# Contributing

Open a pull request, it helps a lot ❤️
