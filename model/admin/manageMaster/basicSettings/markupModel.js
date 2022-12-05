const mongoose = require("mongoose");

var markupTypeSchema = new mongoose.Schema(
  {
    markupType: {
      type: String,
      required: true,
    },
    markupName: {
      type: String,
      required: true,
    },
    markupValue: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MarkUp", markupTypeSchema);
