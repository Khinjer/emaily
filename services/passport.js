const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");


passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID || keys.googleClientID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
      }
    )
  );

  module.exports = passport;
  