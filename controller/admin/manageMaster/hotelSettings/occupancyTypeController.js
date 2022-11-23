const OccupancyType = require("../../../../model/admin/manageMaster/hotelSettings/occupancyTypeModel");

//Create a new Occupancy Type
const createOccupancyType = async (req, res, next) => {
  try {
    const { occupancyType } = req.body;

    const occupancyTypeData = await OccupancyType.create({ occupancyType });

    if (occupancyTypeData) {
      res.status(201).json({
        error: false,
        message: "Occupancy Type created!",
        response: occupancyTypeData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Occupancy Type not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Occupancy Type
const getAllOccupancyType = async (req, res, next) => {
  try {
    const allOccupancyType = await OccupancyType.find();

    if (allOccupancyType) {
      res.status(201).json({
        error: false,
        message: "All Occupancy Type fetched successfully",
        response: allOccupancyType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Occupancy Type not found.",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single OccupancyType
const getSingleOccupancyType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleOccupancyType = await OccupancyType.findById(_id).exec();

    if (singleOccupancyType) {
      res.status(201).json({
        error: false,
        message: "Single OccupancyType Fetched!",
        response: singleOccupancyType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single OccupancyType Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update Occupancy Type
const updateOccupancyType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { occupancyType } = req.body;

    const finalOccupancyType = await OccupancyType.findById(_id).exec();

    finalOccupancyType.occupancyType = occupancyType;
    const updatedOccupancyType = await finalOccupancyType.save();

    if (updatedOccupancyType) {
      res.status(201).json({
        error: false,
        message: "Occupancy Type updated",
        response: updatedOccupancyType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Occupancy type not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete Occupancy Type
const deleteOccupancyType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteType = await OccupancyType.findByIdAndDelete(_id);

    if (deleteType) {
      res.status(201).json({
        error: false,
        message: "Occupancy Type deleted!",
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
  createOccupancyType,
  getAllOccupancyType,
  getSingleOccupancyType,
  updateOccupancyType,
  deleteOccupancyType,
};
