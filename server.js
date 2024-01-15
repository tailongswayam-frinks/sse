const express = require("express");
const http = require("http");
const cors = require("cors");
const { resultData, resTitles, baseImages } = require("./images");

const app = express();
const server = http.createServer(app);

app.use(cors());

// SSE endpoint
app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Sample array of base64-encoded images

  let currentIndex = 0;

  // Send initial image
  // console.log('sending data: ', resultData[currentIndex]);
  const data = {
    image: baseImages[currentIndex],
    pass: !!currentIndex,
  };
  res.write(`data: ${JSON.stringify(data)}\n\n`);

  // Send images in a circular fashion every 5 seconds
  const intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % resultData.length;
    // console.log('sending data: ', resultData[currentIndex]);
    const data = {
      image: baseImages[currentIndex],
      pass: !!currentIndex,
    };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 2000);

  // Handle client disconnect
  req.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
});

const port = 9000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});