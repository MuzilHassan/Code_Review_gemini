const express = require("express");
const cors = require("cors");
const app = express();
const aiRouter = require("./routes/aiRoutes");
app.use(cors());
app.use(express.json());
app.use("/ai", aiRouter);
app.get("/", (req, res) => {
  res.send("hello fucker ");
});
module.exports = app;
