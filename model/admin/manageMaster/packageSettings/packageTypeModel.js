const mongoose = require("mongoose");

const packageTypeSchema = new mongoose.Schema(
  {
    packageType: {
      type: String,
      required: true,
    },
    typeCode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PackageType", packageTypeSchema);
