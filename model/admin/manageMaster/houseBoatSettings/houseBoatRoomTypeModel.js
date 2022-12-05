const mongoose = require("mongoose");

const HBRTSchema = mongoose.Schema(
  {
    roomTypeName: {
      type: String,
    },
    roomTypeCode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HouseBoatRoomType", HBRTSchema);
