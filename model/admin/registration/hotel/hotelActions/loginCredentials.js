const mongoose = require("mongoose");

const loginSchema = new mongoose.model({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
 module.exports = mongoose.model("logindetails", loginSchema);