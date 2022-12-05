const mongoose = require("mongoose");

var designationSchema = new mongoose.Schema(
  {
    designation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Designation", designationSchema);
