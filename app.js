const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First MiddleWare!");
  next();
});

app.use((req, res, next) => {
  res.send("<html><h1>Hello from Express.js</h1></html>");
});

const sever = http.createServer(app);

sever.listen(3000);
