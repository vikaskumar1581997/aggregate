const DayActivity = require("../../../../model/admin/manageMaster/packageSettings/dayActivityModel");

//Create New Day Activity
const createNewDayActivity = async (req, res, next) => {
  try {
    const dayActivity = req.body;

    const newDayActivity = await DayActivity.create(dayActivity);

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

//Get Single DayActivity
const getSingleDayActivity = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleDayActivity = await DayActivity.findById(_id).exec();

    if (singleDayActivity) {
      res.status(201).json({
        error: false,
        message: "Single DayActivity Fetched!",
        response: singleDayActivity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single DayActivity Not Fetched!",
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
    const { id: _id } = req.params;

    const dayActivity = req.body;

    const updatedDayActivity = await DayActivity.findOneAndUpdate(
      _id,
      dayActivity,
      { new: true }
    );

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
    const { id: _id } = req.params;

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
  getSingleDayActivity,
};
