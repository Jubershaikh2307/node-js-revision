const http = require("http");
const fs = require("fs");
const requestHandler = require("./routes");

http
  .createServer((req, res) => {
    requestHandler(req, res);
  })
  .listen(3000);

// Single Thread and Event Loop & Blocking Code

// *Node only use the single thread
