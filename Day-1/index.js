const http = require("http");

http
  .createServer((req, res) => {
    console.log("This is server creating"); // this is server creating template
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Ths is it</h1>");
    // res.send("<h1>This is passing data</h1>");
    res.end();
  })
  .listen(3000);
