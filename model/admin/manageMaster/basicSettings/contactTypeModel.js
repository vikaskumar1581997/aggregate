const mongoose = require("mongoose");

var contactTypeSchema = new mongoose.Schema(
  {
    contactType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactType", contactTypeSchema);
