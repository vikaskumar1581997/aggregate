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

    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User"
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },
  //   password: {
  //     type: String,
  //     trim: true,
  //   },

  //   phoneOtp: String,
   },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
