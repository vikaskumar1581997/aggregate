const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "450325183388-20c9s5nuqmjl4qfjp5bkhpsnjc2gver9.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:2800/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
