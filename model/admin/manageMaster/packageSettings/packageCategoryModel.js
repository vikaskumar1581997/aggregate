const mongoose = require("mongoose");

const packageCategorySchema = new mongoose.Schema({
  packageCategory: {
    type: String,
    required: true,
  },
  categoryCode: {
    type: String,
  },
});

module.exports = mongoose.model("PackageCategory", packageCategorySchema);
