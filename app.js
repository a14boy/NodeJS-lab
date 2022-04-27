const http = require("http");

const express = require("express");

const app = express();

const sever = http.createServer(app);

sever.listen(3000);
