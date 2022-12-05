const mongoose = require("mongoose");

const seasonTypeSchema = mongoose.Schema(
  {
    seasonType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SeasonType", seasonTypeSchema);
