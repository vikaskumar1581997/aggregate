const SeasonType = require("../../../../model/admin/manageMaster/hotelSettings/seasonTypeModel");

//Create a new Season Type
const createSeasonType = async (req, res, next) => {
  try {
    const { seasonType } = req.body;

    const seasonTypeData = await SeasonType.create({ seasonType });

    if (seasonTypeData) {
      res.status(201).json({
        error: false,
        message: "Season Type created!",
        response: seasonTypeData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Season Type not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Season Type
const getAllSeasonType = async (req, res, next) => {
  try {
    const allSeasonType = await SeasonType.find();

    if (allSeasonType) {
      res.status(201).json({
        error: false,
        message: "All Season Type fetched successfully",
        response: allSeasonType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Season Type not found.",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update Season Type
const updateSeasonType = async (req, res, next) => {
  try {
    const { _id, seasonType } = req.body;

    const finalSeasonType = await SeasonType.findById(_id).exec();

    finalSeasonType.seasonType = seasonType;
    const updatedSeasonType = await finalSeasonType.save();

    if (updatedSeasonType) {
      res.status(201).json({
        error: false,
        message: "Season Type updated",
        response: updatedSeasonType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Season type not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete Season Type
const deleteSeasonType = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const deleteType = await SeasonType.findByIdAndDelete(_id);

    if (deleteType) {
      res.status(201).json({
        error: false,
        message: "Season Type deleted!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Deletion not completed!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createSeasonType,
  getAllSeasonType,
  updateSeasonType,
  deleteSeasonType,
};
