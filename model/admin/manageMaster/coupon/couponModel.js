const mongoose = require("mongoose");

const couponSchema = mongoose.Schema({
  couponCode: {
    type: String,
    required: true,
  },
  couponType: {
    type: String,
    required: true,
  },
  allHotels: {
    type: Boolean,
  },
  particularHotel: {
    type: Boolean,
  },
  noOfUsers: {
    type: Number,
  },
  discountValue: {
    type: String,
  },
  discountType: {
    type: String,
  },
  validityFrom: {
    type: Date,
  },
  validityTo: {
    type: Date,
  },
  couponImage: {
    data: Buffer,
    contentType: String,
  },
  couponDescription: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Coupon", couponSchema);
