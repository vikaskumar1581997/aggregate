const mongoose = require("mongoose");

const itinearySchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  itinearyImage: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Itineary", itinearySchema);
