const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  packageCode: {
    type: String,
    required: true,
  },
  packageBasicRate: {
    type: String,
    required: true,
  },
  EMIDate: {
    type: Date,
  },
  currency: {
    type: String,
  },

  packageType: {
    type: String,
  },

  packageCategory: {
    type: String,
  },

  overview: {
    type: String,
  },

  packageImage: {
    data: Buffer,
    contentType: String,
  },

  include: {
    type: String,
  },

  status: {
    type: String,
  },

  arrivedCountry: {
    type: String,
  },

  state: {
    type: String,
  },

  place: {
    type: String,
  },

  noOfNights: {
    type: Number,
  },

  //next

  itineraryDetails: {
    day: {
      type: Number,
    },
    places: {
      type: String,
    },
    headline: {
      type: String,
    },
    itineraryImage: {
      data: Buffer,
      contentType: String,
    },
    overview_: {
      type: String,
    },
    dayActivity: {
      type: String,
    },
  },

  inclusion: {
    type: String,
  },
  exclusion: {
    type: String,
  },
  termsAndConditions: {
    type: String,
  },
  packageHighlights: {
    type: String,
  },
});

module.exports = mongoose.model("Package", packageSchema);
