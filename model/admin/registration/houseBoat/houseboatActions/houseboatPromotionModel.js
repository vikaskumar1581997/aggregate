const mongoose = require("mongoose");

const promotionModel = mongoose.Schema({
  houseboatID: {
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
  promotionList: {
    promotionType: {
      amount: {
        type: Boolean,
      },
      percentage: {
        type: Boolean,
      },
    },
    value: {
      type: String,
    },
    promotionFor: {
      houseboat: {
        type: Boolean,
      },
    },
  },
});

module.exports = mongoose.model("HouseboatPromotion", promotionModel);
