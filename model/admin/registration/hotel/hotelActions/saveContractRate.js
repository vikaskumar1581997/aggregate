const mongoose = require("mongoose");

const conractRateSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    rateCode: {
      type: String,
      required: true,
    },
    market: {
      type: [String],
      required: true,
    },
    days: {
      type: String,
      required: true,
    },
    validityList: {
      type: [[date]],
    },
    status: {
      type: String,
      default: "notLive",
    },
    conractRateDetails: [
      {
        roomCategory: {
          type: String,
          required: true,
        },
        isRefundable: {
          type: Boolean,
          default: false,
        },
        roomDetails: [
          {
            roomType: {
              type: String,
            },
            single: {
              type: Number,
            },
            double: {
              type: Number,
            },
            triple: {
              type: Number,
            },
            quad: {
              type: Number,
            },
            extraBedAdult: {
              type: Number,
            },
            extraBedChild: {
              type: Number,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("contractRate", conractRateSchema);

