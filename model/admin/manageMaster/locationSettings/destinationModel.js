const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  destinationCode: {
    type: String,
    required: true,
  },
  destinationName: {
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

module.exports = mongoose.model("Destination", destinationSchema);
