const mongoose = require("mongoose");

const houseBoatTypeSchema = mongoose.Schema({
  boatName: {
    type: String,
    required: true,
  },
  boatCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("HouseBoatType", houseBoatTypeSchema);
