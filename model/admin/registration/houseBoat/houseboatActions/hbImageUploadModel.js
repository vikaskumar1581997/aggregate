const mongoose = require("mongoose");

const imageModel = mongoose.Schema(
  {
    houseboatID: {
      type: String,
      required: true,
    },
    hbImage: [String],
  },
  { timestamps: true }
);

module.exports = ("HBImageModel", imageModel);
