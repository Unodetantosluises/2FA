const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/"
  },
  function(request, accessToken, refreshToken, profile, cb) {
    return done(err, profile);
    }
));

passport.serializeUser(function(user, done) {
    done (null, user);
});