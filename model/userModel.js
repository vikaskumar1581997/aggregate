const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
    // password: {
    //   type: String,
    //   trim: true,
    // },

    //   phoneOtp: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
