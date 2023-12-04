const passport = require("passport");
const router = require("express").Router();

const middleware_test = (req, res, next) => {
  console.log("IM HERE");
  next();
};

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/callback", passport.authenticate("google"));

router.get("/logout", (req, res) => {
  req.logOut();
  res.send(req.user);
});

router.get("/api/user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
