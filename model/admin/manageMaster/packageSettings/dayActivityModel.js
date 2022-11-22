const mongoose = require("mongoose");

const dayActivitySchema = mongoose.Schema({
  country: { type: String, required: true },
  place: { type: String, required: true },
  dayActivityName: { type: String, required: true },
  dayActivityCode: { type: String, required: true },
  dayDescription: { type: String, required: true },
});

module.exports = mongoose.model("DayActivity", dayActivitySchema);
