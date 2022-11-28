const RoomType = require("../../../../model/admin/manageMaster/hotelSettings/roomTypeModel");

//Create Room Type
const createNewRoomType = async (req, res, next) => {
  try {
    const roomType = req.body;

    const roomTypeData = await RoomType.create(roomType);

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

//Get Single RoomType
const getSingleRoomType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleRoomType = await RoomType.findById(_id).exec();

    if (singleRoomType) {
      res.status(201).json({
        error: false,
        message: "Single RoomType Fetched!",
        response: singleRoomType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single RoomType Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update Room Type
const updateRoomType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const roomType = req.body;

    const updatedRoomType = await RoomType.findOneAndUpdate(_id, roomType, {
      new: true,
    });

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
  getSingleRoomType,
  updateRoomType,
  deleteRoomType,
};
