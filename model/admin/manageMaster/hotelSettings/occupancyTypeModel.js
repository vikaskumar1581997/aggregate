const mongoose = require("mongoose");

const occupancyTypeSchema = mongoose.Schema(
  {
    occupancyType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OccupancyType", occupancyTypeSchema);
