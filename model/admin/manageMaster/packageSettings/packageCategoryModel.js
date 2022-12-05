const mongoose = require("mongoose");

const packageCategorySchema = new mongoose.Schema(
  {
    packageCategory: {
      type: String,
      required: true,
    },
    categoryCode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PackageCategory", packageCategorySchema);
