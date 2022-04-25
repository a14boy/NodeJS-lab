const http = require("http");
const fs = require("fs");

const sever = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(req.url, req.method, req.header);
  if (req.url === "/") {
    res.setHeader("content-type", "text");
    res.write("<html>");
    res.write("<head><title>Enter Message!</title></head>");
    res.write(
      "<body><form action ='/message' method='POST'><input type= 'text'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("content-type", "text");
  res.write("<html>");
  res.write("<head><title>My first page!</title></head>");
  res.write("<body><h1>Hello from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

sever.listen(3000);
