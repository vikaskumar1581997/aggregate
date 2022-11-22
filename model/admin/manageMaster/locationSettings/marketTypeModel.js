const mongoose = require("mongoose");

const marketTypeSchema = new mongoose.Schema({
  marketType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MarketType", marketTypeSchema);
