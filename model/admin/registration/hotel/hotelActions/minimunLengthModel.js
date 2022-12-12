const mongoose = require("mongoose");

const occupancyMinimumLengthSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    marketType: {
      type: String,
    },
    status: {
      type: String,
      default: "notLive",
    },
    minimumLengthStay: {
      type: Number,
      required: true,
    },
    validityList: {
      type: [[String]],
    },

    priority: {
      type: Number,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model(
  "occupancyMinimumLength",
  occupancyMinimumLengthSchema
);
