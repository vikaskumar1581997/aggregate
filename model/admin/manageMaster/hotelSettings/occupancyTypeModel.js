const mongoose = require("mongoose");

const occupancyTypeSchema = mongoose.Schema({
  occupancyType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("OccupancyType", occupancyTypeSchema);
