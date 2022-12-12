const mongoose = require("mongoose");

const partnerloginSchema = new mongoose.Schema(
  {
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
  },
  {timestamps:true}
);
module.exports = mongoose.model("PartnersloginCredentials", partnerloginSchema);
