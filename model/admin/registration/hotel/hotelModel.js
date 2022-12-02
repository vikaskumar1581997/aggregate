const mongoose = require("mongoose");

const hotel_Schema = new mongoose.Schema({
  hotelName: Joi.string().alphanum().min(3).max(30).required(),

  currency: Joi.string().alphanum().max(30).required(),

  hotelCategory: Joi.string().alphanum().required(),

  hotelType: Joi.string().alphanum().required(),

  markupType: Joi.string().alphanum().required(),

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
  nearByAttraction: {
    place: {
      type: String,
      required: true,
    },
    kilometers: {
      type: String,
      required: true,
    },
  },
  hotelDescription: {
    type: String,
    required: true,
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
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  hotelAmenities: {
    wifi: {
      type: Boolean,
    },
    restaurant: {
      type: Boolean,
    },
    power: {
      type: Boolean,
    },
    ac: {
      type: Boolean,
    },
    laundry: {
      type: Boolean,
    },
    swimmingPool: {
      type: Boolean,
    },
    housekeeping: {
      type: Boolean,
    },
    minibar: {
      type: Boolean,
    },
    petFriendly: {
      type: Boolean,
    },
    sauna: {
      type: Boolean,
    },
    Balcony: {
      type: Boolean,
    },
    steamRoom: {
      type: Boolean,
    },
    liftService: {
      type: Boolean,
    },
    fan: {
      type: Boolean,
    },
    bed: {
      type: Boolean,
    },
    roomBed: {
      type: Boolean,
    },
    bar: {
      type: Boolean,
    },
    escalator: {
      type: Boolean,
    },
    fullTimeRoomService: {
      type: Boolean,
    },
    hairDryer: {
      type: Boolean,
    },
    towel: {
      type: Boolean,
    },
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
  bankDetails: {
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

  room: [{
    roomCategory: {
      type: String,
      required: true,
    },
    roomType: {
      type: [String],
      required: true,
    },
}],

  termsAndConditions: {
    type: String,
    required: true,
  },

  isDeleted: {
    type: Boolean,
    default: False,
  },
},{timestamps:true});

module.exports = mongoose.model({ hotels, hotelSchema });
