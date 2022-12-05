const mongoose = require("mongoose");

const roomAvailaibility = mongoose.Schema(
  {
    houseboatID: {
      type: String,
      required: true,
    },
    market: {
      allMarket: {
        type: Boolean,
      },
      asia: {
        type: Boolean,
      },
    },
    roomCategory: {
      deluxe2bedRoom: {
        type: Boolean,
      },
      deluxe4bedRoom: {
        type: Boolean,
      },
      premium2bedRoom: {
        type: Boolean,
      },
      premium3bedRoom: {
        type: Boolean,
      },
    },
    noOfRooms: {
      type: String,
    },
    validityList: {
      validityFrom: {
        type: Date,
      },
      validityTo: {
        type: Date,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RoomAvailability", roomAvailaibility);
