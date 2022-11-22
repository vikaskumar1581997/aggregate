const mongoose = require("mongoose");

const mealPlanSchema = mongoose.Schema({
  mealName: {
    type: String,
    required: true,
  },
  isMainMeal: {
    type: Boolean,
  },
  breakfast: {
    type: Boolean,
  },
  lunch: {
    type: Boolean,
  },
  dinner: {
    type: Boolean,
  },
});

module.exports = mongoose.model("MealPlan", mealPlanSchema);
