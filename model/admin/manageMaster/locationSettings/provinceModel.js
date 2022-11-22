const mongoose = require("mongoose");

const provinceSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  stateCode: {
    type: String,
    required: true,
  },
  stateName: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Province", provinceSchema);
