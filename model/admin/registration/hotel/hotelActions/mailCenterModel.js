const mongoose = require("mongoose");

const mailcenterSchema = new mongoose.Schema({
  
    hotelId:{
       type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    mailCenter: [
      {
        userType: {
          type: String,
          required: true,
        },
        userName: {
          type: String,
          required: true,
        },
        contactNumber: {
          type: String,
          required: true,
        },
        mailId: {
          type: String,
          required: true,
        },
        mailType: {
          type: [String],
          
        },
      },
    ],
  
});

module.exports= mongoose.model("mailcenter", mailcenterSchema);