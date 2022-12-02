const mongoose = require("mongoose");

const promotionModel = mongoose.Schema({
  shikaraID: {
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
      shikara: {
        type: Boolean,
      },
    },
  },
});

module.exports = mongoose.model("ShikaraPromotion", promotionModel);
