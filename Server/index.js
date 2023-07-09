const express = require("express");
const fs = require("fs");
const app = express();
const PORT= process.env.PORT || 8001
const path = require("path");
const cors = require('cors');

const videoPath = path.join(__dirname,"clearout.mp4");
const videoSize = fs.statSync(videoPath).size;

// Enable CORS
app.use(cors());
//console.log(videoSize)
app.get("/video", (req, res) => {
  const range = req.headers["Range"];

  if (range) {
    const start = parseInt(range.split("=")[1].split("-")[0], 10);
    const end = parseInt(range.split("=")[1].split("-")[1], 10);

    const chunk = fs.createReadStream(videoPath, { start, end });

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${videoSize-1}`,
      'Access-Control-Allow-Origin': '*',
      "Content-Type": "video/mp4",
      'Accept-Ranges': 'bytes',
      "Content-Length": `${end - start + 1}`,
    });

    chunk.pipe(res);
  } else {
    res.sendFile(videoPath);
  }
});

app.listen(PORT, () => {
  console.log(`Video streaming server started on port ${PORT} `);
});