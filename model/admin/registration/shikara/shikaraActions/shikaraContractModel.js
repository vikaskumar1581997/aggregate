const mongoose = require("mongoose");

const contract = mongoose.Schema({
  shikaraId: {
    type: String,
    required: true,
  },
  maximumCapacity: {
    type: Number,
    required: true,
  },
  timeHrs: {
    type: String,
    required: true,
  },
  timeMin: {
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
  rateCode: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  validityList: {
    validityFrom: {
      type: Date,
    },
    validityTo: {
      type: Date,
    },
  },
  days: {
    allDays: {
      type: Boolean,
    },
    weekDays: {
      type: Boolean,
    },
    weekend: {
      type: Boolean,
    },
  },
});

module.exports = mongoose.model("ShikaraContract", contract);
