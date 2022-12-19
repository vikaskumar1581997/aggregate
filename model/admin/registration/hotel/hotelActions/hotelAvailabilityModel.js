const mongoose=require("mongoose");

const hotelAvailabilitySchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    availabilityType: {
      type: String,
      required: true,
    },
    marketType: {
      type: String,
      required: true,
    },
    roomCategory: {
      type: String,
      required: true,
    },
    noOfRooms: {
      type: Number,
      required: true,
    },
    releaseDay: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "notLive",
    },
    validityList: [[String]],

    checkinAllowed:[String]
  },
  { timestamp: true }
);

module.exports = mongoose.model("hotelavailability", hotelAvailabilitySchema);