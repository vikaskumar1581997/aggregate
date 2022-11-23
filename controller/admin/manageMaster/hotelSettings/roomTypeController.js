const RoomType = require("../../../../model/admin/manageMaster/hotelSettings/roomTypeModel");

//Create Room Type
const createNewRoomType = async (req, res, next) => {
  try {
    const {
      code,
      tagLine,
      selfValue,
      noMeals,
      lunch,
      dinner,
      fullBoard,
      halfBoard,
    } = req.body;

    const roomTypeData = await RoomType.create({
      code,
      tagLine,
      selfValue,
      noMeals,
      lunch,
      dinner,
      fullBoard,
      halfBoard,
    });

    if (roomTypeData) {
      res.status(201).json({
        error: false,
        message: "Room Type Created",
        response: roomTypeData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Room Type not Created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Room Type
const getAllRoomType = async (req, res, next) => {
  try {
    const allRoomType = await RoomType.find();
    if (allRoomType) {
      res.status(201).json({
        error: false,
        message: "All Room Type fetched successfully",
        response: allRoomType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Room Type not found.",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update Room Type
const updateRoomType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const {
      code,
      tagLine,
      selfValue,
      noMeals,
      lunch,
      dinner,
      fullBoard,
      halfBoard,
    } = req.body;

    const finalRoomType = await RoomType.findById(_id).exec();

    finalRoomType.code = code;
    finalRoomType.tagLine = tagLine;
    finalRoomType.selfValue = selfValue;
    finalRoomType.noMeals = noMeals;
    finalRoomType.lunch = lunch;
    finalRoomType.dinner = dinner;
    finalRoomType.fullBoard = fullBoard;
    finalRoomType.halfBoard = halfBoard;

    const updatedRoomType = await finalRoomType.save();

    if (updatedRoomType) {
      res.status(201).json({
        error: false,
        message: "Room Type updated",
        response: updateRoomType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Room type not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete Room Type
const deleteRoomType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteType = await RoomType.findByIdAndDelete(_id);

    if (deleteType) {
      res.status(201).json({
        error: false,
        message: "Room Type deleted!",
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
  createNewRoomType,
  getAllRoomType,
  updateRoomType,
  deleteRoomType,
};
