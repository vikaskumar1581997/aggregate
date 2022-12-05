const mongoose = require("mongoose");

const policy = mongoose.Schema(
  {
    houseboatID: {
      type: String,
      required: true,
    },
    policyCode: {
      type: String,
      required: true,
    },
    marketType: {
      asia: {
        type: Boolean,
      },
    },
    remarks: {
      type: String,
    },
    validityList: {
      validityFrom: {
        type: Date,
      },
      validityTo: {
        type: Date,
      },
    },
    cancellationPolicy: {
      cancellationFee: {
        type: String,
      },
      priorHours: {
        type: Number,
      },
    },
    amendmentPolicy: {
      amendmentFee: {
        type: String,
      },
      priorHours: {
        type: Number,
      },
    },
    childPolicy: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HouseboatPolicy", policy);
