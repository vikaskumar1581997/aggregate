const MealPlan = require("../../../../model/admin/manageMaster/hotelSettings/mealPlanModel");

//Create a new meal plan
const createNewMealPlan = async (req, res, next) => {
  try {
    const { mealName, isMainMeal, breakfast, lunch, dinner } = req.body;

    const mealPlanData = await MealPlan.create({
      mealName,
      isMainMeal,
      breakfast,
      lunch,
      dinner,
    });

    if (mealPlanData) {
      res.status(201).json({
        error: false,
        message: "Meal Plan created!",
        response: mealPlanData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Meal Plan not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all meal plans
const getAllMealPlan = async (req, res, next) => {
  try {
    const allMealPlan = await MealPlan.find();
    if (allMealPlan) {
      res.status(201).json({
        error: false,
        message: "All meal plans fetched!",
        response: allMealPlan,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Meal Plan not fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a meal plan
const updateMealPlan = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { mealName, isMainMeal, breakfast, lunch, dinner } = req.body;

    const finalMealPlan = await MealPlan.findById(_id);

    finalMealPlan.mealName = mealName;
    finalMealPlan.isMainMeal = isMainMeal;
    finalMealPlan.breakfast = breakfast;
    finalMealPlan.lunch = lunch;
    finalMealPlan.dinner = dinner;

    const updatedMealPlan = await finalMealPlan.save();

    if (updatedMealPlan) {
      res.status(201).json({
        error: false,
        message: "Meal Plan updated",
        response: updatedMealPlan,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Meal Plan not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a meal plan
const deleteMealPlan = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deletePlan = await MealPlan.findByIdAndDelete(_id);

    if (deletePlan) {
      res.status(201).json({
        error: false,
        message: "Meal Plan deleted!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Meal Plan not deleted!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewMealPlan,
  getAllMealPlan,
  updateMealPlan,
  deleteMealPlan,
};
