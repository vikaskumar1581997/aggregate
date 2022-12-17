const mongoose = require("mongoose");

const labourModel = new mongoose.Schema({
  dep: mongoose.Schema.Types.ObjectId,
  name: String,
  age: String,
  phone: String,
});

module.exports = mongoose.model("labour", contractorModel);
