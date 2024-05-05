const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  auto: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Auto",
  },
  number: Number,
  status: Boolean,
  pay: String,
  data: String,
  money: Number
});
const Order = mongoose.model("Order", orderSchema);


module.exports = Order;
