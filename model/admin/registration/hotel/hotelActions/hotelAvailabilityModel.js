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
    noOFRooms: {
      type: Number,
      required: true,
    },
    releaseDay: {
      type: String,
      required: true,
    },
    validityList: [[String]],
  },
  { timestamp: true }
);

module.exports = mongoose.model("hotelavailability", hotelAvailabilitySchema);