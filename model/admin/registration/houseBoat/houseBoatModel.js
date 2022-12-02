const mongoose = require("mongoose");

const houseBoatSchema = mongoose.Schema(
  {
    houseBoatName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    boatType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    contactMobile: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    emiDetails: {
      type: String,
      required: true,
    },
    weekDays: {
      sunday: {
        type: Boolean,
      },
      monday: {
        type: Boolean,
      },
      tuesday: {
        type: Boolean,
      },
      wednesday: {
        type: Boolean,
      },
      thursday: {
        type: Boolean,
      },
      friday: {
        type: Boolean,
      },
      saturday: {
        type: Boolean,
      },
    },
    weekEndDays: {
      sunday: {
        type: Boolean,
      },
      monday: {
        type: Boolean,
      },
      tuesday: {
        type: Boolean,
      },
      wednesday: {
        type: Boolean,
      },
      thursday: {
        type: Boolean,
      },
      friday: {
        type: Boolean,
      },
      saturday: {
        type: Boolean,
      },
    },
    room: {
      roomCategory: {
        type: String,
        required: true,
      },
      roomType: {
        type: [String],
        required: true,
      },
    },
    childComplimentaryAge: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
    },
    childChargeableAge: {
      minAge: {
        type: Number,
        required: true,
      },
      maxAge: {
        type: Number,
        required: true,
      },
    },
    inclusion: {
      type: [String],
    },
    exclusion: {
      type: [String],
    },
    termsAndConditions: {
      type: [String],
    },
    houseBoatHighlights: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HouseBoatModel", houseBoatSchema);
