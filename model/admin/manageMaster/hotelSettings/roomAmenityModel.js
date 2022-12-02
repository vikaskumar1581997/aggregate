const mongoose = require("mongoose");

const roomAmenitySchema = mongoose.Schema(
  {
    amenityName: {
      type: String,
      required: true,
    },
    amenityIcon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RoomAmenity", roomAmenitySchema);
