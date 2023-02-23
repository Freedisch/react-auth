const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  githubID: String,
  username: String,
});

mongoose.model("Users", userSchema);
