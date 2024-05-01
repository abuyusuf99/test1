const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  subName: String,
  password: String,
  phone: String,
  address: String,
  email: String,
  admin: Boolean
  
});

const User = mongoose.model("User", userSchema);
module.exports = User;