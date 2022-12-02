const mongoose = require("mongoose");

var bankSchema = new mongoose.Schema(
  {
    bank: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", bankSchema);
