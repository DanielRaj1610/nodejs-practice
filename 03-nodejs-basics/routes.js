const fs = require("fs");

const requestHandler = (req, res) => {
  //   console.log(req.url, req.headers, req.method);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head><title>Default form</title></head>
        <body>
        <form action="/message" method="POST">
        <input name="message" type="text"/>
        <button type="submit">Submit</button>
        </form>
        </body>
        </html>`);
    return res.end();
  }
  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return res.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      // blocks until execution is done
      fs.writeFileSync("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
      <head><title>NODE JS BASICS</title></head>
      <body>
      TESTING NODE BASICS
      </body>
      </html>`);
  res.end();
  //   process.exit();
};

module.exports = { handler: requestHandler, fileName: "routes.js" };

//other way of exporting files in nodejs
// exports.handler= requestHandler;
// exports.fileName= "routes.js" ;
