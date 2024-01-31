const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    let { url, method } = req;
    console.log(url, method);
    if (url == "/") {
      console.log("This is server creating"); // this is server creating template
      res.setHeader("Content-Type", "text/html");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">abcd</button></form></body>'
      );
    } else if (url === "/message" && method == "POST") {
      let data = []; // cannoth get data directly so we have to use the body and res.on
      req.on("data", (chunk) => {
        data.push(chunk);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(data).toString();
        const message = parsedBody.split("=")[1];
        fs.writeFileSync("message.txt", message);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    } else {
      console.log("This is server creating");
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Ths is it mail work</h1>");
    }
    res.end();
  })
  .listen(3000);
