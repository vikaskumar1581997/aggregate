const mongoose = require("mongoose");

const occupancySchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    marketType: {
      type: String,
    },
    status: {
      type: String,
      default : "notLive"
    },
    validityList: {
      type: [[String]],
    },
    occupencyDetails: {
      type: [
        {
          roomCategory: String,
          occupancy: [
            {
              occupancyType: String,
              totalAdult: Number,
              totalChild: Number,
              extraAdult: Number,
              extraChild: Number,
            },
          ],
        },
      ],
      required: true,
    },
    priority:{
      type:Number
    
    }
  },
  { timestamp: true }
);

module.exports = mongoose.model("hoteloccupancy", occupancySchema);


//priority in contract rate and occupancy and minimum length