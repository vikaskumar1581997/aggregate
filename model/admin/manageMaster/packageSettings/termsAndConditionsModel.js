const mongoose = require("mongoose");

const tAndCSchema = mongoose.Schema({
  descriptionType: {
    type: String,
    required: true,
  },
  tagLine: {
    type: String,
    required: true,
  },
  termsCode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: { type: String, required: true },
});

module.exports = mongoose.model("TermsConditions", tAndCSchema);
