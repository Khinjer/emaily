require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
require("./models/User");
require("./services/passport");
const authRouter = require("./routes/authRoutes");
const stripeRouter = require("./routes/stripeRoutes");
const passport = require("passport");
const path = require('path');

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

app.get("/api/current_user", (req, res) => {
  res.send(req.user);
});


//if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/dist'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
//}

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
