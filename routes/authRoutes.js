const passport = require("passport");
const router = require("express").Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/callback", passport.authenticate("google"),(req,res) => {
  res.redirect('/surveys');
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect('/');
});



module.exports = router;
