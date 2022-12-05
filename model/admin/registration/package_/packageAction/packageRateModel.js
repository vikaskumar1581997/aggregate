const mongoose = require("mongoose");

const packageRate = mongoose.Schema(
  {
    //Package ID to link the package rate to package
    packageId: {
      type: String,
      required: true,
    },
    rateCode: {
      type: String,
      required: true,
    },
    market: {
      allMarket: {
        type: Boolean,
      },
      asia: {
        type: Boolean,
      },
    },
    validityList: {
      validityFrom: {
        type: Date,
      },
      validityTo: {
        type: Date,
      },
    },
    occupancyList: {
      minimumPax: {
        type: Number,
      },
      maximumPax: {
        type: Number,
      },
    },

    //Rate Details
    country: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    noOfNights: {
      type: Number,
      required: true,
    },

    //Twin Sharing Basis
    occupancyType: {
      type: String,
    },
    selectHotel: {
      type: String,
    },
    adultRatePerPerson: {
      type: String,
    },
    childRatePerPerson: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PackageRate", packageRate);
