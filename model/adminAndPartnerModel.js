const mongoose = require("mongoose");

const adminAndPartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      default: "partner",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },

    //   phoneOtp: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("adminAndPartner", adminAndPartnerSchema);
