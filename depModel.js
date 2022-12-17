const mongoose = require("mongoose");

const depModel = new mongoose.Schema({
  contractor: mongoose.Schema.Types.ObjectId,
  name: String,
  age: String,
  phone: String,
});

module.exports = mongoose.model("department", depModel);
