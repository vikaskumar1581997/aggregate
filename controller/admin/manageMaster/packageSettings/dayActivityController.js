const DayActivity = require("../../../../model/admin/manageMaster/packageSettings/dayActivityModel");

//Create New Day Activity
const createNewDayActivity = async (req, res, next) => {
  try {
    const { country, place, dayActivityName, dayActivityCode, dayDescription } =
      req.body;

    const newDayActivity = await DayActivity.create({
      country,
      place,
      dayActivityName,
      dayActivityCode,
      dayDescription,
    });

    if (newDayActivity) {
      res.status(201).json({
        error: false,
        message: "Day Activity created!",
        response: newDayActivity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Day Activity not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

// Get all Day Activity
const getAllDayActivity = async (req, res, next) => {
  try {
    const allDayActivity = await DayActivity.find().exec();

    if (allDayActivity) {
      res.status(201).json({
        error: false,
        message: "Day Activity fetched!",
        response: allDayActivity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Day Activity not fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update A Day Activity
const updateDayActivity = async (req, res, next) => {
  try {
    const {
      _id,
      country,
      place,
      dayActivityName,
      dayActivityCode,
      dayDescription,
    } = req.body;

    const finalDayActivity = await DayActivity.findById(_id);
    finalDayActivity.country = country;
    finalDayActivity.place = place;
    finalDayActivity.dayActivityName = dayActivityName;
    finalDayActivity.dayActivityCode = dayActivityCode;
    finalDayActivity.dayDescription = dayDescription;

    const updatedDayActivity = await finalDayActivity.save();

    if (updatedDayActivity) {
      res.status(201).json({
        error: false,
        message: "Day Activity updated!",
        response: updatedDayActivity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Day Activity not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a day activity
const deleteDayActivity = async (req, res, next) => {
  try {
    const { _id } = req.params;

    const deleteActivity = await DayActivity.findByIdAndDelete(_id);

    if (deleteActivity) {
      res.status(201).json({
        error: false,
        message: "Day Activity deleted!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Day Activity not deleted!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewDayActivity,
  updateDayActivity,
  getAllDayActivity,
  deleteDayActivity,
};
