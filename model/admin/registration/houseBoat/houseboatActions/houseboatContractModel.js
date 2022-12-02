const mongoose = require("mongoose");

const hbContractModel = mongoose.Schema({
  houseboatID: {
    type: String,
    required: true,
  },
  rateCode: {
    type: String,
    required: true,
  },
  time: {
    halfDay: {
      type: Boolean,
    },
    fullDay: {
      type: Boolean,
    },
  },
  market: {
    allMarket: {
      type: Boolean,
    },
    asia: {
      type: Boolean,
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
  validityList: {
    validityFrom: {
      type: Date,
    },
    validityTo: {
      type: Date,
    },
  },
  premium2BedRoom: {
    isNeeded: {
      yes: {
        type: Boolean,
      },
      no: {
        type: Boolean,
      },
    },
    roomType: {
      type: String,
    },
    roomRate: {
      type: Number,
    },
    extraBedAdult: {
      type: Number,
    },
    extraBedChild: {
      type: Number,
    },
  },
  premium3BedRoom: {
    isNeeded: {
      yes: {
        type: Boolean,
      },
      no: {
        type: Boolean,
      },
    },
    roomType: {
      type: String,
    },
    roomRate: {
      type: Number,
    },
    extraBedAdult: {
      type: Number,
    },
    extraBedChild: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("HouseboatContract", hbContractModel);
