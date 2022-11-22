const mongoose = require("mongoose");

const visaDetailsSchema = mongoose.Schema({
  passportCountry: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  passportCode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("VisaDetails", visaDetailsSchema);
