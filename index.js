require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

// initialize all models in model folder (require a model in models/index.js to add it);
require("./models");
require("./services/passport");
const authRouter = require("./routes/authRoutes");
const stripeRouter = require("./routes/stripeRoutes");
const surveyRouter = require("./routes/surveyRoutes");
const passport = require("passport");
mongoose
  .connect(process.env.MONGO_URI)
  .then((mng) => console.log("connected to mongodb database..."))
  .catch((reason) => console.log("connection to database failed..."));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/stripe", stripeRouter);
app.use("/api/survey", surveyRouter);

app.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
