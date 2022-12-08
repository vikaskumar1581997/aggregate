const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    basicDetails: {
      hotelName: {
        type: String,
        required: true,
      },

      currency: {
        type: String,
        required: true,
      },

      hotelCategory: {
        type: String,
        required: true,
      },

      hotelType: {
        type: String,
        required: true,
      },

      markupType: {
        type: String,
        required: true,
      },

      status: {
        type: String,
        required: true,
      },
      coupleFriendlyHotel: {
        type: Boolean,
        required: true,
      },
      sanitizedStay: {
        type: Boolean,
        required: true,
      },
    },

    hotelLocation: {
      region: {
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
      location: {
        type: String,
      },
      zipCode: {
        type: String,
        required: true,
      },
      latitude: {
        type: String,
        required: true,
      },
      longitude: {
        type: String,
        required: true,
      },
      hotelAddress: {
        type: String,
        required: true,
      },
      gsttax: {
        type: String,
        required: true,
      },
    },
    contactDetails: [
      {
        contactType: {
          type: String,
          required: true,
        },
        contactPerson: {
          type: String,
          required: true,
        },
        mobile: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        mailType: {
          type: [String],
        },
      },
    ],
    nearByAttraction: [{
      place: {
        type: String,
      },
      kilometers: {
        type: String,
      },
    }],
    hotelDescription: {
      type: String,
      required: true,
    },
    EMIDeatils: {
      type: String,
    },
    childPolicy: {
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
        min: {
          type: Number,
          required: true,
        },
        max: {
          type: Number,
          required: true,
        },
      },
    },
    hotelAmenities: [String],

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
    bankDetails: [
      {
        bankName: {
          type: String,
        },
        accountNumber: {
          type: String,
        },
        bankAddress: {
          type: String,
        },
        iban: {
          type: String,
        },
        faxNumber: {
          type: String,
        },
        swiftCode: {
          type: String,
        },
        telephone: {
          type: String,
        },
        contactPerson: {
          type: String,
        },
      },
    ],

    room: [
      {
        roomCategory: {
          type: String,
          required: true,
        },
        roomType: {
          type: [String],
          required: true,
        },
      },
    ],

    termsAndConditions: {
      type: String,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
    imageUpload: {
      type: [String],
      default: null,
    },
    roomImageUpload: {
      type: [String],
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("hotels", hotelSchema);
