const mongoose = require("mongoose");

const hotelCategorySchema = mongoose.Schema({
  hotelCategory: {
    type: Number,
    required: true,
  },
  tagLine: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("HotelCategory", hotelCategorySchema);
