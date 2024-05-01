const mongoose = require("mongoose");

const autoSchema = new mongoose.Schema({
  image: String,
  brand: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Brand"
  },
  model: String,
  year: Number,
  color: String,
  seats: Number,
  gearBox: String,
  drive: String,
  engine: String,
  fuel: String,
  price: Number,
  inStock: Boolean,
  rating: Number,
});
const Auto = mongoose.model("Auto", autoSchema);
module.exports = Auto;
