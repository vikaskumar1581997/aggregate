const HBTRCategory = require("../../../../model/admin/manageMaster/houseBoatSettings/houseBoatRoomCategoryModel");

//Create a new HBTRCategory
const createNewHBTRCategory = async (req, res, next) => {
  try {
    const {
      roomCategoryName,
      roomCategoryCode,
      minimumRoomCount,
      maximumRoomCount,
    } = req.body;

    const newHBTRCategory = await HBTRCategory.create({
      roomCategoryName,
      roomCategoryCode,
      minimumRoomCount,
      maximumRoomCount,
    });

    if (newHBTRCategory) {
      res.status(201).json({
        error: false,
        message: "New HouseBoatRoomCategory created",
        response: newHBTRCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New HouseBoatRoomCategory not created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all HBTRCategory
const getAllHBTRCategory = async (req, res, next) => {
  try {
    const allHBTRCategory = await HBTRCategory.find().exec();
    if (allHBTRCategory) {
      res.status(201).json({
        error: false,
        message: " HouseBoatRoomCategory fetched",
        response: allHBTRCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " HouseBoatRoomCategory not fetched",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a HBTRCategory
const updateHBTRCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const {
      roomCategoryName,
      roomCategoryCode,
      minimumRoomCount,
      maximumRoomCount,
    } = req.body;

    const finalHBTRC = await HBTRCategory.findById({ _id });

    finalHBTRC.roomCategoryName = roomCategoryName;
    finalHBTRC.roomCategoryCode = roomCategoryCode;
    finalHBTRC.minimumRoomCount = minimumRoomCount;
    finalHBTRC.maximumRoomCount = maximumRoomCount;

    const updatedHBTRC = await finalHBTRC.save();

    if (updatedHBTRC) {
      res.status(201).json({
        error: false,
        message: " HouseBoatRoomCategory updated",
        response: updatedHBTRC,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " HouseBoatRoomCategory not updated",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a HBTRCategory
const deleteHBTRCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteHBTRC = await HBTRCategory.findByIdAndDelete({ _id });

    if (deleteHBTRC) {
      res.status(201).json({
        error: false,
        message: " HouseBoatRoomCategory deleted",
        response: deleteHBTRC,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " HouseBoatRoomCategory not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewHBTRCategory,
  getAllHBTRCategory,
  updateHBTRCategory,
  deleteHBTRCategory,
};
