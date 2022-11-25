const mongoose = require("mongoose");

const shikaraSchema = mongoose.Schema({
  shikaraName: {
    type: String,
    required: true,
  },
  category: {},
  status: {},
  description: {},
  country: {},
  state: {},
  place: {},
  contactPerson: {},
  contactEmail: {},
  address: {},
  contactMobile: {},
  emiDetails: {},
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
