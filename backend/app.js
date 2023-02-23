require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
require("./models/User");
const bodyParser = require("body-parser");
var githubStrategy = require("passport-github2").Strategy;
var passport = require("passport");
const router = require("./routes/workoutRoutes");
const User = mongoose.model("Users");

const app = express();
app.use(cors());
app.use(bodyParser.json());
console.log(process.env.MONGODB_URI);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Listenning on port ${process.env.PORT}`)
    );
  })
  .catch(console.error());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new githubStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: "http://localhost:8000/auth/test",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      const userModel = await User.findOne({ githubID: profile.id });
      if (!userModel) {
        const newUser = await User.create({
          githubID: profile.id,
          username: profile.username,
        });
        console.log(profile.id);
        if (newUser) {
          done(null, newUser);
        }
      } else {
        done(null, userModel);
      }
    }
  )
);

app.get("/login", passport.authenticate("github", { scope: ["profile"] }));

app.get("/auth/test", passport.authenticate("github"), (req, res) => {
  res.redirect("/review");
});
app.get("/review", (req, res) => res.send(JSON.stringify(req.user)));

app.get("/logout", (req, res) => {
  req.logOut((err) => console.log(err)), res.send(req.user);
});

app.use("/api/", router)