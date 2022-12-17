const mongoose = require("mongoose");

const contractorModel = new mongoose.Schema({
  dep:mongoose.Schema.Types.ObjectId,
  name: String,
  age: String,
  phone: String,
});

module.exports = mongoose.model("contractor", contractorModel);
