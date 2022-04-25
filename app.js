const http = require("http");
const sever = http.createServer((req, res) => {
  console.log(req.url, req.method, req.header);
  res.setHeader("content-type", "text");
  res.write("<html>");
  res.write("<head><title>My first page!</title></head>");
  res.write("<body><h1>Hello from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

sever.listen(3000);
