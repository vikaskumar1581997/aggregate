const mongoose = require("mongoose");

const packageTypeSchema = new mongoose.Schema({
  packageType: {
    type: String,
    required: true,
  },
  typeCode: {
    type: String,
  },
});

module.exports = mongoose.model("PackageType", packageTypeSchema);
