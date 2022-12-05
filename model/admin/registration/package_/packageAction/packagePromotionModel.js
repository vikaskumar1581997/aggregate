const mongoose = require("mongoose");

const packagePromotion = mongoose.Schema(
  {
    //Package ID to link the package PROMOTION to package
    packageId: {
      type: String,
      required: true,
    },
    validity: {
      validityFrom: {
        type: Date,
      },
      validityTo: {
        type: Date,
      },
    },
    promotionType: {
      percentage: {
        type: Boolean,
      },
      amount: {
        type: Boolean,
      },
    },
    value: {
      type: Number,
    },
    promotionFor: {
      package: {
        type: Boolean,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PackagePromotion", packagePromotion);
