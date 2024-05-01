const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  title: String,
  image:String
});
const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
