const mongoose = require("mongoose");

const roomTypeSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  tagLine: {
    type: String,
  },
  meals: {
    selfValue: {
      type: Boolean,
      default: false,
    },
    noMeals: {
      type: Boolean,
      default: false,
    },
    lunch: {
      type: Boolean,
      default: false,
    },
    dinner: {
      type: Boolean,
      default: false,
    },
    fullBoard: {
      type: Boolean,
      default: false,
    },
    halfBoard: {
      type: Boolean,
      default: false,
    },
  },
});

module.exports = mongoose.model("RoomType", roomTypeSchema);
