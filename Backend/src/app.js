const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello fucker ");
});
module.exports = app;
