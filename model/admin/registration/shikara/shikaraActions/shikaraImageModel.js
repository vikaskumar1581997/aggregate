const mongoose = require("mongoose");

const imageModel = mongoose.Schema(
  {
    shikaraID: {
      type: String,
      required: true,
    },
    shikaraImage: [String],
  },
  { timestamps: true }
);

module.exports = ("ShikaraImageModel", imageModel);
