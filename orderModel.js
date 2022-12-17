const mongoose = require("mongoose");

const orderModel = new mongoose.Schema({
  dep: mongoose.Schema.Types.ObjectId,
  labour: mongoose.Schema.Types.ObjectId,

  item: String,
 quantity:String,
 
});

module.exports = mongoose.model("order", orderModel);
