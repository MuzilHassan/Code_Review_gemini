require("dotenv").config();
const app = require("./src/app");

app.listen(4000, async () => {
  console.log("server is running");
});
