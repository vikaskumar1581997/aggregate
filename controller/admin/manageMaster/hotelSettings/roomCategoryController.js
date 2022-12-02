const RoomCategory = require("../../../../model/admin/manageMaster/hotelSettings/roomCategoryModel");

//Create a Room Category

const createNewRoomCategory = async (req, res, next) => {
  try {
    const { roomCategory, categoryCode, roomArea } = req.body;

    const roomCategoryData = await RoomCategory.create({
      roomCategory,
      categoryCode,
      roomArea,
    });

    if (roomCategoryData) {
      res.status(201).json({
        error: false,
        message: "Room category Created",
        response: roomCategoryData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Room category not Created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

// Get all Room Category
const getAllRoomCategory = async (req, res, next) => {
  try {
    const allRoomCategory = await RoomCategory.find();
    if (allRoomCategory) {
      res.status(201).json({
        error: false,
        message: "All Room Category fetched successfully",
        response: allRoomCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Room Category not found.",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single RoomCategory
const getSingleRoomCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleRoomCategory = await RoomCategory.findById(_id).exec();

    if (singleRoomCategory) {
      res.status(201).json({
        error: false,
        message: "Single RoomCategory Fetched!",
        response: singleRoomCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single RoomCategory Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update Room Category
const updateRoomCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { roomCategory, categoryCode, roomArea } = req.body;

    const finalRoomCategory = await RoomCategory.findById(_id).exec();

    finalRoomCategory.roomCategory = roomCategory;
    finalRoomCategory.categoryCode = categoryCode;
    finalRoomCategory.roomArea = roomArea;

    const updatedRoomCategory = await finalRoomCategory.save();

    if (updatedRoomCategory) {
      res.status(201).json({
        error: false,
        message: "Room category updated",
        response: updatedRoomCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Room category not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete Room Category
const deleteRoomCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteCategory = await RoomCategory.findByIdAndDelete(_id);

    if (deleteCategory) {
      res.status(201).json({
        error: false,
        message: "Room category deleted!",
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
  createNewRoomCategory,
  getAllRoomCategory,
  getSingleRoomCategory,
  updateRoomCategory,
  deleteRoomCategory,
};
