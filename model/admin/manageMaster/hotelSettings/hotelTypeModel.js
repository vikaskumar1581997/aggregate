const mongoose = require("mongoose");

const hotelTypeSchema = mongoose.Schema(
  {
    hotelType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HotelType", hotelTypeSchema);
