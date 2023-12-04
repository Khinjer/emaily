const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
const authRouter = require("./routes/authRoutes");
const keys = require("./config/keys");

mongoose
  .connect(keys.mongoURI)
  .then((mng) => console.log("connected to mongodb database..."))
  .catch((reason) => console.log("connection to database failed..."));

const app = express();

app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
