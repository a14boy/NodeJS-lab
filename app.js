const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("First MiddleWare!");
  next();
});
app.use("/add-product", (req, res, next) => {
  res.send("<html><h1>The Add product page</h1></html>");
});
app.use((req, res, next) => {
  res.send("<html><h1>Hello from Express.js</h1></html>");
});

app.listen(3000);
