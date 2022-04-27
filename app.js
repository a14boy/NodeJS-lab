const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First MiddleWare!");
  next();
});

app.use((req, res, next) => {
  console.log("Second MiddleWare!");
  next();
});

const sever = http.createServer(app);

sever.listen(3000);
