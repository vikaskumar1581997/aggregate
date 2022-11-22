const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  marketType: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  countryCode: {
    type: Number,
    required: true,
  },
  countryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Country", countrySchema);
