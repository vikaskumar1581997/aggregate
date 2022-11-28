const mongoose = require("mongoose");

const occupancySchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  marketType: {
    type: String,
  },
  status:String,
  validityList: {
    type: [[date]],
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
},{timestamp:true});

module.exports = momgoose.model("hoteloccupancy", occupancySchema);
