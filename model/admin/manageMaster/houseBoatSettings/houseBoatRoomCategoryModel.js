const mongoose = require("mongoose");

const HBTRoomCategorySchema = mongoose.Schema({
  roomCategoryName: {
    type: String,
  },
  roomCategoryCode: {
    type: String,
  },
  minimumRoomCount: {
    type: Number,
  },
  maximumRoomCount: {
    type: Number,
  },
});

module.exports = mongoose.model("HBTRCategory", HBTRoomCategorySchema);
