const mongoose = require("mongoose");

const shikaraSchema = mongoose.Schema({
  shikaraName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
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
  state: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactMobile: {
    type: String,
    required: true,
  },
  emiDetails: {
    type: String,
  },
  inclusion: {
    type: [String],
  },
  exclusion: {
    type: [String],
  },
  termsAndConditions: {
    type: [String],
  },
});

module.exports = mongoose.model("ShikaraModel", shikaraSchema);
