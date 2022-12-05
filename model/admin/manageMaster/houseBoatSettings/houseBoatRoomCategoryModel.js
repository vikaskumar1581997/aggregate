const mongoose = require("mongoose");

const HBTRoomCategorySchema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("HBTRCategory", HBTRoomCategorySchema);
