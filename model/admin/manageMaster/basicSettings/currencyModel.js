const mongoose = require("mongoose");

var currencySchema = new mongoose.Schema({
  currency: {
    type: String,
    required: true,
  },
  currencyCode: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Currency", currencySchema);
