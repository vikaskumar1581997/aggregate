const mongoose = require("mongoose");

const roomCategorySchema = mongoose.Schema({
  roomCategory: {
    type: String,
    required: true,
  },
  categoryCode: {
    type: String,
  },
  roomArea: {
    type: String,
  },
});

module.exports = mongoose.model("RoomCategory", roomCategorySchema);
