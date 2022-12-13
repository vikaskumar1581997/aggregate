const mongoose=require("mongoose");

const blockCheckinCheckouts = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    type: {
      type: [String],
      required: true,
    },
    marketType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "notLive",
    },
    validityList: [[String]],
  },
  { timestamp: true }
);

module.exports = mongoose.model("blockCheckinCheckouts", blockCheckinCheckouts);